import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import { getCurrentUser } from './utils/userUtils'
import { auth } from './firebase/config'
import { getUserGameData } from './firebase/config'

// 개발 모드에서 테스트 계정 생성 함수 사용 가능하도록
if (import.meta.env.DEV) {
  import('./utils/createTestAccount.js').then(() => {
    console.log('테스트 계정 생성 유틸리티가 로드되었습니다.')
  })
}

// ?�이지 컴포?�트??import
import LoadingScreen from './pages/LoadingScreen.vue'
import LoginScreen from './pages/LoginScreen.vue'
import SignupScreen from './pages/SignupScreen.vue'
import ForgotPasswordPage from './pages/ForgotPasswordPage.vue'
import ResetPasswordPage from './pages/ResetPasswordPage.vue'
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
import HomePage from './pages/HomePage.vue'

// 공개 ?�이지 (로그???�이 ?�근 가??
const publicRoutes = ['/loading', '/login', '/signup', '/forgot-password', '/reset-password']

// ?�우???�정
const routes = [
  { path: '/', redirect: '/loading' },
  { path: '/loading', component: LoadingScreen },
  { path: '/login', component: LoginScreen },
  { path: '/signup', component: SignupScreen },
  { path: '/forgot-password', component: ForgotPasswordPage },
  { path: '/reset-password', component: ResetPasswordPage },
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
  { path: '/shop', component: ShopPage },
  { path: '/home', component: HomePage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// Firebase 사용자를 앱 사용자 형식으로 변환하는 헬퍼 함수
const convertFirebaseUserToAppUser = (firebaseUser, gameData) => {
  return {
    id: firebaseUser.uid,
    email: firebaseUser.email,
    name: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || '사용자',
    photoURL: firebaseUser.photoURL,
    loginType: 'google',
    gameData: gameData || {
      level: 1,
      coins: 0,
      totalCoin: 0,
      catFragments: 50,
      nftCount: 0,
      miningCats: [null, null, null, null],
      huntingCats: [null, null, null, null],
      explorationCats: [null, null, null, null],
      productionCats: [null, null, null, null],
      inventory: []
    }
  }
}

// 라우터 가드: 인증 상태 확인
router.beforeEach(async (to, from, next) => {
  // sessionStorage에서 현재 사용자 확인
  let currentUser = getCurrentUser()
  let isAuthenticated = !!currentUser
  
  // sessionStorage에 사용자가 없지만 Firebase 인증 상태가 있는 경우 직접 처리
  // (Google 로그인 리다이렉트 직후 발생할 수 있는 상황)
  if (!isAuthenticated && auth && auth.currentUser) {
    console.log('Router guard: sessionStorage에 사용자 없지만 Firebase 인증 상태 있음, 직접 처리...')
    try {
      // Firebase에서 게임 데이터 가져오기
      const gameData = await getUserGameData(auth.currentUser.uid)
      const appUser = convertFirebaseUserToAppUser(auth.currentUser, gameData?.gameData)
      
      // sessionStorage에 저장
      sessionStorage.setItem('currentUser', JSON.stringify(appUser))
      currentUser = appUser
      isAuthenticated = true
      console.log('Router guard: Firebase 인증 상태로부터 사용자 생성 및 저장 완료:', appUser.email)
    } catch (error) {
      console.error('Router guard: Firebase 사용자 처리 오류:', error)
      // 오류가 발생해도 계속 진행 (다음 체크에서 처리될 수 있음)
    }
  }
  
  // Google 로그인 리다이렉트 처리 중인지 확인 (App.vue의 handleGoogleRedirect가 실행 중일 수 있음)
  // 리다이렉트 직후에는 잠시 대기하여 인증 상태가 설정될 시간을 줌
  if (!isAuthenticated && !auth?.currentUser && to.path !== '/login' && to.path !== '/signup' && to.path !== '/loading') {
    // 잠시 대기 (handleGoogleRedirect가 실행될 시간을 줌)
    await new Promise(resolve => setTimeout(resolve, 100))
    
    // 다시 확인
    currentUser = getCurrentUser()
    isAuthenticated = !!currentUser
    
    // 여전히 없지만 Firebase 인증 상태가 있으면 처리
    if (!isAuthenticated && auth && auth.currentUser) {
      try {
        const gameData = await getUserGameData(auth.currentUser.uid)
        const appUser = convertFirebaseUserToAppUser(auth.currentUser, gameData?.gameData)
        sessionStorage.setItem('currentUser', JSON.stringify(appUser))
        currentUser = appUser
        isAuthenticated = true
        console.log('Router guard: 대기 후 Firebase 인증 상태 확인 완료:', appUser.email)
      } catch (error) {
        console.error('Router guard: 대기 후 Firebase 사용자 처리 오류:', error)
      }
    }
  }
  
  const isPublicRoute = publicRoutes.includes(to.path)

  // 로그인된 상태에서 로그인/회원가입 페이지 접근 시 홈으로 리다이렉트
  if (isAuthenticated && (to.path === '/login' || to.path === '/signup')) {
    console.log('Router guard: authenticated user hitting login/signup, redirecting to /home')
    next('/home')
    return
  }

  // 로그인하지 않은 상태에서 보호된 페이지 접근 시 로그인 페이지로 리다이렉트
  if (!isAuthenticated && !isPublicRoute) {
    console.log('Router guard: unauthenticated access to protected route, redirecting to /login', {
      to: to.path,
      hasSessionStorage: !!sessionStorage.getItem('currentUser'),
      hasFirebaseAuth: auth && !!auth.currentUser
    })
    next('/login')
    return
  }

  // 정상 접근
  next()
})

const app = createApp(App)
app.use(router)
app.mount('#app')
