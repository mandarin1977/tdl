import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import { getCurrentUser } from './utils/userUtils'

// ?�이지 컴포?�트??import
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

// 공개 ?�이지 (로그???�이 ?�근 가??
const publicRoutes = ['/loading', '/login', '/signup']

// ?�우???�정
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

// 라우터 가드: 인증 상태 확인
router.beforeEach((to, from, next) => {
  // sessionStorage에서 현재 사용자 확인
  const currentUser = getCurrentUser()
  const isAuthenticated = !!currentUser
  const isPublicRoute = publicRoutes.includes(to.path)

  // 로그인된 상태에서 로그인/회원가입 페이지 접근 시 메인으로 리다이렉트
  if (isAuthenticated && (to.path === '/login' || to.path === '/signup')) {
    console.log('Router guard: authenticated user hitting login/signup, redirecting to /main')
    next('/main')
    return
  }

  // 로그인하지 않은 상태에서 보호된 페이지 접근 시 로그인 페이지로 리다이렉트
  if (!isAuthenticated && !isPublicRoute) {
    console.log('Router guard: unauthenticated access to protected route, redirecting to /login', {
      to: to.path,
      hasSessionStorage: !!sessionStorage.getItem('currentUser')
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
