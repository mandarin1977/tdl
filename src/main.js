import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import { getCurrentUser } from './utils/userUtils'
import { handleGoogleRedirect } from './utils/firebaseAuth'

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

// 리다이렉트 결과 처리 플래그 (중복 처리 방지)
let redirectResultProcessed = false

// 라우터 가드: 인증 상태에 따른 리다이렉트
router.beforeEach(async (to, from, next) => {
  // 리다이렉트 결과 처리 (Google 로그인 후 돌아온 경우)
  // 모든 경로에서 확인하되, 한 번만 처리
  if (!redirectResultProcessed) {
    try {
      console.log('라우터 가드: 리다이렉트 결과 확인 중...', to.path)
      const redirectResult = await handleGoogleRedirect()
      console.log('라우터 가드: 리다이렉트 결과:', redirectResult)
      
      if (redirectResult && redirectResult.success && redirectResult.user) {
        // 리다이렉트 로그인 성공 - 메인으로 이동
        redirectResultProcessed = true
        console.log('라우터 가드: 리다이렉트 로그인 성공, 메인으로 이동')
        next('/main')
        return
      }
    } catch (error) {
      // 리다이렉트 결과가 없거나 오류인 경우 정상 진행
      console.log('라우터 가드: 리다이렉트 결과 없음:', error.message)
    }
    redirectResultProcessed = true
  }
  
  const currentUser = getCurrentUser()
  const isAuthenticated = !!currentUser
  const isPublicRoute = publicRoutes.includes(to.path)

  console.log('라우터 가드: 인증 상태 확인', { 
    path: to.path, 
    isAuthenticated, 
    isPublicRoute,
    currentUser: currentUser?.email 
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
