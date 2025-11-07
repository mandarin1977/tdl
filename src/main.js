import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

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
import AttendancePage from './pages/AttendancePage.vue'
import NFTPage from './pages/NFTPage.vue'
import NotificationPage from './pages/NotificationPage.vue'
import ShopPage from './pages/ShopPage.vue'

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
  { path: '/attendance', component: AttendancePage },
  { path: '/nft', component: NFTPage },
  { path: '/notification', component: NotificationPage },
  { path: '/shop', component: ShopPage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
