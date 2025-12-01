<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getI18nTexts } from '@/utils/userUtils'
import { useAppStore } from '@/store/appStore'
import { checkAndResetEnergy } from '@/utils/energyUtils'

const language = ref(localStorage.getItem('appLanguage') || 'English')
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

// 에너지 업데이트 함수
const updateEnergy = () => {
  const savedEnergy = localStorage.getItem('currentEnergy')
  if (savedEnergy) {
    currentEnergy.value = parseInt(savedEnergy, 10)
  }
  checkAndResetEnergy(currentEnergy, maxEnergy)
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

const goToNFT = () => {
  router.push('/nft')
}

let interval = null

onMounted(() => {
  // 스토어에서 사용자 데이터 로드
  store.loadCurrentUser()
  
  // 에너지 체크 및 리셋
  updateEnergy()
  
  // localStorage 변경 감지 (언어 및 에너지)
  interval = setInterval(() => {
    const currentLang = localStorage.getItem('appLanguage') || 'English'
    if (currentLang !== language.value) {
      language.value = currentLang
    }
    // 에너지 업데이트
    updateEnergy()
  }, 500)
  
  // 커스텀 이벤트 리스너: 사용자 데이터 즉시 업데이트
  // 스토어가 자동으로 동기화하므로 여기서는 스토어만 새로고침
  const handleUserDataUpdate = () => {
    store.loadCurrentUser()
    updateEnergy()
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
      <!-- 상단 리소스 바 -->
      <div class="headerBar">
        <!-- 에너지 (빨간 원) -->
        <button class="resourceItem energyItem" @click="goToShop">
          <div class="resourceIconCircle energyCircle">
            <img src="@/assets/img/lighting.png" alt="에너지" class="resourceIcon" />
          </div>
          <span class="resourceValue">{{ formatNumber(currentEnergy) }} / {{ formatNumber(maxEnergy) }}</span>
        </button>
        
        <!-- 포인트 (파란 원) -->
        <button class="resourceItem" @click="goToShop">
          <div class="resourceIconCircle pointCircle">
            <span class="resourceTextIcon">P</span>
          </div>
          <span class="resourceValue">{{ formatNumber(coinCount) }}</span>
        </button>
        
        <!-- 코인 (노란 원) -->
        <button class="resourceItem" @click="goToShop">
          <div class="resourceIconCircle coinCircle">
            <span class="resourceTextIcon">C</span>
          </div>
          <span class="resourceValue">{{ formatNumber(totalCoin) }}</span>
        </button>
        
        <!-- 고양이 파편 (보라색 원) -->
        <button class="resourceItem" @click="goToShop">
          <div class="resourceIconCircle catCircle">
            <img src="@/assets/img/cat_ico.png" alt="고양이" class="resourceIcon">
          </div>
          <span class="resourceValue">{{ catFragments }}</span>
        </button>
      </div>
      
      <!-- 오른쪽 세로 아이콘 버튼들 -->
      <div class="rightIconButtons">
        <!-- NFT 아이콘 -->
        <button class="iconButton nftButton" @click="goToNFT" title="NFT">
          <img src="@/assets/img/store.png" alt="NFT" class="icon-img">
        </button>
        
        <!-- 설정 아이콘 -->
        <button class="iconButton settingsButton" @click="goToSettings" title="설정">
          <div class="iconCircle settingsIconCircle">
            <img src="@/assets/img/setting.png" alt="설정" class="icon-img">
          </div>
        </button>
        
        <!-- 알림 아이콘 -->
        <button class="iconButton notificationButton" @click="goToNotification" title="알림">
          <div class="iconCircle notificationIconCircle">
            <img src="@/assets/img/notice.png" alt="알림" class="icon-img">
          </div>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  min-height: 80px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 0.8rem 1rem;
}

.headerCont {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  position: absolute;
  padding: 0.8rem 1rem;
}

/* 상단 리소스 바 */
.headerBar {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex: 1;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding-right: 0.5rem;
  justify-content: space-between;
}

.headerBar::-webkit-scrollbar {
  display: none;
}

/* 리소스 아이템 */
.resourceItem {
  display: flex;
  align-items: center;
  /* gap: 0.5rem; */
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
  white-space: nowrap;
  flex-shrink: 0;
}

.resourceItem:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

/* 리소스 아이콘 원형 배경 */
.resourceIconCircle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  z-index: 1;
}

.energyCircle {
  background: #ff4444; /* 빨간색 */
}

.pointCircle {
  background: #4a90e2; /* 파란색 */
}

.coinCircle {
  background: #f5a623; /* 노란색 */
}

.catCircle {
  background: #9013fe; /* 보라색 */
}

.resourceIcon {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

.resourceTextIcon {
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1;
}

.resourceValue {
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.2rem 0.5rem 0.2rem 1.5rem;
  border-radius: 0 1rem 1rem 0;
  font-weight: 600;
  font-size: 1.2rem;
  white-space: nowrap;
  margin-left: -10px;
}

/* 오른쪽 세로 아이콘 버튼들 */
.rightIconButtons {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: end;
  flex-shrink: 0;
  width: max-content;
  position: absolute;
    right: 2rem;
    top: 5rem;
}

.iconButton {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
}

.iconButton:hover {
  transform: scale(1.1);
}

.nftButton {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nftButton .icon-img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.iconCircle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.iconButton:hover .iconCircle {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

.homeIconCircle {
  background: rgba(128, 128, 128, 0.6);
}

.settingsIconCircle {
  background: rgba(128, 128, 128, 0.6);
}

.notificationIconCircle {
  background: rgba(128, 128, 128, 0.6);
}

.icon-img {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

.iconButton svg {
  color: white;
  stroke: currentColor;
}

/* 반응형 */
@media (max-width: 480px) {
  header {
    min-height: 70px;
    padding: 0.6rem 0.8rem;
  }
  
  /* .headerBar {
    gap: 0.6rem;
  } */
  
  .resourceIconCircle {
    width: 28px;
    height: 28px;
  }
  
  .resourceIcon {
    width: 16px;
    height: 16px;
  }
  
  .resourceTextIcon {
    font-size: 1rem;
  }
  
  .resourceValue {
    font-size: 1rem;
  }
  
  .iconCircle {
    width: 36px;
    height: 36px;
  }
  
  .icon-img {
    width: 16px;
    height: 16px;
  }
  
  .rightIconButtons {
    gap: 0.5rem;
  }
}

@media (max-width: 360px) {
  .resourceValue {
    font-size: 0.9rem;
  }
  
  .resourceIconCircle {
    width: 26px;
    height: 26px;
  }
  
  .iconCircle {
    width: 32px;
    height: 32px;
  }
}
</style>
