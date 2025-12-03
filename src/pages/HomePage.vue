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
const totalCoin = computed(() => store.state.totalCoin)

// 다국어 텍스트
const texts = computed(() => getI18nTexts())

// 현재 사용자
const currentUser = ref(null)

// 고양이 이미지 배열 (5마리)
const cats = [cat1, cat10, cat20, cat29, cat30]

// 현재 고양이 인덱스
const currentCatIndex = ref(0)

// 말풍선 관련
const speechBubbles = ref([])

// 음식 이모지 애니메이션
const foodEmojis = ref([])

// 친밀도 (임시로 ref로 관리, 나중에 데이터베이스에 저장 가능)
const intimacy = ref(1)

// 랜덤 대화 목록
const randomTalks = [
  '안녕하세요!',
  '오늘 날씨가 좋네요!',
  '뭘 하고 계세요?',
  '재미있어요!',
  '고양이 좋아하세요?',
  '놀고 싶어요!',
  '배고파요!',
  '잠이 와요...',
  '즐거운 하루 되세요!',
  '고마워요!',
  '행복해요!',
  '즐거워요!',
  '힘내세요!',
  '화이팅!',
  '좋은 하루 되세요!'
]

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

// 대화하기 버튼 핸들러
const handleTalk = () => {
  // 랜덤 대화 선택
  const randomTalk = randomTalks[Math.floor(Math.random() * randomTalks.length)]
  
  // 말풍선 위치 계산 (화면 안에 들어오도록)
  const maxWidth = Math.min(window.innerWidth || 500, 500)
  const maxHeight = window.innerHeight || 800
  const bubbleWidth = 220
  const bubbleHeight = 60
  const padding = 20
  
  const bubble = {
    id: Date.now(),
    text: randomTalk,
    x: Math.random() * (maxWidth - bubbleWidth - padding * 2) + padding,
    y: Math.random() * (maxHeight - bubbleHeight - padding * 2 - 200) + 100
  }
  speechBubbles.value.push(bubble)
  
  // 2초 후 말풍선 제거
  setTimeout(() => {
    const index = speechBubbles.value.findIndex(b => b.id === bubble.id)
    if (index > -1) {
      speechBubbles.value.splice(index, 1)
    }
  }, 2000)
}

// tul 이미지 경로 가져오기 함수
const getTulImage = (id) => {
  try {
    return new URL(`../assets/img/tul${id}.png`, import.meta.url).href
  } catch (error) {
    return `/src/assets/img/tul${id}.png`
  }
}

// 추르주기 버튼 핸들러
const handlePet = async () => {
  const petCost = 100
  
  // 코인 체크
  if (totalCoin.value < petCost) {
    alert('코인이 부족합니다!')
    return
  }
  
  // 코인 소모
  const newCoin = totalCoin.value - petCost
  try {
    await store.updateGameData({ totalCoin: newCoin })
  } catch (error) {
    console.error('코인 업데이트 실패:', error)
    alert('코인 소모에 실패했습니다.')
    return
  }
  
  // 음식 이모지 애니메이션 추가
  const randomTulId = Math.floor(Math.random() * 6) + 1 // 1~6
  const maxWidth = Math.min(window.innerWidth || 500, 500)
  const maxHeight = window.innerHeight || 800
  const imageSize = 60
  const padding = 30
  
  // 고양이 위치 근처에 이모지 표시
  const foodEmoji = {
    id: Date.now(),
    x: maxWidth / 2 + (Math.random() - 0.5) * 100, // 고양이 근처
    y: maxHeight / 2 + (Math.random() - 0.5) * 100,
    imageId: randomTulId
  }
  foodEmojis.value.push(foodEmoji)
  
  // 2초 후 이모지 제거
  setTimeout(() => {
    const index = foodEmojis.value.findIndex(e => e.id === foodEmoji.id)
    if (index > -1) {
      foodEmojis.value.splice(index, 1)
    }
  }, 2000)
  
  // 친밀도 증가 (임시)
  intimacy.value++
  
  // 말풍선 표시
  const maxWidthBubble = Math.min(window.innerWidth || 500, 500)
  const maxHeightBubble = window.innerHeight || 800
  const bubbleWidth = 220
  const bubbleHeight = 60
  const paddingBubble = 20
  
  const bubble = {
    id: Date.now() + 1,
    text: `친밀도 ${intimacy.value} ❤️`,
    x: Math.random() * (maxWidthBubble - bubbleWidth - paddingBubble * 2) + paddingBubble,
    y: Math.random() * (maxHeightBubble - bubbleHeight - paddingBubble * 2 - 200) + 100
  }
  speechBubbles.value.push(bubble)
  
  // 2초 후 말풍선 제거
  setTimeout(() => {
    const index = speechBubbles.value.findIndex(b => b.id === bubble.id)
    if (index > -1) {
      speechBubbles.value.splice(index, 1)
    }
  }, 2000)
}

onMounted(() => {
  // 현재 사용자 로드
  currentUser.value = getCurrentUser()
  store.loadCurrentUser()
})
</script>

<template>
  <div class="homePage">
    <!-- 헤더 -->
    <Header :coinCount="coinCount" :totalCoin="totalCoin" />
    
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
                <img 
                  :src="currentCatImage" 
                  alt="고양이" 
                  class="catImage" 
                  @click="handleTalk"
                  style="cursor: pointer;"
                />
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
      
      <!-- 하단 고정 버튼들 -->
      <div v-if="currentUser" class="actionButtons">
        <button class="actionBtn talkBtn" @click="handleTalk">
          대화하기
        </button>
        <button class="actionBtn petBtn" @click="handlePet">
          추르주기
        </button>
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
        :style="{ left: bubble.x + 'px', top: bubble.y + 'px', transform: 'translateX(-50%)' }"
      >
        {{ bubble.text }}
      </div>
    </div>
    
    <!-- 음식 이모지 애니메이션 -->
    <div class="foodEmojis">
      <div 
        v-for="emoji in foodEmojis" 
        :key="emoji.id"
        class="foodEmoji"
        :style="{ left: emoji.x + 'px', top: emoji.y + 'px' }"
      >
        <img 
          :src="getTulImage(emoji.imageId)" 
          alt="" 
          class="tulImage"
        />
      </div>
    </div>
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
  padding-bottom: 10rem; /* 버튼 공간 확보 */
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
  
  .actionButtons {
    gap: 0.8rem;
  }
  
  .actionBtn {
    font-size: 0.9rem;
    padding: 0.8rem 1.2rem;
  }
}

/* 하단 고정 액션 버튼들 */
.actionButtons {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  padding: 1rem;
  position: fixed;
  bottom: 70px; /* Footer 높이만큼 위에 배치 */
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
}

.actionBtn {
  flex: 1;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.talkBtn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.talkBtn:hover {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.talkBtn:active {
  transform: translateY(0);
}

.petBtn {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.petBtn:hover {
  background: linear-gradient(135deg, #f5576c 0%, #f093fb 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(245, 87, 108, 0.4);
}

.petBtn:active {
  transform: translateY(0);
}

/* 말풍선 스타일 */
.speechBubbles {
  position: fixed;
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
  background: white;
  color: black;
  padding: 1rem 1.5rem;
  border-radius: 25px;
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  animation: bubbleAppear 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55), bubbleFloat 2.5s ease-out 0.4s forwards;
  white-space: pre-line;
  max-width: 250px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  transform-origin: center;
  text-align: center;
  line-height: 1.4;
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
  border-top: 10px solid white;
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
  border-top: 8px solid rgba(0, 0, 0, 0.1);
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
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-30px);
  }
}

/* 모바일 반응형 */
@media (max-width: 480px) {
  .speechBubble {
    font-size: 1.3rem;
    padding: 0.8rem 1.2rem;
    max-width: 200px;
  }
}

/* 음식 이모지 애니메이션 */
.foodEmojis {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1001;
  overflow: hidden;
}

.foodEmoji {
  position: absolute;
  animation: foodPopUp 2s ease-out forwards;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tulImage {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

@keyframes foodPopUp {
  0% {
    opacity: 0;
    transform: scale(0) translateY(0) rotate(0deg);
  }
  20% {
    opacity: 1;
    transform: scale(1.5) translateY(-30px) rotate(-15deg);
  }
  40% {
    transform: scale(1.2) translateY(-60px) rotate(10deg);
  }
  60% {
    transform: scale(1) translateY(-90px) rotate(-5deg);
  }
  80% {
    opacity: 0.8;
    transform: scale(0.9) translateY(-120px) rotate(5deg);
  }
  100% {
    opacity: 0;
    transform: scale(0.7) translateY(-150px) rotate(0deg);
  }
}
</style>

