import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import { getCurrentUser } from './utils/userUtils'
import { handleGoogleRedirect, onAuthStateChange } from './utils/firebaseAuth'
import { auth } from './firebase/config'

// 페이지 컴포넌트들 import
import LoadingScreen from './pages/LoadingScreen.vue'
import LoginScreen from './pages/LoginScreen.vue'
import SignupScreen from './pages/SignupScreen.vue'
import MainScreen from './pages/MainScreen.vue'
import MiningPage from './pages/MiningPage.vue'
import HuntingPage from './pages/HuntingPage.vue'
import ExplorationPage from './pages/ExplorationPage.vue'
import ProductionPage from './pages/ProductionPage.vue'
import ExchangePage from './pages/ExchangePage.vue'
import QuestPage from './pages/QuestPage.vue'
import InventoryPage from './pages/InventoryPage.vue'
import FactoryPage from './pages/FactoryPage.vue'
import SettingsPage from './pages/SettingsPage.vue'
import UserProfilePage from './pages/UserProfilePage.vue'
import AttendancePage from './pages/AttendancePage.vue'
import NFTPage from './pages/NFTPage.vue'
import NotificationPage from './pages/NotificationPage.vue'
import ShopPage from './pages/ShopPage.vue'

// 공개 페이지 (로그인 없이 접근 가능)
const publicRoutes = ['/loading', '/login', '/signup']

// 라우터 설정
const routes = [
  { path: '/', redirect: '/loading' },
  { path: '/loading', component: LoadingScreen },
  { path: '/login', component: LoginScreen },
  { path: '/signup', component: SignupScreen },
  { path: '/main', component: MainScreen },
  { path: '/mining', component: MiningPage },
  { path: '/hunting', component: HuntingPage },
  { path: '/exploration', component: ExplorationPage },
  { path: '/production', component: ProductionPage },
  { path: '/exchange', component: ExchangePage },
  { path: '/quest', component: QuestPage },
  { path: '/inventory', component: InventoryPage },
  { path: '/factory', component: FactoryPage },
  { path: '/settings', component: SettingsPage },
  { path: '/profile', component: UserProfilePage },
  { path: '/attendance', component: AttendancePage },
  { path: '/nft', component: NFTPage },
  { path: '/notification', component: NotificationPage },
  { path: '/shop', component: ShopPage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// Firebase 인증 상태 변경 리스너 설정
let authStateListenerSetup = false

if (!authStateListenerSetup) {
  authStateListenerSetup = true
  
  // Firebase 인증 상태 변경 감지 (모바일 리다이렉트 대응)
  onAuthStateChange(async (appUser) => {
    if (appUser) {
      console.log('Firebase 인증 상태 변경: 로그인됨', appUser.email)
      
      // 세션 스토리지에 저장 (아직 없을 경우)
      const currentUser = getCurrentUser()
      if (!currentUser || currentUser.id !== appUser.id) {
        sessionStorage.setItem('currentUser', JSON.stringify(appUser))
        console.log('세션 스토리지에 사용자 정보 저장 완료')
        
        // 로그인 페이지에 있다면 메인으로 이동
        if (router.currentRoute.value.path === '/login' || router.currentRoute.value.path === '/signup') {
          console.log('Firebase 인증 상태 변경: 로그인 페이지에서 메인으로 이동')
          router.push('/main')
        }
      }
    } else {
      console.log('Firebase 인증 상태 변경: 로그아웃됨')
      // 로그아웃 처리
      sessionStorage.removeItem('currentUser')
    }
  })
}

// 라우터 가드: 인증 상태에 따른 리다이렉트
router.beforeEach(async (to, from, next) => {
  // 먼저 Firebase 인증 상태 확인 (모바일 리다이렉트 대응)
  const firebaseUser = auth.currentUser
  if (firebaseUser) {
    console.log('라우터 가드: Firebase 인증 상태 확인됨', firebaseUser.email)
    
    // 세션 스토리지에 저장되어 있는지 확인
    const currentUser = getCurrentUser()
    if (!currentUser || currentUser.id !== firebaseUser.uid) {
      // 세션 스토리지에 없으면 저장
      try {
        const { getUserGameData } = await import('./firebase/config')
        const { convertFirebaseUserToAppUser } = await import('./utils/firebaseAuth')
        const gameData = await getUserGameData(firebaseUser.uid)
        const appUser = convertFirebaseUserToAppUser(firebaseUser, gameData?.gameData)
        sessionStorage.setItem('currentUser', JSON.stringify(appUser))
        console.log('라우터 가드: 세션 스토리지에 저장 완료')
      } catch (error) {
        console.error('라우터 가드: 사용자 데이터 저장 오류:', error)
      }
    }
    
    // 로그인/회원가입 페이지에 있다면 메인으로 이동
    if (to.path === '/login' || to.path === '/signup') {
      console.log('라우터 가드: Firebase 인증 확인, 메인으로 이동')
      next('/main')
      return
    }
  }
  
  // 리다이렉트 결과 처리 (Google 로그인 후 돌아온 경우)
  // Firebase 인증 상태가 없을 때만 확인
  if (!firebaseUser) {
    try {
      console.log('라우터 가드: 리다이렉트 결과 확인 중...', to.path)
      const redirectResult = await handleGoogleRedirect()
      console.log('라우터 가드: 리다이렉트 결과:', redirectResult)
      
      if (redirectResult && redirectResult.success && redirectResult.user) {
        // 리다이렉트 로그인 성공 - 메인으로 이동
        console.log('라우터 가드: 리다이렉트 로그인 성공, 메인으로 이동')
        next('/main')
        return
      }
    } catch (error) {
      // 리다이렉트 결과가 없거나 오류인 경우 정상 진행
      console.log('라우터 가드: 리다이렉트 결과 없음:', error.message)
    }
  }
  
  const currentUser = getCurrentUser()
  const isAuthenticated = !!currentUser
  const isPublicRoute = publicRoutes.includes(to.path)

  console.log('라우터 가드: 인증 상태 확인', { 
    path: to.path, 
    isAuthenticated, 
    isPublicRoute,
    currentUser: currentUser?.email,
    firebaseUser: firebaseUser?.email
  })

  // 로그인된 상태에서 로그인/회원가입 페이지 접근 시 메인으로 리다이렉트
  if (isAuthenticated && (to.path === '/login' || to.path === '/signup')) {
    console.log('라우터 가드: 이미 로그인됨, 메인으로 이동')
    next('/main')
    return
  }

  // 로그인하지 않은 상태에서 보호된 페이지 접근 시 로그인 페이지로 리다이렉트
  if (!isAuthenticated && !isPublicRoute) {
    console.log('라우터 가드: 인증 필요, 로그인 페이지로 이동')
    next('/login')
    return
  }

  // 정상 접근
  console.log('라우터 가드: 정상 접근 허용')
  next()
})

const app = createApp(App)
app.use(router)
app.mount('#app')
