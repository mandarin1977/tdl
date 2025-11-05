<script setup>
import { ref, computed, onMounted } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCurrentUser, updateUserGameData } from '@/utils/userUtils'
import statStar1 from '@/assets/img/statStar1.png'
import statStar2 from '@/assets/img/statStar2.png'

const coinCount = ref(0)

// 각 캐릭터의 기본 스탯 생성 함수
const generateStats = (baseStats) => {
  return [
    { name: '근력', value: baseStats[0], progress: baseStats[0], color: '#FF6B6B' }, // 강렬한 빨강 (더 부드러운 톤)
    { name: '체력', value: baseStats[1], progress: baseStats[1], color: '#FF8A80' }, // 생명력 느낌의 핑크 코랄
    { name: '지능', value: baseStats[2], progress: baseStats[2], color: '#9C27B0' }, // 신비로운 보라
    { name: '손재주', value: baseStats[3], progress: baseStats[3], color: '#FFA726' }, // 따뜻한 주황
    { name: '용기', value: baseStats[4], progress: baseStats[4], color: '#00BCD4' }, // 신선한 청록
    { name: '행운', value: baseStats[5], progress: baseStats[5], color: '#66BB6A' } // 밝은 초록
  ]
}

// 랜덤 별 생성 (1~3)
const getRandomStars = () => Math.floor(Math.random() * 3) + 1

// 랜덤 레벨 생성 (1~10)
const getRandomLevel = () => Math.floor(Math.random() * 10) + 1

// 기본 인벤토리 데이터 (더미) - 랜덤 별과 레벨
const defaultInventory = [
  { id: 1, name: 'Robot', selected: true, stars: getRandomStars(), level: getRandomLevel(), stats: generateStats([33, 7, 29, 10, 11, 10]), imageId: 1, isNew: false },
  { id: 2, name: 'Style', selected: false, stars: getRandomStars(), level: getRandomLevel(), stats: generateStats([15, 25, 35, 45, 20, 30]), imageId: 2, isNew: false },
  { id: 3, name: 'Suit', selected: false, stars: getRandomStars(), level: getRandomLevel(), stats: generateStats([25, 20, 40, 30, 25, 15]), imageId: 3, isNew: false },
  { id: 4, name: 'Tech', selected: false, stars: getRandomStars(), level: getRandomLevel(), stats: generateStats([20, 15, 50, 40, 10, 25]), imageId: 4, isNew: false },
  { id: 5, name: 'Army', selected: false, stars: getRandomStars(), level: getRandomLevel(), stats: generateStats([45, 40, 15, 20, 50, 10]), imageId: 5, isNew: false },
  { id: 6, name: 'Detective', selected: false, stars: getRandomStars(), level: getRandomLevel(), stats: generateStats([20, 25, 45, 30, 35, 25]), imageId: 6, isNew: false },
  { id: 7, name: 'Scholar', selected: false, stars: getRandomStars(), level: getRandomLevel(), stats: generateStats([10, 15, 60, 25, 20, 30]), imageId: 7, isNew: false },
  { id: 8, name: 'White', selected: false, stars: getRandomStars(), level: getRandomLevel(), stats: generateStats([30, 30, 30, 30, 30, 30]), imageId: 8, isNew: false },
  { id: 9, name: 'Green', selected: false, stars: getRandomStars(), level: getRandomLevel(), stats: generateStats([25, 35, 20, 25, 30, 35]), imageId: 9, isNew: false },
  { id: 10, name: 'Blue', selected: false, stars: getRandomStars(), level: getRandomLevel(), stats: generateStats([20, 30, 35, 30, 25, 30]), imageId: 10, isNew: false },
  { id: 11, name: 'Red', selected: false, stars: getRandomStars(), level: getRandomLevel(), stats: generateStats([40, 25, 20, 25, 45, 15]), imageId: 11, isNew: false },
  { id: 12, name: 'Shirt', selected: false, stars: getRandomStars(), level: getRandomLevel(), stats: generateStats([22, 28, 32, 28, 22, 28]), imageId: 12, isNew: false },
  { id: 13, name: 'Ninja', selected: false, stars: getRandomStars(), level: getRandomLevel(), stats: generateStats([35, 25, 30, 50, 40, 20]), imageId: 13, isNew: false },
  { id: 14, name: 'Knight', selected: false, stars: getRandomStars(), level: getRandomLevel(), stats: generateStats([50, 45, 20, 25, 45, 15]), imageId: 14, isNew: false },
  { id: 15, name: 'Pirate', selected: false, stars: getRandomStars(), level: getRandomLevel(), stats: generateStats([40, 35, 25, 35, 50, 25]), imageId: 15, isNew: false },
  { id: 16, name: 'Sailor', selected: false, stars: getRandomStars(), level: getRandomLevel(), stats: generateStats([30, 40, 25, 30, 35, 30]), imageId: 16, isNew: false },
  { id: 17, name: 'Sport', selected: false, stars: getRandomStars(), level: getRandomLevel(), stats: generateStats([45, 50, 15, 40, 30, 20]), imageId: 17, isNew: false },
  { id: 18, name: 'Cafe', selected: false, stars: getRandomStars(), level: getRandomLevel(), stats: generateStats([20, 25, 30, 45, 25, 35]), imageId: 18, isNew: false },
  { id: 19, name: 'Chef', selected: false, stars: getRandomStars(), level: getRandomLevel(), stats: generateStats([25, 30, 25, 50, 20, 30]), imageId: 19, isNew: false },
  { id: 20, name: 'Fisher', selected: false, stars: getRandomStars(), level: getRandomLevel(), stats: generateStats([30, 35, 20, 40, 30, 25]), imageId: 20, isNew: false },
  { id: 21, name: 'Farmer', selected: false, stars: getRandomStars(), level: getRandomLevel(), stats: generateStats([40, 45, 20, 35, 25, 30]), imageId: 21, isNew: false },
  { id: 22, name: 'Doctor', selected: false, stars: getRandomStars(), level: getRandomLevel(), stats: generateStats([15, 30, 55, 35, 25, 30]), imageId: 22, isNew: false },
  { id: 23, name: 'Teacher', selected: false, stars: getRandomStars(), level: getRandomLevel(), stats: generateStats([20, 25, 50, 30, 30, 25]), imageId: 23, isNew: false },
  { id: 24, name: 'Artist', selected: false, stars: getRandomStars(), level: getRandomLevel(), stats: generateStats([15, 20, 40, 55, 25, 35]), imageId: 24, isNew: false }
]

const inventoryItems = ref([...defaultInventory])

// 선택된 캐릭터의 스탯
const selectedCharacterStats = computed(() => {
  const selectedItem = inventoryItems.value.find(item => item.selected)
  if (selectedItem && selectedItem.stats) {
    return selectedItem.stats
  }
  // 기본 스탯 (fallback)
  return generateStats([33, 7, 29, 10, 11, 10])
})

// 선택된 캐릭터의 이름
const selectedCharacterName = computed(() => {
  const selectedItem = inventoryItems.value.find(item => item.selected)
  return selectedItem ? selectedItem.name : 'Magic'
})

// 고양이 이미지 경로 가져오기 함수
const getCatImage = (id) => {
  try {
    // Vite에서 동적 이미지 import
    return new URL(`../assets/img/cat${id}.png`, import.meta.url).href
  } catch (error) {
    // fallback: 직접 경로 사용
    return `/src/assets/img/cat${id}.png`
  }
}

// 현재 선택된 캐릭터 이미지
const selectedCharacterImage = computed(() => {
  const selectedItem = inventoryItems.value.find(item => item.selected)
  if (selectedItem) {
    return getCatImage(selectedItem.imageId || selectedItem.id)
  }
  return getCatImage(1)
})

// 정렬된 인벤토리: isNew가 true인 항목을 맨 앞에 배치
const sortedInventoryItems = computed(() => {
  const newItems = inventoryItems.value.filter(item => item.isNew)
  const oldItems = inventoryItems.value.filter(item => !item.isNew)
  return [...newItems, ...oldItems]
})

const selectCharacter = (item) => {
  inventoryItems.value.forEach(i => i.selected = false)
  item.selected = true
  
  // 새 고양이를 클릭하면 isNew 제거하고 순서 정렬
  if (item.isNew) {
    item.isNew = false
    
    // 사용자 데이터 업데이트
    const currentUser = getCurrentUser()
    if (currentUser) {
      const updatedInventory = inventoryItems.value.map(cat => ({
        ...cat,
        isNew: cat.id === item.id ? false : cat.isNew
      }))
      
      updateUserGameData(currentUser.id, {
        inventory: updatedInventory
      })
    }
  }
}

onMounted(() => {
  const currentUser = getCurrentUser()
  if (currentUser) {
    coinCount.value = currentUser.gameData?.coins || 0
    
    // 사용자 인벤토리 데이터 로드
    const userInventory = currentUser.gameData?.inventory
    if (userInventory && userInventory.length > 0) {
      // 기존 인벤토리와 병합 (기본 데이터는 유지하되, 사용자 데이터 우선)
      const mergedInventory = [...defaultInventory]
      
      // 사용자 인벤토리의 새 고양이들을 맨 앞에 추가
      userInventory.forEach(userCat => {
        const existingIndex = mergedInventory.findIndex(cat => cat.id === userCat.id)
        if (existingIndex > -1) {
          // 기존 항목 업데이트
          mergedInventory[existingIndex] = { ...mergedInventory[existingIndex], ...userCat }
        } else {
          // 새 항목 추가 (스탯 생성)
          mergedInventory.push({
            ...userCat,
            stats: generateStats([Math.floor(Math.random() * 40) + 10, Math.floor(Math.random() * 40) + 10, Math.floor(Math.random() * 40) + 10, Math.floor(Math.random() * 40) + 10, Math.floor(Math.random() * 40) + 10, Math.floor(Math.random() * 40) + 10])
          })
        }
      })
      
      inventoryItems.value = mergedInventory
    }
  }
})
</script>

<template>
  <div class="inventoryPage">
    <!-- 헤더 -->
    <Header :coinCount="coinCount" />
    
    <!-- 메인 콘텐츠 -->
    <main class="mainContent">
      <!-- 상단 섹션 -->
      <div class="topSection">
        <!-- Magic Panel -->
        <div class="magicPanel">
          <div class="panelTitle">{{ selectedCharacterName }}</div>
          <div class="characterBox">
            <img :src="selectedCharacterImage" alt="선택된 캐릭터" class="selectedCharacter" />
          </div>
        </div>
        
        <!-- Profile Panel -->
        <div class="profilePanel">
          <div class="panelTitle">Profile</div>
          <div class="progressBars">
            <div v-for="(stat, index) in selectedCharacterStats" :key="index" class="progressBar">
              <div class="statLabel">{{ stat.name }}</div>
              <div class="barBg">
                <div :style="{ width: stat.progress + '%', backgroundColor: stat.color }" class="barFill"></div>
              </div>
              <span class="value">{{ stat.value }}%</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 하단 인벤토리 그리드 -->
      <div class="inventoryGrid">
        <div
          v-for="item in sortedInventoryItems"
          :key="item.id"
          class="inventoryItem"
          :class="{ selected: item.selected }"
          @click="selectCharacter(item)"
        >
          <!-- NEW 배지 -->
          <div v-if="item.isNew" class="newBadge">NEW</div>
          
          <!-- 별 등급 표시 (하단) -->
          <div class="starBadge">
            <img 
              v-for="n in 5" 
              :key="n" 
              :src="n <= item.stars ? statStar1 : statStar2"
              alt="별"
              class="starIcon"
            />
          </div>
          
          <!-- 레벨 표시 (상단 오른쪽) -->
          <div class="levelBadge">
            Lv {{ String(item.level).padStart(2, '0') }}
          </div>
          
          <!-- 캐릭터 이미지 -->
          <img :src="getCatImage(item.imageId || item.id)" alt="고양이" class="itemIcon" />
        </div>
      </div>
    </main>
    
    <!-- 푸터 -->
    <Footer />
  </div>
</template>

<style scoped>
.inventoryPage {
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
  max-width: 600px;
  margin: 0 auto;
  max-height: calc(100vh - 130px);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-y: auto;
}

/* 상단 섹션 */
.topSection {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  background:url('@/assets/img/profile_bg.png') no-repeat center center;
  background-size: cover;
}

.magicPanel {
  border-radius: 12px;
  padding-left: 5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background: url(/src/assets/img/leftArea.png) no-repeat -10% top / contain;
}

.profilePanel {
  border-radius: 12px;
  padding-right: 5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background: url(/src/assets/img/rightArea.png) no-repeat 110% top / contain;
}

.panelTitle {
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
}

/* Magic Panel */
.characterBox {
  background: #F3F4F6;
  border-radius: 8px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  max-width: 150px;
}

.selectedCharacter {
  width: 120px;
  height: 120px;
  object-fit: contain;
}

/* Profile Panel */
.progressBars {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.progressBar {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.statLabel {
  color: white;
  font-weight: 500;
  font-size: 0.9rem;
  min-width: 10px;
  flex-shrink: 0;
}

.barBg {
  flex: 1;
  height: 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.barFill {
  height: 100%;
  border-radius: 10px;
  transition: width 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
}

.barFill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  border-radius: 10px;
}

.value {
  color: white;
  font-weight: 600;
  min-width: 20px;
  text-align: right;
  font-size: 0.9rem;
}

/* 하단 인벤토리 그리드 */
.inventoryGrid {
  display: flex;
  flex-wrap: wrap;
  /* grid-template-columns: repeat(4, 1fr); */
  padding: 1rem;
  gap: 0.8rem;
  justify-content: space-between;
  overflow-y: auto;
}

.inventoryItem {
  width: calc(25% - 20px);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  min-height: 150px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;
  position: relative;
}

.inventoryItem:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.inventoryItem.selected {
  background: rgba(59, 130, 246, 0.3);
  outline: 1px solid #fff;
}

.itemIcon {
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 0.5rem;
}

.itemName {
  color: #1E293B;
  font-size: 0.85rem;
  font-weight: 600;
}

/* 별 등급 표시 (하단) */
.starBadge {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-content: center;
  gap: 0.15rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0 0 10px 10px;
  padding: 0.3rem 0.5rem;
  z-index: 10;
}

.starIcon {
  width: 100%;
  height: auto;
  object-fit: contain;
  transition: all 0.2s;
}

/* 레벨 표시 (상단 오른쪽) */
.levelBadge {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  padding: 0.25rem 0.5rem;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  z-index: 10;
}

/* NEW 배지 (상단 왼쪽) */
.newBadge {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%);
  border-radius: 12px;
  padding: 0.25rem 0.6rem;
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(255, 107, 107, 0.5);
  animation: pulseNew 2s ease-in-out infinite;
}

@keyframes pulseNew {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 2px 8px rgba(255, 107, 107, 0.5);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(255, 107, 107, 0.8);
  }
}

@media (max-width: 500px) {
    .magicPanel{
        padding-left: 7vw;
        padding-top: 0;
        padding-bottom: 0;
    }
    .profilePanel{
      padding-right: 7vw;
      padding-top: 0;
      padding-bottom: 0;
    }

    .inventoryItem {
      width: calc(30% - 20px);
  }
}

@media (max-width: 450px) {
  .magicPanel{
        padding-left: 5vw;
    }
    .profilePanel{
      padding-right: 5vw;
    }
    .inventoryItem {
      width: calc(50% - 20px);
  }
}
</style>
