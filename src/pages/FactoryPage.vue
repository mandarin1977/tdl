<script setup>
import { ref, onMounted } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCurrentUser } from '@/utils/userUtils'

const coinCount = ref(0)

const starItems = ref([
  { id: 1, color: '#EF4444' }, { id: 2, color: '#F97316' }, { id: 3, color: '#84CC16' }, { id: 4, color: '#EAB308' }, { id: 5, color: '#06B6D4' },
  { id: 6, color: '#A855F7' }, { id: 7, color: '#EC4899' }, { id: 8, color: '#EF4444' }, { id: 9, color: '#F97316' }, { id: 10, color: '#EAB308' },
  { id: 11, color: '#06B6D4' }, { id: 12, color: '#A855F7' }, { id: 13, color: '#EC4899' }, { id: 14, color: '#FFFFFF' }, { id: 15, color: '#FFFFFF' },
  { id: 16, color: '#FFFFFF' }, { id: 17, color: '#FFFFFF' }, { id: 18, color: '#FFFFFF' }, { id: 19, color: '#FFFFFF' }, { id: 20, color: '#000000' },
  { id: 21, color: '#FFFFFF' }, { id: 22, color: '#F97316' }, { id: 23, color: '#84CC16' }, { id: 24, color: '#EAB308' }, { id: 25, color: '#FFFFFF' },
  { id: 26, color: '#A855F7' }, { id: 27, color: '#EC4899' }, { id: 28, color: '#EF4444' }, { id: 29, color: '#FFFFFF' }, { id: 30, color: '#FFFFFF' }
])

onMounted(() => {
  const currentUser = getCurrentUser()
  if (currentUser) {
    coinCount.value = currentUser.gameData?.coins || 0
  }
})
</script>

<template>
  <div class="factoryPage">
    <!-- 헤더 -->
    <Header :coinCount="coinCount" />
    
    <!-- 메인 콘텐츠 -->
    <main class="mainContent">
      <!-- 상단 캐릭터 영역 -->
      <div class="topSection">
        <div class="starConnection">⭐</div>
        <div class="starConnection">⭐</div>
        <div class="characterFrame">
          <div class="character">🐱</div>
        </div>
        <div class="starConnection">⭐</div>
        <div class="starConnection">⭐</div>
      </div>
      
      <!-- 구분선 -->
      <div class="divider">
        <div class="diamond">◆</div>
      </div>
      
      <!-- 하단 아이템 그리드 -->
      <div class="starGrid">
        <div 
          v-for="item in starItems" 
          :key="item.id" 
          class="starItem"
          :style="{ backgroundColor: item.color }"
        >
          ⭐
        </div>
      </div>
    </main>
    
    <!-- 푸터 -->
    <Footer />
  </div>
</template>

<style scoped>
.factoryPage {
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
  max-width: 600px;
  max-height: calc(100vh - 130px);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.topSection {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  gap: 0.5rem;
  padding: 2rem;
  max-width: 400px;
  margin: 0 auto;
}

.starConnection {
  width: 80px;
  height: 80px;
  border: 2px solid #3B82F6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(59, 130, 246, 0.1);
}

/* 별 위치 지정 */
.topSection > :nth-child(1) {
  grid-column: 1;
  grid-row: 1;
}

.topSection > :nth-child(2) {
  grid-column: 3;
  grid-row: 1;
}

.topSection > :nth-child(4) {
  grid-column: 1;
  grid-row: 3;
}

.topSection > :nth-child(5) {
  grid-column: 3;
  grid-row: 3;
}

/* 중앙 캐릭터 */
.topSection > :nth-child(3) {
  grid-column: 2;
  grid-row: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.characterFrame {
  width: 150px;
  height: 150px;
  border: 3px solid #3B82F6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}

.character {
  font-size: 80px;
}

.starConnection {
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.divider {
  text-align: center;
  margin: 1.5rem 0;
  padding: 0.5rem;
  border-top: 2px solid #3B82F6;
}

.diamond {
  display: inline-block;
  color: #3B82F6;
  font-size: 12px;
  background: rgba(59, 130, 246, 0.1);
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
}

.starGrid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.8rem;
  padding-bottom: 2rem;
}

.starItem {
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: transform 0.2s;
}

.starItem:hover {
  transform: scale(1.1);
}
</style>
