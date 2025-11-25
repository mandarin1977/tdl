<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCurrentUser } from '@/utils/userUtils'
import { useAppStore } from '@/store/appStore'

const router = useRouter()
// appStore 사용
const store = useAppStore()
// appStore에서 게임 데이터 가져오기 (반응형)
const coinCount = computed(() => store.state.coins)

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
    id: 'goldenSword',
    name: '황금 검',
    level: 3,
    materials: { iron: 3, gold: 8, diamond: 1 },
    result: { goldenSword: 1 },
    time: 120,
    description: '매우 강력한 황금 검입니다.'
  },
  {
    id: 'healthPotion',
    name: '체력 포션',
    level: 1,
    materials: { herb: 3, fruit: 2 },
    result: { healthPotion: 1 },
    time: 20,
    description: '체력을 회복시켜주는 포션입니다.'
  },
  {
    id: 'manaPotion',
    name: '마나 포션',
    level: 2,
    materials: { herb: 5, fruit: 3, stone: 1 },
    result: { manaPotion: 1 },
    time: 40,
    description: '마나를 회복시켜주는 포션입니다.'
  },
  {
    id: 'magicRing',
    name: '마법 반지',
    level: 3,
    materials: { gold: 5, diamond: 2, herb: 4 },
    result: { magicRing: 1 },
    time: 90,
    description: '마법력을 증폭시키는 반지입니다.'
  }
])

const producedItems = ref({
  woodenSword: 0,
  ironSword: 0,
  goldenSword: 0,
  healthPotion: 0,
  manaPotion: 0,
  magicRing: 0
})

const selectRecipe = (recipe) => {
  // 재료가 충분한지 확인
  const hasEnoughMaterials = Object.entries(recipe.materials).every(
    ([material, amount]) => inventory.value[material] >= amount
  )
  
  if (hasEnoughMaterials && recipe.level <= productionLevel.value) {
    currentRecipe.value = recipe
  }
}

const startProduction = () => {
  if (!currentRecipe.value || isProducing.value) return
  
  // 재료 소모
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
      
      // 제작 완료 - 아이템 획득
      Object.entries(currentRecipe.value.result).forEach(([item, amount]) => {
        producedItems.value[item] += amount
      })
      
      // 제작 레벨 업 확률
      if (Math.random() < 0.1) {
        productionLevel.value++
      }
      
      // 현재 레시피 리셋
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
  <div class="productionPage">
    <!-- 헤더 -->
    <Header :coinCount="coinCount" />
    
    <!-- 메인 콘텐츠 -->
    <main class="mainContent">
      <div class="productionContainer">
        <div class="pageHeader">
          <button class="backBtn" @click="router.push('/main')">← 뒤로</button>
          <h2>🏭 생산</h2>
        </div>
        
        <!-- 생산 레벨 -->
        <div class="levelInfo">
          <span>생산 레벨: {{ productionLevel }}</span>
        </div>
        
        <!-- 재료 인벤토리 -->
        <div class="inventory">
          <h3>재료 보유량</h3>
          <div class="inventoryGrid">
            <div 
              v-for="(amount, material) in inventory" 
              :key="material"
              class="inventoryItem"
            >
              <span class="materialIcon">
                {{ material === 'wood' ? '🪵' : 
                   material === 'stone' ? '🪨' : 
                   material === 'iron' ? '⚒️' : 
                   material === 'gold' ? '🥇' : 
                   material === 'diamond' ? '💎' : 
                   material === 'herb' ? '🌿' : 
                   material === 'fruit' ? '🍎' : '📦' }}
              </span>
              <span class="materialName">{{ material }}</span>
              <span class="materialAmount">{{ amount }}</span>
            </div>
          </div>
        </div>
        
        <!-- 제작 레시피 -->
        <div class="recipes">
          <h3>제작 레시피</h3>
          <div class="recipeList">
            <div 
              v-for="recipe in recipes" 
              :key="recipe.id"
              class="recipeCard"
              :class="{ 
                selected: currentRecipe?.id === recipe.id,
                disabled: !canProduce(recipe)
              }"
              @click="selectRecipe(recipe)"
            >
              <div class="recipeInfo">
                <div class="recipeHeader">
                  <span class="recipeName">{{ recipe.name }}</span>
                  <span class="recipeLevel">Lv.{{ recipe.level }}</span>
                </div>
                <p class="recipeDescription">{{ recipe.description }}</p>
                <div class="recipeMaterials">
                  <span v-for="(amount, material) in recipe.materials" :key="material" class="materialTag">
                    {{ material }} x{{ amount }}
                  </span>
                </div>
                <div class="recipeTime">
                  <span>⏱️ {{ recipe.time }}초</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 현재 제작 -->
        <div v-if="currentRecipe" class="currentProduction">
          <h3>{{ currentRecipe.name }} 제작 중</h3>
          
          <!-- 제작 진행 상황 -->
          <div class="productionProgress">
            <div class="progressBar">
              <div 
                class="progressFill" 
                :style="{ width: productionProgress + '%' }"
              ></div>
            </div>
            <span class="progressText">{{ Math.floor(productionProgress) }}%</span>
          </div>
          
          <!-- 제작 버튼 -->
          <button 
            class="productionBtn"
            :class="{ producing: isProducing }"
            @click="startProduction"
            :disabled="isProducing"
          >
            <span v-if="!isProducing">🏭 제작 시작</span>
            <span v-else>🏭 제작 중...</span>
          </button>
        </div>
        
        <!-- 제작된 아이템 -->
        <div class="producedItems">
          <h3>제작된 아이템</h3>
          <div class="itemsGrid">
            <div 
              v-for="(amount, item) in producedItems" 
              :key="item"
              class="itemCard"
              v-show="amount > 0"
            >
              <span class="itemIcon">
                {{ item === 'woodenSword' ? '🗡️' : 
                   item === 'ironSword' ? '⚔️' : 
                   item === 'goldenSword' ? '🏆' : 
                   item === 'healthPotion' ? '🧪' : 
                   item === 'manaPotion' ? '💊' : 
                   item === 'magicRing' ? '💍' : '📦' }}
              </span>
              <span class="itemName">{{ item }}</span>
              <span class="itemAmount">{{ amount }}</span>
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
.productionPage {
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

.productionContainer {
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

.inventory, .recipes, .currentProduction, .producedItems {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
}

.inventory h3, .recipes h3, .currentProduction h3, .producedItems h3 {
  color: white;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.inventoryGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 0.8rem;
}

.inventoryItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
}

.materialIcon {
  font-size: 1.5rem;
}

.materialName {
  font-size: 0.8rem;
  opacity: 0.8;
}

.materialAmount {
  font-weight: 600;
  font-size: 1rem;
}

.recipeList {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.recipeCard {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
}

.recipeCard:hover:not(.disabled) {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.02);
}

.recipeCard.selected {
  background: rgba(102, 126, 234, 0.3);
  border: 2px solid rgba(102, 126, 234, 0.5);
}

.recipeCard.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.recipeHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.recipeName {
  font-weight: 600;
  font-size: 1.1rem;
}

.recipeLevel {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  font-size: 0.8rem;
}

.recipeDescription {
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
  line-height: 1.4;
}

.recipeMaterials {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-bottom: 0.5rem;
}

.materialTag {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.2rem 0.5rem;
  border-radius: 8px;
  font-size: 0.8rem;
}

.recipeTime {
  font-size: 0.9rem;
  opacity: 0.8;
}

.productionProgress {
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

.productionBtn {
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

.productionBtn:hover:not(:disabled) {
  transform: scale(1.02);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.productionBtn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.productionBtn.producing {
  background: #4facfe;
  color: white;
}

.itemsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.8rem;
}

.itemCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
}

.itemIcon {
  font-size: 1.5rem;
}

.itemName {
  font-size: 0.8rem;
  opacity: 0.8;
  text-align: center;
}

.itemAmount {
  font-weight: 600;
  font-size: 1rem;
}
</style>
