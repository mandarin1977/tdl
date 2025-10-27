<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { getCurrentUser, updateUserCoins } from '@/utils/userUtils'
import '@/styles/main.css'

const router = useRouter()

// 현재 사용자 정보
const currentUser = ref(null)

// 현재 활성화된 게임 모드
const activeMode = ref('main')

// 코인 수
const coinCount = ref(0)

// 말풍선 관련
const speechBubbles = ref([])

// 채굴 클릭 카운터
const miningClickCount = ref(0)

// 채굴 버튼 상태 관리
const isMiningComplete = ref(false)
const showNewMiningButton = ref(true)

// 탐험 클릭 카운터
const explorationClickCount = ref(0)
const isExplorationComplete = ref(false)
const showNewExplorationButton = ref(true)

// 사냥 클릭 카운터
const huntingClickCount = ref(0)
const isHuntingComplete = ref(false)
const showNewHuntingButton = ref(true)

// 생산 클릭 카운터
const productionClickCount = ref(0)
const isProductionComplete = ref(false)
const showNewProductionButton = ref(true)

// 게임 모드 변경 함수
const setActiveMode = (mode) => {
  activeMode.value = mode
  
  // 모든 모드의 카운터와 상태 리셋
  miningClickCount.value = 0
  isMiningComplete.value = false
  showNewMiningButton.value = true
  
  explorationClickCount.value = 0
  isExplorationComplete.value = false
  showNewExplorationButton.value = true
  
  huntingClickCount.value = 0
  isHuntingComplete.value = false
  showNewHuntingButton.value = true
  
  productionClickCount.value = 0
  isProductionComplete.value = false
  showNewProductionButton.value = true
}

// 라우터 이벤트 감지
const handleRouteChange = () => {
  // 메인 화면으로 돌아올 때 메인 모드로 리셋
  if (router.currentRoute.value.path === '/main') {
    activeMode.value = 'main'
  }
}


onMounted(() => {
  // 현재 사용자 정보 로드
  currentUser.value = getCurrentUser()
  if (currentUser.value) {
    coinCount.value = currentUser.value.gameData?.coins || 0
  }
  
  // 라우터 이벤트 리스너 등록
  router.afterEach(handleRouteChange)
})

onUnmounted(() => {
  // 컴포넌트 언마운트 시 이벤트 리스너 제거
  router.afterEach(handleRouteChange)
})

// 클릭 이벤트 함수
const handleClick = (mode) => {
  // 각 모드별로 10번 클릭해야 돈 획득
  if (mode === 'mining') {
    miningClickCount.value++
    
    if (miningClickCount.value >= 10) {
      coinCount.value += 100
      miningClickCount.value = 0
      isMiningComplete.value = true
      showNewMiningButton.value = false
      
      // 사용자 데이터 업데이트
      if (currentUser.value) {
        updateUserCoins(currentUser.value.id, coinCount.value)
      }
      
      const bubble = {
        id: Date.now(),
        text: '채굴 완료! 100원 획득!',
        x: Math.random() * 300 + 100,
        y: Math.random() * 200 + 150
      }
      speechBubbles.value.push(bubble)
      
      setTimeout(() => {
        const index = speechBubbles.value.findIndex(b => b.id === bubble.id)
        if (index > -1) {
          speechBubbles.value.splice(index, 1)
        }
      }, 3000)
      
      setTimeout(() => {
        isMiningComplete.value = false
        showNewMiningButton.value = true
      }, 1500)
    } else {
      const bubble = {
        id: Date.now(),
        text: `채굴 진행: ${miningClickCount.value}/10`,
        x: Math.random() * 300 + 100,
        y: Math.random() * 200 + 150
      }
      speechBubbles.value.push(bubble)
      
      setTimeout(() => {
        const index = speechBubbles.value.findIndex(b => b.id === bubble.id)
        if (index > -1) {
          speechBubbles.value.splice(index, 1)
        }
      }, 2000)
    }
  } else if (mode === 'exploration') {
    explorationClickCount.value++
    
    if (explorationClickCount.value >= 10) {
      coinCount.value += 100
      explorationClickCount.value = 0
      isExplorationComplete.value = true
      showNewExplorationButton.value = false
      
      // 사용자 데이터 업데이트
      if (currentUser.value) {
        updateUserCoins(currentUser.value.id, coinCount.value)
      }
      
      const bubble = {
        id: Date.now(),
        text: '탐험 완료! 100원 획득!',
        x: Math.random() * 300 + 100,
        y: Math.random() * 200 + 150
      }
      speechBubbles.value.push(bubble)
      
      setTimeout(() => {
        const index = speechBubbles.value.findIndex(b => b.id === bubble.id)
        if (index > -1) {
          speechBubbles.value.splice(index, 1)
        }
      }, 3000)
      
      setTimeout(() => {
        isExplorationComplete.value = false
        showNewExplorationButton.value = true
      }, 1500)
    } else {
      const bubble = {
        id: Date.now(),
        text: `탐험 진행: ${explorationClickCount.value}/10`,
        x: Math.random() * 300 + 100,
        y: Math.random() * 200 + 150
      }
      speechBubbles.value.push(bubble)
      
      setTimeout(() => {
        const index = speechBubbles.value.findIndex(b => b.id === bubble.id)
        if (index > -1) {
          speechBubbles.value.splice(index, 1)
        }
      }, 2000)
    }
  } else if (mode === 'hunting') {
    huntingClickCount.value++
    
    if (huntingClickCount.value >= 10) {
      coinCount.value += 100
      huntingClickCount.value = 0
      isHuntingComplete.value = true
      showNewHuntingButton.value = false
      
      // 사용자 데이터 업데이트
      if (currentUser.value) {
        updateUserCoins(currentUser.value.id, coinCount.value)
      }
      
      const bubble = {
        id: Date.now(),
        text: '사냥 완료! 100원 획득!',
        x: Math.random() * 300 + 100,
        y: Math.random() * 200 + 150
      }
      speechBubbles.value.push(bubble)
      
      setTimeout(() => {
        const index = speechBubbles.value.findIndex(b => b.id === bubble.id)
        if (index > -1) {
          speechBubbles.value.splice(index, 1)
        }
      }, 3000)
      
      setTimeout(() => {
        isHuntingComplete.value = false
        showNewHuntingButton.value = true
      }, 1500)
    } else {
      const bubble = {
        id: Date.now(),
        text: `사냥 진행: ${huntingClickCount.value}/10`,
        x: Math.random() * 300 + 100,
        y: Math.random() * 200 + 150
      }
      speechBubbles.value.push(bubble)
      
      setTimeout(() => {
        const index = speechBubbles.value.findIndex(b => b.id === bubble.id)
        if (index > -1) {
          speechBubbles.value.splice(index, 1)
        }
      }, 2000)
    }
  } else if (mode === 'production') {
    productionClickCount.value++
    
    if (productionClickCount.value >= 10) {
      coinCount.value += 100
      productionClickCount.value = 0
      isProductionComplete.value = true
      showNewProductionButton.value = false
      
      // 사용자 데이터 업데이트
      if (currentUser.value) {
        updateUserCoins(currentUser.value.id, coinCount.value)
      }
      
      const bubble = {
        id: Date.now(),
        text: '생산 완료! 100원 획득!',
        x: Math.random() * 300 + 100,
        y: Math.random() * 200 + 150
      }
      speechBubbles.value.push(bubble)
      
      setTimeout(() => {
        const index = speechBubbles.value.findIndex(b => b.id === bubble.id)
        if (index > -1) {
          speechBubbles.value.splice(index, 1)
        }
      }, 3000)
      
      setTimeout(() => {
        isProductionComplete.value = false
        showNewProductionButton.value = true
      }, 1500)
    } else {
      const bubble = {
        id: Date.now(),
        text: `생산 진행: ${productionClickCount.value}/10`,
        x: Math.random() * 300 + 100,
        y: Math.random() * 200 + 150
      }
      speechBubbles.value.push(bubble)
      
      setTimeout(() => {
        const index = speechBubbles.value.findIndex(b => b.id === bubble.id)
        if (index > -1) {
          speechBubbles.value.splice(index, 1)
        }
      }, 2000)
    }
  }
}

// 랜덤 메시지 생성
const getRandomMessage = (mode) => {
  const messages = {
    mining: ['채굴 성공!', '광물 발견!', '돈벌었다!', '더 파자!'],
    hunting: ['몬스터 처치!', '경험치 획득!', '골드 획득!', '레벨업!'],
    exploration: ['새 지역 발견!', '보물 획득!', '모험 성공!', '신비한 발견!'],
    production: ['제작 완료!', '아이템 생성!', '기술 향상!', '완벽한 작품!']
  }
  const modeMessages = messages[mode] || ['성공!', '좋아!', '완료!', '대박!']
  return modeMessages[Math.floor(Math.random() * modeMessages.length)]
}

// 채굴 관련 상태
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

// 사냥 관련 상태
const huntingLevel = ref(1)
const huntingProgress = ref(0)
const isHunting = ref(false)
const monsters = ref([
  { name: '슬라임', level: 1, hp: 100, maxHp: 100, exp: 10, gold: 5 },
  { name: '고블린', level: 2, hp: 150, maxHp: 150, exp: 20, gold: 10 },
  { name: '오크', level: 3, hp: 200, maxHp: 200, exp: 35, gold: 20 }
])
const currentMonster = ref(null)
const playerStats = ref({
  level: 1,
  exp: 0,
  maxExp: 100,
  hp: 100,
  maxHp: 100,
  attack: 20
})

const selectMonster = (monster) => {
  currentMonster.value = { ...monster }
}

const startHunting = () => {
  if (!currentMonster.value || isHunting.value) return
  
  isHunting.value = true
  huntingProgress.value = 0
  
  const huntingInterval = setInterval(() => {
    const damage = Math.floor(Math.random() * playerStats.value.attack) + 10
    currentMonster.value.hp -= damage
    
    if (currentMonster.value.hp <= 0) {
      clearInterval(huntingInterval)
      isHunting.value = false
      huntingProgress.value = 100
      
      playerStats.value.exp += currentMonster.value.exp
      playerStats.value.hp = playerStats.value.maxHp
      
      if (playerStats.value.exp >= playerStats.value.maxExp) {
        playerStats.value.level++
        playerStats.value.exp = 0
        playerStats.value.maxExp = Math.floor(playerStats.value.maxExp * 1.5)
        playerStats.value.attack += 5
        playerStats.value.maxHp += 20
        playerStats.value.hp = playerStats.value.maxHp
      }
      
      setTimeout(() => {
        currentMonster.value = null
        huntingProgress.value = 0
      }, 2000)
    } else {
      huntingProgress.value = ((currentMonster.value.maxHp - currentMonster.value.hp) / currentMonster.value.maxHp) * 100
    }
  }, 500)
}

// 탐험 관련 상태
const explorationLevel = ref(1)
const explorationProgress = ref(0)
const isExploring = ref(false)
const currentLocation = ref(null)
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
  rareGem: 0
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
      
      const randomReward = Math.floor(Math.random() * currentLocation.value.rewards.length)
      const reward = currentLocation.value.rewards[randomReward]
      
      const rewardMap = {
        '나무': 'wood',
        '열매': 'fruit',
        '약초': 'herb',
        '고대 유물': 'artifact',
        '마법석': 'magicStone',
        '보석': 'gem',
        '용의 비늘': 'dragonScale',
        '마나 크리스탈': 'manaCrystal',
        '희귀 보석': 'rareGem'
      }
      
      if (rewardMap[reward]) {
        explorationRewards.value[rewardMap[reward]]++
      }
      
      if (Math.random() < 0.3) {
        const undiscoveredLocation = locations.value.find(loc => !loc.discovered)
        if (undiscoveredLocation) {
          undiscoveredLocation.discovered = true
        }
      }
      
      explorationLevel.value++
      
      setTimeout(() => {
        currentLocation.value = null
      }, 2000)
    }
  }, 300)
}

// 생산 관련 상태
const productionLevel = ref(1)
const productionProgress = ref(0)
const isProducing = ref(false)
const currentRecipe = ref(null)
const inventory = ref({
  wood: 10,
  stone: 5,
  iron: 3,
  gold: 1,
  diamond: 0,
  herb: 8,
  fruit: 12
})

const recipes = ref([
  {
    id: 'woodenSword',
    name: '나무 검',
    level: 1,
    materials: { wood: 5, stone: 2 },
    result: { woodenSword: 1 },
    time: 30,
    description: '기본적인 나무 검입니다.'
  },
  {
    id: 'ironSword',
    name: '철 검',
    level: 2,
    materials: { wood: 3, iron: 5, stone: 3 },
    result: { ironSword: 1 },
    time: 60,
    description: '강력한 철 검입니다.'
  },
  {
    id: 'healthPotion',
    name: '체력 포션',
    level: 1,
    materials: { herb: 3, fruit: 2 },
    result: { healthPotion: 1 },
    time: 20,
    description: '체력을 회복시켜주는 포션입니다.'
  }
])

const producedItems = ref({
  woodenSword: 0,
  ironSword: 0,
  healthPotion: 0
})

const selectRecipe = (recipe) => {
  const hasEnoughMaterials = Object.entries(recipe.materials).every(
    ([material, amount]) => inventory.value[material] >= amount
  )
  
  if (hasEnoughMaterials && recipe.level <= productionLevel.value) {
    currentRecipe.value = recipe
  }
}

const startProduction = () => {
  if (!currentRecipe.value || isProducing.value) return
  
  Object.entries(currentRecipe.value.materials).forEach(([material, amount]) => {
    inventory.value[material] -= amount
  })
  
  isProducing.value = true
  productionProgress.value = 0
  
  const productionInterval = setInterval(() => {
    productionProgress.value += (100 / (currentRecipe.value.time / 0.1))
    
    if (productionProgress.value >= 100) {
      clearInterval(productionInterval)
      isProducing.value = false
      productionProgress.value = 0
      
      Object.entries(currentRecipe.value.result).forEach(([item, amount]) => {
        producedItems.value[item] += amount
      })
      
      if (Math.random() < 0.1) {
        productionLevel.value++
      }
      
      setTimeout(() => {
        currentRecipe.value = null
      }, 2000)
    }
  }, 100)
}

const canProduce = (recipe) => {
  const hasEnoughMaterials = Object.entries(recipe.materials).every(
    ([material, amount]) => inventory.value[material] >= amount
  )
  return hasEnoughMaterials && recipe.level <= productionLevel.value
}
</script>

<template>
  <div class="mainScreen">
    <!-- 헤더 -->
    <Header :coinCount="coinCount" />
    
    <!-- 메인 콘텐츠 -->
    <main class="mainContent">
      <!-- 메인 메뉴 -->
      <article v-if="activeMode === 'main'" class="mainMenu">
        <div class="menuItem" style="margin-top: -20%;">
          <button @click="setActiveMode('mining')"></button>
          <span class="menuLabel">채굴</span>
        </div>
        <div class="menuItem" style="margin-top: 10%;">
          <button @click="setActiveMode('hunting')"></button>
          <span class="menuLabel">사냥</span>
        </div>
        <div class="menuItem" style="margin-top: 0%;">
          <button @click="setActiveMode('exploration')"></button>
          <span class="menuLabel">탐험</span>
        </div>
        <div class="menuItem" style="margin-top: 20%;">
          <button @click="setActiveMode('production')"></button>
          <span class="menuLabel">생산</span>
        </div>
      </article>

      <!-- 채굴 모드 -->
      <div v-if="activeMode === 'mining'" class="gameMode">
        <div class="pageHeader">
          <button class="backBtn" @click="setActiveMode('main')">← 뒤로</button>
        </div>
        
        <!-- 채굴 완료 상태일 때 -->
        <div v-if="isMiningComplete" class="miningComplete">
          <div class="completeMessage">
            <h3>🎉 채굴 완료!</h3>
            <p>새로운 채굴장을 준비 중...</p>
            <div class="loadingDots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        
        <!-- 새로운 채굴 버튼 -->
        <div class="miningButtonContainer">
          <button 
            v-if="showNewMiningButton && !isMiningComplete" 
            @click="handleClick('mining')" 
            class="clickerBtn miningBtn"
            :class="{ 'mining-active': miningClickCount > 0 }"
          >
          </button>
          <div v-if="showNewMiningButton && !isMiningComplete" class="miningLabel">채굴!</div>
        </div>
      </div>

      <!-- 사냥 모드 -->
      <div v-if="activeMode === 'hunting'" class="gameMode">
        <div class="pageHeader">
          <button class="backBtn" @click="setActiveMode('main')">← 뒤로</button>
        </div>
        
        <!-- 사냥 완료 상태일 때 -->
        <div v-if="isHuntingComplete" class="huntingComplete">
          <div class="completeMessage">
            <h3>🎯 사냥 완료!</h3>
            <p>새로운 사냥터를 준비 중...</p>
            <div class="loadingDots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        
        <!-- 새로운 사냥 버튼 -->
        <div class="huntingButtonContainer">
          <button 
            v-if="showNewHuntingButton && !isHuntingComplete" 
            @click="handleClick('hunting')" 
            class="clickerBtn huntingBtn"
            :class="{ 'hunting-active': huntingClickCount > 0 }"
          >
          </button>
          <div v-if="showNewHuntingButton && !isHuntingComplete" class="huntingLabel">사냥!</div>
        </div>
      </div>

      <!-- 탐험 모드 -->
      <div v-if="activeMode === 'exploration'" class="gameMode">
        <div class="pageHeader">
          <button class="backBtn" @click="setActiveMode('main')">← 뒤로</button>
        </div>
        
        <!-- 탐험 완료 상태일 때 -->
        <div v-if="isExplorationComplete" class="explorationComplete">
          <div class="completeMessage">
            <h3>🗺️ 탐험 완료!</h3>
            <p>새로운 지역을 준비 중...</p>
            <div class="loadingDots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        
        <!-- 새로운 탐험 버튼 -->
        <div class="explorationButtonContainer">
          <button 
            v-if="showNewExplorationButton && !isExplorationComplete" 
            @click="handleClick('exploration')" 
            class="clickerBtn explorationBtn"
            :class="{ 'exploration-active': explorationClickCount > 0 }"
          >
          </button>
          <div v-if="showNewExplorationButton && !isExplorationComplete" class="explorationLabel">탐험!</div>
        </div>
      </div>

      <!-- 생산 모드 -->
      <div v-if="activeMode === 'production'" class="gameMode">
        <div class="pageHeader">
          <button class="backBtn" @click="setActiveMode('main')">← 뒤로</button>
        </div>
        
        <!-- 생산 완료 상태일 때 -->
        <div v-if="isProductionComplete" class="productionComplete">
          <div class="completeMessage">
            <h3>🏭 생산 완료!</h3>
            <p>새로운 작업장을 준비 중...</p>
            <div class="loadingDots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        
        <!-- 새로운 생산 버튼 -->
        <div class="productionButtonContainer">
          <button 
            v-if="showNewProductionButton && !isProductionComplete" 
            @click="handleClick('production')" 
            class="clickerBtn productionBtn"
            :class="{ 'production-active': productionClickCount > 0 }"
          >
          </button>
          <div v-if="showNewProductionButton && !isProductionComplete" class="productionLabel">생산!</div>
        </div>
      </div>
    </main>

    <!-- 푸터 -->
    <Footer />
    
    <!-- 말풍선들 -->
    <div class="speechBubbles">
      <div 
        v-for="bubble in speechBubbles" 
        :key="bubble.id"
        class="speechBubble"
        :style="{ left: bubble.x + 'px', top: bubble.y + 'px' }"
      >
        {{ bubble.text }}
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 클릭 버튼 애니메이션 */
.clickerBtn {
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.1s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}


/* 말풍선 스타일 */
.speechBubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
  overflow: hidden;
}

.speechBubble {
  position: absolute;
  background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%);
  color: white;
  padding: 0.8rem 1.2rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
  animation: bubbleAppear 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55), bubbleFloat 2.5s ease-out 0.4s forwards;
  white-space: nowrap;
  max-width: 220px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.speechBubble::before {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #ff6b6b;
}

.speechBubble::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid rgba(255, 255, 255, 0.3);
}

@keyframes bubbleAppear {
  0% {
    opacity: 0;
    transform: scale(0.3) translateY(30px) rotate(-10deg);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1) translateY(-5px) rotate(2deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0) rotate(0deg);
  }
}

@keyframes bubbleFloat {
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  30% {
    transform: translateY(-15px) scale(1.05);
    opacity: 0.9;
  }
  70% {
    transform: translateY(-30px) scale(0.95);
    opacity: 0.6;
  }
  100% {
    transform: translateY(-50px) scale(0.8);
    opacity: 0;
  }
}

/* 페이지 헤더 스타일 */
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

/* 게임 모드 컨테이너 */
.gameMode {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
}

.levelInfo {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.8rem 1.6rem;
  border-radius: 20px;
  color: white;
  font-weight: 500;
  text-align: center;
}

/* 채굴 완료 상태 스타일 */
.miningComplete {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 500px;
  animation: fadeInCentered 0.5s ease-in;
  z-index: 999;
}

/* 사냥 완료 상태 스타일 */
.huntingComplete {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 500px;
  animation: fadeInCentered 0.5s ease-in;
  z-index: 999;
}

/* 탐험 완료 상태 스타일 */
.explorationComplete {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 500px;
  animation: fadeInCentered 0.5s ease-in;
  z-index: 999;
}

/* 생산 완료 상태 스타일 */
.productionComplete {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 500px;
  animation: fadeInCentered 0.5s ease-in;
  z-index: 999;
}

.completeMessage {
  text-align: center;
  color: white;
}

.completeMessage h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  animation: bounce 1s ease-in-out infinite;
}

.completeMessage p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.8;
}

.loadingDots {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.loadingDots span {
  width: 12px;
  height: 12px;
  background: white;
  border-radius: 50%;
  animation: dotPulse 1.5s ease-in-out infinite;
}

.loadingDots span:nth-child(2) {
  animation-delay: 0.2s;
}

.loadingDots span:nth-child(3) {
  animation-delay: 0.4s;
}

/* 채굴 버튼 스타일 */
.miningBtn {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.miningBtn.mining-active {
  background: linear-gradient(45deg, #ff6b6b, #ffa500);
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
}

.miningBtn.mining-active::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer 2s infinite;
}

/* 사냥 버튼 스타일 */
.huntingBtn {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.huntingBtn.hunting-active {
  background: linear-gradient(45deg, #ff4757, #ff3838);
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(255, 71, 87, 0.4);
}

.huntingBtn.hunting-active::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer 2s infinite;
}

/* 탐험 버튼 스타일 */
.explorationBtn {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.explorationBtn.exploration-active {
  background: linear-gradient(45deg, #2ed573, #1e90ff);
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(46, 213, 115, 0.4);
}

.explorationBtn.exploration-active::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer 2s infinite;
}

/* 생산 버튼 스타일 */
.productionBtn {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.productionBtn.production-active {
  background: linear-gradient(45deg, #ff9ff3, #f368e0);
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(255, 159, 243, 0.4);
}

.productionBtn.production-active::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer 2s infinite;
}

/* 애니메이션 키프레임 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInCentered {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

@keyframes dotPulse {
  0%, 80%, 100% { transform: scale(1); opacity: 0.5; }
  40% { transform: scale(1.2); opacity: 1; }
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}
</style>
