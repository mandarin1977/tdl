<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCurrentUser } from '@/utils/userUtils'

const router = useRouter()

const coinCount = ref(0)

onMounted(() => {
  const currentUser = getCurrentUser()
  if (currentUser) {
    coinCount.value = currentUser.gameData?.coins || 0
  }
})

const explorationLevel = ref(1)
const explorationProgress = ref(0)
const isExploring = ref(false)
const currentLocation = ref(null)
const discoveredLocations = ref([])

const locations = ref([
  { 
    name: '신비한 숲', 
    level: 1, 
    difficulty: '쉬움', 
    rewards: ['나무', '열매', '약초'],
    description: '평화로운 숲에서 기본 자원을 수집할 수 있습니다.',
    discovered: true
  },
  { 
    name: '고대 유적', 
    level: 2, 
    difficulty: '보통', 
    rewards: ['고대 유물', '마법석', '보석'],
    description: '신비한 힘이 깃든 고대 유적지입니다.',
    discovered: false
  },
  { 
    name: '용의 동굴', 
    level: 3, 
    difficulty: '어려움', 
    rewards: ['용의 비늘', '마나 크리스탈', '희귀 보석'],
    description: '위험하지만 귀중한 보물이 숨겨진 곳입니다.',
    discovered: false
  },
  { 
    name: '천공의 섬', 
    level: 4, 
    difficulty: '매우 어려움', 
    rewards: ['천공석', '신비한 에너지', '전설의 아이템'],
    description: '구름 위에 떠있는 신비한 섬입니다.',
    discovered: false
  }
])

const explorationRewards = ref({
  wood: 0,
  fruit: 0,
  herb: 0,
  artifact: 0,
  magicStone: 0,
  gem: 0,
  dragonScale: 0,
  manaCrystal: 0,
  rareGem: 0,
  skyStone: 0,
  mysteriousEnergy: 0,
  legendaryItem: 0
})

const selectLocation = (location) => {
  if (location.discovered) {
    currentLocation.value = location
  }
}

const startExploration = () => {
  if (!currentLocation.value || isExploring.value) return
  
  isExploring.value = true
  explorationProgress.value = 0
  
  const explorationInterval = setInterval(() => {
    explorationProgress.value += 5
    
    if (explorationProgress.value >= 100) {
      clearInterval(explorationInterval)
      isExploring.value = false
      explorationProgress.value = 0
      
      // 탐험 완료 - 랜덤 보상 획득
      const randomReward = Math.floor(Math.random() * currentLocation.value.rewards.length)
      const reward = currentLocation.value.rewards[randomReward]
      
      // 보상 추가 (간단한 매핑)
      const rewardMap = {
        '나무': 'wood',
        '열매': 'fruit',
        '약초': 'herb',
        '고대 유물': 'artifact',
        '마법석': 'magicStone',
        '보석': 'gem',
        '용의 비늘': 'dragonScale',
        '마나 크리스탈': 'manaCrystal',
        '희귀 보석': 'rareGem',
        '천공석': 'skyStone',
        '신비한 에너지': 'mysteriousEnergy',
        '전설의 아이템': 'legendaryItem'
      }
      
      if (rewardMap[reward]) {
        explorationRewards.value[rewardMap[reward]]++
      }
      
      // 새로운 지역 발견 확률
      if (Math.random() < 0.3) {
        const undiscoveredLocation = locations.value.find(loc => !loc.discovered)
        if (undiscoveredLocation) {
          undiscoveredLocation.discovered = true
        }
      }
      
      // 탐험 레벨 업
      explorationLevel.value++
      
      // 현재 위치 리셋
      setTimeout(() => {
        currentLocation.value = null
      }, 2000)
    }
  }, 300)
}
</script>

<template>
  <div class="explorationPage">
    <!-- 헤더 -->
    <Header :coinCount="coinCount" />
    
    <!-- 메인 콘텐츠 -->
    <main class="mainContent">
      <div class="explorationContainer">
        <div class="pageHeader">
          <button class="backBtn" @click="router.push('/main')">← 뒤로</button>
          <h2>🗺️ 탐험</h2>
        </div>
        
        <!-- 탐험 레벨 -->
        <div class="levelInfo">
          <span>탐험 레벨: {{ explorationLevel }}</span>
        </div>
        
        <!-- 지역 선택 -->
        <div class="locationSelection">
          <h3>탐험 지역</h3>
          <div class="locationList">
            <div 
              v-for="location in locations" 
              :key="location.name"
              class="locationCard"
              :class="{ 
                selected: currentLocation?.name === location.name,
                undiscovered: !location.discovered 
              }"
              @click="selectLocation(location)"
            >
              <div class="locationInfo">
                <div class="locationHeader">
                  <span class="locationName">{{ location.name }}</span>
                  <span class="locationLevel">Lv.{{ location.level }}</span>
                </div>
                <span class="locationDifficulty">{{ location.difficulty }}</span>
                <p class="locationDescription">{{ location.description }}</p>
                <div class="locationRewards">
                  <span v-for="reward in location.rewards" :key="reward" class="rewardTag">
                    {{ reward }}
                  </span>
                </div>
              </div>
              <div v-if="!location.discovered" class="undiscoveredOverlay">
                <span>🔒 미발견</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 현재 탐험 지역 -->
        <div v-if="currentLocation" class="currentExploration">
          <h3>{{ currentLocation.name }} 탐험 중</h3>
          
          <!-- 탐험 진행 상황 -->
          <div class="explorationProgress">
            <div class="progressBar">
              <div 
                class="progressFill" 
                :style="{ width: explorationProgress + '%' }"
              ></div>
            </div>
            <span class="progressText">{{ explorationProgress }}%</span>
          </div>
          
          <!-- 탐험 버튼 -->
          <button 
            class="explorationBtn"
            :class="{ exploring: isExploring }"
            @click="startExploration"
            :disabled="isExploring"
          >
            <span v-if="!isExploring">🗺️ 탐험 시작</span>
            <span v-else>🗺️ 탐험 중...</span>
          </button>
        </div>
        
        <!-- 탐험 보상 -->
        <div class="explorationRewards">
          <h3>탐험 보상</h3>
          <div class="rewardsGrid">
            <div 
              v-for="(amount, reward) in explorationRewards" 
              :key="reward"
              class="rewardItem"
              v-show="amount > 0"
            >
              <span class="rewardIcon">
                {{ reward === 'wood' ? '🪵' : 
                   reward === 'fruit' ? '🍎' : 
                   reward === 'herb' ? '🌿' : 
                   reward === 'artifact' ? '🏺' : 
                   reward === 'magicStone' ? '💎' : 
                   reward === 'gem' ? '💎' : 
                   reward === 'dragonScale' ? '🐉' : 
                   reward === 'manaCrystal' ? '🔮' : 
                   reward === 'rareGem' ? '💠' : 
                   reward === 'skyStone' ? '☁️' : 
                   reward === 'mysteriousEnergy' ? '✨' : 
                   reward === 'legendaryItem' ? '⭐' : '🎁' }}
              </span>
              <span class="rewardAmount">{{ amount }}</span>
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
.explorationPage {
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

.explorationContainer {
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
  text-align: center;
}

.locationSelection, .currentExploration, .explorationRewards {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
}

.locationSelection h3, .currentExploration h3, .explorationRewards h3 {
  color: white;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.locationList {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.locationCard {
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
}

.locationCard:hover:not(.undiscovered) {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.02);
}

.locationCard.selected {
  background: rgba(102, 126, 234, 0.3);
  border: 2px solid rgba(102, 126, 234, 0.5);
}

.locationCard.undiscovered {
  opacity: 0.5;
  cursor: not-allowed;
}

.locationHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.locationName {
  font-weight: 600;
  font-size: 1.1rem;
}

.locationLevel {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  font-size: 0.8rem;
}

.locationDifficulty {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.8;
}

.locationDescription {
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
  line-height: 1.4;
}

.locationRewards {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.rewardTag {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.2rem 0.5rem;
  border-radius: 8px;
  font-size: 0.8rem;
}

.undiscoveredOverlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-weight: 600;
}

.explorationProgress {
  width: 100%;
  margin-bottom: 1rem;
}

.progressBar {
  width: 100%;
  height: 20px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progressFill {
  height: 100%;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  transition: width 0.3s ease;
}

.progressText {
  text-align: center;
  color: white;
  font-weight: 500;
  display: block;
}

.explorationBtn {
  width: 100%;
  height: 50px;
  background: #fff;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  color: #333;
}

.explorationBtn:hover:not(:disabled) {
  transform: scale(1.02);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.explorationBtn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.explorationBtn.exploring {
  background: #4facfe;
  color: white;
}

.rewardsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 0.8rem;
}

.rewardItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
}

.rewardIcon {
  font-size: 1.5rem;
}

.rewardAmount {
  font-weight: 600;
  font-size: 1rem;
}
</style>
