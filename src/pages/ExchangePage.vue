<script setup>
import { ref, onMounted, computed, watch, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCurrentUser, getI18nTexts } from '@/utils/userUtils'
import { useAppStore } from '@/store/appStore'
import factoryBtnOff from '@/assets/img/factoryBtn_off.png'
import factoryBtnOn from '@/assets/img/factoryBtn_on.png'

// 라우터 사용
const router = useRouter()

// appStore 사용
const store = useAppStore()

// 다국어 텍스트
const texts = computed(() => getI18nTexts())

// 탭 상태
const activeTab = ref('exchange') // 기본값: Exchange

// appStore에서 게임 데이터 가져오기 (반응형)
const coinCount = computed(() => store.state.coins) // 포인트 (P)
const totalCoin = computed(() => store.state.totalCoin) // 코인 (C)

const currentUser = ref(null)

// 입력값
const buyPointAmount = ref('') // 구매할 포인트 수량
const sellCoinAmount = ref('') // 판매 코인 수량

// 고정 가격
const fixedPrice = 1000 // 1 Coin = 1000 Point

// 계산된 값 (구매 - 포인트 입력 시 코인 계산)
const buyCoinAmount = computed(() => {
  if (!buyPointAmount.value) return 0
  const points = parseFloat(buyPointAmount.value) || 0
  return Math.floor(points / fixedPrice) // 포인트를 코인으로 변환
})

// 계산된 값 (판매)
const sellTotalCost = computed(() => {
  if (!sellCoinAmount.value) return 0
  const amount = parseFloat(sellCoinAmount.value) || 0
  return Math.floor(amount * fixedPrice) // 1 Coin = 1000 Point
})

// 사용자 데이터 로드
const loadUserData = () => {
  const user = getCurrentUser()
  if (user) {
    currentUser.value = user
  }
  // appStore에서 사용자 데이터 로드
  store.loadCurrentUser()
}

// 구매 거래 실행
const executeBuy = async () => {
  if (!currentUser.value) {
    alert(texts.value.loginRequired)
    return
  }

  if (!buyPointAmount.value || parseFloat(buyPointAmount.value) <= 0) {
    alert('Please enter the point amount.')
    return
  }

  const pointsToSpend = parseFloat(buyPointAmount.value)
  const coinsToReceive = buyCoinAmount.value

  if (coinCount.value < pointsToSpend) {
    alert(`${texts.value.insufficientPoints}\nRequired: ${pointsToSpend.toLocaleString()} Point\nOwned: ${coinCount.value.toLocaleString()} Point`)
    return
  }

  if (coinsToReceive <= 0) {
    alert('Not enough points to buy at least 1 coin.')
    return
  }

  const newPoints = coinCount.value - pointsToSpend
  const newCoins = totalCoin.value + coinsToReceive

  // appStore를 통해 업데이트 (데이터 일관성 보장)
  const success = await store.updateMultiple({
    coins: newPoints,
    totalCoin: newCoins
  })

  if (success) {
    alert(`${texts.value.purchaseSuccess}\n${coinsToReceive} ${texts.value.coin} ${texts.value.buy}\n${texts.value.pointUsed}: ${pointsToSpend.toLocaleString()}`)
    buyPointAmount.value = ''
  } else {
    alert(texts.value.tradeFailed)
  }
}

// 판매 거래 실행
const executeSell = async () => {
  if (!currentUser.value) {
    alert(texts.value.loginRequired)
    return
  }

  if (!sellCoinAmount.value || parseFloat(sellCoinAmount.value) <= 0) {
    alert('Please enter the coin amount.')
    return
  }

  const amount = parseFloat(sellCoinAmount.value)
  const coinValue = amount // 1 = 1 Coin

  if (totalCoin.value < coinValue) {
    alert(`${texts.value.insufficientCoins}\nRequired: ${amount} ${texts.value.coin}\nOwned: ${totalCoin.value.toLocaleString()} ${texts.value.coin}`)
    return
  }

  const pointsToReceive = sellTotalCost.value
  const newPoints = coinCount.value + pointsToReceive
  const newCoins = totalCoin.value - coinValue

  // appStore를 통해 업데이트 (데이터 일관성 보장)
  const success = await store.updateMultiple({
    coins: newPoints,
    totalCoin: newCoins
  })

  if (success) {
    alert(`${texts.value.tradeSuccess}\n${amount} ${texts.value.coin} ${texts.value.sell}\n${texts.value.pointReceived}: ${pointsToReceive.toLocaleString()}`)
    sellCoinAmount.value = ''
  } else {
    alert(texts.value.tradeFailed)
  }
}

onMounted(() => {
  loadUserData()
  
  // appStore 데이터 변경 감지하여 동기화
  const handleUserDataUpdate = () => {
    store.loadCurrentUser()
  }
  window.addEventListener('userDataUpdated', handleUserDataUpdate)
  
  // 컴포넌트 언마운트 시 이벤트 리스너 제거
  onUnmounted(() => {
    window.removeEventListener('userDataUpdated', handleUserDataUpdate)
  })
})

// 탭 버튼 클릭 핸들러
const handleTabClick = (tab) => {
  if (tab === 'exchange') {
    // ExchangePage에 머물기 (현재 페이지)
    activeTab.value = 'exchange'
  } else if (tab === 'catcraft') {
    router.push('/factory')
  }
}
</script>

<template>
  <div class="exchangePage">
    <!-- 헤더 -->
    <Header :coinCount="coinCount" :hideRightIcons="true" />
    
    <!-- 메인 콘텐츠 -->
    <main class="mainContent">
      <div class="contentWrapper">
        <!-- 탭 버튼 -->
        <div class="tabButtons">
          <button class="tabButton" :class="{ active: activeTab === 'exchange' }" @click="handleTabClick('exchange')">
            Exchange
          </button>
          <button class="tabButton" :class="{ active: activeTab === 'catcraft' }" @click="handleTabClick('catcraft')">
            Cat craft
          </button>
        </div>
        
        <!-- 구매 섹션 -->
        <div class="tradeSection">
          <h3 class="sectionTitle">{{ texts.buy }} {{ texts.coin }}</h3>
          
          <!-- 포인트 ↔ 코인 교환 표시 -->
          <div class="exchangeDisplay">
            <!-- 포인트 입력 -->
            <div class="exchangeItem">
              <img src="@/assets/img/pointIcon.png" alt="Point" class="exchangeIcon">
              <input 
                type="number" 
                v-model="buyPointAmount"
                placeholder="0"
                class="exchangeInput"
                step="1"
                min="0"
              />
            </div>
            
            <!-- 양방향 화살표 -->
            <img src="@/assets/img/sellArrow.png" alt="Arrow" class="exchangeArrow">
            
            <!-- 코인 표시 (계산된 값) -->
            <div class="exchangeItem">
              <img src="@/assets/img/coinIcon.png" alt="Coin" class="exchangeIcon">
              <div class="exchangeValue">{{ buyCoinAmount }}</div>
            </div>
          </div>
          
          <!-- 구매 버튼 -->
          <button 
            class="submitBtn" 
            @click="executeBuy"
            :disabled="!buyPointAmount || parseFloat(buyPointAmount) <= 0 || buyCoinAmount <= 0"
          >
            {{ texts.buyButton }}
          </button>
        </div>
        
        <!-- 판매 섹션 -->
        <div class="tradeSection">
          <h3 class="sectionTitle">{{ texts.sell }} {{ texts.coin }}</h3>
          
          <!-- 코인 ↔ 포인트 교환 표시 -->
          <div class="exchangeDisplay">
            <!-- 코인 입력 -->
            <div class="exchangeItem">
              <img src="@/assets/img/coinIcon.png" alt="Coin" class="exchangeIcon">
              <input 
                type="number" 
                v-model="sellCoinAmount"
                placeholder="0"
                class="exchangeInput"
                step="0.01"
                min="0"
              />
            </div>
            
            <!-- 양방향 화살표 -->
            <img src="@/assets/img/sellArrow.png" alt="Arrow" class="exchangeArrow">
            
            <!-- 포인트 표시 (계산된 값) -->
            <div class="exchangeItem">
              <img src="@/assets/img/pointIcon.png" alt="Point" class="exchangeIcon">
              <div class="exchangeValue">{{ sellTotalCost }}</div>
            </div>
          </div>
          
          <!-- 판매 버튼 -->
          <button 
            class="submitBtn sellBtn" 
            @click="executeSell"
            :disabled="!sellCoinAmount || parseFloat(sellCoinAmount) <= 0 || sellTotalCost <= 0"
          >
            {{ texts.sellButton }}
          </button>
        </div>
      </div>
    </main>
    
    <!-- 푸터 -->
    <Footer />
  </div>
</template>

<style scoped>
.exchangePage {
  width: 100%;
  min-height: 100vh;
  background-image: url('@/assets/img/mainBackground01.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.mainContent {
  max-width: 500px;
  margin: 0 auto;
  min-height: calc(100vh - 130px);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
}

.contentWrapper {
  padding: 2rem;
  background-image: url('@/assets/img/factoryAllbg.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.tabButtons {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: center;
}

.tabButton {
  padding: 0;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  width: 120px;
  height: 50px;
  background-image: url('@/assets/img/factoryBtn_off.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1em;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.tabButton.active {
  background-image: url('@/assets/img/factoryBtn_on.png');
}

/* 거래 섹션 */
.tradeSection {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sectionTitle {
  color: white;
  font-size: 1em;
  font-weight: 600;
  margin: 0;
  padding: 0.5rem 0;
}

/* 교환 표시 */
.exchangeDisplay {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(15, 23, 42, 0.7);
  border-radius: 16px;
}

.exchangeItem {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.exchangeIcon {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.exchangeInput {
  width: 80px;
  padding: 0.8rem;
  background-image: url('@/assets/img/numberBox.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1em;
  font-weight: 600;
  text-align: center;
  background-color:transparent;
}

.exchangeInput::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.exchangeValue {
  width: 80px;
  padding: 0.8rem;
  background-image: url('@/assets/img/numberBox.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1em;
  font-weight: 600;
  text-align: center;
}

.exchangeArrow {
  width: auto;
  height: 40px;
  object-fit: contain;
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
  font-size: 1em;
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
  font-size: 1em;
  font-weight: 600;
}

.amountInput::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.unit {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1em;
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
  font-size: 1em;
}

.resultValue {
  font-weight: 700;
  font-size: 1em;
  color: #7DD3FC;
}

/* 거래 버튼 */
.submitBtn {
  width: 100%;
  padding: 1.2rem;
  background-image: url('@/assets/img/sellBtn.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.submitBtn:hover:not(:disabled) {
  transform: translateY(-2px);
}

.submitBtn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* 모바일 반응형 */
@media (max-width: 480px) {
  .mainContent {
    padding: 0;
    gap: 1.2rem;
  }
  
  .inputCard {
    padding: 1.2rem;
  }
  
  .sectionTitle {
    font-size: 1em;
  }
  
  .inputLabel {
    font-size: 1em;
  }
  
  .amountInput {
    font-size: 1em;
  }
  
  .unit {
    font-size: 1em;
  }
  
  .resultRow {
    font-size: 1em;
  }
  
  .resultValue {
    font-size: 1em;
  }
  
  .submitBtn {
    font-size: 1em;
    padding: 1rem;
  }
}
</style>
