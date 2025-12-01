<script setup>
import { computed } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { useAppStore } from '@/store/appStore'

// appStore 사용
const store = useAppStore()

// appStore에서 게임 데이터 가져오기 (반응형)
const coinCount = computed(() => store.state.coins)
</script>

<template>
  <div class="homePage">
    <!-- 헤더 -->
    <Header :coinCount="coinCount" />
    
    <!-- 메인 콘텐츠 -->
    <main class="mainContent">
      <!-- 빈 페이지 -->
    </main>
    
    <!-- 푸터 -->
    <Footer />
  </div>
</template>

<style scoped>
.homePage {
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
  max-width: 500px;
  margin: 0 auto;
  min-height: calc(100vh - 200px);
  padding-bottom: 5rem; /* Footer 공간 확보 */
}
</style>

