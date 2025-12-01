<script setup>
import { computed, ref, onMounted } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { useAppStore } from '@/store/appStore'
import { getCurrentUser, getI18nTexts } from '@/utils/userUtils'

// appStore 사용
const store = useAppStore()

// appStore에서 게임 데이터 가져오기 (반응형)
const coinCount = computed(() => store.state.coins)

// 다국어 텍스트
const texts = computed(() => getI18nTexts())

// 현재 사용자
const currentUser = ref(null)

onMounted(() => {
  // 현재 사용자 로드
  currentUser.value = getCurrentUser()
  store.loadCurrentUser()
})
</script>

<template>
  <div class="homePage">
    <!-- 헤더 -->
    <Header :coinCount="coinCount" />
    
    <!-- 메인 콘텐츠 -->
    <main class="mainContent">
      <!-- 빈 페이지 (추후 다른 콘텐츠 추가 예정) -->
      <div v-if="currentUser" class="homeContent">
        <!-- 여기에 다른 콘텐츠를 추가하세요 -->
      </div>
      
      <!-- 로그인 안내 -->
      <div v-else class="loginPrompt">
        <p>{{ texts.loginRequired }}</p>
        <button class="loginBtn" @click="$router.push('/login')">
          {{ texts.login }}
        </button>
      </div>
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

/* 홈 콘텐츠 */
.homeContent {
  width: 100%;
  padding: 2rem 0;
  color: white;
  text-align: center;
}

/* 로그인 안내 */
.loginPrompt {
  text-align: center;
  padding: 3rem 1rem;
  color: white;
}

.loginPrompt p {
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.loginBtn {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.loginBtn:hover {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

/* 모바일 반응형 */
@media (max-width: 480px) {
  .homeContent {
    padding: 1rem 0;
  }
}
</style>

