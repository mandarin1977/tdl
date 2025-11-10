<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCurrentUser, updateUserPointsAndCoins } from '@/utils/userUtils'

const currentUser = ref(null)
const coinCount = ref(0) // 포인트 (P)
const totalCoin = ref(0) // 코인 (C)
const activeTab = ref('buy')

// 입력값
const coinAmount = ref('') // 코인 수량

// 고정 가격
const fixedPrice = 1000 // 1 Coin = 1000 Point

// 계산된 값
const totalCost = computed(() => {
  if (!coinAmount.value) return 0
  const amount = parseFloat(coinAmount.value) || 0
  return Math.floor(amount * fixedPrice) // 1 Coin = 1000 Point
})

// 사용자 데이터 로드
const loadUserData = () => {
  const user = getCurrentUser()
  if (user) {
    currentUser.value = user
    coinCount.value = user.gameData?.coins || 0
    totalCoin.value = user.gameData?.totalCoin || 0
  }
}

// 거래 실행
const executeTrade = () => {
  if (!currentUser.value) {
    alert('로그인이 필요합니다.')
    return
  }

  if (!coinAmount.value || parseFloat(coinAmount.value) <= 0) {
    alert('코인 수량을 입력해주세요.')
    return
  }

  const amount = parseFloat(coinAmount.value)
  const coinValue = amount // 1 = 1 Coin

  if (activeTab.value === 'buy') {
    // Coin 구매: Point로 Coin 구매
    const pointsNeeded = totalCost.value

    if (coinCount.value < pointsNeeded) {
      alert(`포인트가 부족합니다.\n필요: ${pointsNeeded.toLocaleString()} Point\n보유: ${coinCount.value.toLocaleString()} Point`)
      return
    }

    const newPoints = coinCount.value - pointsNeeded
    const newCoins = totalCoin.value + coinValue

    if (updateUserPointsAndCoins(currentUser.value.id, newPoints, newCoins)) {
      coinCount.value = newPoints
      totalCoin.value = newCoins
      loadUserData()
      window.dispatchEvent(new CustomEvent('userDataUpdated'))
      
      alert(`구매 완료!\n${amount} Coin 구매\n사용한 Point: ${pointsNeeded.toLocaleString()}`)
      coinAmount.value = ''
    } else {
      alert('거래 실패. 다시 시도해주세요.')
    }
  } else {
    // Coin 판매: Coin을 Point로 판매
    if (totalCoin.value < coinValue) {
      alert(`코인이 부족합니다.\n필요: ${amount} Coin\n보유: ${totalCoin.value.toLocaleString()} Coin`)
      return
    }

    const pointsToReceive = totalCost.value
    const newPoints = coinCount.value + pointsToReceive
    const newCoins = totalCoin.value - coinValue

    if (updateUserPointsAndCoins(currentUser.value.id, newPoints, newCoins)) {
      coinCount.value = newPoints
      totalCoin.value = newCoins
      loadUserData()
      window.dispatchEvent(new CustomEvent('userDataUpdated'))
      
      alert(`판매 완료!\n${amount} Coin 판매\n받은 Point: ${pointsToReceive.toLocaleString()}`)
      coinAmount.value = ''
    } else {
      alert('거래 실패. 다시 시도해주세요.')
    }
  }
}

// 탭 변경 시 입력값 초기화
watch(activeTab, () => {
  coinAmount.value = ''
})

onMounted(() => {
  loadUserData()
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
          Coin 구매
        </button>
        <button 
          class="tab" 
          :class="{ active: activeTab === 'sell' }"
          @click="activeTab = 'sell'"
        >
          Coin 판매
        </button>
      </div>
      
      <!-- 거래 정보 -->
      <div class="infoCard">
        <div class="infoRow">
          <span>보유 포인트</span>
          <span class="value">{{ coinCount.toLocaleString() }} P</span>
        </div>
        <div class="infoRow">
          <span>보유 코인</span>
          <span class="value">{{ totalCoin.toLocaleString() }} C</span>
        </div>
        <div class="infoRow">
          <span>거래가</span>
          <span class="value">1 Coin = {{ fixedPrice.toLocaleString() }} Point</span>
        </div>
      </div>
      
      <!-- 입력 섹션 -->
      <div class="inputCard">
        <label class="inputLabel">
          {{ activeTab === 'buy' ? '구매할 코인 수량' : '판매할 코인 수량' }}
        </label>
        <div class="inputWrapper">
          <input 
            type="number" 
            v-model="coinAmount"
            placeholder="예: 1"
            class="amountInput"
            step="0.01"
            min="0"
          />
          <span class="unit">Coin</span>
        </div>
        
        <div v-if="coinAmount && parseFloat(coinAmount) > 0" class="resultInfo">
          <div class="resultRow">
            <span>{{ activeTab === 'buy' ? '필요 포인트' : '받을 포인트' }}</span>
            <span class="resultValue">{{ totalCost.toLocaleString() }} P</span>
          </div>
        </div>
      </div>
      
      <!-- 거래 버튼 -->
      <button 
        class="submitBtn" 
        @click="executeTrade"
        :disabled="!coinAmount || parseFloat(coinAmount) <= 0"
      >
        {{ activeTab === 'buy' ? '구매하기' : '판매하기' }}
      </button>
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
  gap: 1.5rem;
}

/* 탭 */
.tabs {
  display: flex;
  gap: 0.5rem;
  background: rgba(15, 23, 42, 0.7);
  border-radius: 12px;
  padding: 4px;
}

.tab {
  flex: 1;
  padding: 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.6);
  background: transparent;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s;
}

.tab.active {
  background: rgba(125, 211, 252, 0.2);
  color: #7DD3FC;
}

/* 정보 카드 */
.infoCard {
  background: rgba(15, 23, 42, 0.7);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.infoRow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 0.9rem;
  line-height: 1.5;
}

.infoRow .value {
  font-weight: 600;
  color: #7DD3FC;
}

/* 입력 카드 */
.inputCard {
  background: rgba(15, 23, 42, 0.7);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.inputLabel {
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.inputWrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(15, 23, 42, 0.8);
  border: 2px solid rgba(125, 211, 252, 0.3);
  border-radius: 12px;
  padding: 1rem;
}

.amountInput {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
}

.amountInput::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.unit {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  white-space: nowrap;
}

.resultInfo {
  margin-top: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.resultRow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 0.9rem;
}

.resultValue {
  font-weight: 700;
  font-size: 1.1rem;
  color: #7DD3FC;
}

/* 거래 버튼 */
.submitBtn {
  width: 100%;
  padding: 1.2rem;
  background: linear-gradient(135deg, #7DD3FC 0%, #0EA5E9 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(125, 211, 252, 0.3);
}

.submitBtn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(125, 211, 252, 0.4);
  background: linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%);
}

.submitBtn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* 모바일 반응형 */
@media (max-width: 480px) {
  .mainContent {
    padding: 1.2rem;
    gap: 1.2rem;
  }
  
  .infoCard,
  .inputCard {
    padding: 1.2rem;
  }
  
  .tab {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
  
  .infoRow {
    font-size: 0.85rem;
  }
  
  .inputLabel {
    font-size: 0.85rem;
  }
  
  .amountInput {
    font-size: 1rem;
  }
  
  .unit {
    font-size: 0.85rem;
  }
  
  .resultRow {
    font-size: 0.85rem;
  }
  
  .resultValue {
    font-size: 1rem;
  }
  
  .submitBtn {
    font-size: 0.95rem;
    padding: 1rem;
  }
}
</style>
