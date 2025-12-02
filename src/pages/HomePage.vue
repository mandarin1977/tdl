<script setup>
import { computed, ref, onMounted } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { useAppStore } from '@/store/appStore'
import { getCurrentUser, getI18nTexts } from '@/utils/userUtils'

// 고양이 이미지 미리 import
import cat1 from '@/assets/img/cat1.png'
import cat10 from '@/assets/img/cat10.png'
import cat20 from '@/assets/img/cat20.png'
import cat29 from '@/assets/img/cat29.png'
import cat30 from '@/assets/img/cat30.png'

// appStore 사용
const store = useAppStore()

// appStore에서 게임 데이터 가져오기 (반응형)
const coinCount = computed(() => store.state.coins)

// 다국어 텍스트
const texts = computed(() => getI18nTexts())

// 현재 사용자
const currentUser = ref(null)

// 고양이 이미지 배열 (5마리)
const cats = [cat1, cat10, cat20, cat29, cat30]

// 현재 고양이 인덱스
const currentCatIndex = ref(0)

// 방향 버튼 클릭 핸들러
const goLeft = () => {
  currentCatIndex.value = (currentCatIndex.value - 1 + cats.length) % cats.length
}

const goRight = () => {
  currentCatIndex.value = (currentCatIndex.value + 1) % cats.length
}

// 현재 고양이 이미지 경로
const currentCatImage = computed(() => {
  return cats[currentCatIndex.value]
})

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
      <!-- 홈 콘텐츠 -->
      <div v-if="currentUser" class="homeContent">
        <div class="catContainer">
          <!-- 좌측 화살표 -->
          <button class="arrowButton arrowLeft" @click="goLeft">
            <img src="@/assets/img/arrow.png" alt="왼쪽" class="arrowIcon" />
          </button>
          
          <!-- 고양이와 그림자 컨테이너 -->
          <div class="catWrapper">
            <transition name="slide" mode="out-in">
              <div :key="currentCatIndex" class="catSlide">
                <!-- 그림자 -->
                <img src="@/assets/img/shadow.png" alt="그림자" class="catShadow" />
                <!-- 고양이 -->
                <img :src="currentCatImage" alt="고양이" class="catImage" />
              </div>
            </transition>
          </div>
          
          <!-- 우측 화살표 -->
          <button class="arrowButton arrowRight" @click="goRight">
            <img src="@/assets/img/arrow.png" alt="오른쪽" class="arrowIcon" />
          </button>
        </div>
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
  background-image: url('@/assets/img/background.png');
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  min-height: calc(100vh - 200px);
  padding-bottom: 8rem;
}

/* 고양이 컨테이너 */
.catContainer {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  gap: 1rem;
}

/* 고양이와 그림자를 감싸는 컨테이너 */
.catWrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
 
  flex: 1;
  overflow: hidden;
  min-height: 400px;
}

/* 슬라이드 컨테이너 */
.catSlide {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

/* 고양이 이미지 */
.catImage {
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: contain;
  position: relative;
  z-index: 2;
  display: block;
}

/* 그림자 */
.catShadow {
  width: 100%;
  max-width: 200px;
  height: auto;
  object-fit: contain;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  opacity: 0.6;
}

/* 슬라이드 애니메이션 */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

/* 방향 버튼 */
.arrowButton {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
  flex-shrink: 0;
  position: absolute;
  top: 0;
}
.arrowLeft{
  left: 0;
} 
.arrowRight{
  right: 0;
}
.arrowButton:hover {
  transform: scale(1.1);
  opacity: 0.8;
}

.arrowButton:active {
  transform: scale(0.95);
}

.arrowIcon {
  width: 40px;
  height: 40px;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.arrowLeft {
  align-self: flex-end;
  margin-bottom: 80px;
}

.arrowLeft .arrowIcon {
  transform: rotate(180deg);
}

.arrowRight {
  align-self: flex-end;
  margin-bottom: 80px;
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
  
  .catContainer {
    gap: 0.5rem;
  }
  
  .catWrapper {
    min-height: 350px;
  }
  
  .catImage {
    max-width: 250px;
  }
  
  .catShadow {
    max-width: 150px;
    bottom: 0;
  }
  
  .arrowIcon {
    width: 32px;
    height: 32px;
  }
  
  .arrowLeft,
  .arrowRight {
    margin-bottom: 60px;
  }
  
  .homeContent {
    padding-bottom: 6rem;
  }
}
</style>

