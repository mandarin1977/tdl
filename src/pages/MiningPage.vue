<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCurrentUser, getI18nTexts } from '@/utils/userUtils'
import { useAppStore } from '@/store/appStore'

const router = useRouter()
// appStore 사용
const store = useAppStore()
// appStore에서 게임 데이터 가져오기 (반응형)
const coinCount = computed(() => store.state.coins)

// 다국어 텍스트
const texts = computed(() => getI18nTexts())

onMounted(() => {
  // appStore에서 사용자 데이터 로드
  store.loadCurrentUser()
  
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

const miningLevel = ref(1)
const miningProgress = ref(0)
const isMining = ref(false)
const resources = ref({
  stone: 0,
  iron: 0,
  gold: 0,
  diamond: 0
})

const startMining = () => {
  if (isMining.value) return
  
  isMining.value = true
  miningProgress.value = 0
  
  const miningInterval = setInterval(() => {
    miningProgress.value += 10
    
    if (miningProgress.value >= 100) {
      clearInterval(miningInterval)
      isMining.value = false
      miningProgress.value = 0
      
      // 랜덤 자원 획득
      const randomResource = Math.random()
      if (randomResource < 0.4) resources.value.stone++
      else if (randomResource < 0.7) resources.value.iron++
      else if (randomResource < 0.9) resources.value.gold++
      else resources.value.diamond++
    }
  }, 200)
}
</script>

<template>
  <div class="miningPage">
    <!-- 헤더 -->
    <Header :coinCount="coinCount" />
    
    <!-- 메인 콘텐츠 -->
    <main class="mainContent">
      <div class="miningContainer">
        <div class="pageHeader">
          <button class="backBtn" @click="router.push('/main')">{{ texts.back }}</button>
          <h2>⛏️ {{ texts.mining }}</h2>
        </div>
        
        <!-- 채굴 레벨 -->
        <div class="levelInfo">
          <span>{{ texts.miningLevel }}: {{ miningLevel }}</span>
        </div>
        
        <!-- 채굴 진행 상황 -->
        <div class="miningProgress">
          <div class="progressBar">
            <div 
              class="progressFill" 
              :style="{ width: miningProgress + '%' }"
            ></div>
          </div>
          <span class="progressText">{{ miningProgress }}%</span>
        </div>
        
        <!-- 채굴 버튼 -->
        <button 
          class="miningBtn"
          :class="{ mining: isMining }"
          @click="startMining"
          :disabled="isMining"
        >
          <span v-if="!isMining">⛏️ {{ texts.miningStart }}</span>
          <span v-else>⛏️ {{ texts.miningInProgress }}</span>
        </button>
        
        <!-- 보유 자원 -->
        <div class="resources">
          <h3>{{ texts.ownedResources }}</h3>
          <div class="resourceList">
            <div class="resourceItem">
              <span>🪨 {{ texts.stone }}</span>
              <span>{{ resources.stone }}</span>
            </div>
            <div class="resourceItem">
              <span>⚒️ {{ texts.iron }}</span>
              <span>{{ resources.iron }}</span>
            </div>
            <div class="resourceItem">
              <span>🥇 {{ texts.gold }}</span>
              <span>{{ resources.gold }}</span>
            </div>
            <div class="resourceItem">
              <span>💎 {{ texts.diamond }}</span>
              <span>{{ resources.diamond }}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    <!-- 푸터 -->
    <Footer />
  </div>
</template>

<style scoped>
.miningPage {
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
  margin: 0 auto;
}

.miningContainer {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  margin-top: 2rem;
}

.pageHeader {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.backBtn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.backBtn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

.pageHeader h2 {
  color: white;
  font-size: 2rem;
  margin: 0;
}

.levelInfo {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.8rem 1.6rem;
  border-radius: 20px;
  color: white;
  font-weight: 500;
}

.miningProgress {
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.progressBar {
  width: 100%;
  height: 20px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  overflow: hidden;
}

.progressFill {
  height: 100%;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  transition: width 0.2s ease;
}

.progressText {
  text-align: center;
  color: white;
  font-weight: 500;
}

.miningBtn {
  width: 200px;
  height: 60px;
  background: #fff;
  border-radius: 30px;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.miningBtn:hover:not(:disabled) {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.miningBtn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.miningBtn.mining {
  background: #ff6b6b;
  color: white;
}

.resources {
  width: 100%;
  max-width: 300px;
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
}

.resources h3 {
  color: white;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.resourceList {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.resourceItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
}

.resourceItem span:first-child {
  font-size: 1.1rem;
}

.resourceItem span:last-child {
  font-weight: 600;
  font-size: 1.1rem;
}
</style>
