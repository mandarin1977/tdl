<script setup>
import { ref, onMounted } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCurrentUser, updateUserPointsAndCoins } from '@/utils/userUtils'

const coinCount = ref(0)
const totalCoin = ref(0)

// 상점 아이템 목록
const energyItems = ref([
  {
    id: 1,
    name: '에너지 100',
    description: '에너지를 100 회복합니다',
    price: 100,
    currency: 'point', // point 또는 coin
    amount: 100
  },
  {
    id: 2,
    name: '에너지 500',
    description: '에너지를 500 회복합니다',
    price: 450,
    currency: 'point',
    amount: 500
  },
  {
    id: 3,
    name: '에너지 1000',
    description: '에너지를 1000 회복합니다',
    price: 800,
    currency: 'point',
    amount: 1000
  },
  {
    id: 4,
    name: '에너지 2000',
    description: '에너지를 2000 회복합니다',
    price: 1500,
    currency: 'point',
    amount: 2000
  }
])

// 사용자 데이터 로드
const loadUserData = () => {
  const user = getCurrentUser()
  if (user) {
    coinCount.value = user.gameData?.coins || 0
    totalCoin.value = user.gameData?.totalCoin || 0
  }
}

// 구매 함수
const purchaseItem = (item) => {
  const user = getCurrentUser()
  if (!user) {
    alert('로그인이 필요합니다.')
    return
  }

  // 포인트 또는 코인 확인
  if (item.currency === 'point' && coinCount.value < item.price) {
    alert('포인트가 부족합니다.')
    return
  }

  if (item.currency === 'coin' && totalCoin.value < item.price) {
    alert('코인이 부족합니다.')
    return
  }

  // 구매 처리
  if (item.currency === 'point') {
    const newPoints = coinCount.value - item.price
    updateUserPointsAndCoins(user.email, newPoints, totalCoin.value)
  } else {
    const newCoins = totalCoin.value - item.price
    updateUserPointsAndCoins(user.email, coinCount.value, newCoins)
  }

  // 에너지 구매 처리
  // 에너지는 하루에 최대 4000개까지 사용 가능합니다.
  const maxEnergy = 4000
  const currentEnergy = parseInt(localStorage.getItem('currentEnergy') || maxEnergy.toString())
  const newEnergy = Math.min(currentEnergy + item.amount, maxEnergy)
  localStorage.setItem('currentEnergy', newEnergy.toString())
  localStorage.setItem('energyLastDate', new Date().toDateString())
  alert(`${item.name} 구매 완료! 에너지가 ${item.amount} 회복되었습니다. (현재: ${newEnergy}/${maxEnergy})`)

  // 데이터 새로고침
  loadUserData()
  window.dispatchEvent(new Event('userDataUpdated'))
}

onMounted(() => {
  loadUserData()
})
</script>

<template>
  <div class="shopPage">
    <!-- 헤더 -->
    <Header :coinCount="coinCount" />
    
    <!-- 메인 콘텐츠 -->
    <main class="mainContent">
      <!-- 에너지 아이템 리스트 -->
      <div class="itemList">
        <div 
          v-for="item in energyItems" 
          :key="item.id"
          class="shopItem"
        >
          <div class="itemInfo">
            <h3 class="itemName">{{ item.name }}</h3>
            <p class="itemDescription">{{ item.description }}</p>
          </div>
          <div class="itemPrice">
            <span class="priceValue">{{ item.price.toLocaleString() }}</span>
            <span class="priceCurrency">
              <img v-if="item.currency === 'point'" src="@/assets/img/point_ico.png" alt="P" class="currencyIcon" />
              <img v-else src="@/assets/img/coin_ico.png" alt="C" class="currencyIcon" />
            </span>
          </div>
          <button 
            class="buyBtn"
            :disabled="(item.currency === 'point' && coinCount < item.price) || (item.currency === 'coin' && totalCoin < item.price)"
            @click="purchaseItem(item)"
          >
            구매
          </button>
        </div>
      </div>
    </main>
    
    <!-- 푸터 -->
    <Footer />
  </div>
</template>

<style scoped>
.shopPage {
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
}

/* 아이템 리스트 */
.itemList {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* 상점 아이템 */
.shopItem {
  background: rgba(33, 36, 54, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

.itemInfo {
  flex: 1;
}

.itemName {
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 0.5rem 0;
}

.itemDescription {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.itemPrice {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-right: 1rem;
}

.priceValue {
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
}

.currencyIcon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.buyBtn {
  padding: 0.8rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  white-space: nowrap;
}

.buyBtn:hover:not(:disabled) {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

.buyBtn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 480px) {
  .shopItem {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .itemPrice {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
  
  .buyBtn {
    width: 100%;
  }
}
</style>

