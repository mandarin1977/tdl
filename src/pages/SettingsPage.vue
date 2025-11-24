<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCurrentUser, updateUserCoins } from '@/utils/userUtils'
import { useAppStore } from '@/store/appStore'
import { connectWallet, isMetaMaskInstalled, formatAddress } from '@/utils/wallet'

const router = useRouter()
const store = useAppStore()

const coinCount = ref(0)
const currentUser = ref(null)
const language = ref('한국어')
const region = ref('부산')
const soundEnabled = ref(true)
const vibrationEnabled = ref(true)
const showLanguageDropdown = ref(false)
const showRegionDropdown = ref(false)
const isCheckedInToday = ref(false)
const checkInMessage = ref('')

// 지갑 관련 상태
const isWalletConnecting = ref(false)
const walletError = ref('')
const walletAddress = computed(() => store.state.walletAddress)
const walletBalance = computed(() => store.state.userBalance)
const isWalletConnected = computed(() => store.state.isWalletConnected)
const showDepositPopup = ref(false)

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

// 소리 설정 토글 함수
const toggleSound = () => {
  soundEnabled.value = !soundEnabled.value
  // localStorage에 저장
  localStorage.setItem('soundEnabled', soundEnabled.value.toString())
  
  // 전역 이벤트 발생하여 모든 오디오 제어
  window.dispatchEvent(new CustomEvent('soundSettingChanged', { 
    detail: { enabled: soundEnabled.value } 
  }))
}

onMounted(() => {
  const user = getCurrentUser()
  if (user) {
    currentUser.value = user
    coinCount.value = user.gameData?.coins || 0
  }
  
  // localStorage에서 언어 설정 로드
  const savedLanguage = localStorage.getItem('appLanguage')
  if (savedLanguage) {
    language.value = savedLanguage
  }
  
  // localStorage에서 소리 설정 로드
  const savedSoundSetting = localStorage.getItem('soundEnabled')
  if (savedSoundSetting !== null) {
    soundEnabled.value = savedSoundSetting === 'true'
  } else {
    // 기본값 저장
    localStorage.setItem('soundEnabled', 'true')
  }
  
  // 출석체크 상태 확인
  checkAttendanceStatus()
})

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

// 지갑 연결 처리
const handleWalletConnect = async () => {
  try {
    isWalletConnecting.value = true
    walletError.value = ''
    
    // MetaMask 설치 확인
    if (!isMetaMaskInstalled()) {
      walletError.value = 'MetaMask가 설치되어 있지 않습니다.'
      const install = confirm('MetaMask를 설치하시겠습니까?')
      if (install) {
        window.open('https://metamask.io/download/', '_blank')
      }
      return
    }
    
    // 지갑 연결
    const result = await store.connectWalletToApp()
    
    if (result.success) {
      walletError.value = ''
      // 성공 메시지 (선택적)
      alert('지갑이 연결되었습니다!')
    } else {
      walletError.value = result.error || '지갑 연결에 실패했습니다.'
      if (result.needInstall) {
        const install = confirm('MetaMask를 설치하시겠습니까?')
        if (install) {
          window.open('https://metamask.io/download/', '_blank')
        }
      }
    }
  } catch (error) {
    console.error('지갑 연결 오류:', error)
    walletError.value = '지갑 연결 중 오류가 발생했습니다.'
  } finally {
    isWalletConnecting.value = false
  }
}

// 지갑 연결 해제
const handleWalletDisconnect = () => {
  if (confirm('지갑 연결을 해제하시겠습니까?')) {
    store.disconnectWalletFromApp()
    router.push('/login')
  }
}

// 지갑 주소 복사
const copyWalletAddress = async () => {
  if (walletAddress.value) {
    try {
      await navigator.clipboard.writeText(walletAddress.value)
      alert('지갑 주소가 복사되었습니다!')
    } catch (error) {
      console.error('복사 실패:', error)
      alert('복사에 실패했습니다.')
    }
  }
}

// 지갑 잔액 업데이트
const refreshWalletBalance = async () => {
  await store.updateWalletBalance()
}

// 지갑에서 충전하기 팝업 열기
const openDepositPopup = () => {
  showDepositPopup.value = true
}

// 지갑에서 충전하기 팝업 닫기
const closeDepositPopup = () => {
  showDepositPopup.value = false
}

// 거래소 선택 및 이동
const goToDeposit = (exchange) => {
  const exchanges = {
    phantom: {
      name: 'Phantom',
      url: 'https://phantom.app/',
      icon: '👻',
      description: '팬텀 지갑으로 이동'
    },
    upbit: {
      name: 'Upbit',
      url: 'https://upbit.com/',
      icon: '💰',
      description: '업비트 거래소로 이동'
    }
  }
  
  const selected = exchanges[exchange]
  if (selected) {
    // 지갑 주소를 URL 파라미터로 전달 (선택사항)
    const url = selected.url
    window.open(url, '_blank')
    showDepositPopup.value = false
  }
}
</script>

<template>
  <div class="settingsPage">
    <!-- 헤더 -->
    <Header :coinCount="coinCount" />
    
    <!-- 메인 콘텐츠 -->
    <main class="mainContent">
      <!-- 사용자 설정 버튼 -->
      <div class="settingGroup">
        <button 
          class="userProfileBtn" 
          @click="router.push('/profile')"
        >
          <span class="userProfileIcon">👤</span>
          <span>사용자 설정</span>
          <span class="arrowIcon">→</span>
        </button>
      </div>
      
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
      
      <!-- 지갑 연결 섹션 -->
      <div class="settingSection">
        <h3 class="sectionTitle">지갑 연결</h3>
        
        <!-- 지갑 연결 상태 -->
        <div v-if="isWalletConnected" class="walletConnectedCard">
          <div class="walletStatusHeader">
            <div class="walletStatusIndicator">
              <div class="walletIndicatorDot"></div>
              <span>연결됨</span>
            </div>
            <button class="refreshBtn" @click="refreshWalletBalance" title="잔액 새로고침">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
                <path d="M21 3v5h-5"/>
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
                <path d="M3 21v-5h5"/>
              </svg>
            </button>
          </div>
          
          <div class="walletInfo">
            <div class="walletInfoRow">
              <span class="walletInfoLabel">주소:</span>
              <div class="walletInfoValue">
                <span class="walletAddressText">{{ walletAddress }}</span>
                <button class="walletCopyBtn" @click="copyWalletAddress" title="복사">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div class="walletInfoRow">
              <span class="walletInfoLabel">잔액:</span>
              <span class="walletBalanceText">{{ walletBalance }}</span>
            </div>
          </div>
          
          <button class="walletDepositBtn" @click="openDepositPopup">
            <svg class="depositIcon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2v20M2 12h20"/>
            </svg>
            <span>지갑에서 충전하기</span>
          </button>
          
          <button class="walletDisconnectBtn" @click="handleWalletDisconnect">
            연결 해제
          </button>
        </div>
        
        <!-- 지갑 미연결 상태 -->
        <div v-else class="walletNotConnectedCard">
          <div class="walletNotConnectedIcon">🔗</div>
          <p class="walletNotConnectedText">지갑이 연결되지 않았습니다</p>
          <p class="walletNotConnectedDesc">NFT 게임을 즐기려면 지갑을 연결해주세요</p>
          <button 
            class="walletConnectBtn" 
            @click="handleWalletConnect"
            :disabled="isWalletConnecting"
          >
            <span v-if="!isWalletConnecting">지갑 연결</span>
            <span v-else>연결 중...</span>
          </button>
          <div v-if="walletError" class="walletErrorMsg">
            {{ walletError }}
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
            @click="toggleSound"
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
    </main>
    
    <!-- 푸터 -->
    <Footer />
    
    <!-- 지갑 충전 팝업 -->
    <div v-if="showDepositPopup" class="depositPopupOverlay" @click="closeDepositPopup">
      <div class="depositPopup" @click.stop>
        <div class="depositPopupHeader">
          <h3 class="depositPopupTitle">충전 방법 선택</h3>
          <button class="depositPopupClose" @click="closeDepositPopup">×</button>
        </div>
        
        <div class="depositPopupContent">
          <p class="depositPopupDesc">충전할 거래소를 선택해주세요</p>
          
          <div class="depositOptions">
            <button class="depositOption" @click="goToDeposit('phantom')">
              <div class="depositOptionIcon">👻</div>
              <div class="depositOptionInfo">
                <div class="depositOptionName">Phantom</div>
                <div class="depositOptionDesc">팬텀 지갑으로 이동</div>
              </div>
              <div class="depositOptionArrow">→</div>
            </button>
            
            <button class="depositOption" @click="goToDeposit('upbit')">
              <div class="depositOptionIcon">💰</div>
              <div class="depositOptionInfo">
                <div class="depositOptionName">Upbit</div>
                <div class="depositOptionDesc">업비트 거래소로 이동</div>
              </div>
              <div class="depositOptionArrow">→</div>
            </button>
          </div>
          
          <div class="depositPopupFooter">
            <p class="depositPopupNote">💡 지갑 주소를 복사하여 거래소에서 입금하세요</p>
            <button class="depositCopyAddressBtn" @click="copyWalletAddress">
              지갑 주소 복사
            </button>
          </div>
        </div>
      </div>
    </div>
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
  gap: 1.5rem;
}

/* 모바일 반응형 */
@media (max-width: 480px) {
  .mainContent {
    padding: 1.2rem;
    gap: 1.2rem;
  }
  
  .settingLabel {
    font-size: 0.85rem;
  }
  
  .userProfileBtn,
  .checkInBtn,
  .nftBtn {
    font-size: 0.95rem;
    padding: 1rem 1.2rem;
  }
  
  .sectionTitle {
    font-size: 0.95rem;
  }
  
  .toggleLabel {
    font-size: 0.85rem;
  }
}

/* 설정 그룹 */
.settingGroup {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.settingLabel {
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
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

/* 사용자 설정 버튼 */
.userProfileBtn {
  width: 100%;
  padding: 1.2rem 1.5rem;
  background: rgba(15, 23, 42, 0.7);
  border: 2px solid rgba(125, 211, 252, 0.3);
  border-radius: 12px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.userProfileBtn:hover {
  background: rgba(15, 23, 42, 0.9);
  border-color: rgba(125, 211, 252, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(125, 211, 252, 0.2);
}

.userProfileIcon {
  font-size: 1.5rem;
}

.arrowIcon {
  font-size: 1.2rem;
  color: #7DD3FC;
  transition: transform 0.3s;
}

.userProfileBtn:hover .arrowIcon {
  transform: translateX(4px);
}

/* 소리 설정 섹션 */
.settingSection {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.sectionTitle {
  color: white;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 0.5rem 0;
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
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.01em;
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
  font-size: 1rem;
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
  font-size: 1rem;
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

/* 지갑 연결 UI */
.walletConnectedCard {
  background: rgba(15, 23, 42, 0.7);
  border: 2px solid rgba(16, 185, 129, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.walletStatusHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.walletStatusIndicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #10b981;
  font-weight: 600;
  font-size: 0.95rem;
}

.walletIndicatorDot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.6);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.refreshBtn {
  background: rgba(125, 211, 252, 0.2);
  border: 1px solid rgba(125, 211, 252, 0.3);
  border-radius: 8px;
  padding: 0.5rem;
  color: #7DD3FC;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.refreshBtn:hover {
  background: rgba(125, 211, 252, 0.3);
  transform: rotate(180deg);
}

.walletInfo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.walletInfoRow {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.walletInfoLabel {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  font-weight: 500;
}

.walletInfoValue {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.walletAddressText {
  color: white;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  word-break: break-all;
  flex: 1;
}

.walletBalanceText {
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
  font-family: 'Courier New', monospace;
  letter-spacing: 0.05em;
  text-shadow: 0 2px 8px rgba(125, 211, 252, 0.3);
}

.walletCopyBtn {
  background: rgba(125, 211, 252, 0.2);
  border: 1px solid rgba(125, 211, 252, 0.3);
  border-radius: 6px;
  padding: 0.4rem;
  color: #7DD3FC;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.walletCopyBtn:hover {
  background: rgba(125, 211, 252, 0.3);
  transform: scale(1.1);
}

.walletDepositBtn {
  width: 100%;
  padding: 0.9rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
}

.walletDepositBtn:hover {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
}

.depositIcon {
  width: 18px;
  height: 18px;
}

.walletDisconnectBtn {
  width: 100%;
  padding: 0.8rem;
  background: rgba(239, 68, 68, 0.2);
  border: 1px solid rgba(239, 68, 68, 0.4);
  border-radius: 8px;
  color: #ff6b6b;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
}

.walletDisconnectBtn:hover {
  background: rgba(239, 68, 68, 0.3);
  border-color: rgba(239, 68, 68, 0.6);
}

/* 지갑 미연결 상태 */
.walletNotConnectedCard {
  background: rgba(15, 23, 42, 0.7);
  border: 2px dashed rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
}

.walletNotConnectedIcon {
  font-size: 3rem;
  opacity: 0.6;
}

.walletNotConnectedText {
  color: white;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
}

.walletNotConnectedDesc {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin: 0;
}

.walletConnectBtn {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  margin-top: 0.5rem;
}

.walletConnectBtn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.walletConnectBtn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.walletErrorMsg {
  color: #ff6b6b;
  font-size: 0.85rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 6px;
  width: 100%;
}

/* 지갑 충전 팝업 */
.depositPopupOverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 1rem;
  animation: fadeIn 0.2s ease;
}

.depositPopup {
  background: rgba(15, 23, 42, 0.98);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(125, 211, 252, 0.3);
  border-radius: 16px;
  width: 100%;
  max-width: 400px;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideUp 0.3s ease;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.depositPopupHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.depositPopupTitle {
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
}

.depositPopupClose {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 2rem;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;
  line-height: 1;
}

.depositPopupClose:hover {
  color: white;
}

.depositPopupContent {
  padding: 1.5rem;
}

.depositPopupDesc {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin: 0 0 1.5rem 0;
  text-align: center;
}

.depositOptions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.depositOption {
  background: rgba(125, 211, 252, 0.1);
  border: 2px solid rgba(125, 211, 252, 0.2);
  border-radius: 12px;
  padding: 1.2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  text-align: left;
}

.depositOption:hover {
  background: rgba(125, 211, 252, 0.2);
  border-color: rgba(125, 211, 252, 0.4);
  transform: translateX(4px);
}

.depositOptionIcon {
  font-size: 2rem;
  flex-shrink: 0;
}

.depositOptionInfo {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.depositOptionName {
  color: white;
  font-size: 1rem;
  font-weight: 600;
}

.depositOptionDesc {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
}

.depositOptionArrow {
  color: #7DD3FC;
  font-size: 1.5rem;
  font-weight: 300;
  flex-shrink: 0;
}

.depositPopupFooter {
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.depositPopupNote {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  text-align: center;
  margin: 0;
}

.depositCopyAddressBtn {
  width: 100%;
  padding: 0.8rem;
  background: rgba(125, 211, 252, 0.2);
  border: 1px solid rgba(125, 211, 252, 0.3);
  border-radius: 8px;
  color: #7DD3FC;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.depositCopyAddressBtn:hover {
  background: rgba(125, 211, 252, 0.3);
  border-color: rgba(125, 211, 252, 0.5);
}

/* 모바일 반응형 */
@media (max-width: 480px) {
  .walletConnectedCard,
  .walletNotConnectedCard {
    padding: 1.2rem;
  }
  
  .walletAddressText {
    font-size: 0.8rem;
  }
  
  .walletNotConnectedIcon {
    font-size: 2.5rem;
  }
  
  .depositPopup {
    max-width: 100%;
    margin: 0;
  }
  
  .depositPopupHeader,
  .depositPopupContent {
    padding: 1.2rem;
  }
  
  .depositOption {
    padding: 1rem;
  }
  
  .depositOptionIcon {
    font-size: 1.5rem;
  }
}
</style>
