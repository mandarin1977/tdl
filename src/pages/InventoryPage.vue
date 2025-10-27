<script setup>
import { ref, onMounted } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCurrentUser } from '@/utils/userUtils'

const coinCount = ref(0)

const selectedCharacter = ref({
  name: 'Magic',
  level: '채굴 level 1',
  stats: [
    { name: '채굴', value: 50.0, progress: 80, color: '#EF4444' },
    { name: '사냥', value: 20.0, progress: 60, color: '#3B82F6' },
    { name: '탐험', value: 10.0, progress: 50, color: '#10B981' }
  ]
})

const inventoryItems = ref([
  { id: 1, name: 'Robot', selected: true },
  { id: 2, name: 'Style', selected: false },
  { id: 3, name: 'Suit', selected: false },
  { id: 4, name: 'Tech', selected: false },
  { id: 5, name: 'Army', selected: false },
  { id: 6, name: 'Detective', selected: false },
  { id: 7, name: 'Scholar', selected: false },
  { id: 8, name: 'White', selected: false },
  { id: 9, name: 'Green', selected: false },
  { id: 10, name: 'Blue', selected: false },
  { id: 11, name: 'Red', selected: false },
  { id: 12, name: 'Shirt', selected: false },
  { id: 13, name: 'Ninja', selected: false },
  { id: 14, name: 'Knight', selected: false },
  { id: 15, name: 'Pirate', selected: false },
  { id: 16, name: 'Sailor', selected: false },
  { id: 17, name: 'Sport', selected: false },
  { id: 18, name: 'Cafe', selected: false },
  { id: 19, name: 'Chef', selected: false },
  { id: 20, name: 'Fisher', selected: false },
  { id: 21, name: 'Farmer', selected: false },
  { id: 22, name: 'Doctor', selected: false },
  { id: 23, name: 'Teacher', selected: false },
  { id: 24, name: 'Artist', selected: false }
])

const selectCharacter = (item) => {
  inventoryItems.value.forEach(i => i.selected = false)
  item.selected = true
}

onMounted(() => {
  const currentUser = getCurrentUser()
  if (currentUser) {
    coinCount.value = currentUser.gameData?.coins || 0
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
          <div class="panelTitle">Magic</div>
          <div class="characterBox">
            <div class="selectedCharacter">🐱</div>
          </div>
        </div>
        
        <!-- Profile Panel -->
        <div class="profilePanel">
          <div class="panelTitle">Profile</div>
          <div class="levelText">{{ selectedCharacter.level }}</div>
          <div class="progressBars">
            <div v-for="(stat, index) in selectedCharacter.stats" :key="index" class="progressBar">
              <div class="checkbox">✓</div>
              <div class="barBg">
                <div :style="{ width: stat.progress + '%', backgroundColor: stat.color }" class="barFill"></div>
              </div>
              <span class="value">{{ stat.value }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 하단 인벤토리 그리드 -->
      <div class="inventoryGrid">
        <div
          v-for="item in inventoryItems"
          :key="item.id"
          class="inventoryItem"
          :class="{ selected: item.selected }"
          @click="selectCharacter(item)"
        >
          <div class="itemIcon">{{ item.selected ? '🐱' : '🐾' }}</div>
          <div class="itemName">{{ item.name }}</div>
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
}

.magicPanel, .profilePanel {
  background: rgba(195, 207, 226, 0.95);
  border-radius: 12px;
  padding: 1.2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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
}

.selectedCharacter {
  font-size: 80px;
}

/* Profile Panel */
.levelText {
  color: #1E293B;
  font-weight: 500;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.progressBars {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.progressBar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.checkbox {
  width: 18px;
  height: 18px;
  border: 2px solid #1E293B;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1E293B;
  font-size: 10px;
  flex-shrink: 0;
}

.barBg {
  flex: 1;
  height: 20px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.barFill {
  height: 100%;
  border-radius: 10px;
  transition: width 0.3s ease;
}

.value {
  color: white;
  font-weight: 600;
  min-width: 45px;
  text-align: right;
}

/* 하단 인벤토리 그리드 */
.inventoryGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.8rem;
}

.inventoryItem {
  background: rgba(195, 207, 226, 0.9);
  border: 2px solid #1E293B;
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;
}

.inventoryItem:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.inventoryItem.selected {
  background: rgba(59, 130, 246, 0.3);
  border-color: #3B82F6;
}

.itemIcon {
  font-size: 48px;
  margin-bottom: 0.5rem;
}

.itemName {
  color: #1E293B;
  font-size: 0.85rem;
  font-weight: 600;
}
</style>
