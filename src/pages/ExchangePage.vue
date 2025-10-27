<script setup>
import { ref, onMounted } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCurrentUser } from '@/utils/userUtils'

const coinCount = ref(0)
const activeTab = ref('buy')
const purchasePrice = ref('0000')
const coinAmount = ref('1억')
const avgPrice = ref('1,000')
const instantPrice = ref('2,000')
const deposit = ref('2,000')
const purchasedCoin = ref('1,000')
const remainingToday = ref('0')

onMounted(() => {
  const currentUser = getCurrentUser()
  if (currentUser) {
    coinCount.value = currentUser.gameData?.coins || 0
  }
})
</script>

<template>
  <div class="exchangePage">
    <!-- 헤더 -->
    <Header :coinCount="coinCount" />
    
    <!-- 메인 콘텐츠 -->
    <main class="mainContent">
      <!-- 탭 -->
      <div class="tabs">
        <button 
          class="tab" 
          :class="{ active: activeTab === 'buy' }"
          @click="activeTab = 'buy'"
        >
          Coin 구입
        </button>
        <button 
          class="tab" 
          :class="{ active: activeTab === 'sell' }"
          @click="activeTab = 'sell'"
        >
          Coin 판매
        </button>
      </div>
      
      <!-- 정보 패널 -->
      <div class="panel">
        <div class="panelRow">
          <span>구매 희망가격</span>
          <div class="inputBox">
            <span>{{ purchasePrice }}</span>
            <span>Point</span>
          </div>
        </div>
        <div class="panelRow">
          <span>코인 구매량</span>
          <span>{{ coinAmount }} Coin</span>
        </div>
      </div>
      
      <div class="panel">
        <div class="panelRow">
          <span>평균거래가</span>
          <span>1억 Coin : {{ avgPrice }} p</span>
        </div>
        <div class="panelRow">
          <span>즉시거래가</span>
          <span>1억 Coin : {{ instantPrice }} p</span>
        </div>
      </div>
      
      <div class="panel">
        <div class="panelTitle">예상 거래 결과</div>
        <div class="panelRow">
          <span>예치금</span>
          <div class="valueBox">
            <span>{{ deposit }}</span>
            <span>Point</span>
          </div>
        </div>
        <div class="panelRow">
          <span>구입 Coin</span>
          <div class="valueBox">
            <span>{{ purchasedCoin }}</span>
            <span>Coin</span>
          </div>
        </div>
        <div class="panelRow">
          <span>오늘 남은 등록 횟수</span>
          <div class="valueBox">
            <span>{{ remainingToday }}</span>
            <span>회</span>
          </div>
        </div>
      </div>
      
      <!-- 거래 신청 버튼 -->
      <button class="submitBtn">거래 신청</button>
    </main>
    
    <!-- 푸터 -->
    <Footer />
  </div>
</template>

<style scoped>
.exchangePage {
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
  max-width: 500px;
  margin: 0 auto;
  min-height: calc(100vh - 130px);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

/* 탭 */
.tabs {
  display: flex;
  gap: 0;
  margin-bottom: 0.5rem;
}

.tab {
  flex: 1;
  padding: 1rem;
  border: none;
  background: #1E293B;
  color: white;
  font-weight: 500;
  cursor: pointer;
  border-radius: 12px 12px 0 0;
  transition: all 0.3s;
}

.tab.active {
  background: white;
  color: #1E293B;
}

/* 패널 */
.panel {
  background: #C3CFE2;
  border-radius: 12px;
  padding: 1.2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.panelRow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
  color: #1E293B;
  font-weight: 500;
}

.panelTitle {
  text-align: center;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #1E293B;
}

.inputBox, .valueBox {
  background: #1E293B;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-weight: 600;
}

.submitBtn {
  width: 100%;
  padding: 1.2rem;
  background: #FF6B6B;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.submitBtn:hover {
  background: #FF5252;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.4);
}
</style>
