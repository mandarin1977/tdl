<script setup>
import { ref } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCurrentUser } from '@/utils/userUtils'

const coinCount = ref(0)
const activeTab = ref('tokens')
const walletBalance = ref('$ 5,323.00')
const btcAmount = ref('0.00335')
const btcChange = ref('+6.54%')

// 현재 사용자 정보 로드
const currentUser = getCurrentUser()
if (currentUser) {
  coinCount.value = currentUser.gameData?.coins || 0
}

// 탭 전환
const switchTab = (tab) => {
  activeTab.value = tab
}

// Token 아이템 목록 (예시 데이터)
const tokenItems = ref([
  { id: 1, name: 'Bitcoin', symbol: 'BTC', price: '36,590.00', change: '+6.21%', isPositive: true },
  { id: 2, name: 'Ethereum', symbol: 'ETH', price: '2,590.00', change: '+5.21%', isPositive: true }
])

// NFT 아이템 목록 (예시 데이터)
const nftItems = ref([
  { id: 1, nftId: '#1957', collectionName: 'Bored Ape Yacht Club', ethAmount: '64', usdValue: '23,114.57', image: '' },
  { id: 2, nftId: '#6513', collectionName: 'Bored Ape Yacht Club', ethAmount: '199.8', usdValue: '45,114.57', image: '' }
])
</script>

<template>
  <div class="nftPage">
    <!-- 헤더 -->
    <Header :coinCount="coinCount" />
    
    <!-- 메인 콘텐츠 -->
    <main class="mainContent">
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
        <button class="actionBtn sendBtn">
          <div class="btnIcon">$→</div>
          <span class="btnLabel">Send</span>
        </button>
        <button class="actionBtn buyBtn">
          <div class="btnIcon">+</div>
          <span class="btnLabel">Buy</span>
        </button>
        <button class="actionBtn receiveBtn">
          <div class="btnIcon">$←</div>
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
            <div class="iconCircle"></div>
          </div>
          <div class="itemInfo">
            <div class="itemSymbol">{{ item.symbol }}</div>
            <div class="itemName">{{ item.name }}</div>
          </div>
          <div class="itemChart">
            <div class="chartLine"></div>
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
            <div class="thumbnailPlaceholder"></div>
          </div>
          <div class="nftInfo">
            <div class="nftId">{{ item.nftId }}</div>
            <div class="collectionName">{{ item.collectionName }}</div>
          </div>
          <div class="nftValue">
            <div class="ethAmount">
              <span class="diamondIcon">💎</span>
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
  </div>
</template>

<style scoped>
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
}

.walletBalance {
  font-size: 2.5em;
  color: #fff;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.btcInfo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.change.positive {
  color: green;
}

/* 액션 버튼 */
.actionButtons {
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
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
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sendBtn .btnIcon {
  background: gray;
}

.buyBtn .btnIcon {
  background: linear-gradient(135deg, blue, purple);
}

.receiveBtn .btnIcon {
  background: gray;
}

/* 탭 메뉴 */
.tabMenu {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.tab {
  flex: 1;
  padding: 0.8rem;
  border-radius: 12px;
  border: none;
  cursor: pointer;
}

.tab.active {
  background: darkgray;
}

/* 아이템 목록 */
.itemList {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}

.itemIcon {
  width: 50px;
  height: 50px;
}

.iconCircle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: orange;
}

.itemInfo {
  flex: 1;
}

.itemSymbol {
  font-size: 1.2rem;
  font-weight: bold;
}

.itemName {
  font-size: 0.9rem;
  opacity: 0.7;
}

.itemChart {
  width: 60px;
  height: 30px;
}

.chartLine {
  width: 100%;
  height: 100%;
  border: 1px solid green;
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
  background: rgba(255, 255, 255, 0.1);
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

.diamondIcon {
  font-size: 1rem;
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
</style>

