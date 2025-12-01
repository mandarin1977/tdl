<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getI18nTexts } from '@/utils/userUtils'
import bottom001 from '@/assets/img/bottom001.png'
import bottom001_on from '@/assets/img/bottom001_on.png'
import bottom002 from '@/assets/img/bottom002.png'
import bottom002_on from '@/assets/img/bottom002_on.png'
import bottom003 from '@/assets/img/bottom003.png'
import bottom003_on from '@/assets/img/bottom003_on.png'
import bottom004 from '@/assets/img/bottom004.png'
import bottom004_on from '@/assets/img/bottom004_on.png'
import bottom005 from '@/assets/img/bottom005.png'
import bottom005_on from '@/assets/img/bottom005_on.png'

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
      activeTab.value = 'exchange'
      break
    case '/inventory':
      activeTab.value = 'inventory'
      break
    case '/factory':
      activeTab.value = 'factory'
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
  { id: 'game', img: bottom001, imgActive: bottom001_on, label: texts.value.game },
  { id: 'exchange', img: bottom002, imgActive: bottom002_on, label: texts.value.exchange },
  { id: 'home', emoji: '🏠', label: texts.value.home },
  { id: 'inventory', img: bottom004, imgActive: bottom004_on, label: texts.value.inventory },
  { id: 'factory', img: bottom005, imgActive: bottom005_on, label: texts.value.factory }
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
    case 'exchange':
      router.push('/exchange')
      break
    case 'inventory':
      router.push('/inventory')
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
      <div class="footerBackground"></div>
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
            <span class="tabLabel">{{ tab.label }}</span>
          </div>
          <div v-if="activeTab === tab.id" class="activeIndicator"></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  height: 70px;
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

.footerBackground {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10px;
  background: #80BEBD;
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
  gap: 0.25rem;
}

.tabContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  position: relative;
  z-index: 2;
}

.activeIndicator {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: auto;
  aspect-ratio: 3 / 1.3;
  background: #80BEBD;
  border-radius: 50%;
  z-index: 1;
}

.tabIcon {
  width: 28px;
  height: 28px;
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

.tabLabel {
  color: #fff;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.tabItem.active .tabLabel {
  font-weight: 600;
}

/* 반응형 */
@media (max-width: 480px) {
  .tabLabel {
    font-size: 0.9rem;
  }
  
  .tabIcon {
    width: 24px;
    height: 24px;
  }
}

@media (max-width: 360px) {
  .tabLabel {
    font-size: 0.8rem;
  }
  
  .tabIcon {
    width: 22px;
    height: 22px;
  }
}
</style>
