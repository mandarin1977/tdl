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

// 선물 이미지 import
import cusionBed from '@/assets/img/cusionBed.png'
import ballYarn from '@/assets/img/ballYarn.png'
import cannedFood from '@/assets/img/cannedFood.png'
import fishToy from '@/assets/img/fishToy.png'

// 하트 이미지 import
import heart from '@/assets/img/heart.png'

// 친밀도 바 이미지 import
import affectionBar2 from '@/assets/img/affectionBar2.png'
import affectionBar from '@/assets/img/affectionBar.png'

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
const maxIntimacy = 100 // 최대 친밀도

// 친밀도 퍼센티지 계산
const intimacyPercentage = computed(() => {
  return Math.min((intimacy.value / maxIntimacy) * 100, 100)
})

// 친밀도 바 배경 이미지 ref
const affectionBarBgRef = ref(null)
const barHeight = ref('auto')

// 선물 버튼 표시 여부
const showGiftButtons = ref(false)

// 선물 이미지 배열
const gifts = [
  { id: 1, image: cusionBed, name: 'Cushion Bed' },
  { id: 2, image: ballYarn, name: 'Ball Yarn' },
  { id: 3, image: cannedFood, name: 'Canned Food' },
  { id: 4, image: fishToy, name: 'Fish Toy' }
]

// 랜덤 대화 목록 (한글)
const randomTalksKo = [
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

// 랜덤 대화 목록 (영문)
const randomTalksEn = [
  'Hello!',
  'Nice weather today!',
  'What are you doing?',
  'This is fun!',
  'Do you like cats?',
  'I want to play!',
  'I\'m hungry!',
  'I\'m sleepy...',
  'Have a great day!',
  'Thank you!',
  'I\'m happy!',
  'This is fun!',
  'Hang in there!',
  'Fighting!',
  'Have a nice day!'
]

// 현재 언어에 따른 대화 목록 선택
const getRandomTalks = () => {
  const currentLang = localStorage.getItem('appLanguage') || 'English'
  return currentLang === '한국어' ? randomTalksKo : randomTalksEn
}

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
  // 현재 언어에 맞는 대화 목록 가져오기
  const talks = getRandomTalks()
  // 랜덤 대화 선택
  const randomTalk = talks[Math.floor(Math.random() * talks.length)]
  
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

// Give gifts 버튼 핸들러 - 선물 버튼 표시
const handlePet = () => {
  // 선물 버튼 토글
  showGiftButtons.value = !showGiftButtons.value
}

// 선물 선택 핸들러
const selectGift = async (gift) => {
  const petCost = 1
  
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
  
  // 선물 버튼은 그대로 유지 (자동으로 돌아가지 않음)
  
  // 음식 이모지 애니메이션 추가 (선택한 선물)
  const maxWidth = Math.min(window.innerWidth || 500, 500)
  const maxHeight = window.innerHeight || 800
  
  // 고양이 위치 근처에 이모지 표시
  const foodEmoji = {
    id: Date.now(),
    x: maxWidth / 2 + (Math.random() - 0.5) * 100, // 고양이 근처
    y: maxHeight / 2 + (Math.random() - 0.5) * 100,
    image: gift.image
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
  
  // 하트 +1 표시 (말풍선 없이)
  const maxWidthBubble = Math.min(window.innerWidth || 500, 500)
  const maxHeightBubble = window.innerHeight || 800
  const paddingBubble = 20
  
  const bubble = {
    id: Date.now() + 1,
    text: '+1', // +1 텍스트 추가
    heartImage: heart,
    isHeartOnly: true, // 하트만 표시 플래그
    x: Math.random() * (maxWidthBubble - 100 - paddingBubble * 2) + paddingBubble,
    y: Math.random() * (maxHeightBubble - 100 - paddingBubble * 2 - 200) + 100
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


// 친밀도 바 높이 업데이트
const updateBarHeight = () => {
  if (affectionBarBgRef.value) {
    barHeight.value = affectionBarBgRef.value.offsetHeight + 'px'
  }
}

onMounted(() => {
  // 현재 사용자 로드
  currentUser.value = getCurrentUser()
  store.loadCurrentUser()
  
  // 친밀도 바 높이 업데이트 (이미지 로드 후)
  setTimeout(() => {
    updateBarHeight()
  }, 100)
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
            <!-- 친밀도 바 (Give gifts 버튼 활성화 시 표시) -->
            <div v-if="showGiftButtons" class="affectionBarContainer">
              <span class="levelText">Lv.</span>
              <div class="affectionBarWrapper">
                <!-- 배경 바 -->
                <img 
                  ref="affectionBarBgRef"
                  :src="affectionBar2" 
                  alt="친밀도 바 배경" 
                  class="affectionBarBg"
                  @load="updateBarHeight"
                />
                <!-- 채워지는 바 (친밀도에 따라) -->
                <div class="affectionBarFill" :style="{ width: intimacyPercentage + '%', height: barHeight }">
                  <img 
                    :src="affectionBar" 
                    alt="친밀도 바" 
                    class="affectionBarFillImg"
                  />
                </div>
              </div>
            </div>
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
      <div v-if="currentUser" class="actionButtons" :class="{ 'gift-buttons-container': showGiftButtons }">
        <!-- 일반 버튼들 -->
        <template v-if="!showGiftButtons">
          <button class="actionBtn talkBtn" @click="handleTalk">
            Talk
          </button>
          <button class="actionBtn petBtn" @click="handlePet">
            Give gifts
          </button>
        </template>
        <!-- 선물 선택 버튼들 -->
        <template v-else>
          <button 
            v-for="gift in gifts" 
            :key="gift.id"
            class="actionBtn giftBtn"
            @click="selectGift(gift)"
          >
            <img :src="gift.image" :alt="gift.name" class="gift-btn-image" />
          </button>
          <!-- 뒤로가기 버튼 -->
          <button class="actionBtn backBtn" @click="showGiftButtons = false">
            ←
          </button>
        </template>
      </div>
    </main>
    
    <!-- 푸터 -->
    <Footer />
    
    <!-- 말풍선들 -->
    <div class="speechBubbles">
      <div 
        v-for="bubble in speechBubbles" 
        :key="bubble.id"
        :class="bubble.isHeartOnly ? 'heartOnly' : 'speechBubble'"
        :style="{ left: bubble.x + 'px', top: bubble.y + 'px', transform: 'translateX(-50%)' }"
      >
        <template v-if="!bubble.isHeartOnly">
          {{ bubble.text }}
        </template>
        <template v-else>
          <img v-if="bubble.heartImage" :src="bubble.heartImage" alt="하트" class="heart-image" />
          <span v-if="bubble.text" class="heartPlusText">{{ bubble.text }}</span>
        </template>
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
          :src="emoji.image" 
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
  color: rgb(255, 255, 255, 1);
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

/* 친밀도 바 컨테이너 */
.affectionBarContainer {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 10;
  pointer-events: none;
}

/* 레벨 텍스트 */
.levelText {
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  white-space: nowrap;
}

/* 친밀도 바 래퍼 */
.affectionBarWrapper {
  position: relative;
  width: 100%;
  max-width: 300px;
  height: auto;
  overflow: hidden;
  display: inline-block;
}

/* 친밀도 바 배경 */
.affectionBarBg {
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: contain;
  display: block;
  position: relative;
  z-index: 1;
}

/* 친밀도 바 채우기 컨테이너 */
.affectionBarFill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  overflow: hidden;
  transition: width 0.5s ease;
  z-index: 2;
}

/* 친밀도 바 채우기 이미지 */
.affectionBarFillImg {
  width: 300px;
  height: 100%;
  object-fit: cover;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
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
  
  .actionButtons.gift-buttons-container {
    gap: 0;
  }
  
  .actionBtn {
    font-size: 0.9rem;
    padding: 0.8rem 1.2rem;
  }
  
  .gift-btn-image {
    width: 40px;
    height: 40px;
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
  bottom: 55px; /* Footer 높이만큼 위에 배치 */
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
}

/* 선물 버튼 컨테이너 - 버튼들이 붙어있도록 */
.actionButtons.gift-buttons-container {
  gap: 0;
  padding: 0;
  justify-content: center;
}

.actionBtn {
  flex: 1;
  padding: 2rem 1.5rem;
  border: none;
  border-radius: 12px;
  font-size: 1em;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.talkBtn {
  background-image: url('@/assets/img/button1.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
}

.talkBtn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.talkBtn:active {
  transform: translateY(0);
}

.petBtn {
  background-image: url('@/assets/img/button2.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
}

.petBtn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(245, 87, 108, 0.4);
}

.petBtn:active {
  transform: translateY(0);
}

.giftBtn {
  display: block;
  padding: 0;
  flex: none;
  width: 70px;
  border-radius: 0;
  margin: 0;
}

/* 첫 번째 선물 버튼 - 왼쪽만 둥글게 */
.gift-buttons-container .giftBtn:first-child {
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}

/* 뒤로가기 버튼 */
.backBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  flex: none;
  width: auto;
  color: white;
  font-weight: 600;
  border-radius: 12px;
  margin-left: 0.5rem;
  transition: all 0.3s ease;
}

.backBtn:hover {
  transform: translateY(-2px);
  background: rgba(120, 120, 120, 0.9);
  box-shadow: 0 4px 15px rgba(100, 100, 100, 0.4);
}

.backBtn:active {
  transform: translateY(0);
}

/* 마지막 선물 버튼 - 뒤로가기 버튼이 있으므로 오른쪽 둥글게 하지 않음 */
.gift-buttons-container .giftBtn:last-of-type {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.giftBtn:hover {
  transform: translateY(-2px);
}

.giftBtn:active {
  transform: translateY(0);
}

.gift-btn-image {
  width: 50px;
  height: 50px;
  object-fit: contain;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.heart-image {
  width: 24px;
  height: 24px;
  object-fit: contain;
  display: inline-block;
  vertical-align: middle;
}

/* 하트만 표시 (배경 없음) */
.heartOnly {
  position: absolute;
  background: transparent;
  padding: 0;
  border: none;
  box-shadow: none;
  animation: heartAppear 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55), heartFloat 2.5s ease-out 0.4s forwards;
  transform-origin: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
}

.heartOnly .heart-image {
  width: 48px;
  height: 48px;
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(255, 0, 0, 0.5));
}

.heartPlusText {
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
  line-height: 1;
}

@keyframes heartAppear {
  0% {
    opacity: 0;
    transform: scale(0.3) translateY(30px) rotate(-10deg);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.2) translateY(-5px) rotate(2deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0) rotate(0deg);
  }
}

@keyframes heartFloat {
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-30px) scale(1.2);
  }
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
  
  .heart-image {
    width: 20px;
    height: 20px;
  }
  
  .heartOnly .heart-image {
    width: 36px;
    height: 36px;
  }
  
  .heartPlusText {
    font-size: 1.5rem;
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

