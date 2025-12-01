<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCurrentUser, getI18nTexts } from '@/utils/userUtils'
import { useAppStore } from '@/store/appStore'
import { getRarityName, getRarityColors, getRarityStyle, RARITY_TIERS, addRarityToNFT } from '@/utils/rarityUtils'
import { canLevelUp, getLevelUpCost, calculateStatIncrease, calculateMaxExp, initializeNFTExp } from '@/utils/nftLevelUtils'

// appStore 사용
const store = useAppStore()

// 다국어 텍스트
const texts = computed(() => getI18nTexts())
import statStar1 from '@/assets/img/statStar1.png'
import statStar2 from '@/assets/img/statStar2.png'

// appStore에서 게임 데이터 가져오기 (반응형)
const coinCount = computed(() => store.state.coins)

// 필터/정렬 상태
const searchQuery = ref('')
const filterStars = ref('all') // 'all', '2', '3', '4', '5'
const filterLevel = ref('all') // 'all', '1-5', '6-10', '11+'
const filterRarity = ref('all') // 'all', 'common', 'rare', 'epic', 'legendary'
const sortBy = ref('newest') // 'newest', 'oldest', 'level', 'name', 'stars', 'rarity'
const showDetailModal = ref(false)
const selectedNFT = ref(null)
const showSearchModal = ref(false) // 검색 팝업 표시

// 각 캐릭터의 기본 스탯 생성 함수
const generateStats = (baseStats) => {
  return [
    { name: texts.value.strength, value: baseStats[0], progress: baseStats[0], color: '#FF6B6B' },
    { name: texts.value.health, value: baseStats[1], progress: baseStats[1], color: '#FF8A80' },
    { name: texts.value.intelligence, value: baseStats[2], progress: baseStats[2], color: '#9C27B0' },
    { name: texts.value.dexterity, value: baseStats[3], progress: baseStats[3], color: '#FFA726' },
    { name: texts.value.courage, value: baseStats[4], progress: baseStats[4], color: '#00BCD4' },
    { name: texts.value.luck, value: baseStats[5], progress: baseStats[5], color: '#66BB6A' }
  ]
}

// 고양이에 스탯이 없으면 생성, 있으면 스탯 이름 업데이트
const ensureStats = (cat) => {
  if (!cat.stats) {
    // stars에 따라 기본 스탯 범위 설정
    const baseValue = cat.stars * 15 + Math.floor(Math.random() * 20)
    cat.stats = generateStats([
      baseValue + Math.floor(Math.random() * 20),
      baseValue + Math.floor(Math.random() * 20),
      baseValue + Math.floor(Math.random() * 20),
      baseValue + Math.floor(Math.random() * 20),
      baseValue + Math.floor(Math.random() * 20),
      baseValue + Math.floor(Math.random() * 20)
    ])
  } else {
    // 이미 스탯이 있으면 스탯 이름만 현재 언어로 업데이트
    cat.stats = cat.stats.map((stat, index) => {
      const statNames = [texts.value.strength, texts.value.health, texts.value.intelligence, 
                          texts.value.dexterity, texts.value.courage, texts.value.luck]
      return {
        ...stat,
        name: statNames[index] || stat.name
      }
    })
  }
  return cat
}

// 실제 게임 인벤토리 데이터
const inventoryItems = ref([])

// 필터링 및 정렬된 인벤토리
const filteredAndSortedItems = computed(() => {
  let items = [...inventoryItems.value]
  
  // 검색 필터
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    items = items.filter(item => 
      item.name.toLowerCase().includes(query) ||
      String(item.imageId).includes(query)
    )
  }
  
  // 별 등급 필터
  if (filterStars.value !== 'all') {
    items = items.filter(item => item.stars === parseInt(filterStars.value))
  }
  
  // 레벨 필터
  if (filterLevel.value !== 'all') {
    if (filterLevel.value === '1-5') {
      items = items.filter(item => item.level >= 1 && item.level <= 5)
    } else if (filterLevel.value === '6-10') {
      items = items.filter(item => item.level >= 6 && item.level <= 10)
    } else if (filterLevel.value === '11+') {
      items = items.filter(item => item.level >= 11)
    }
  }
  
  // 정렬
  items = [...items].sort((a, b) => {
    switch (sortBy.value) {
      case 'newest':
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0) || b.id - a.id
      case 'oldest':
        return a.id - b.id
      case 'level':
        return b.level - a.level
      case 'stars':
        return b.stars - a.stars
      case 'rarity':
        const rarityOrder = {
          [RARITY_TIERS.LEGENDARY]: 4,
          [RARITY_TIERS.EPIC]: 3,
          [RARITY_TIERS.RARE]: 2,
          [RARITY_TIERS.COMMON]: 1
        }
        const aRarity = rarityOrder[a.rarity || RARITY_TIERS.COMMON] || 0
        const bRarity = rarityOrder[b.rarity || RARITY_TIERS.COMMON] || 0
        return bRarity - aRarity
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })
  
  return items
})

// 선택된 캐릭터의 스탯
const selectedCharacterStats = computed(() => {
  const selectedItem = inventoryItems.value.find(item => item.selected)
  if (selectedItem) {
    const cat = ensureStats(selectedItem)
    return cat.stats
  }
  // 기본 스탯 (fallback)
  return generateStats([33, 7, 29, 10, 11, 10])
})

// 선택된 캐릭터의 이름
const selectedCharacterName = computed(() => {
  const selectedItem = inventoryItems.value.find(item => item.selected)
  return selectedItem ? selectedItem.name : 'Inventory is empty'
})

// 고양이 이미지 경로 가져오기 함수
const getCatImage = (id) => {
  try {
    // Vite에서 동적 이미지 import
    return new URL(`../assets/img/cat${id}.png`, import.meta.url).href
  } catch (error) {
    // fallback: 직접 경로 사용
    return `/src/assets/img/cat${id}.png`
  }
}

// 현재 선택된 캐릭터 이미지
const selectedCharacterImage = computed(() => {
  const selectedItem = inventoryItems.value.find(item => item.selected)
  if (selectedItem) {
    return getCatImage(selectedItem.imageId || selectedItem.id)
  }
  return getCatImage(1)
})

// NFT 상세 정보 보기
const showNFTDetail = (item) => {
  const itemWithExp = initializeNFTExp(item) // 경험치 초기화
  selectedNFT.value = ensureStats({ ...itemWithExp })
  showDetailModal.value = true
}

// NFT 상세 정보 모달 닫기
const closeDetailModal = () => {
  showDetailModal.value = false
  selectedNFT.value = null
}

// NFT 선택
const selectCharacter = async (item) => {
  inventoryItems.value.forEach(i => i.selected = false)
  item.selected = true
  
  // 새 고양이를 클릭하면 isNew 제거하고 순서 정렬
  if (item.isNew) {
    item.isNew = false
    
    // 사용자 데이터 업데이트
    const currentUser = getCurrentUser()
    if (currentUser) {
      const updatedInventory = inventoryItems.value.map(cat => ({
        ...cat,
        isNew: cat.id === item.id ? false : cat.isNew
      }))
      
      // appStore를 통해 업데이트 (데이터 일관성 보장)
      await store.updateGameData({
        inventory: updatedInventory
      })
    }
  }
}

// 필터 초기화
const resetFilters = () => {
  searchQuery.value = ''
  filterStars.value = 'all'
  filterLevel.value = 'all'
  filterRarity.value = 'all'
  sortBy.value = 'newest'
}

// 레벨업 실행
const handleLevelUp = async () => {
  if (!selectedNFT.value) return
  
  const cost = getLevelUpCost(selectedNFT.value.level || 1)
  
  // 코인 확인
  if (coinCount.value < cost) {
    alert(`${texts.value.insufficientCoins} (Required: ${cost})`)
    return
  }
  
  // 레벨업 처리
  const currentUser = getCurrentUser()
  if (currentUser) {
    const inventory = currentUser.gameData?.inventory || []
    const updatedInventory = inventory.map(nft => {
      if (nft.id === selectedNFT.value.id) {
        const currentLevel = nft.level || 1
        const newLevel = currentLevel + 1
        const newMaxExp = calculateMaxExp(newLevel)
        
        // 스탯 증가
        const statIncrease = calculateStatIncrease(nft)
        const newMiningEfficiency = (nft.miningEfficiency || 0) + statIncrease
        const newHuntingDamage = (nft.huntingDamage || 0) + statIncrease
        const newExplorationReward = (nft.explorationReward || 0) + statIncrease
        const newProductionSpeed = (nft.productionSpeed || 0) + statIncrease
        
        return {
          ...nft,
          level: newLevel,
          exp: 0, // 경험치 리셋
          maxExp: newMaxExp,
          miningEfficiency: newMiningEfficiency,
          huntingDamage: newHuntingDamage,
          explorationReward: newExplorationReward,
          productionSpeed: newProductionSpeed
        }
      }
      return nft
    })
    
    // 코인 차감 + 인벤토리 업데이트
    const newCoins = coinCount.value - cost
    try {
      await store.updateMultiple({
        coins: newCoins
      })
      await store.updateGameData({
        inventory: updatedInventory
      })
      
      // 모달 새로고침
      const updatedNFT = updatedInventory.find(nft => nft.id === selectedNFT.value.id)
      if (updatedNFT) {
        selectedNFT.value = ensureStats({ ...updatedNFT })
      }
      
      // 인벤토리 목록도 업데이트
      loadInventory()
      
      alert(`${texts.value.levelUp} Success! Level ${newLevel}`)
    } catch (error) {
      console.error('레벨업 실패:', error)
      alert('An error occurred during level up.')
    }
  }
}

// 사용자 데이터 업데이트 감지
const loadInventory = () => {
  const currentUser = getCurrentUser()
  if (currentUser) {
    // appStore에서 사용자 데이터 로드
    store.loadCurrentUser()
    
    // 실제 게임 인벤토리 데이터만 사용
    const userInventory = currentUser.gameData?.inventory || []
    
    if (userInventory.length > 0) {
      // 레어리티가 없는 기존 NFT에 레어리티 추가, 스탯이 없는 고양이는 스탯 생성, 경험치 초기화
      inventoryItems.value = userInventory.map(cat => {
        const catWithRarity = cat.rarity ? cat : addRarityToNFT(cat)
        const catWithStats = ensureStats({ ...catWithRarity })
        return initializeNFTExp(catWithStats) // 경험치 초기화 (기존 NFT 호환성)
      })
    } else {
      inventoryItems.value = []
    }
  } else {
    inventoryItems.value = []
  }
}

onMounted(() => {
  loadInventory()
  
  // 사용자 데이터 업데이트 이벤트 리스너
  window.addEventListener('userDataUpdated', loadInventory)
})

// 컴포넌트 언마운트 시 이벤트 리스너 제거
onUnmounted(() => {
  window.removeEventListener('userDataUpdated', loadInventory)
})
</script>

<template>
  <div class="inventoryPage">
    <!-- 헤더 -->
    <Header :coinCount="coinCount" />
    
    <!-- 메인 콘텐츠 -->
    <main class="mainContent">
      <!-- 상단 섹션 -->
      <div class="topSection">
        <!-- Magic Panel -->
        <div class="magicPanel">
          <div class="panelTitle">{{ selectedCharacterName }}</div>
          <div class="characterBox">
            <img :src="selectedCharacterImage" :alt="texts.selectedCharacter" class="selectedCharacter" />
          </div>
        </div>
        
        <!-- Profile Panel -->
        <div class="profilePanel">
          <div class="panelTitle">Profile</div>
          <div class="progressBars">
            <div v-for="(stat, index) in selectedCharacterStats" :key="index" class="progressBar">
              <div class="statLabel">{{ stat.name }}</div>
              <div class="barBg">
                <div :style="{ width: stat.progress + '%', backgroundColor: stat.color }" class="barFill"></div>
              </div>
              <span class="value">{{ stat.value }}%</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 검색 버튼 및 NFT 개수 -->
      <div class="inventoryHeader">
        <div class="inventoryCount">
          {{ texts.totalItems }} {{ filteredAndSortedItems.length }} / {{ inventoryItems.length }} {{ texts.items }}
        </div>
        <button class="searchBtn" @click="showSearchModal = true">
          <span class="searchIcon">🔍</span>
          <span>{{ texts.search }}</span>
        </button>
      </div>
      
      <!-- 하단 인벤토리 그리드 -->
      <div v-if="filteredAndSortedItems.length > 0" class="inventoryGrid">
        <div
          v-for="item in filteredAndSortedItems"
          :key="item.id"
          class="inventoryItem"
          :class="{ selected: item.selected, [`rarity-${item.rarity || 'common'}`]: true }"
          :style="getRarityStyle(item.rarity)"
          @click="selectCharacter(item)"
          @dblclick="showNFTDetail(item)"
        >
          <!-- NEW 배지 -->
          <div v-if="item.isNew" class="newBadge">NEW</div>
          
          <!-- 레어리티 배지 (상단 왼쪽) -->
          <div v-if="item.rarity" class="rarityBadge" :style="getRarityStyle(item.rarity)">
            {{ getRarityName(item.rarity) }}
          </div>
          
          <!-- 별 등급 표시 (하단) -->
          <div class="starBadge">
            <img 
              v-for="n in 5" 
              :key="n" 
              :src="n <= item.stars ? statStar1 : statStar2"
              alt="별"
              class="starIcon"
            />
          </div>
          
          <!-- 레벨 표시 (상단 오른쪽) -->
          <div class="levelBadge">
            Lv {{ String(item.level).padStart(2, '0') }}
          </div>
          
          <!-- 캐릭터 이미지 -->
          <img :src="getCatImage(item.imageId || item.id)" :alt="texts.cat" class="itemIcon" />
          
          <!-- 더블클릭 안내 -->
          <div class="detailHint">{{ texts.doubleClickDetail }}</div>
        </div>
      </div>
      
      <!-- 인벤토리 비어있을 때 -->
      <div v-else class="emptyInventory">
        <div class="emptyIcon">📦</div>
        <div class="emptyText">{{ texts.noNFTs }}</div>
        <div class="emptySubtext">{{ texts.createCatInFactory }}</div>
      </div>
    </main>
    
    <!-- 푸터 -->
    <Footer />
    
    <!-- 검색 팝업 모달 -->
    <div v-if="showSearchModal" class="modalOverlay" @click="showSearchModal = false">
      <div class="searchModal" @click.stop>
        <div class="searchModalHeader">
          <h3 class="searchModalTitle">{{ texts.searchAndFilter }}</h3>
          <button class="searchModalClose" @click="showSearchModal = false">×</button>
        </div>
        
        <div class="searchModalBody">
          <div class="searchBox">
            <input 
              type="text" 
              v-model="searchQuery" 
              :placeholder="texts.searchPlaceholder"
              class="searchInput"
              @keyup.enter="showSearchModal = false"
            />
          </div>
          
          <div class="filterControls">
            <div class="filterGroup">
              <label class="filterLabel">{{ texts.starRating }}</label>
              <select v-model="filterStars" class="filterSelect">
                <option value="all">{{ texts.all }}</option>
                <option value="2">2 {{ texts.stars }}</option>
                <option value="3">3 {{ texts.stars }}</option>
                <option value="4">4 {{ texts.stars }}</option>
                <option value="5">5 {{ texts.stars }}</option>
              </select>
            </div>
            
            <div class="filterGroup">
              <label class="filterLabel">{{ texts.levelFilter }}</label>
              <select v-model="filterLevel" class="filterSelect">
                <option value="all">{{ texts.all }}</option>
                <option value="1-5">1-5</option>
                <option value="6-10">6-10</option>
                <option value="11+">11+</option>
              </select>
            </div>
            
            <div class="filterGroup">
              <label class="filterLabel">{{ texts.rarityFilter }}</label>
              <select v-model="filterRarity" class="filterSelect">
                <option value="all">{{ texts.all }}</option>
                <option value="common">{{ texts.common }}</option>
                <option value="rare">{{ texts.rare }}</option>
                <option value="epic">{{ texts.epic }}</option>
                <option value="legendary">{{ texts.legendary }}</option>
              </select>
            </div>
            
            <div class="filterGroup">
              <label class="filterLabel">{{ texts.sortBy }}</label>
              <select v-model="sortBy" class="filterSelect">
                <option value="newest">{{ texts.newest }}</option>
                <option value="oldest">{{ texts.oldest }}</option>
                <option value="level">{{ texts.levelHighToLow }}</option>
                <option value="stars">{{ texts.starsHighToLow }}</option>
                <option value="rarity">{{ texts.rarityHighToLow }}</option>
                <option value="name">{{ texts.nameOrder }}</option>
              </select>
            </div>
          </div>
          
          <div class="searchModalFooter">
            <button class="resetFilterBtn" @click="resetFilters">{{ texts.reset }}</button>
            <button class="applyFilterBtn" @click="showSearchModal = false">{{ texts.apply }}</button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- NFT 상세 정보 모달 -->
    <div v-if="showDetailModal && selectedNFT" class="modalOverlay" @click="closeDetailModal">
      <div class="modalContent" @click.stop>
        <div class="modalHeader">
          <h3 class="modalTitle">{{ selectedNFT.name }}</h3>
          <button class="modalClose" @click="closeDetailModal">×</button>
        </div>
        
        <div class="modalBody">
          <div class="modalImageSection">
            <img :src="getCatImage(selectedNFT.imageId || selectedNFT.id)" alt="NFT" class="modalImage" />
            <div class="modalBadges">
              <div v-if="selectedNFT.rarity" class="modalBadge rarity" :style="getRarityStyle(selectedNFT.rarity)">
                {{ getRarityName(selectedNFT.rarity) }}
              </div>
              <div class="modalBadge stars">
                <span v-for="n in 5" :key="n" class="star">
                  {{ n <= selectedNFT.stars ? '★' : '☆' }}
                </span>
              </div>
              <div class="modalBadge level">Lv {{ selectedNFT.level }}</div>
            </div>
          </div>
          
          <div class="modalStatsSection">
            <h4 class="sectionTitle">{{ texts.stats }}</h4>
            <div class="modalStats">
              <div v-for="(stat, index) in selectedNFT.stats" :key="index" class="modalStat">
                <div class="modalStatLabel">{{ stat.name }}</div>
                <div class="modalStatBar">
                  <div 
                    :style="{ width: stat.progress + '%', backgroundColor: stat.color }" 
                    class="modalStatFill"
                  ></div>
                </div>
                <div class="modalStatValue">{{ stat.value }}%</div>
              </div>
            </div>
          </div>
          
          <div class="modalInfoSection">
            <div class="infoRow">
              <span class="infoLabel">NFT ID:</span>
              <span class="infoValue">#{{ selectedNFT.id }}</span>
            </div>
            <div class="infoRow">
              <span class="infoLabel">{{ texts.imageId }}:</span>
              <span class="infoValue">#{{ selectedNFT.imageId }}</span>
            </div>
            <div class="infoRow">
              <span class="infoLabel">{{ texts.createdAt }}:</span>
              <span class="infoValue">{{ new Date(selectedNFT.id).toLocaleDateString() }}</span>
            </div>
          </div>
          
          <!-- 경험치 섹션 -->
          <div class="expSection">
            <div class="expLabel">{{ texts.exp }}</div>
            <div class="expBar">
              <div 
                class="expFill" 
                :style="{ width: Math.min((selectedNFT.exp || 0) / (selectedNFT.maxExp || calculateMaxExp(selectedNFT.level || 1)) * 100, 100) + '%' }"
              ></div>
            </div>
            <div class="expText">
              {{ selectedNFT.exp || 0 }} / {{ selectedNFT.maxExp || calculateMaxExp(selectedNFT.level || 1) }}
            </div>
          </div>
        </div>
        
        <div class="modalFooter">
          <button 
            v-if="canLevelUp(selectedNFT)"
            class="modalBtn levelUpBtn"
            @click="handleLevelUp"
            :disabled="coinCount < getLevelUpCost(selectedNFT.level || 1)"
          >
            {{ texts.levelUpButton }} ({{ getLevelUpCost(selectedNFT.level || 1) }} {{ texts.coin }})
          </button>
          <button class="modalBtn selectBtn" @click="selectCharacter(selectedNFT); closeDetailModal()">
            {{ texts.selectButton }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.inventoryPage {
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
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-y: auto;
}

/* 상단 섹션 */
.topSection {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  background:url('@/assets/img/profile_bg.png') no-repeat center center;
  background-size: cover;
}

.magicPanel {
  border-radius: 12px;
  padding-left: 5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background: url(/src/assets/img/leftArea.png) no-repeat -10% top / contain;
}

.profilePanel {
  border-radius: 12px;
  padding-right: 5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background: url(/src/assets/img/rightArea.png) no-repeat 110% top / contain;
}

.panelTitle {
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
}

/* Magic Panel */
.characterBox {
  background: #F3F4F6;
  border-radius: 8px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  max-width: 150px;
}

.selectedCharacter {
  width: 120px;
  height: 120px;
  object-fit: contain;
}

/* Profile Panel */
.progressBars {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.progressBar {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.statLabel {
  color: white;
  font-weight: 500;
  font-size: 0.9rem;
  min-width: 10px;
  flex-shrink: 0;
}

.barBg {
  flex: 1;
  height: 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.barFill {
  height: 100%;
  border-radius: 10px;
  transition: width 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
}

.barFill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  border-radius: 10px;
}

.value {
  color: white;
  font-weight: 600;
  min-width: 20px;
  text-align: right;
  font-size: 0.9rem;
}

/* 인벤토리 헤더 */
.inventoryHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0 0.5rem;
}

.inventoryCount {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  font-weight: 600;
}

.searchBtn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  background: rgba(125, 211, 252, 0.2);
  border: 1px solid rgba(125, 211, 252, 0.3);
  border-radius: 8px;
  color: #7DD3FC;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.searchBtn:hover {
  background: rgba(125, 211, 252, 0.3);
  border-color: rgba(125, 211, 252, 0.5);
  transform: translateY(-2px);
}

.searchIcon {
  font-size: 1rem;
}

/* 검색 팝업 모달 */
.searchModal {
  background: rgba(15, 23, 42, 0.98);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(125, 211, 252, 0.3);
  border-radius: 16px;
  width: 100%;
  max-width: 450px;
  max-height: 90vh;
  overflow-y: auto;
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

.searchModalFooter {
  display: flex;
  gap: 0.75rem;
  padding: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.applyFilterBtn {
  flex: 1;
  padding: 0.8rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.applyFilterBtn:hover {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
}

.searchBox {
  margin-bottom: 1rem;
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

.filterControls {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: flex-end;
}

.filterGroup {
  flex: 1;
  min-width: 100px;
}

.filterLabel {
  display: block;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}

.filterSelect {
  width: 100%;
  padding: 0.6rem;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(125, 211, 252, 0.2);
  border-radius: 8px;
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.7rem center;
  background-size: 1rem;
  padding-right: 2.5rem;
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

.resetFilterBtn {
  padding: 0.6rem 1rem;
  background: rgba(239, 68, 68, 0.2);
  border: 1px solid rgba(239, 68, 68, 0.4);
  border-radius: 8px;
  color: #ff6b6b;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.resetFilterBtn:hover {
  background: rgba(239, 68, 68, 0.3);
  border-color: rgba(239, 68, 68, 0.6);
}

.inventoryCount {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  font-weight: 600;
}

/* 하단 인벤토리 그리드 */
.inventoryGrid {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 0.8rem;
  justify-content: space-between;
  overflow-y: auto;
}

.inventoryItem {
  width: calc(25% - 20px);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  min-height: 150px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;
  position: relative;
}

.inventoryItem:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.inventoryItem.selected {
  background: rgba(59, 130, 246, 0.3);
  outline: 1px solid #fff;
}

/* 레어리티별 테두리 색상 */
.inventoryItem.rarity-common {
  border: 2px solid rgba(158, 158, 158, 0.3);
}

.inventoryItem.rarity-rare {
  border: 2px solid rgba(33, 150, 243, 0.4);
  box-shadow: 0 0 10px rgba(33, 150, 243, 0.2);
}

.inventoryItem.rarity-epic {
  border: 2px solid rgba(156, 39, 176, 0.5);
  box-shadow: 0 0 15px rgba(156, 39, 176, 0.3);
}

.inventoryItem.rarity-legendary {
  border: 2px solid rgba(255, 152, 0, 0.6);
  box-shadow: 0 0 20px rgba(255, 152, 0, 0.4);
  animation: legendaryPulse 2s ease-in-out infinite;
}

@keyframes legendaryPulse {
  0%, 100% {
    box-shadow: 0 0 20px rgba(255, 152, 0, 0.4);
  }
  50% {
    box-shadow: 0 0 30px rgba(255, 152, 0, 0.6);
  }
}

.rarityBadge {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
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

.itemIcon {
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 0.5rem;
}

.itemName {
  color: #1E293B;
  font-size: 0.85rem;
  font-weight: 600;
}

/* 별 등급 표시 (하단) */
.starBadge {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-content: center;
  gap: 0.15rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0 0 10px 10px;
  padding: 0.3rem 0.5rem;
  z-index: 10;
}

.starIcon {
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: all 0.2s;
}

/* 레벨 표시 (상단 오른쪽) */
.levelBadge {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  padding: 0.25rem 0.5rem;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  z-index: 10;
}

/* NEW 배지 (상단 왼쪽) */
.newBadge {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%);
  border-radius: 12px;
  padding: 0.25rem 0.6rem;
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(255, 107, 107, 0.5);
  animation: pulseNew 2s ease-in-out infinite;
}

@keyframes pulseNew {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 2px 8px rgba(255, 107, 107, 0.5);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(255, 107, 107, 0.8);
  }
}

/* 필터 섹션 */
.filterSection {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.searchBox {
  margin-bottom: 1rem;
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

.filterControls {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: flex-end;
}

.filterGroup {
  flex: 1;
  min-width: 100px;
}

.filterLabel {
  display: block;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}

.filterSelect {
  width: 100%;
  padding: 0.6rem;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(125, 211, 252, 0.2);
  border-radius: 8px;
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.7rem center;
  background-size: 1rem;
  padding-right: 2.5rem;
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

.resetFilterBtn {
  padding: 0.6rem 1rem;
  background: rgba(239, 68, 68, 0.2);
  border: 1px solid rgba(239, 68, 68, 0.4);
  border-radius: 8px;
  color: #ff6b6b;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.resetFilterBtn:hover {
  background: rgba(239, 68, 68, 0.3);
  border-color: rgba(239, 68, 68, 0.6);
}

.inventoryCount {
  margin-top: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  text-align: center;
}

.detailHint {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 0.65rem;
  padding: 0.2rem;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s;
  border-radius: 0 0 12px 12px;
}

.inventoryItem:hover .detailHint {
  opacity: 1;
}

/* 빈 인벤토리 */
.emptyInventory {
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
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.emptySubtext {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

/* NFT 상세 정보 모달 */
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
  z-index: 2000;
  padding: 1rem;
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modalContent {
  background: rgba(15, 23, 42, 0.98);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(125, 211, 252, 0.3);
  border-radius: 16px;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideUp 0.3s ease;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
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

.modalHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.modalTitle {
  color: white;
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0;
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

.modalImageSection {
  text-align: center;
  margin-bottom: 2rem;
}

.modalImage {
  width: 200px;
  height: 200px;
  object-fit: contain;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  margin-bottom: 1rem;
}

.modalBadges {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.modalBadge {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
}

.modalBadge.stars {
  background: rgba(255, 215, 0, 0.2);
  color: #FFD700;
}

.modalBadge.level {
  background: rgba(125, 211, 252, 0.2);
  color: #7DD3FC;
}

.modalBadge.rarity {
  background: var(--rarity-color, #9E9E9E);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 2px 10px var(--rarity-glow, rgba(0, 0, 0, 0.2));
}

.star {
  font-size: 1.2rem;
  margin: 0 0.1rem;
}

.modalStatsSection {
  margin-bottom: 2rem;
}

.sectionTitle {
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.modalStats {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.modalStat {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.modalStatLabel {
  color: white;
  font-weight: 500;
  font-size: 0.9rem;
  min-width: 60px;
  flex-shrink: 0;
}

.modalStatBar {
  flex: 1;
  height: 24px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}

.modalStatFill {
  height: 100%;
  border-radius: 12px;
  transition: width 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.modalStatValue {
  color: white;
  font-weight: 600;
  min-width: 40px;
  text-align: right;
  font-size: 0.9rem;
}

.modalInfoSection {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1.5rem;
}

.infoRow {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.infoRow:last-child {
  border-bottom: none;
}

.infoLabel {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.infoValue {
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
}

.modalFooter {
  padding: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  gap: 1rem;
}

.modalBtn {
  flex: 1;
  padding: 0.9rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.selectBtn {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.selectBtn:hover {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
}

/* 경험치 섹션 */
.expSection {
  margin-top: 1.5rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}

.expLabel {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
}

.expBar {
  width: 100%;
  height: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.expFill {
  height: 100%;
  background: linear-gradient(90deg, #4CAF50, #8BC34A);
  transition: width 0.3s ease;
  border-radius: 10px;
}

.expText {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
}

/* 레벨업 버튼 */
.levelUpBtn {
  background: linear-gradient(135deg, #FF9800, #FF5722);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.levelUpBtn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 152, 0, 0.4);
}

.levelUpBtn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: rgba(255, 255, 255, 0.1);
}

@media (max-width: 500px) {
    .magicPanel{
        padding-left: 7vw;
        padding-top: 0;
        padding-bottom: 0;
    }
    .profilePanel{
      padding-right: 7vw;
      padding-top: 0;
      padding-bottom: 0;
    }

    .inventoryItem {
      width: calc(30% - 20px);
  }
  
  .filterControls {
    flex-direction: column;
  }
  
  .filterGroup {
    width: 100%;
  }
  
  .resetFilterBtn {
    width: 100%;
  }
  
  .modalContent {
    max-width: 100%;
  }
}

@media (max-width: 450px) {
  .magicPanel{
        padding-left: 5vw;
        background: none;
    }
    .profilePanel{
      padding-right: 5vw;
      background: none;
    }
    .inventoryItem {
      width: calc(50% - 20px);
  }
}
@media (max-width: 350px) {
  .magicPanel{
    padding-top: 3vw;
    padding-bottom: 3vw;
  }
  .profilePanel{
    padding-top: 3vw;
    padding-bottom: 3vw;
  }
}
</style>

