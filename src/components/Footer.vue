<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getI18nTexts } from '@/utils/userUtils'
import tabIcon1 from '@/assets/img/tabIcon1.png'
import tabIcon2 from '@/assets/img/tabIcon2.png'
import tabIcon3 from '@/assets/img/tabIcon3.png'
import tabIcon4 from '@/assets/img/tabIcon4.png'
import optionButton from '@/assets/img/optionButton.png'

const router = useRouter()
const activeTab = ref('home')

const language = ref(localStorage.getItem('appLanguage') || 'English')
const texts = computed(() => getI18nTexts())

// localStorage 변경 감지
const handleStorageChange = (e) => {
  if (e.key === 'appLanguage') {
    language.value = e.newValue || 'English'
  }
}

// 현재 경로에 따라 activeTab 설정
const setActiveTabByRoute = () => {
  const path = router.currentRoute.value.path
  switch(path) {
    case '/main':
      activeTab.value = 'game'
      break
    case '/home':
      activeTab.value = 'home'
      break
    case '/exchange':
      activeTab.value = 'exchange' // Exchange 페이지일 때 네 번째 아이콘 활성화
      break
    case '/inventory':
      activeTab.value = 'inventory' // Inventory 페이지일 때 두 번째 아이콘 활성화
      break
    case '/factory':
      activeTab.value = 'factory'
      break
    case '/settings':
      activeTab.value = 'settings' // Settings 페이지일 때 마지막 아이콘 활성화
      break
    default:
      activeTab.value = 'home'
  }
}

let interval = null

onMounted(() => {
  setActiveTabByRoute()
  
  // Storage 이벤트 리스너 등록
  window.addEventListener('storage', handleStorageChange)
  
  // 같은 페이지 내 localStorage 변경 감지
  interval = setInterval(() => {
    const currentLang = localStorage.getItem('appLanguage') || 'English'
    if (currentLang !== language.value) {
      language.value = currentLang
    }
  }, 100)
})

onUnmounted(() => {
  // 컴포넌트 언마운트 시 정리
  window.removeEventListener('storage', handleStorageChange)
  if (interval) {
    clearInterval(interval)
  }
})

// 경로 변경 감지
watch(() => router.currentRoute.value.path, () => {
  setActiveTabByRoute()
})

// 언어 변경 감지
watch(language, () => {
  // 언어가 변경되면 자동으로 갱신됨
})

const tabs = computed(() => [
  { id: 'game', img: tabIcon1, imgActive: tabIcon1, label: texts.value.game },
  { id: 'inventory', img: tabIcon2, imgActive: tabIcon2, label: texts.value.inventory }, // 두 번째 아이콘
  { id: 'home', img: tabIcon3, imgActive: tabIcon3, label: texts.value.home },
  { id: 'exchange', img: tabIcon4, imgActive: tabIcon4, label: texts.value.exchange }, // 네 번째 아이콘
  { id: 'settings', img: optionButton, imgActive: optionButton, label: texts.value.settings || 'Settings' } // 마지막 아이콘
])

const setActiveTab = (tabId) => {
  activeTab.value = tabId
  
  // 각 탭별 페이지 이동
  switch(tabId) {
    case 'home':
      router.push('/home')
      break
    case 'game':
      router.push('/main')
      break
    case 'inventory':
      // 두 번째 아이콘 클릭 시 Inventory 페이지로 이동
      router.push('/inventory')
      break
    case 'exchange':
      // 네 번째 아이콘 클릭 시 Exchange 페이지로 이동
      router.push('/exchange')
      break
    case 'settings':
      // 마지막 아이콘 클릭 시 Settings 페이지로 이동
      router.push('/settings')
      break
    case 'factory':
      router.push('/factory')
      break
  }
}
</script>

<template>
  <footer>
    <div class="footerCont">
      <div class="footerBar">
        <div 
          v-for="tab in tabs" 
          :key="tab.id"
          class="tabItem"
          :class="{ active: activeTab === tab.id }"
          @click="setActiveTab(tab.id)"
        >
          <div class="tabContent">
            <img 
              v-if="tab.img"
              :src="activeTab === tab.id ? tab.imgActive : tab.img"
              :alt="tab.label"
              class="tabIcon"
            />
            <span v-if="tab.emoji" class="tabEmoji">{{ tab.emoji }}</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  height: 55px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow-y: clip;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
}

.footerCont {
  width: 100%;
  height: 100%;
  position: relative;
}

.footerBar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 0 0.5rem;
}

.tabItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1;
  cursor: pointer;
  height: 100%;
}

.tabContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.tabIcon {
  width: 40px;
  height: 40px;
  object-fit: contain;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.tabEmoji {
  font-size: 28px;
  line-height: 1;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

/* 반응형 */
@media (max-width: 480px) {
  .tabIcon {
    width: 36px;
    height: 36px;
  }
}

@media (max-width: 360px) {
  .tabIcon {
    width: 32px;
    height: 32px;
  }
}
</style>
