<script setup>
import { ref } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCurrentUser } from '@/utils/userUtils'
import btcImage from '@/assets/img/btc.png'
import ethImage from '@/assets/img/eth.png'
import btcLineImage from '@/assets/img/BTC_line.png'
import ethLineImage from '@/assets/img/eth_line.png'
import catProfile01 from '@/assets/img/catProfile01.png'
import catProfile02 from '@/assets/img/catProfile02.png'
import ethIco from '@/assets/img/eth_ico.png'

const coinCount = ref(0)
const activeTab = ref('tokens')
const walletBalance = ref('$ 5,323.00')
const btcAmount = ref('0.00335')
const btcChange = ref('+6.54%')
const showBuyPopup = ref(false)
const showSendPopup = ref(false)
const showReceivePopup = ref(false)

// 현재 사용자 정보 로드
const currentUser = getCurrentUser()
if (currentUser) {
  coinCount.value = currentUser.gameData?.coins || 0
}

// 탭 전환
const switchTab = (tab) => {
  activeTab.value = tab
}

// Buy 버튼 클릭 핸들러
const handleBuyClick = () => {
  showBuyPopup.value = true
}

// 팝업 닫기
const closeBuyPopup = () => {
  showBuyPopup.value = false
}

// Send 버튼 클릭 핸들러
const handleSendClick = () => {
  showSendPopup.value = true
}

// Send 팝업 닫기
const closeSendPopup = () => {
  showSendPopup.value = false
}

// Receive 버튼 클릭 핸들러
const handleReceiveClick = () => {
  showReceivePopup.value = true
}

// Receive 팝업 닫기
const closeReceivePopup = () => {
  showReceivePopup.value = false
}

// Token 아이템 목록 (예시 데이터)
const tokenItems = ref([
  { id: 1, name: 'Bitcoin', symbol: 'BTC', price: '36,590.00', change: '+6.21%', isPositive: true, image: btcImage, lineImage: btcLineImage },
  { id: 2, name: 'Ethereum', symbol: 'ETH', price: '2,590.00', change: '+5.21%', isPositive: true, image: ethImage, lineImage: ethLineImage }
])

// NFT 아이템 목록 (예시 데이터)
const nftItems = ref([
  { id: 1, nftId: '#1957', collectionName: 'Bored Ape Yacht Club', ethAmount: '64', usdValue: '23,114.57', image: catProfile01 },
  { id: 2, nftId: '#6513', collectionName: 'Bored Ape Yacht Club', ethAmount: '199.8', usdValue: '45,114.57', image: catProfile02 }
])
</script>

<template>
  <div class="nftPage">
    <!-- 헤더 -->
    <Header :coinCount="coinCount" />
    
    <!-- 메인 콘텐츠 -->
    <main class="mainContent nftWrap">
      <!-- 지갑 잔액 섹션 -->
      <div class="walletSection">
        <div class="walletLabel">Current Wallet Balance</div>
        <div class="walletBalance">{{ walletBalance }}</div>
        <div class="btcInfo">
          <span>BTC : {{ btcAmount }}</span>
          <span class="change positive">{{ btcChange }}</span>
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
      
      <!-- 탭 메뉴 -->
      <div class="tabMenu">
        <button 
          class="tab" 
          :class="{ active: activeTab === 'tokens' }"
          @click="switchTab('tokens')"
        >
          Tokens
        </button>
        <button 
          class="tab" 
          :class="{ active: activeTab === 'nfts' }"
          @click="switchTab('nfts')"
        >
          NFTs
        </button>
      </div>
      
      <!-- Tokens 탭 내용 -->
      <div v-if="activeTab === 'tokens'" class="itemList">
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
      <div v-if="activeTab === 'nfts'" class="nftList">
        <div 
          v-for="item in nftItems" 
          :key="item.id" 
          class="nftItem"
        >
          <div class="nftThumbnail">
            <div class="thumbnailPlaceholder" :style="{ backgroundImage: `url(${item.image})` }"></div>
          </div>
          <div class="nftInfo">
            <div class="nftId">{{ item.nftId }}</div>
            <div class="collectionName">{{ item.collectionName }}</div>
          </div>
          <div class="nftValue">
            <div class="ethAmount">
              <img :src="ethIco" alt="ETH" class="ethIcon" />
              <span>{{ item.ethAmount }}</span>
            </div>
            <div class="usdValue positive">
              <span class="arrowUp">↑</span>
              <span>$ {{ item.usdValue }}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    <!-- 푸터 -->
    <Footer />
    
    <!-- Buy 팝업 -->
    <div v-if="showBuyPopup" class="popupOverlay" @click="closeBuyPopup">
      <div class="popupContent" @click.stop>
        <div class="popupHeader">
          <h2 class="popupTitle">구매하기</h2>
          <button class="closeBtn" @click="closeBuyPopup">×</button>
        </div>
        <div class="popupBody">
          <p class="popupMessage">구매해주세요</p>
          <div class="popupActions">
            <button class="popupBtn cancelBtn" @click="closeBuyPopup">취소</button>
            <button class="popupBtn confirmBtn" @click="closeBuyPopup">확인</button>
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
          <p class="popupMessage">전송해주세요</p>
          <div class="popupActions">
            <button class="popupBtn cancelBtn" @click="closeSendPopup">취소</button>
            <button class="popupBtn confirmBtn" @click="closeSendPopup">확인</button>
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
          <p class="popupMessage">받아주세요</p>
          <div class="popupActions">
            <button class="popupBtn cancelBtn" @click="closeReceivePopup">취소</button>
            <button class="popupBtn confirmBtn" @click="closeReceivePopup">확인</button>
          </div>
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
  z-index: 1000;
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
  font-weight: 600;
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

