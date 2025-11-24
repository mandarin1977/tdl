<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCurrentUser, updateUserGameData } from '@/utils/userUtils'
import { useAppStore } from '@/store/appStore'
import { getRarityName, getRarityColors, getRarityStyle, RARITY_TIERS, addRarityToNFT } from '@/utils/rarityUtils'
import { 
  getActiveListings, 
  getMyListings, 
  listNFT, 
  buyNFT, 
  cancelListing,
  isNFTListed,
  getMarketplaceStats
} from '@/utils/marketplaceUtils'
import btcImage from '@/assets/img/btc.png'
import ethImage from '@/assets/img/eth.png'
import btcLineImage from '@/assets/img/BTC_line.png'
import ethLineImage from '@/assets/img/eth_line.png'
import ethIco from '@/assets/img/eth_ico.png'

const coinCount = ref(0)
const totalCoin = ref(0)
const activeTab = ref('wallet') // 'wallet' | 'marketplace' | 'myNFTs' | 'myListings'
const walletBalance = ref('$ 5,323.00')
const walletBalanceETH = ref('0.0000 ETH')
const btcAmount = ref('0.00335')
const btcChange = ref('+6.54%')
const showBuyPopup = ref(false)
const showSendPopup = ref(false)
const showReceivePopup = ref(false)

// 마켓플레이스 상태
const marketplaceListings = ref([])
const myNFTs = ref([])
const myListings = ref([])
const showSellModal = ref(false)
const showBuyModal = ref(false)
const showDetailModal = ref(false)
const selectedNFT = ref(null)
const sellPrice = ref('')
const filterRarity = ref('all')
const filterPrice = ref('all')
const sortBy = ref('newest')
const searchQuery = ref('')
const showSearchModal = ref(false)
const activeSubTab = ref('tokens') // 'tokens' | 'nfts'

// 현재 사용자 정보 로드
const currentUser = ref(null)

// 고양이 이미지 경로 가져오기 함수
const getCatImage = (id) => {
  try {
    return new URL(`../assets/img/cat${id}.png`, import.meta.url).href
  } catch (error) {
    return `/src/assets/img/cat${id}.png`
  }
}

// 마켓플레이스 데이터 로드
const loadMarketplace = () => {
  marketplaceListings.value = getActiveListings()
  if (currentUser.value) {
    myListings.value = getMyListings(currentUser.value.walletAddress || currentUser.value.id)
    myNFTs.value = (currentUser.value.gameData?.inventory || []).filter(nft => !isNFTListed(nft.id))
  }
}

// 필터링 및 정렬된 마켓플레이스 목록
const filteredMarketplace = computed(() => {
  let items = [...marketplaceListings.value]
  
  // 검색 필터
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    items = items.filter(item => 
      item.nftData.name.toLowerCase().includes(query) ||
      String(item.nftData.imageId).includes(query)
    )
  }
  
  // 레어리티 필터
  if (filterRarity.value !== 'all') {
    items = items.filter(item => {
      const rarity = item.nftData.rarity || RARITY_TIERS.COMMON
      return rarity === filterRarity.value
    })
  }
  
  // 가격 필터
  if (filterPrice.value !== 'all') {
    if (filterPrice.value === 'low') {
      items = items.filter(item => item.price < 1000)
    } else if (filterPrice.value === 'mid') {
      items = items.filter(item => item.price >= 1000 && item.price < 5000)
    } else if (filterPrice.value === 'high') {
      items = items.filter(item => item.price >= 5000)
    }
  }
  
  // 정렬
  items = [...items].sort((a, b) => {
    switch (sortBy.value) {
      case 'newest':
        return b.listedAt - a.listedAt
      case 'oldest':
        return a.listedAt - b.listedAt
      case 'priceLow':
        return a.price - b.price
      case 'priceHigh':
        return b.price - a.price
      case 'level':
        return (b.nftData.level || 1) - (a.nftData.level || 1)
      case 'stars':
        return (b.nftData.stars || 0) - (a.nftData.stars || 0)
      default:
        return 0
    }
  })
  
  return items
})

// NFT 판매하기
const openSellModal = (nft) => {
  selectedNFT.value = nft
  sellPrice.value = ''
  showSellModal.value = true
}

const closeSellModal = () => {
  showSellModal.value = false
  selectedNFT.value = null
  sellPrice.value = ''
}

const confirmSell = () => {
  if (!selectedNFT.value) return
  
  const price = parseFloat(sellPrice.value)
  if (!price || price <= 0) {
    alert('올바른 가격을 입력해주세요.')
    return
  }
  
  if (!currentUser.value) {
    alert('로그인이 필요합니다.')
    return
  }
  
  const sellerAddress = currentUser.value.walletAddress || currentUser.value.id
  
  // 마켓플레이스에 등록
  listNFT(selectedNFT.value, price, sellerAddress)
  
  // 인벤토리에서 제거 (또는 isListed 플래그 추가)
  const inventory = currentUser.value.gameData?.inventory || []
  const updatedInventory = inventory.filter(nft => nft.id !== selectedNFT.value.id)
  
  updateUserGameData(currentUser.value.id, {
    inventory: updatedInventory
  })
  
  // 이벤트 발생
  window.dispatchEvent(new CustomEvent('userDataUpdated'))
  
  // 마켓플레이스 새로고침
  loadMarketplace()
  
  alert(`NFT가 마켓플레이스에 등록되었습니다! (가격: ${price.toLocaleString()} 코인)`)
  closeSellModal()
}

// NFT 구매하기
const openBuyModal = (listing) => {
  selectedNFT.value = listing
  showBuyModal.value = true
}

const closeBuyModal = () => {
  showBuyModal.value = false
  selectedNFT.value = null
}

const confirmBuy = async () => {
  if (!selectedNFT.value || !currentUser.value) return
  
  const listing = selectedNFT.value
  const buyerAddress = currentUser.value.walletAddress || currentUser.value.id
  
  // 코인 확인
  const userCoins = currentUser.value.gameData?.totalCoin || 0
  if (userCoins < listing.price) {
    alert(`코인이 부족합니다. (필요: ${listing.price.toLocaleString()}, 보유: ${userCoins.toLocaleString()})`)
    return
  }
  
  // 구매 처리
  const result = buyNFT(listing.id, buyerAddress)
  
  if (!result.success) {
    alert(result.error)
    return
  }
  
  // 구매자 인벤토리에 추가
  const inventory = currentUser.value.gameData?.inventory || []
  inventory.unshift(result.nftData)
  
  // 구매자 코인 차감
  await updateUserGameData(currentUser.value.id, {
    inventory: inventory,
    totalCoin: userCoins - listing.price
  })
  
  // 판매자 코인 증가 (판매자 데이터 찾기)
  const { getAllUsers } = await import('@/utils/userUtils')
  const users = getAllUsers()
  const seller = users.find(u => (u.walletAddress || u.id) === listing.sellerAddress)
  
  if (seller) {
    const sellerCoins = seller.gameData?.totalCoin || 0
    await updateUserGameData(seller.id, {
      totalCoin: sellerCoins + listing.price
    })
  }
  
  // 이벤트 발생
  window.dispatchEvent(new CustomEvent('userDataUpdated'))
  
  // 마켓플레이스 새로고침
  loadMarketplace()
  
  alert(`NFT를 구매했습니다! (${listing.price.toLocaleString()} 코인 지불)`)
  closeBuyModal()
}

// 판매 취소
const cancelSale = async (listing) => {
  if (!confirm('정말 판매를 취소하시겠습니까?')) return
  
  if (!currentUser.value) return
  
  const sellerAddress = currentUser.value.walletAddress || currentUser.value.id
  const result = cancelListing(listing.id, sellerAddress)
  
  if (!result.success) {
    alert(result.error)
    return
  }
  
  // 인벤토리에 다시 추가
  const inventory = currentUser.value.gameData?.inventory || []
  inventory.unshift(listing.nftData)
  
  await updateUserGameData(currentUser.value.id, {
    inventory: inventory
  })
  
  // 이벤트 발생
  window.dispatchEvent(new CustomEvent('userDataUpdated'))
  
  // 마켓플레이스 새로고침
  loadMarketplace()
  
  alert('판매가 취소되었습니다.')
}

// NFT 상세 정보 보기
const showNFTDetail = (nft) => {
  selectedNFT.value = nft
  showDetailModal.value = true
}

const closeDetailModal = () => {
  showDetailModal.value = false
  selectedNFT.value = null
}

// 필터 초기화
const resetFilters = () => {
  searchQuery.value = ''
  filterRarity.value = 'all'
  filterPrice.value = 'all'
  sortBy.value = 'newest'
}

// 마켓플레이스 통계
const marketplaceStats = computed(() => {
  return getMarketplaceStats()
})

// 토큰 목록 (더미 데이터 - 나중에 실제 API 연동)
const tokenItems = ref([
  { id: 1, name: 'Bitcoin', symbol: 'BTC', price: '36,590.00', change: '+6.21%', isPositive: true, image: btcImage, lineImage: btcLineImage },
  { id: 2, name: 'Ethereum', symbol: 'ETH', price: '2,590.00', change: '+5.21%', isPositive: true, image: ethImage, lineImage: ethLineImage }
])

// 지갑 NFT 목록 (실제 인벤토리에서 가져오기)
const walletNFTs = computed(() => {
  if (!currentUser.value) return []
  return (currentUser.value.gameData?.inventory || []).slice(0, 10) // 최근 10개만
})

// 지갑 잔액 계산 (게임 코인 기반)
const calculateWalletBalance = () => {
  if (!currentUser.value) return '$ 0.00'
  const coins = currentUser.value.gameData?.totalCoin || 0
  // 간단한 환율 계산 (예시: 1 코인 = $0.01)
  const usdValue = coins * 0.01
  return `$ ${usdValue.toFixed(2)}`
}

// Send/Buy/Receive 핸들러
const handleSendClick = () => {
  console.log('Send 버튼 클릭')
  showSendPopup.value = true
  console.log('showSendPopup:', showSendPopup.value)
}

const handleBuyClick = () => {
  console.log('Buy 버튼 클릭')
  showBuyPopup.value = true
  console.log('showBuyPopup:', showBuyPopup.value)
}

const handleReceiveClick = () => {
  console.log('Receive 버튼 클릭')
  showReceivePopup.value = true
  console.log('showReceivePopup:', showReceivePopup.value)
}

const closeSendPopup = () => {
  showSendPopup.value = false
}

const closeBuyPopup = () => {
  showBuyPopup.value = false
}

const closeReceivePopup = () => {
  showReceivePopup.value = false
}

onMounted(() => {
  currentUser.value = getCurrentUser()
  const store = useAppStore()
  
  if (currentUser.value) {
    coinCount.value = currentUser.value.gameData?.coins || 0
    totalCoin.value = currentUser.value.gameData?.totalCoin || 0
    walletBalance.value = calculateWalletBalance()
    
    // 지갑 연결 상태 확인
    if (store.isWalletConnected && store.walletAddress) {
      walletBalanceETH.value = store.userBalance
    }
  }
  
  loadMarketplace()
  
  // 사용자 데이터 업데이트 이벤트 리스너
  window.addEventListener('userDataUpdated', () => {
    currentUser.value = getCurrentUser()
    if (currentUser.value) {
      coinCount.value = currentUser.value.gameData?.coins || 0
      totalCoin.value = currentUser.value.gameData?.totalCoin || 0
      walletBalance.value = calculateWalletBalance()
    }
    loadMarketplace()
  })
})

// 탭 전환
const switchTab = (tab) => {
  activeTab.value = tab
  loadMarketplace()
}
</script>

<template>
  <div class="nftPage">
    <!-- 헤더 -->
    <Header :coinCount="coinCount" />
    
    <!-- 메인 콘텐츠 -->
    <main class="mainContent nftWrap">
      <!-- 탭 메뉴 -->
      <div class="tabMenu">
        <button 
          class="tab" 
          :class="{ active: activeTab === 'wallet' }"
          @click="switchTab('wallet')"
        >
          지갑
        </button>
        <button 
          class="tab" 
          :class="{ active: activeTab === 'marketplace' }"
          @click="switchTab('marketplace')"
        >
          마켓플레이스
        </button>
        <button 
          class="tab" 
          :class="{ active: activeTab === 'myNFTs' }"
          @click="switchTab('myNFTs')"
        >
          내 NFT
        </button>
        <button 
          class="tab" 
          :class="{ active: activeTab === 'myListings' }"
          @click="switchTab('myListings')"
        >
          내 판매
        </button>
      </div>
      
      <!-- 지갑 탭 -->
      <div v-if="activeTab === 'wallet'" class="walletContent">
      <!-- 지갑 잔액 섹션 -->
      <div class="walletSection">
        <div class="walletLabel">Current Wallet Balance</div>
        <div class="walletBalance">{{ walletBalance }}</div>
        <div class="btcInfo">
          <span>BTC : {{ btcAmount }}</span>
          <span class="change positive">{{ btcChange }}</span>
        </div>
          <div v-if="walletBalanceETH !== '0.0000 ETH'" class="ethInfo">
            <span>ETH : {{ walletBalanceETH }}</span>
          </div>
      </div>
      
      <!-- 액션 버튼 섹션 -->
      <div class="actionButtons">
        <button class="actionBtn sendBtn" @click="handleSendClick">
          <div class="btnIcon"></div>
          <span class="btnLabel">Send</span>
        </button>
        <button class="actionBtn buyBtn" @click="handleBuyClick">
          <div class="btnIcon"></div>
          <span class="btnLabel">Buy</span>
        </button>
        <button class="actionBtn receiveBtn" @click="handleReceiveClick">
          <div class="btnIcon"></div>
          <span class="btnLabel">Receive</span>
        </button>
      </div>
      
        <!-- 서브 탭 메뉴 -->
        <div class="subTabMenu">
        <button 
            class="subTab" 
            :class="{ active: activeSubTab === 'tokens' }"
            @click="activeSubTab = 'tokens'"
        >
          Tokens
        </button>
        <button 
            class="subTab" 
            :class="{ active: activeSubTab === 'nfts' }"
            @click="activeSubTab = 'nfts'"
        >
          NFTs
        </button>
      </div>
      
      <!-- Tokens 탭 내용 -->
        <div v-if="activeSubTab === 'tokens'" class="itemList">
        <div 
          v-for="item in tokenItems" 
          :key="item.id" 
          class="item"
        >
          <div class="itemIcon">
            <div class="iconCircle" :style="{ backgroundImage: `url(${item.image})` }"></div>
          </div>
          <div class="itemInfo">
            <div class="itemSymbol">{{ item.symbol }}</div>
            <div class="itemName">{{ item.name }}</div>
          </div>
          <div class="itemChart">
            <div class="chartLine" :style="{ backgroundImage: `url(${item.lineImage})` }"></div>
          </div>
          <div class="itemPrice">
            <div class="price">${{ item.price }}</div>
            <div class="change" :class="{ positive: item.isPositive, negative: !item.isPositive }">
              {{ item.change }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- NFTs 탭 내용 -->
        <div v-if="activeSubTab === 'nfts'" class="nftList">
        <div 
            v-for="nft in walletNFTs" 
            :key="nft.id" 
          class="nftItem"
            @click="showNFTDetail(nft)"
        >
          <div class="nftThumbnail">
              <div class="thumbnailPlaceholder" :style="{ backgroundImage: `url(${getCatImage(nft.imageId || nft.id)})` }"></div>
          </div>
          <div class="nftInfo">
              <div class="nftId">#{{ nft.id }}</div>
              <div class="collectionName">{{ nft.name }}</div>
          </div>
          <div class="nftValue">
              <div class="nftStars">
                <span v-for="n in 5" :key="n" class="star">
                  {{ n <= (nft.stars || 0) ? '★' : '☆' }}
                </span>
            </div>
              <div class="nftLevel">Lv {{ nft.level || 1 }}</div>
            </div>
          </div>
          
          <div v-if="walletNFTs.length === 0" class="emptyNFTs">
            <div class="emptyIcon">📦</div>
            <div class="emptyText">NFT가 없습니다</div>
          </div>
        </div>
      </div>
      
      <!-- 마켓플레이스 탭 -->
      <div v-if="activeTab === 'marketplace'" class="marketplaceContent">
        <!-- 검색 및 필터 -->
        <div class="marketplaceHeader">
          <div class="marketplaceStats">
            <span>판매 중: {{ marketplaceStats.activeListings }}개</span>
            <span>총 거래량: {{ marketplaceStats.totalVolume.toLocaleString() }} 코인</span>
          </div>
          <button class="searchBtn" @click="showSearchModal = true">
            <span>🔍</span>
            <span>검색</span>
          </button>
        </div>
        
        <!-- 필터 바 -->
        <div class="filterBar">
          <select v-model="filterRarity" class="filterSelect">
            <option value="all">전체 레어리티</option>
            <option value="common">일반</option>
            <option value="rare">레어</option>
            <option value="epic">에픽</option>
            <option value="legendary">레전더리</option>
          </select>
          
          <select v-model="filterPrice" class="filterSelect">
            <option value="all">전체 가격</option>
            <option value="low">1,000 코인 미만</option>
            <option value="mid">1,000 - 5,000 코인</option>
            <option value="high">5,000 코인 이상</option>
          </select>
          
          <select v-model="sortBy" class="filterSelect">
            <option value="newest">최신순</option>
            <option value="oldest">오래된순</option>
            <option value="priceLow">가격 낮은순</option>
            <option value="priceHigh">가격 높은순</option>
            <option value="level">레벨 높은순</option>
            <option value="stars">별 등급 높은순</option>
          </select>
        </div>
        
        <!-- NFT 목록 -->
        <div v-if="filteredMarketplace.length > 0" class="nftGrid">
          <div 
            v-for="listing in filteredMarketplace" 
            :key="listing.id"
            class="nftCard"
            @click="showNFTDetail(listing.nftData)"
          >
            <div class="nftCardImage">
              <img :src="getCatImage(listing.nftData.imageId || listing.nftData.id)" alt="NFT" />
              <div class="nftCardBadges">
                <div class="starBadge">
                  <span v-for="n in 5" :key="n" class="star">
                    {{ n <= (listing.nftData.stars || 0) ? '★' : '☆' }}
                  </span>
                </div>
                <div class="levelBadge">Lv {{ listing.nftData.level || 1 }}</div>
              </div>
            </div>
            <div class="nftCardInfo">
              <div class="nftCardName">{{ listing.nftData.name }}</div>
              <div class="nftCardPrice">
                <span class="priceLabel">가격:</span>
                <span class="priceValue">{{ listing.price.toLocaleString() }} 코인</span>
              </div>
            </div>
            <button class="buyBtn" @click.stop="openBuyModal(listing)">
              구매하기
            </button>
          </div>
        </div>
        
        <!-- 빈 마켓플레이스 -->
        <div v-else class="emptyMarketplace">
          <div class="emptyIcon">🏪</div>
          <div class="emptyText">판매 중인 NFT가 없습니다</div>
        </div>
      </div>
      
      <!-- 내 NFT 탭 -->
      <div v-if="activeTab === 'myNFTs'" class="myNFTsContent">
        <div class="sectionHeader">
          <h3>내 NFT ({{ myNFTs.length }}개)</h3>
          <div class="myCoinBalance">보유 코인: {{ totalCoin.toLocaleString() }}</div>
        </div>
        
        <div v-if="myNFTs.length > 0" class="nftGrid">
          <div 
            v-for="nft in myNFTs" 
            :key="nft.id"
            class="nftCard"
            @click="showNFTDetail(nft)"
          >
            <div class="nftCardImage">
              <img :src="getCatImage(nft.imageId || nft.id)" alt="NFT" />
              <div class="nftCardBadges">
                <div v-if="nft.rarity" class="rarityBadge" :style="getRarityStyle(nft.rarity)">
                  {{ getRarityName(nft.rarity) }}
                </div>
                <div class="starBadge">
                  <span v-for="n in 5" :key="n" class="star">
                    {{ n <= (nft.stars || 0) ? '★' : '☆' }}
                  </span>
                </div>
                <div class="levelBadge">Lv {{ nft.level || 1 }}</div>
              </div>
            </div>
            <div class="nftCardInfo">
              <div class="nftCardName">{{ nft.name }}</div>
            </div>
            <button class="sellBtn" @click.stop="openSellModal(nft)">
              판매하기
            </button>
          </div>
        </div>
        
        <div v-else class="emptyMarketplace">
          <div class="emptyIcon">📦</div>
          <div class="emptyText">판매 가능한 NFT가 없습니다</div>
        </div>
      </div>
      
      <!-- 내 판매 탭 -->
      <div v-if="activeTab === 'myListings'" class="myListingsContent">
        <div class="sectionHeader">
          <h3>내 판매 목록 ({{ myListings.length }}개)</h3>
        </div>
        
        <div v-if="myListings.length > 0" class="nftGrid">
          <div 
            v-for="listing in myListings" 
            :key="listing.id"
            class="nftCard"
          >
            <div class="nftCardImage">
              <img :src="getCatImage(listing.nftData.imageId || listing.nftData.id)" alt="NFT" />
              <div class="nftCardBadges">
                <div class="starBadge">
                  <span v-for="n in 5" :key="n" class="star">
                    {{ n <= (listing.nftData.stars || 0) ? '★' : '☆' }}
                  </span>
                </div>
                <div class="levelBadge">Lv {{ listing.nftData.level || 1 }}</div>
              </div>
            </div>
            <div class="nftCardInfo">
              <div class="nftCardName">{{ listing.nftData.name }}</div>
              <div class="nftCardPrice">
                <span class="priceLabel">판매 가격:</span>
                <span class="priceValue">{{ listing.price.toLocaleString() }} 코인</span>
              </div>
            </div>
            <button class="cancelBtn" @click="cancelSale(listing)">
              판매 취소
            </button>
          </div>
        </div>
        
        <div v-else class="emptyMarketplace">
          <div class="emptyIcon">📋</div>
          <div class="emptyText">판매 중인 NFT가 없습니다</div>
        </div>
      </div>
    </main>
    
    <!-- 푸터 -->
    <Footer />
    
    <!-- 판매 팝업 -->
    <div v-if="showSellModal && selectedNFT" class="modalOverlay" @click="closeSellModal">
      <div class="modalContent" @click.stop>
        <div class="modalHeader">
          <h3 class="modalTitle">NFT 판매하기</h3>
          <button class="modalClose" @click="closeSellModal">×</button>
        </div>
        
        <div class="modalBody">
          <div class="sellNFTPreview">
            <img :src="getCatImage(selectedNFT.imageId || selectedNFT.id)" alt="NFT" class="sellNFTImage" />
            <div class="sellNFTInfo">
              <div class="sellNFTName">{{ selectedNFT.name }}</div>
              <div class="sellNFTDetails">
                <span>⭐ {{ selectedNFT.stars || 0 }}성</span>
                <span>Lv {{ selectedNFT.level || 1 }}</span>
              </div>
            </div>
          </div>
          
          <div class="sellPriceInput">
            <label class="inputLabel">판매 가격 (코인)</label>
            <input 
              type="number" 
              v-model="sellPrice" 
              placeholder="가격을 입력하세요"
              class="priceInput"
              min="1"
            />
            <div class="priceHint">현재 보유 코인: {{ totalCoin.toLocaleString() }}</div>
          </div>
        </div>
        
        <div class="modalFooter">
          <button class="modalBtn cancelBtn" @click="closeSellModal">취소</button>
          <button class="modalBtn confirmBtn" @click="confirmSell">판매 등록</button>
        </div>
      </div>
    </div>
    
    <!-- 구매 팝업 -->
    <div v-if="showBuyModal && selectedNFT" class="modalOverlay" @click="closeBuyModal">
      <div class="modalContent" @click.stop>
        <div class="modalHeader">
          <h3 class="modalTitle">NFT 구매하기</h3>
          <button class="modalClose" @click="closeBuyModal">×</button>
        </div>
        
        <div class="modalBody">
          <div class="buyNFTPreview">
            <img :src="getCatImage(selectedNFT.nftData.imageId || selectedNFT.nftData.id)" alt="NFT" class="buyNFTImage" />
            <div class="buyNFTInfo">
              <div class="buyNFTName">{{ selectedNFT.nftData.name }}</div>
              <div class="buyNFTDetails">
                <span>⭐ {{ selectedNFT.nftData.stars || 0 }}성</span>
                <span>Lv {{ selectedNFT.nftData.level || 1 }}</span>
              </div>
            </div>
          </div>
          
          <div class="buyPriceInfo">
            <div class="priceRow">
              <span class="priceLabel">판매 가격:</span>
              <span class="priceValue">{{ selectedNFT.price.toLocaleString() }} 코인</span>
            </div>
            <div class="priceRow">
              <span class="priceLabel">보유 코인:</span>
              <span class="priceValue" :class="{ insufficient: totalCoin < selectedNFT.price }">
                {{ totalCoin.toLocaleString() }} 코인
              </span>
            </div>
            <div v-if="totalCoin < selectedNFT.price" class="insufficientWarning">
              코인이 부족합니다!
            </div>
          </div>
        </div>
        
        <div class="modalFooter">
          <button class="modalBtn cancelBtn" @click="closeBuyModal">취소</button>
          <button 
            class="modalBtn confirmBtn" 
            @click="confirmBuy"
            :disabled="totalCoin < selectedNFT.price"
            :class="{ disabled: totalCoin < selectedNFT.price }"
          >
            구매하기
          </button>
        </div>
      </div>
    </div>
    
    <!-- NFT 상세 정보 모달 -->
    <div v-if="showDetailModal && selectedNFT" class="modalOverlay" @click="closeDetailModal">
      <div class="modalContent detailModal" @click.stop>
        <div class="modalHeader">
          <h3 class="modalTitle">{{ selectedNFT.name }}</h3>
          <button class="modalClose" @click="closeDetailModal">×</button>
        </div>
        
        <div class="modalBody">
          <div class="detailNFTImage">
            <img :src="getCatImage(selectedNFT.imageId || selectedNFT.id)" alt="NFT" />
            <div class="detailBadges">
              <div class="detailStarBadge">
                <span v-for="n in 5" :key="n" class="star">
                  {{ n <= (selectedNFT.stars || 0) ? '★' : '☆' }}
                </span>
              </div>
              <div class="detailLevelBadge">Lv {{ selectedNFT.level || 1 }}</div>
            </div>
          </div>
          
          <div class="detailInfo">
            <div class="detailRow">
              <span class="detailLabel">NFT ID:</span>
              <span class="detailValue">#{{ selectedNFT.id }}</span>
            </div>
            <div class="detailRow">
              <span class="detailLabel">이미지 ID:</span>
              <span class="detailValue">#{{ selectedNFT.imageId }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Send 팝업 -->
    <div v-if="showSendPopup" class="popupOverlay" @click="closeSendPopup">
      <div class="popupContent" @click.stop>
        <div class="popupHeader">
          <h2 class="popupTitle">전송하기</h2>
          <button class="closeBtn" @click="closeSendPopup">×</button>
        </div>
        <div class="popupBody">
          <p class="popupMessage">전송 기능은 준비 중입니다.</p>
          <div class="popupActions">
            <button class="popupBtn cancelBtn" @click="closeSendPopup">확인</button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Buy 팝업 -->
    <div v-if="showBuyPopup" class="popupOverlay" @click="closeBuyPopup">
      <div class="popupContent" @click.stop>
        <div class="popupHeader">
          <h2 class="popupTitle">구매하기</h2>
          <button class="closeBtn" @click="closeBuyPopup">×</button>
        </div>
        <div class="popupBody">
          <p class="popupMessage">구매 기능은 준비 중입니다.</p>
          <div class="popupActions">
            <button class="popupBtn cancelBtn" @click="closeBuyPopup">확인</button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Receive 팝업 -->
    <div v-if="showReceivePopup" class="popupOverlay" @click="closeReceivePopup">
      <div class="popupContent" @click.stop>
        <div class="popupHeader">
          <h2 class="popupTitle">받기</h2>
          <button class="closeBtn" @click="closeReceivePopup">×</button>
        </div>
        <div class="popupBody">
          <p class="popupMessage">받기 기능은 준비 중입니다.</p>
          <div class="popupActions">
            <button class="popupBtn cancelBtn" @click="closeReceivePopup">확인</button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 검색 팝업 -->
    <div v-if="showSearchModal" class="modalOverlay" @click="showSearchModal = false">
      <div class="searchModal" @click.stop>
        <div class="searchModalHeader">
          <h3 class="searchModalTitle">검색</h3>
          <button class="searchModalClose" @click="showSearchModal = false">×</button>
        </div>
        
        <div class="searchModalBody">
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="NFT 이름 또는 ID로 검색..."
            class="searchInput"
            @keyup.enter="showSearchModal = false"
          />
        </div>
        
        <div class="searchModalFooter">
          <button class="modalBtn resetBtn" @click="resetFilters">초기화</button>
          <button class="modalBtn applyBtn" @click="showSearchModal = false">적용</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nftWrap{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.nftPage {
  width: 100%;
  min-height: 100vh;
  background-image: url('@/assets/img/backgroundImg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.mainContent {
  padding: 1.6rem;
  max-width: 600px;
  margin: 0 auto;
  max-height: calc(100vh - 130px);
  overflow-y: auto;
}

/* 탭 메뉴 */
.tabMenu {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 6px;
  border: 1px solid rgba(125, 211, 252, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.tab {
  flex: 1;
  padding: 0.85rem 1rem;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.6);
  background: transparent;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.tab::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(125, 211, 252, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tab:hover::before {
  opacity: 1;
}

.tab.active {
  background: linear-gradient(135deg, rgba(125, 211, 252, 0.25) 0%, rgba(139, 92, 246, 0.25) 100%);
  color: #fff;
  box-shadow: 0 4px 15px rgba(125, 211, 252, 0.3);
  border: 1px solid rgba(125, 211, 252, 0.4);
}

.tab.active::before {
  opacity: 1;
}

/* 마켓플레이스 콘텐츠 */
.marketplaceContent,
.myNFTsContent,
.myListingsContent {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.marketplaceHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.marketplaceStats {
  display: flex;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
}

.searchBtn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.2rem;
  background: linear-gradient(135deg, rgba(125, 211, 252, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%);
  border: 1px solid rgba(125, 211, 252, 0.3);
  border-radius: 12px;
  color: #7DD3FC;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 10px rgba(125, 211, 252, 0.2);
}

.searchBtn:hover {
  background: linear-gradient(135deg, rgba(125, 211, 252, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%);
  border-color: rgba(125, 211, 252, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(125, 211, 252, 0.3);
}

.filterBar {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.filterSelect {
  flex: 1;
  min-width: 120px;
  padding: 0.7rem;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(125, 211, 252, 0.2);
  border-radius: 10px;
  color: white;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.7rem center;
  background-size: 1rem;
  padding-right: 2.5rem;
}

.filterSelect:hover {
  border-color: rgba(125, 211, 252, 0.4);
  background-color: rgba(15, 23, 42, 0.95);
}

.filterSelect:focus {
  outline: none;
  border-color: #7DD3FC;
  background-color: rgba(15, 23, 42, 0.95);
  box-shadow: 0 0 0 3px rgba(125, 211, 252, 0.2);
}

.filterSelect option {
  background: rgba(15, 23, 42, 0.95);
  color: white;
  padding: 0.5rem;
}

.filterSelect option:hover {
  background: rgba(125, 211, 252, 0.2);
}

.filterSelect option:checked {
  background: rgba(125, 211, 252, 0.3);
  color: #7DD3FC;
}

/* NFT 그리드 */
.nftGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
}

.nftCard {
  background: linear-gradient(135deg, rgba(33, 36, 54, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%);
  backdrop-filter: blur(20px);
  border-radius: 18px;
  padding: 1.25rem;
  border: 1px solid rgba(125, 211, 252, 0.2);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
}

.nftCard::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(125, 211, 252, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.nftCard:hover::before {
  opacity: 1;
}

.nftCard:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 12px 40px rgba(125, 211, 252, 0.3);
  border-color: rgba(125, 211, 252, 0.5);
}

.nftCardImage {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(125, 211, 252, 0.1) 100%);
  border: 1px solid rgba(125, 211, 252, 0.2);
  transition: all 0.3s ease;
}

.nftCard:hover .nftCardImage {
  border-color: rgba(125, 211, 252, 0.4);
  box-shadow: 0 4px 20px rgba(125, 211, 252, 0.2);
}

.nftCardImage img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 0.75rem;
  transition: transform 0.3s ease;
}

.nftCard:hover .nftCardImage img {
  transform: scale(1.05);
}

.nftCardBadges {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  right: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
}

.rarityBadge {
  padding: 0.3rem 0.6rem;
  background: var(--rarity-color, #9E9E9E);
  color: white;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 700;
  z-index: 2;
  box-shadow: 0 2px 8px var(--rarity-glow, rgba(0, 0, 0, 0.2));
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.starBadge {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 193, 7, 0.2) 100%);
  backdrop-filter: blur(10px);
  padding: 0.4rem 0.6rem;
  border-radius: 8px;
  display: flex;
  gap: 0.2rem;
  border: 1px solid rgba(255, 215, 0, 0.3);
  box-shadow: 0 2px 8px rgba(255, 215, 0, 0.2);
}

.star {
  color: #FFD700;
  font-size: 0.85rem;
  text-shadow: 0 0 8px rgba(255, 215, 0, 0.5);
}

.levelBadge {
  background: linear-gradient(135deg, rgba(125, 211, 252, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%);
  backdrop-filter: blur(10px);
  color: white;
  padding: 0.4rem 0.7rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 700;
  border: 1px solid rgba(125, 211, 252, 0.4);
  box-shadow: 0 2px 8px rgba(125, 211, 252, 0.2);
}

.nftCardInfo {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nftCardName {
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
}

.nftCardPrice {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
}

.priceLabel {
  color: rgba(255, 255, 255, 0.6);
}

.priceValue {
  color: #7DD3FC;
  font-weight: 600;
  font-size: 0.9rem;
}

.buyBtn,
.sellBtn,
.cancelBtn {
  width: 100%;
  padding: 0.85rem;
  border-radius: 12px;
  border: none;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.buyBtn {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
}

.buyBtn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.buyBtn:hover::before {
  left: 100%;
}

.buyBtn:hover {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.5);
}

.sellBtn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.sellBtn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.sellBtn:hover::before {
  left: 100%;
}

.sellBtn:hover {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
}

.cancelBtn {
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(239, 68, 68, 0.4);
  color: #ff6b6b;
  box-shadow: 0 2px 10px rgba(239, 68, 68, 0.2);
}

.cancelBtn:hover {
  background: rgba(239, 68, 68, 0.25);
  border-color: rgba(239, 68, 68, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
}

.sectionHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.sectionHeader h3 {
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
}

.myCoinBalance {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  font-weight: 600;
}

.emptyMarketplace {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
}

.emptyIcon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.emptyText {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
}

/* 모달 스타일 */
.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 1rem;
  animation: fadeIn 0.2s ease;
}

.modalContent {
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.98) 100%);
  backdrop-filter: blur(30px);
  border: 2px solid rgba(125, 211, 252, 0.4);
  border-radius: 24px;
  width: 100%;
  max-width: 450px;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(125, 211, 252, 0.1);
  position: relative;
}

.modalContent::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(125, 211, 252, 0.5), transparent);
}

.modalHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.75rem 1.5rem;
  border-bottom: 1px solid rgba(125, 211, 252, 0.2);
  background: linear-gradient(135deg, rgba(125, 211, 252, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%);
}

.modalTitle {
  color: white;
  font-size: 1.3rem;
  font-weight: 800;
  margin: 0;
  background: linear-gradient(135deg, #7DD3FC 0%, #8B5CF6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.modalClose {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 2rem;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;
  line-height: 1;
}

.modalClose:hover {
  color: white;
}

.modalBody {
  padding: 1.5rem;
}

.modalFooter {
  display: flex;
  gap: 0.75rem;
  padding: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.modalBtn {
  flex: 1;
  padding: 0.9rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-size: 0.95rem;
}

.cancelBtn {
  background: rgba(59, 63, 88, 0.8);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.cancelBtn:hover {
  background: rgba(59, 63, 88, 1);
}

.confirmBtn {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.confirmBtn:hover:not(.disabled) {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
}

.confirmBtn.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* 판매 모달 */
.sellNFTPreview {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
}

.sellNFTImage {
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem;
}

.sellNFTInfo {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
}

.sellNFTName {
  color: white;
  font-weight: 600;
  font-size: 1rem;
}

.sellNFTDetails {
  display: flex;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
}

.sellPriceInput {
  margin-bottom: 1rem;
}

.inputLabel {
  display: block;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.priceInput {
  width: 100%;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
}

.priceInput:focus {
  outline: none;
  border-color: #7DD3FC;
  background: rgba(255, 255, 255, 0.15);
}

.priceHint {
  margin-top: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
}

/* 구매 모달 */
.buyNFTPreview {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
}

.buyNFTImage {
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem;
}

.buyNFTInfo {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
}

.buyNFTName {
  color: white;
  font-weight: 600;
  font-size: 1rem;
}

.buyNFTDetails {
  display: flex;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
}

.buyPriceInfo {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.priceRow {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.priceRow .priceLabel {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.priceRow .priceValue {
  color: #7DD3FC;
  font-weight: 600;
  font-size: 1rem;
}

.priceValue.insufficient {
  color: #ff6b6b;
}

.insufficientWarning {
  color: #ff6b6b;
  font-size: 0.85rem;
  text-align: center;
  padding: 0.5rem;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 6px;
}

/* 상세 정보 모달 */
.detailModal {
  max-width: 400px;
}

.detailNFTImage {
  text-align: center;
  margin-bottom: 1.5rem;
}

.detailNFTImage img {
  width: 200px;
  height: 200px;
  object-fit: contain;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
}

.detailBadges {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
}

.detailStarBadge {
  background: rgba(255, 215, 0, 0.2);
  border: 1px solid rgba(255, 215, 0, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  display: flex;
  gap: 0.3rem;
}

.detailStarBadge .star {
  color: #FFD700;
  font-size: 1.2rem;
}

.detailLevelBadge {
  background: rgba(125, 211, 252, 0.2);
  border: 1px solid rgba(125, 211, 252, 0.3);
  color: #7DD3FC;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
}

.detailInfo {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1rem;
}

.detailRow {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.detailRow:last-child {
  border-bottom: none;
}

.detailLabel {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.detailValue {
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
}

/* 검색 모달 */
.searchModal {
  background: rgba(15, 23, 42, 0.98);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(125, 211, 252, 0.3);
  border-radius: 16px;
  width: 100%;
  max-width: 400px;
  animation: slideUp 0.3s ease;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.searchModalHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.searchModalTitle {
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
}

.searchModalClose {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 2rem;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;
  line-height: 1;
}

.searchModalClose:hover {
  color: white;
}

.searchModalBody {
  padding: 1.5rem;
}

.searchInput {
  width: 100%;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  font-size: 0.9rem;
}

.searchInput::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.searchInput:focus {
  outline: none;
  border-color: #7DD3FC;
  background: rgba(255, 255, 255, 0.15);
}

.searchModalFooter {
  display: flex;
  gap: 0.75rem;
  padding: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.resetBtn {
  background: rgba(239, 68, 68, 0.2);
  border: 1px solid rgba(239, 68, 68, 0.4);
  color: #ff6b6b;
}

.resetBtn:hover {
  background: rgba(239, 68, 68, 0.3);
}

.applyBtn {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.applyBtn:hover {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 지갑 섹션 */
.walletSection {
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem 1.5rem;
  background: linear-gradient(135deg, rgba(125, 211, 252, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(125, 211, 252, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.walletLabel {
  margin-bottom: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.walletBalance {
  font-size: 4em;
  color: #fff;
  font-weight: 900;
  margin-bottom: 1rem;
  text-shadow: 0 2px 15px rgba(125, 211, 252, 0.4);
  background: linear-gradient(135deg, #7DD3FC 0%, #8B5CF6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.02em;
}

.btcInfo,
.ethInfo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  width: max-content;
  margin: 0.5rem auto;
  padding: 0.6rem 1.5rem;
  border-radius: 50px;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.change.positive {
  color: #10b981;
}

/* 액션 버튼 */
.actionButtons {
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 0 1rem;
}

.actionBtn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.actionBtn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(125, 211, 252, 0.1);
  border-radius: 16px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.actionBtn:hover::before {
  opacity: 1;
}

.actionBtn:hover {
  transform: translateY(-4px);
}

.btnIcon {
  width: 80px;
  height: auto;
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
}

.actionBtn:hover .btnIcon {
  transform: scale(1.15) rotate(5deg);
  box-shadow: 0 12px 30px rgba(125, 211, 252, 0.4);
}

.sendBtn .btnIcon {
  background-image: url('@/assets/img/nftSend.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.buyBtn .btnIcon {
  background-image: url('@/assets/img/nftPlus.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.receiveBtn .btnIcon {
  background-image: url('@/assets/img/nftReceive.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.btnLabel {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  font-size: 0.9rem;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
}

.actionBtn:hover .btnLabel {
  color: #7DD3FC;
}

/* 서브 탭 메뉴 */
.subTabMenu {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(20px);
  border-radius: 14px;
  padding: 5px;
  border: 1px solid rgba(125, 211, 252, 0.15);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.subTab {
  flex: 1;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.6);
  background: transparent;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.subTab:hover {
  color: rgba(255, 255, 255, 0.9);
}

.subTab.active {
  background: linear-gradient(135deg, rgba(125, 211, 252, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%);
  color: #fff;
  box-shadow: 0 2px 10px rgba(125, 211, 252, 0.2);
  border: 1px solid rgba(125, 211, 252, 0.3);
}

/* 아이템 목록 */
.itemList {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: linear-gradient(135deg, rgba(33, 36, 54, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  border: 1px solid rgba(125, 211, 252, 0.15);
  color: #fff;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(125, 211, 252, 0.2);
  border-color: rgba(125, 211, 252, 0.3);
  background: linear-gradient(135deg, rgba(33, 36, 54, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%);
}

.itemIcon {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
}

.iconCircle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.itemInfo {
  flex: 1;
  min-width: 0;
}

.itemSymbol {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
}

.itemName {
  font-size: 0.9rem;
  opacity: 0.7;
}

.itemChart {
  flex: 1;
  max-width: 150px;
  height: 30px;
}

.chartLine {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.itemPrice {
  text-align: right;
  flex-shrink: 0;
}

.price {
  font-weight: bold;
  margin-bottom: 0.25rem;
  font-size: 1rem;
}

.change {
  font-size: 0.85rem;
}

.change.positive {
  color: #10b981;
}

.change.negative {
  color: #ef4444;
}

/* NFT 목록 (지갑 탭) */
.nftList {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nftItem {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: linear-gradient(135deg, rgba(33, 36, 54, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  border: 1px solid rgba(125, 211, 252, 0.15);
  color: #fff;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.nftItem:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(125, 211, 252, 0.25);
  border-color: rgba(125, 211, 252, 0.4);
  background: linear-gradient(135deg, rgba(33, 36, 54, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%);
}

.nftThumbnail {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
}

.thumbnailPlaceholder {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.nftInfo {
  flex: 1;
  min-width: 0;
}

.nftId {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
}

.collectionName {
  font-size: 0.9rem;
  opacity: 0.7;
}

.nftValue {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  flex-shrink: 0;
}

.nftStars {
  display: flex;
  gap: 0.2rem;
}

.nftStars .star {
  color: #FFD700;
  font-size: 0.9rem;
}

.nftLevel {
  background: rgba(125, 211, 252, 0.2);
  border: 1px solid rgba(125, 211, 252, 0.3);
  color: #7DD3FC;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
}

.emptyNFTs {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  text-align: center;
}

.emptyNFTs .emptyIcon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.emptyNFTs .emptyText {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
}

/* 팝업 스타일 */
.popupOverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: fadeIn 0.3s ease;
}

.popupContent {
  background: rgba(33, 36, 54, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.5rem;
  max-width: 400px;
  width: 90%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  animation: slideUp 0.3s ease;
}

.popupHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.popupTitle {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #fff;
  margin: 0;
}

.popupBody {
  color: #fff;
}

.popupMessage {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 1.5rem 0;
  text-align: center;
}

.popupActions {
  display: flex;
  gap: 1rem;
}

.popupBtn {
  flex: 1;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1rem;
}

.popupBtn.cancelBtn {
  background: rgba(59, 63, 88, 0.8);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.popupBtn.cancelBtn:hover {
  background: rgba(59, 63, 88, 1);
  transform: translateY(-2px);
}

/* 모바일 반응형 */
@media (max-width: 480px) {
  .nftGrid {
    grid-template-columns: 1fr;
  }
  
  .filterBar {
    flex-direction: column;
  }
  
  .filterSelect {
    width: 100%;
  }
  
  .marketplaceHeader {
    flex-direction: column;
    gap: 0.75rem;
    align-items: stretch;
  }
  
  .marketplaceStats {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .tabMenu {
    flex-wrap: wrap;
  }
  
  .tab {
    min-width: calc(50% - 0.25rem);
  }
  
  .walletBalance {
    font-size: 2em;
  }
  
  .actionButtons {
    gap: 0.5rem;
  }
  
  .btnIcon {
    width: 60px;
  }
}

/* 지갑 섹션 */
.walletSection {
  text-align: center;
  margin-bottom: 2rem;
}

.walletLabel {
  margin-bottom: 0.5rem;
  color: #fff;
}

.walletBalance {
  font-size: 2.5em;
  color: #fff;
  font-weight: bold;
  margin-bottom: 0.8rem;
}

.btcInfo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: rgba(0, 0, 0, .5);
  width: max-content;
  margin: auto;
  padding: 0 2rem;
  border-radius: 2rem;
  color: #fff;
}

.change.positive {
  color: green;
}

/* 액션 버튼 */
.actionButtons {
  display: flex;
  justify-content: space-around;
  /* margin-bottom: 2rem; */
}

.actionBtn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
}

.btnIcon {
  width: 76px;
  height: auto;
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sendBtn .btnIcon {
  background-image: url('@/assets/img/nftSend.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.buyBtn .btnIcon {
  background-image: url('@/assets/img/nftPlus.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.receiveBtn .btnIcon {
  background-image: url('@/assets/img/nftReceive.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* 탭 메뉴 */
.tabMenu {
  display: flex;
  gap: 1rem;
  /* margin-bottom: 2rem; */
  background: #212436;
  border-radius: 5vw;
  padding: 4px;
}

.tab {
  flex: 1;
  padding: 0.8rem;
  border-radius:5vw;
  border: none;
  cursor: pointer;
  color: #7C7D82;
}

span.btnLabel {
    color: #E9E9E9;
    font-weight: 600;
}


.tab.active {
  background: #3B3F58;
  color: #fff;
  font-weight: 500;
}

/* 아이템 목록 */
.itemList {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  color: #fff;
}

.itemIcon {
  width: 50px;
  height: 50px;
}

.iconCircle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* .itemInfo {
  flex: 1;
} */

.itemSymbol {
  font-size: 1.2rem;
  font-weight: bold;
}

.itemName {
  font-size: 0.9rem;
  opacity: 0.7;
}

.itemChart {
  /* width: 60px;
  height: 30px; */
  flex: 1;
  max-width: 150px;
}

.chartLine {
  width: 100%;
  height: auto;
  aspect-ratio: 100/27;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.itemPrice {
  text-align: right;
}

.price {
  font-weight: bold;
  margin-bottom: 0.25rem;
}

.change.negative {
  color: red;
}

/* NFT 목록 (NFTs 탭) */
.nftList {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nftItem {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  color: #fff;
}

.nftThumbnail {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
}

.thumbnailPlaceholder {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.nftInfo {
  flex: 1;
}

.nftId {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
}

.collectionName {
  font-size: 0.9rem;
  opacity: 0.7;
}

.nftValue {
  text-align: right;
}

.ethAmount {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.25rem;
  margin-bottom: 0.25rem;
  font-weight: 600;
}

.ethIcon {
  width: 1rem;
  height: 1rem;
  object-fit: contain;
}

.usdValue {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.25rem;
  font-weight: 600;
}

.usdValue.positive {
  color: green;
}

.arrowUp {
  font-size: 0.9rem;
}

/* 팝업 스타일 */
.popupOverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.popupContent {
  background: rgba(33, 36, 54, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.5rem;
  max-width: 400px;
  width: 90%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.popupHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.popupTitle {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #fff;
  margin: 0;
}

.closeBtn {
  background: transparent;
  border: none;
  color: #7C7D82;
  font-size: 2rem;
  cursor: pointer;
  line-height: 1;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s;
}

.closeBtn:hover {
  color: #fff;
}

.popupBody {
  color: #fff;
}

.popupMessage {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 1.5rem 0;
  text-align: center;
}

.popupActions {
  display: flex;
  gap: 1rem;
}

.popupBtn {
  flex: 1;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1rem;
}

.cancelBtn {
  background: rgba(59, 63, 88, 0.8);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.cancelBtn:hover {
  background: rgba(59, 63, 88, 1);
  transform: translateY(-2px);
}

.confirmBtn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.confirmBtn:hover {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}
</style>

