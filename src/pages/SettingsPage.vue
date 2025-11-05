<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCurrentUser, updateUserCoins } from '@/utils/userUtils'

const router = useRouter()

const coinCount = ref(0)
const currentUser = ref(null)
const language = ref('한국어')
const region = ref('부산')
const soundEnabled = ref(true)
const vibrationEnabled = ref(true)
const userId = ref('')
const showLanguageDropdown = ref(false)
const showRegionDropdown = ref(false)
const isCheckedInToday = ref(false)
const checkInMessage = ref('')

// 언어 옵션
const languages = ['한국어', 'English']
const regions = ['부산', '서울', '대구', '인천']

// 언어에 따른 텍스트
const texts = {
  ko: {
    language: '언어',
    region: '지역',
    soundSettings: '소리 설정',
    soundToggle: '소리 토글',
    viToggle: 'Vi 토글',
    userID: 'User ID',
    copySuccess: 'User ID가 복사되었습니다!',
    english: 'English'
  },
  en: {
    language: 'Language',
    region: 'Region',
    soundSettings: 'Sound Settings',
    soundToggle: 'Sound Toggle',
    viToggle: 'Vibration Toggle',
    userID: 'User ID',
    copySuccess: 'User ID copied!',
    english: 'English'
  }
}

// 현재 언어에 따른 텍스트
const currentTexts = computed(() => {
  return language.value === '한국어' ? texts.ko : texts.en
})

const toggleLanguage = (lang) => {
  language.value = lang
  showLanguageDropdown.value = false
  
  // localStorage에 저장
  localStorage.setItem('appLanguage', lang)
}

onMounted(() => {
  const user = getCurrentUser()
  if (user) {
    currentUser.value = user
    coinCount.value = user.gameData?.coins || 0
    
    // User ID 설정 (email이나 id 사용)
    userId.value = user.email || user.id || 'ID' + String(Math.random()).substring(2, 10)
  }
  
  // localStorage에서 언어 설정 로드
  const savedLanguage = localStorage.getItem('appLanguage')
  if (savedLanguage) {
    language.value = savedLanguage
  }
  
  // 출석체크 상태 확인
  checkAttendanceStatus()
})

// User ID 복사
const copyUserId = () => {
  navigator.clipboard.writeText(userId.value)
  alert(currentTexts.value.copySuccess)
}

// 출석체크 기능
const checkAttendance = () => {
  if (!currentUser.value) {
    alert('로그인이 필요합니다.')
    return
  }
  
  // 오늘 날짜 가져오기
  const today = new Date().toDateString()
  const lastCheckInDate = localStorage.getItem(`checkIn_${currentUser.value.id}`)
  
  // 이미 출석체크 했는지 확인
  if (lastCheckInDate === today) {
    checkInMessage.value = '오늘 이미 출석체크를 완료했습니다!'
    setTimeout(() => {
      checkInMessage.value = ''
    }, 3000)
    return
  }
  
  // 출석체크 보상 (예: 100 코인)
  const reward = 100
  coinCount.value += reward
  currentUser.value.gameData.coins = coinCount.value
  
  // 사용자 데이터 업데이트
  updateUserCoins(currentUser.value.id, coinCount.value)
  
  // 출석체크 날짜 저장
  localStorage.setItem(`checkIn_${currentUser.value.id}`, today)
  isCheckedInToday.value = true
  
  checkInMessage.value = `출석체크 완료! ${reward} 코인을 받았습니다!`
  setTimeout(() => {
    checkInMessage.value = ''
  }, 3000)
}

// 출석체크 상태 확인
const checkAttendanceStatus = () => {
  if (!currentUser.value) return
  
  const today = new Date().toDateString()
  const lastCheckInDate = localStorage.getItem(`checkIn_${currentUser.value.id}`)
  isCheckedInToday.value = lastCheckInDate === today
}
</script>

<template>
  <div class="settingsPage">
    <!-- 헤더 -->
    <Header :coinCount="coinCount" />
    
    <!-- 메인 콘텐츠 -->
    <main class="mainContent">
      <!-- 언어 설정 -->
      <div class="settingGroup">
        <label class="settingLabel">{{ language === '한국어' ? '언어' : 'Language' }}</label>
        <div class="settingInputWrapper">
          <div class="settingInput" @click="showLanguageDropdown = !showLanguageDropdown">
            <span>{{ language }}</span>
            <span class="dropdownIcon">▼</span>
          </div>
          <div v-if="showLanguageDropdown" class="dropdownMenu">
            <div 
              v-for="lang in languages" 
              :key="lang"
              class="dropdownItem"
              :class="{ active: language === lang }"
              @click="toggleLanguage(lang)"
            >
              {{ lang }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- 지역 설정 -->
      <div class="settingGroup">
        <label class="settingLabel">{{ currentTexts.region }}</label>
        <div class="settingInputWrapper">
          <div class="settingInput" @click="showRegionDropdown = !showRegionDropdown">
            <span>{{ region }}</span>
            <span class="dropdownIcon">▼</span>
          </div>
          <div v-if="showRegionDropdown" class="dropdownMenu">
            <div 
              v-for="reg in regions" 
              :key="reg"
              class="dropdownItem"
              :class="{ active: region === reg }"
              @click="region = reg; showRegionDropdown = false"
            >
              {{ reg }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- 소리 설정 -->
      <div class="settingSection">
        <h3 class="sectionTitle">{{ currentTexts.soundSettings }}</h3>
        
        <!-- 소리 토글 -->
        <div class="settingToggle">
          <label class="toggleLabel">{{ currentTexts.soundToggle }}</label>
          <button 
            class="toggleSwitch" 
            :class="{ active: soundEnabled }"
            @click="soundEnabled = !soundEnabled"
          >
            <div class="toggleHandle"></div>
          </button>
        </div>
        
        <!-- Vi 토글 -->
        <div class="settingToggle">
          <label class="toggleLabel">{{ currentTexts.viToggle }}</label>
          <button 
            class="toggleSwitch" 
            :class="{ active: vibrationEnabled }"
            @click="vibrationEnabled = !vibrationEnabled"
          >
            <div class="toggleHandle"></div>
          </button>
        </div>
      </div>
      
      <!-- 출석체크 -->
      <div class="settingGroup">
        <label class="settingLabel">출석체크</label>
        <button 
          class="checkInBtn" 
          @click="router.push('/attendance')"
        >
          출석체크 하기
        </button>
      </div>
      
      <!-- NFT 버튼 -->
      <div class="settingGroup">
        <button 
          class="nftBtn" 
          @click="router.push('/nft')"
        >
          NFT
        </button>
      </div>
      
      <!-- User ID -->
      <div class="settingGroup">
        <label class="settingLabel">{{ currentTexts.userID }}</label>
        <div class="settingInput">
          <span class="userId">{{ userId }}</span>
          <button class="copyBtn" @click="copyUserId">📋</button>
        </div>
      </div>
    </main>
    
    <!-- 푸터 -->
    <Footer />
  </div>
</template>

<style scoped>
.settingsPage {
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
  gap: 2rem;
}

/* 설정 그룹 */
.settingGroup {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.settingLabel {
  color: white;
  font-size: 1rem;
  font-weight: 500;
}

.settingInputWrapper {
  position: relative;
}

.settingInput {
  background: rgba(15, 23, 42, 0.7);
  border-radius: 12px;
  padding: 1rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  cursor: pointer;
}

.dropdownIcon {
  color: #64748B;
  font-size: 0.9rem;
}

.dropdownMenu {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  background: rgba(15, 23, 42, 0.95);
  border-radius: 12px;
  z-index: 100;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.dropdownItem {
  padding: 0.8rem 1.2rem;
  color: white;
  cursor: pointer;
  transition: all 0.2s;
}

.dropdownItem:hover {
  background: rgba(125, 211, 252, 0.2);
}

.dropdownItem.active {
  background: rgba(125, 211, 252, 0.3);
  color: #7DD3FC;
}

.userId {
  font-family: monospace;
}

/* 소리 설정 섹션 */
.settingSection {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.sectionTitle {
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
}

/* 토글 스위치 */
.settingToggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: rgba(15, 23, 42, 0.7);
  border-radius: 12px;
}

.toggleLabel {
  color: white;
  font-size: 1rem;
  font-weight: 500;
}

.toggleSwitch {
  width: 50px;
  height: 26px;
  background: #1E293B;
  border-radius: 13px;
  position: relative;
  cursor: pointer;
  border: none;
  transition: all 0.3s;
}

.toggleHandle {
  width: 22px;
  height: 22px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: all 0.3s;
}

.toggleSwitch.active {
  background: #7DD3FC;
}

.toggleSwitch.active .toggleHandle {
  left: 26px;
}

.copyBtn {
  background: #7DD3FC;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s;
}

.copyBtn:hover {
  background: #61BBF5;
  transform: scale(1.05);
}

/* 출석체크 버튼 */
.checkInBtn {
  width: 100%;
  padding: 1.2rem;
  background: linear-gradient(135deg, #7DD3FC 0%, #0EA5E9 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(125, 211, 252, 0.3);
}

.checkInBtn:hover:not(.disabled) {
  background: linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(125, 211, 252, 0.4);
}

.checkInBtn.disabled {
  background: rgba(125, 211, 252, 0.3);
  cursor: not-allowed;
  opacity: 0.6;
}

/* NFT 버튼 */
.nftBtn {
  width: 100%;
  padding: 1.2rem;
  background: linear-gradient(135deg, #7DD3FC 0%, #0EA5E9 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(125, 211, 252, 0.3);
}

.nftBtn:hover {
  background: linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(125, 211, 252, 0.4);
}

.checkInMessage {
  margin-top: 0.8rem;
  color: #7DD3FC;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
