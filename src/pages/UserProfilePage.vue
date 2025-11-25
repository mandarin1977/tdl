<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCurrentUser, logoutUser } from '@/utils/userUtils'
import { useAppStore } from '@/store/appStore'

const router = useRouter()
const store = useAppStore()
const { logout: logoutStore } = store

// appStore에서 게임 데이터 가져오기 (반응형)
const coinCount = computed(() => store.state.coins)
const currentUser = ref(null)
const language = ref('한국어')
const userEmail = ref('')
const userName = ref('')
const userPhoto = ref('')
const userId = ref('')

// 언어에 따른 텍스트
const texts = {
  ko: {
    userProfile: '사용자 프로필',
    userID: 'User ID',
    copySuccess: 'User ID가 복사되었습니다!',
    logout: '로그아웃',
    logoutConfirm: '정말 로그아웃 하시겠습니까?',
    gameStats: '게임 통계',
    level: '레벨',
    points: '포인트',
    coins: '코인',
    catFragments: '고양이 파편',
    back: '← 뒤로'
  },
  en: {
    userProfile: 'User Profile',
    userID: 'User ID',
    copySuccess: 'User ID copied!',
    logout: 'Logout',
    logoutConfirm: 'Are you sure you want to logout?',
    gameStats: 'Game Stats',
    level: 'Level',
    points: 'Points',
    coins: 'Coins',
    catFragments: 'Cat Fragments',
    back: '← Back'
  }
}

// 현재 언어에 따른 텍스트
const currentTexts = computed(() => {
  return language.value === '한국어' ? texts.ko : texts.en
})

onMounted(() => {
  const user = getCurrentUser()
  if (user) {
    currentUser.value = user
    // appStore에서 사용자 데이터 로드
    store.loadCurrentUser()
    
    // 사용자 정보 설정
    userEmail.value = user.email || user.id || ''
    userName.value = user.name || user.displayName || userEmail.value.split('@')[0] || 'User'
    userPhoto.value = user.photoURL || ''
    userId.value = user.id || 'ID' + String(Math.random()).substring(2, 10)
  } else {
    // 로그인하지 않은 경우 로그인 페이지로 이동
    router.push('/login')
  }
  
  // localStorage에서 언어 설정 로드
  const savedLanguage = localStorage.getItem('appLanguage')
  if (savedLanguage) {
    language.value = savedLanguage
  }
  
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

// User ID 복사
const copyUserId = () => {
  navigator.clipboard.writeText(userId.value)
  alert(currentTexts.value.copySuccess)
}

// 로그아웃
const handleLogout = () => {
  if (!confirm(currentTexts.value.logoutConfirm)) {
    return
  }
  
  // sessionStorage 정리
  logoutUser()
  
  // 앱 스토어 상태 초기화
  logoutStore()
  
  // 로그인 페이지로 이동
  router.push('/login')
}

// 게임 통계
const gameStats = computed(() => {
  if (!currentUser.value) return null
  
  return {
    level: currentUser.value.gameData?.level || 1,
    points: currentUser.value.gameData?.coins || 0,
    coins: currentUser.value.gameData?.totalCoin || 0,
    catFragments: currentUser.value.gameData?.catFragments || currentUser.value.gameData?.catCount || 0
  }
})
</script>

<template>
  <div class="profilePage">
    <!-- 헤더 -->
    <Header :coinCount="coinCount" />
    
    <!-- 메인 콘텐츠 -->
    <main class="mainContent">
      <!-- 뒤로가기 버튼 -->
      <button class="backBtn" @click="router.push('/settings')">
        {{ currentTexts.back }}
      </button>
      
      <!-- 프로필 헤더 -->
      <div class="profileHeader">
        <!-- 프로필 이미지 -->
        <div class="profileImageWrapper">
          <img 
            v-if="userPhoto" 
            :src="userPhoto" 
            :alt="userName"
            class="profileImage"
          />
          <div v-else class="profileImagePlaceholder">
            {{ userName.charAt(0).toUpperCase() }}
          </div>
        </div>
        
        <!-- 사용자 정보 -->
        <div class="profileInfo">
          <h2 class="userName">{{ userName }}</h2>
          <p class="userEmail">{{ userEmail }}</p>
        </div>
      </div>
      
      <!-- User ID 섹션 -->
      <div class="settingGroup">
        <label class="settingLabel">{{ currentTexts.userID }}</label>
        <div class="settingInput">
          <span class="userId">{{ userId }}</span>
          <button class="copyBtn" @click="copyUserId">📋</button>
        </div>
      </div>
      
      <!-- 게임 통계 -->
      <div class="statsSection" v-if="gameStats">
        <h3 class="sectionTitle">{{ currentTexts.gameStats }}</h3>
        <div class="statsGrid">
          <div class="statCard">
            <div class="statIcon">⭐</div>
            <div class="statInfo">
              <div class="statLabel">{{ currentTexts.level }}</div>
              <div class="statValue">{{ gameStats.level }}</div>
            </div>
          </div>
          
          <div class="statCard">
            <div class="statIcon">💰</div>
            <div class="statInfo">
              <div class="statLabel">{{ currentTexts.points }}</div>
              <div class="statValue">{{ gameStats.points.toLocaleString() }}</div>
            </div>
          </div>
          
          <div class="statCard">
            <div class="statIcon">🪙</div>
            <div class="statInfo">
              <div class="statLabel">{{ currentTexts.coins }}</div>
              <div class="statValue">{{ gameStats.coins.toLocaleString() }}</div>
            </div>
          </div>
          
          <div class="statCard">
            <div class="statIcon">🐱</div>
            <div class="statInfo">
              <div class="statLabel">{{ currentTexts.catFragments }}</div>
              <div class="statValue">{{ gameStats.catFragments.toLocaleString() }}</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 로그아웃 버튼 -->
      <div class="logoutSection">
        <button class="logoutBtn" @click="handleLogout">
          {{ currentTexts.logout }}
        </button>
      </div>
    </main>
    
    <!-- 푸터 -->
    <Footer />
  </div>
</template>

<style scoped>
.profilePage {
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

/* 뒤로가기 버튼 */
.backBtn {
  background: rgba(15, 23, 42, 0.7);
  border: none;
  color: white;
  padding: 0.8rem 1.2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  align-self: flex-start;
}

.backBtn:hover {
  background: rgba(15, 23, 42, 0.9);
  transform: translateX(-2px);
}

/* 프로필 헤더 */
.profileHeader {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  background: rgba(15, 23, 42, 0.7);
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.profileImageWrapper {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #7DD3FC;
  box-shadow: 0 4px 20px rgba(125, 211, 252, 0.3);
}

.profileImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profileImagePlaceholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #7DD3FC 0%, #0EA5E9 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 700;
  color: white;
}

.profileInfo {
  text-align: center;
}

.userName {
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.userEmail {
  color: #94A3B8;
  font-size: 0.9rem;
  margin: 0;
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

.settingInput {
  background: rgba(15, 23, 42, 0.7);
  border-radius: 12px;
  padding: 1rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
}

.userId {
  font-family: monospace;
  font-size: 0.9rem;
  word-break: break-all;
  flex: 1;
  margin-right: 1rem;
}

.copyBtn {
  background: #7DD3FC;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s;
  flex-shrink: 0;
}

.copyBtn:hover {
  background: #61BBF5;
  transform: scale(1.05);
}

/* 게임 통계 섹션 */
.statsSection {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.sectionTitle {
  color: white;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.statsGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.statCard {
  background: rgba(15, 23, 42, 0.7);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s;
  border: 2px solid transparent;
}

.statCard:hover {
  background: rgba(15, 23, 42, 0.9);
  border-color: rgba(125, 211, 252, 0.3);
  transform: translateY(-2px);
}

.statIcon {
  font-size: 2rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(125, 211, 252, 0.2);
  border-radius: 12px;
  flex-shrink: 0;
}

.statInfo {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.statLabel {
  color: #94A3B8;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
}

.statValue {
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
}

/* 로그아웃 섹션 */
.logoutSection {
  margin-top: auto;
  padding-top: 2rem;
}

.logoutBtn {
  width: 100%;
  padding: 1.2rem;
  background: linear-gradient(135deg, #EF4444 0%, #DC2626 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
}

.logoutBtn:hover {
  background: linear-gradient(135deg, #DC2626 0%, #B91C1C 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
}

/* 모바일 반응형 */
@media (max-width: 480px) {
  .mainContent {
    padding: 1.2rem;
    gap: 1.5rem;
  }
  
  .profileHeader {
    padding: 1.5rem;
  }
  
  .profileImageWrapper {
    width: 100px;
    height: 100px;
  }
  
  .profileImagePlaceholder {
    font-size: 2.5rem;
  }
  
  .userName {
    font-size: 1.2rem;
  }
  
  .userEmail {
    font-size: 0.85rem;
  }
  
  .settingLabel {
    font-size: 0.85rem;
  }
  
  .sectionTitle {
    font-size: 0.95rem;
  }
  
  .statsGrid {
    gap: 0.8rem;
  }
  
  .statCard {
    padding: 1.2rem;
  }
  
  .statIcon {
    font-size: 1.5rem;
    width: 40px;
    height: 40px;
  }
  
  .statLabel {
    font-size: 0.8rem;
  }
  
  .statValue {
    font-size: 1.1rem;
  }
  
  .logoutBtn {
    font-size: 0.95rem;
    padding: 1rem;
  }
}

@media (max-width: 360px) {
  .statsGrid {
    grid-template-columns: 1fr;
  }
}
</style>

