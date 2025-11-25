<script setup>
import { ref, onMounted, computed, onUnmounted } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCurrentUser } from '@/utils/userUtils'
import { useAppStore } from '@/store/appStore'

// appStore 사용
const store = useAppStore()

// appStore에서 게임 데이터 가져오기 (반응형)
const coinCount = computed(() => store.state.coins) // 포인트 (P)
const totalCoin = computed(() => store.state.totalCoin) // 코인 (C)

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
  // appStore에서 사용자 데이터 로드
  store.loadCurrentUser()
}

// 구매 함수
const purchaseItem = async (item) => {
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

  // 구매 처리 (appStore를 통해 - 데이터 일관성 보장)
  let success = false
  if (item.currency === 'point') {
    const newPoints = coinCount.value - item.price
    success = await store.updateMultiple({
      coins: newPoints
    })
  } else {
    const newCoins = totalCoin.value - item.price
    success = await store.updateMultiple({
      totalCoin: newCoins
    })
  }

  if (!success) {
    alert('구매 실패. 다시 시도해주세요.')
    return
  }

  // 에너지 구매 처리
  // 에너지는 하루에 최대 4000개까지 사용 가능합니다.
  const maxEnergy = 4000
  const currentEnergy = parseInt(localStorage.getItem('currentEnergy') || maxEnergy.toString())
  const newEnergy = Math.min(currentEnergy + item.amount, maxEnergy)
  localStorage.setItem('currentEnergy', newEnergy.toString())
  localStorage.setItem('energyLastDate', new Date().toDateString())
  alert(`${item.name} 구매 완료! 에너지가 ${item.amount} 회복되었습니다. (현재: ${newEnergy}/${maxEnergy})`)
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
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #fff;
  margin: 0 0 0.5rem 0;
}

.itemDescription {
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 0.01em;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  line-height: 1.4;
}

.itemPrice {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-right: 1rem;
}

.priceValue {
  font-size: 1.1rem;
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
  font-size: 0.95rem;
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
  .mainContent {
    padding: 1.2rem;
  }
  
  .shopItem {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }
  
  .itemName {
    font-size: 0.95rem;
  }
  
  .itemDescription {
    font-size: 0.8rem;
  }
  
  .itemPrice {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
  
  .priceValue {
    font-size: 1rem;
  }
  
  .buyBtn {
    width: 100%;
    font-size: 0.9rem;
    padding: 0.75rem 1.2rem;
  }
}
</style>

