<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getI18nTexts, getCurrentUser } from '@/utils/userUtils'
import noticeIcon from '@/assets/img/notice.png'
import settingIcon from '@/assets/img/setting.png'

const language = ref(localStorage.getItem('appLanguage') || '한국어')
const texts = computed(() => getI18nTexts())

const router = useRouter()

// 사용자 데이터
const coinCount = ref(0) // 포인트 (P)
const totalCoin = ref(0) // 코인 (C)
const catFragments = ref(50) // 고양이 파편
const currentEnergy = ref(4000)
const maxEnergy = ref(4000)

// 에너지 체크 및 리셋 함수
// 에너지는 하루에 최대 4000개까지 사용 가능하며, 하루가 지나면 4000개로 회복됩니다.
const checkAndResetEnergy = () => {
  const today = new Date().toDateString()
  const lastEnergyDate = localStorage.getItem('energyLastDate')
  const savedEnergy = localStorage.getItem('currentEnergy')
  
  if (lastEnergyDate !== today) {
    // 하루가 지나면 에너지를 4000개로 리셋
    currentEnergy.value = maxEnergy.value // 4000
    localStorage.setItem('energyLastDate', today)
    localStorage.setItem('currentEnergy', maxEnergy.value.toString())
  } else if (savedEnergy) {
    // 오늘 날짜면 저장된 에너지 로드 (최소 0, 최대 4000개)
    const saved = parseInt(savedEnergy) || 0
    currentEnergy.value = Math.max(0, Math.min(saved, maxEnergy.value))
  } else {
    // 저장된 에너지가 없으면 0으로 설정
    currentEnergy.value = 0
  }
}

// 사용자 데이터 로드
const loadUserData = () => {
  const currentUser = getCurrentUser()
  if (currentUser) {
    // 포인트 = gameData.coins
    coinCount.value = currentUser.gameData?.coins || 0
    // 코인 = totalCoin (현재는 0으로 설정, 나중에 별도 관리)
    totalCoin.value = currentUser.gameData?.totalCoin || 0
    // 고양이 파편 = catFragments 또는 catCount
    catFragments.value = currentUser.gameData?.catFragments || currentUser.gameData?.catCount || 50
  }
  
  // 에너지 체크 및 리셋
  checkAndResetEnergy()
}

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const goToSettings = () => {
  router.push('/settings')
}

const goToNotification = () => {
  router.push('/notification')
}

const goToShop = () => {
  router.push('/shop')
}

let interval = null
let dataUpdateInterval = null

onMounted(() => {
  // 초기 데이터 로드
  loadUserData()
  
  // localStorage 변경 감지 (언어)
  interval = setInterval(() => {
    const currentLang = localStorage.getItem('appLanguage') || '한국어'
    if (currentLang !== language.value) {
      language.value = currentLang
    }
  }, 100)
  
  // 사용자 데이터 업데이트 감지 (주기적으로 체크)
  dataUpdateInterval = setInterval(() => {
    loadUserData()
  }, 500) // 0.5초마다 체크
  
  // 커스텀 이벤트 리스너: 사용자 데이터 즉시 업데이트
  window.addEventListener('userDataUpdated', loadUserData)
})

onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
  if (dataUpdateInterval) {
    clearInterval(dataUpdateInterval)
  }
  // 이벤트 리스너 제거
  window.removeEventListener('userDataUpdated', loadUserData)
})

// 숫자 포맷팅 함수
const formatNumber = (num) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G'
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
  } else if (num >= 10000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
  }
  return num.toLocaleString()
}
</script>

<template>
  <header>
    <div class="headerCont">
      <div class="headerBar">
        <!-- 번개 아이콘 + 숫자 -->
        <button class="headerItem energyItem" @click="goToShop">
          <img src="@/assets/img/lighting.png" alt="에너지" class="energyIcon" />
          <span class="headerValue">{{ formatNumber(currentEnergy) }}</span>
        </button>
        <div class="divider"></div>
        
        <!-- P 아이콘 + 숫자 -->
        <button class="headerItem clickableItem" @click="goToShop">
          <img src="@/assets/img/point_ico.png" alt="P" class="pointIcon" />
          <span class="headerValue">{{ formatNumber(coinCount) }}</span>
        </button>
        <div class="divider"></div>
        
        <!-- C 아이콘 + 숫자 -->
        <button class="headerItem clickableItem" @click="goToShop">
          <img src="@/assets/img/coin_ico.png" alt="C" class="coinIcon" />
          <span class="headerValue">{{ formatNumber(totalCoin) }}</span>
        </button>
        <div class="divider"></div>
        
        <!-- 고양이 아이콘 + 숫자 -->
        <button class="headerItem clickableItem" @click="goToShop">
          <img src="@/assets/img/cat_ico.png" alt="고양이" class="catIcon">
          <span class="headerValue">{{ catFragments }}</span>
        </button>
        <div class="divider"></div>
        
        <!-- 알림 아이콘 -->
        <button class="headerIconBtn notifi" @click="goToNotification">
          <img src="@/assets/img/notice.png" alt="알림" class="icon-img">
        </button>
        <div class="divider"></div>
        
        <!-- 설정 아이콘 -->
        <button class="headerIconBtn menuBtn" @click="goToSettings">
          <img src="@/assets/img/setting.png" alt="설정" class="icon-img">
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.headerCont {
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
}

.headerBar {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 0.6rem 1rem;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.headerBar::-webkit-scrollbar {
  display: none;
}

.headerItem {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  white-space: nowrap;
  flex-shrink: 0;
}

.energyItem,
.clickableItem {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
}

.energyItem:hover,
.clickableItem:hover {
  opacity: 0.8;
  transform: scale(1.05);
}

.energyIcon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.pointIcon, .coinIcon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.catIcon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.headerValue {
  font-weight: 600;
  font-size: 0.95rem;
}

.divider {
  width: 1px;
  height: 20px;
  background: transparent;
  border-left: 1px dotted rgba(255, 255, 255, 0.5);
  flex-shrink: 0;
}

.headerIconBtn {
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  padding: 0;
}

.notifi{
  margin-left: auto;
}

.notifi, .menuBtn {
  transition: all 0.3s ease;
}

/* .notifi:hover, .menuBtn:hover {
  background: rgba(102, 126, 234, 0.2);
  transform: scale(1.05);
} */

.icon-img {
  width: 17px;
  height: 17px;
  object-fit: contain;
}



.icon-img {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

@media (max-width: 480px) {
  .headerBar {
    gap: 0.6rem;
    padding: 0.5rem 0.8rem;
  }
  
  .headerValue {
    font-size: 0.85rem;
  }
  
  .pointIcon, .coinIcon, .catIcon, .energyIcon {
    width: 20px;
    height: 20px;
  }
}
</style>
