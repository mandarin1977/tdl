<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getI18nTexts } from '@/utils/userUtils'
import { useAppStore } from '@/store/appStore'
import { checkAndResetEnergy } from '@/utils/energyUtils'

// Props
const props = defineProps({
  hideRightIcons: {
    type: Boolean,
    default: false
  }
})

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
// 초기값을 localStorage에서 읽어오거나 기본값 사용
const getInitialEnergy = () => {
  const savedEnergy = localStorage.getItem('currentEnergy')
  if (savedEnergy) {
    const energy = parseInt(savedEnergy, 10)
    return isNaN(energy) ? 4000 : energy
  }
  return 4000
}

const currentEnergy = ref(getInitialEnergy())
const maxEnergy = ref(4000)

// 에너지 체크 및 리셋은 유틸리티 함수 사용

// 에너지 업데이트 함수
const updateEnergy = () => {
  // checkAndResetEnergy가 이미 에너지를 올바르게 설정하므로 중복 설정 제거
  checkAndResetEnergy(currentEnergy, maxEnergy)
  // 숫자 타입 보장
  if (typeof currentEnergy.value !== 'number') {
    currentEnergy.value = parseInt(currentEnergy.value, 10) || 0
  }
}

// 에너지를 숫자로 보장하는 computed (반응형)
const formattedEnergy = computed(() => {
  // currentEnergy.value가 변경될 때마다 재계산되도록 함
  let energyValue = currentEnergy.value
  
  // 문자열이면 정수로 변환, 숫자면 그대로 사용
  if (typeof energyValue === 'string') {
    energyValue = parseInt(energyValue, 10)
  } else if (typeof energyValue !== 'number') {
    energyValue = Number(energyValue)
  }
  
  // NaN 체크 및 정수 보장
  if (isNaN(energyValue) || energyValue === null || energyValue === undefined) {
    return '0'
  }
  
  // 정수로 변환하여 포맷팅
  const energyInt = Math.floor(energyValue)
  return formatNumber(energyInt)
})

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
        <!-- 에너지 -->
        <button class="resourceItem energyItem" @click="goToShop">
          <img src="@/assets/img/energyIcon.png" alt="에너지" class="resourceIcon" />
          <span class="resourceValue">{{ formattedEnergy }}</span>
        </button>
        
        <!-- 포인트 -->
        <button class="resourceItem" @click="goToShop">
          <img src="@/assets/img/pointIcon.png" alt="포인트" class="resourceIcon" />
          <span class="resourceValue">{{ formatNumber(coinCount) }}</span>
        </button>
        
        <!-- 코인 -->
        <button class="resourceItem" @click="goToShop">
          <img src="@/assets/img/coinIcon.png" alt="코인" class="resourceIcon" />
          <span class="resourceValue">{{ formatNumber(totalCoin) }}</span>
        </button>
        
        <!-- 고양이 파편 -->
        <button class="resourceItem" @click="goToShop">
          <img src="@/assets/img/catPoint.png" alt="고양이" class="resourceIcon">
          <span class="resourceValue">{{ formatNumber(catFragments) }}</span>
        </button>
      </div>
      
      <!-- 오른쪽 세로 아이콘 버튼들 -->
      <div v-if="!hideRightIcons" class="rightIconButtons">
        <!-- NFT 아이콘 -->
        <button class="iconButton nftButton" @click="goToNFT" title="NFT">
          <img src="@/assets/img/shopIcon.png" alt="NFT" class="icon-img">
        </button>
        
        <!-- 설정 아이콘 -->
        <button class="iconButton settingsButton" @click="goToSettings" title="설정">
          <div class="iconCircle settingsIconCircle">
            <img src="@/assets/img/setting.png" alt="설정" class="icon-img">
          </div>
        </button>
        
        <!-- 알림 아이콘 (일단 숨김) -->
        <button v-if="false" class="iconButton notificationButton" @click="goToNotification" title="알림">
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
  background-color: rgba(0, 0, 0, 0.5);
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
  gap: 0.5rem;
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

.resourceIcon {
  width: 48px;
  height: 48px;
  object-fit: contain;
  flex-shrink: 0;
}

.resourceTextIcon {
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1;
}

.resourceValue {
  color: white;
  font-weight: 700;
  font-size: 1.6rem;
  white-space: nowrap;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
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
    top: 15rem;
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
  
  .resourceIcon {
    width: 40px;
    height: 40px;
  }
  
  .resourceTextIcon {
    font-size: 1rem;
  }
  
  .resourceValue {
    font-size: 1.3rem;
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
    font-size: 1.1rem;
  }
  
  .resourceIcon {
    width: 36px;
    height: 36px;
  }
  
  .iconCircle {
    width: 32px;
    height: 32px;
  }
}
</style>
