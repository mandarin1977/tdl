<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getI18nTexts } from '@/utils/userUtils'
import { useAppStore } from '@/store/appStore'
import { checkAndResetEnergy } from '@/utils/energyUtils'

const language = ref(localStorage.getItem('appLanguage') || '한국어')
const texts = computed(() => getI18nTexts())

const router = useRouter()

// 스토어 사용
const store = useAppStore()

// 스토어에서 게임 데이터 가져오기 (반응형)
const coinCount = computed(() => store.state.coins) // 포인트 (P)
const totalCoin = computed(() => store.state.totalCoin) // 코인 (C)
const catFragments = computed(() => store.state.catFragments) // 고양이 파편

// 에너지는 localStorage에 저장되므로 별도 관리
const currentEnergy = ref(4000)
const maxEnergy = ref(4000)

// 에너지 체크 및 리셋은 유틸리티 함수 사용

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

onMounted(() => {
  // 스토어에서 사용자 데이터 로드
  store.loadCurrentUser()
  
  // 에너지 체크 및 리셋
  checkAndResetEnergy(currentEnergy, maxEnergy)
  
  // localStorage 변경 감지 (언어)
  interval = setInterval(() => {
    const currentLang = localStorage.getItem('appLanguage') || '한국어'
    if (currentLang !== language.value) {
      language.value = currentLang
    }
  }, 100)
  
  // 커스텀 이벤트 리스너: 사용자 데이터 즉시 업데이트
  // 스토어가 자동으로 동기화하므로 여기서는 스토어만 새로고침
  const handleUserDataUpdate = () => {
    store.loadCurrentUser()
  }
  window.addEventListener('userDataUpdated', handleUserDataUpdate)
  
  // 컴포넌트 언마운트 시 정리
  onUnmounted(() => {
    // 이벤트 리스너 제거
    window.removeEventListener('userDataUpdated', handleUserDataUpdate)
    // interval 정리
    if (interval) {
      clearInterval(interval)
    }
  })
})

// 숫자 포맷팅 함수 (스토어에서 가져오기)
const formatNumber = store.formatNumber
</script>

<template>
  <header>
    <div class="headerCont">
      <div class="headerBar">
        <!-- 번개 아이콘 + 숫자 -->
        <button class="headerItem energyItem" @click="goToShop">
          <img src="@/assets/img/lighting.png" alt="에너지" class="energyIcon" />
          <span class="headerValue">{{ formatNumber(currentEnergy) }} / {{ formatNumber(maxEnergy) }}</span>
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
  font-size: 1.4rem;
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
    font-size: 1.2rem;
  }
  
  .pointIcon, .coinIcon, .catIcon, .energyIcon {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 360px) {
  .headerValue {
    font-size: 1rem;
  }
  
  .pointIcon, .coinIcon, .catIcon, .energyIcon {
    width: 18px;
    height: 18px;
  }
}
</style>
