<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCurrentUser, updateUserPointsAndCoins } from '@/utils/userUtils'

const currentUser = ref(null)
const coinCount = ref(0) // 포인트 (P)
const totalCoin = ref(0) // 코인 (C)
const activeTab = ref('buy')

// 입력값 (구매/판매)
const purchasePrice = ref('') // 구매 희망가격 (Point)
const sellPrice = ref('') // 판매 희망가격 (Coin)
const coinAmount = ref('') // 코인 수량 (1억 = 100000000)

// 거래가 정보 (고정값, 나중에 API에서 가져올 수 있음)
const avgPrice = ref(1000) // 평균거래가: 1억 Coin = 1000 Point
const instantPrice = ref(2000) // 즉시거래가: 1억 Coin = 2000 Point

// 계산된 값들
const deposit = computed(() => {
  if (activeTab.value === 'buy' && purchasePrice.value && coinAmount.value) {
    const amount = parseCoinAmount(coinAmount.value)
    const pricePer100M = parseInt(purchasePrice.value) || avgPrice.value
    return Math.floor((amount / 100000000) * pricePer100M).toLocaleString()
  } else if (activeTab.value === 'sell' && sellPrice.value && coinAmount.value) {
    const amount = parseCoinAmount(coinAmount.value)
    const pricePer100M = parseInt(sellPrice.value) || avgPrice.value
    return Math.floor((amount / 100000000) * pricePer100M).toLocaleString()
  }
  return '0'
})

const purchasedCoin = computed(() => {
  if (!coinAmount.value) return '0'
  return formatCoinAmount(parseCoinAmount(coinAmount.value))
})

// 코인 수량 문자열을 숫자로 변환 (1억 = 100000000)
const parseCoinAmount = (str) => {
  if (!str) return 0
  const strLower = str.toLowerCase().trim()
  
  if (strLower.includes('억')) {
    const num = parseFloat(strLower.replace('억', '').trim()) || 1
    return Math.floor(num * 100000000)
  } else if (strLower.includes('만')) {
    const num = parseFloat(strLower.replace('만', '').trim()) || 1
    return Math.floor(num * 10000)
  } else {
    return parseInt(str.replace(/,/g, '')) || 0
  }
}

// 숫자를 코인 표시 형식으로 변환
const formatCoinAmount = (num) => {
  if (num >= 100000000) {
    const 억 = Math.floor(num / 100000000)
    const 만 = Math.floor((num % 100000000) / 10000)
    if (만 > 0) {
      return `${억}억 ${만}만`
    }
    return `${억}억`
  } else if (num >= 10000) {
    return `${Math.floor(num / 10000)}만`
  }
  return num.toLocaleString()
}

// 남은 등록 횟수 (임시로 5회로 설정, 나중에 실제 로직 구현)
const remainingToday = ref(5)

// 사용자 데이터 로드
const loadUserData = () => {
  const user = getCurrentUser()
  if (user) {
    currentUser.value = user
    coinCount.value = user.gameData?.coins || 0
    totalCoin.value = user.gameData?.totalCoin || 0
  }
}

// 거래 실행 함수
const executeTrade = () => {
  if (!currentUser.value) {
    alert('로그인이 필요합니다.')
    return
  }

  if (!coinAmount.value) {
    alert('코인 수량을 입력해주세요.')
    return
  }

  if (activeTab.value === 'buy') {
    // Coin 구매: Point를 사용하여 Coin 구매
    if (!purchasePrice.value) {
      alert('구매 희망가격을 입력해주세요.')
      return
    }

    const coinToBuy = parseCoinAmount(coinAmount.value)
    const pricePer100M = parseInt(purchasePrice.value) || instantPrice.value
    const pointsNeeded = Math.floor((coinToBuy / 100000000) * pricePer100M)

    if (coinCount.value < pointsNeeded) {
      alert(`포인트가 부족합니다. 필요: ${pointsNeeded.toLocaleString()} Point`)
      return
    }

    if (remainingToday.value <= 0) {
      alert('오늘 남은 등록 횟수가 없습니다.')
      return
    }

    // 거래 실행
    const newPoints = coinCount.value - pointsNeeded
    const newCoins = totalCoin.value + coinToBuy

    if (updateUserPointsAndCoins(currentUser.value.id, newPoints, newCoins)) {
      coinCount.value = newPoints
      totalCoin.value = newCoins
      
      // 사용자 데이터 다시 로드 (최신 정보 반영)
      loadUserData()
      
      // Header에 즉시 업데이트 알림 (커스텀 이벤트)
      window.dispatchEvent(new CustomEvent('userDataUpdated'))
      
      remainingToday.value--
      alert(`구매 완료!\n${formatCoinAmount(coinToBuy)} Coin 구매\n사용한 Point: ${pointsNeeded.toLocaleString()}`)
      
      // 입력 초기화
      purchasePrice.value = ''
      coinAmount.value = ''
    } else {
      alert('거래 실패. 다시 시도해주세요.')
    }
  } else {
    // Coin 판매: Coin을 판매하여 Point 획득
    if (!sellPrice.value) {
      alert('판매 희망가격을 입력해주세요.')
      return
    }

    const coinToSell = parseCoinAmount(coinAmount.value)
    const pricePer100M = parseInt(sellPrice.value) || avgPrice.value
    const pointsToReceive = Math.floor((coinToSell / 100000000) * pricePer100M)

    if (totalCoin.value < coinToSell) {
      alert(`코인이 부족합니다. 보유: ${formatCoinAmount(totalCoin.value)}, 필요: ${formatCoinAmount(coinToSell)}`)
      return
    }

    if (remainingToday.value <= 0) {
      alert('오늘 남은 등록 횟수가 없습니다.')
      return
    }

    // 거래 실행
    const newPoints = coinCount.value + pointsToReceive
    const newCoins = totalCoin.value - coinToSell

    if (updateUserPointsAndCoins(currentUser.value.id, newPoints, newCoins)) {
      coinCount.value = newPoints
      totalCoin.value = newCoins
      
      // 사용자 데이터 다시 로드 (최신 정보 반영)
      loadUserData()
      
      // Header에 즉시 업데이트 알림 (커스텀 이벤트)
      window.dispatchEvent(new CustomEvent('userDataUpdated'))
      
      remainingToday.value--
      alert(`판매 완료!\n${formatCoinAmount(coinToSell)} Coin 판매\n받은 Point: ${pointsToReceive.toLocaleString()}`)
      
      // 입력 초기화
      sellPrice.value = ''
      coinAmount.value = ''
    } else {
      alert('거래 실패. 다시 시도해주세요.')
    }
  }
}

// 탭 변경 시 입력값 초기화
watch(activeTab, () => {
  purchasePrice.value = ''
  sellPrice.value = ''
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
          <span>{{ activeTab === 'buy' ? '구매 희망가격' : '판매 희망가격' }}</span>
          <div class="inputBox">
            <input 
              v-if="activeTab === 'buy'"
              type="number" 
              v-model="purchasePrice"
              placeholder="Point"
              class="priceInput"
            />
            <input 
              v-if="activeTab === 'sell'"
              type="number" 
              v-model="sellPrice"
              placeholder="Point"
              class="priceInput"
            />
            <span>Point</span>
          </div>
        </div>
        <div class="panelRow">
          <span>{{ activeTab === 'buy' ? '코인 구매량' : '코인 판매량' }}</span>
          <div class="inputBox">
            <input 
              type="text" 
              v-model="coinAmount"
              placeholder="예: 1억, 5천만"
              class="coinInput"
            />
            <span>Coin</span>
          </div>
        </div>
      </div>
      
      <div class="panel">
        <div class="panelRow">
          <span>평균거래가</span>
          <span>{{ activeTab === 'buy' ? '1억 Coin : ' : '' }}{{ avgPrice }}{{ activeTab === 'buy' ? ' p' : ' Point : 1억 Coin' }}</span>
        </div>
        <div class="panelRow">
          <span>즉시거래가</span>
          <span>{{ activeTab === 'buy' ? '1억 Coin : ' : '' }}{{ instantPrice }}{{ activeTab === 'buy' ? ' p' : ' Point : 1억 Coin' }}</span>
        </div>
      </div>
      
      <div class="panel">
        <div class="panelTitle">예상 거래 결과</div>
        <div class="panelRow">
          <span>{{ activeTab === 'buy' ? '예치금' : '받을 Point' }}</span>
          <div class="valueBox">
            <span>{{ deposit }}</span>
            <span>{{ activeTab === 'buy' ? 'Point' : 'Point' }}</span>
          </div>
        </div>
        <div class="panelRow">
          <span>{{ activeTab === 'buy' ? '구입 Coin' : '판매 Coin' }}</span>
          <div class="valueBox">
            <span>{{ purchasedCoin }}</span>
            <span>{{ activeTab === 'buy' ? 'Coin' : 'Coin' }}</span>
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
      <button class="submitBtn" @click="executeTrade">{{ activeTab === 'buy' ? '거래 신청' : '판매 신청' }}</button>
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
  justify-content: space-between;
}

/* 탭 */
.tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
  background: #212436;
  border-radius: 5vw;
  padding: 4px;
}

.tab {
  flex: 1;
  padding: 0.8rem;
  border-radius: 5vw;
  border: none;
  cursor: pointer;
  color: #7C7D82;
  background: transparent;
  font-weight: 500;
  transition: all 0.3s;
}

.tab.active {
  background: #3B3F58;
  color: #fff;
}

/* 패널 */
.panel {
  background: rgba(33, 36, 54, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.panelRow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
  color: #E9E9E9;
  font-weight: 500;
}

.panelRow:not(:last-child) {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.panelTitle {
  text-align: center;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #fff;
}

.inputBox, .valueBox {
  background: rgba(59, 63, 88, 0.8);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.1);
  min-width: 120px;
  justify-content: flex-end;
}

.priceInput, .coinInput {
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-weight: 600;
  text-align: right;
  flex: 1;
  min-width: 0;
  font-size: inherit;
}

.priceInput::placeholder, .coinInput::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.submitBtn {
  width: 100%;
  padding: 1.2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  margin-top: auto;
}

.submitBtn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}
</style>
