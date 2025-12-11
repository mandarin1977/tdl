<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
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

// 고양이 이미지 동적 로드 함수
const getCatImage = (imageId) => {
  try {
    return new URL(`../assets/img/cat${imageId}.png`, import.meta.url).href
  } catch (error) {
    console.error(`고양이 이미지 로드 실패: cat${imageId}.png`, error)
    return cat1 // 기본 이미지
  }
}

// 임시 고양이 (게스트용)
const tempCats = [cat1]

// 선택된 고양이들 (인벤토리에서 가져온 고양이)
const selectedCats = ref([])

// 현재 표시할 고양이 배열 (선택된 고양이가 있으면 그것, 없으면 임시 고양이)
const cats = computed(() => {
  if (selectedCats.value.length > 0) {
    return selectedCats.value.map(cat => getCatImage(cat.imageId))
  }
  // 게스트이거나 선택된 고양이가 없으면 임시 고양이 1마리만
  return tempCats
})

// 현재 고양이 인덱스
const currentCatIndex = ref(0)

// 말풍선 관련
const speechBubbles = ref([])

// 음식 이모지 애니메이션
const foodEmojis = ref([])

// 친밀도 (임시로 ref로 관리, 나중에 데이터베이스에 저장 가능)
const intimacy = ref(1)
const maxIntimacy = 100 // 최대 친밀도

// 현재 고양이의 affinity 가져오기
const currentCatAffinity = computed(() => {
  if (selectedCats.value.length === 0) {
    // 게스트이거나 선택된 고양이가 없으면 기본값
    return intimacy.value
  }
  
  const currentCat = selectedCats.value[currentCatIndex.value]
  if (currentCat && currentCat.affinity !== undefined) {
    return currentCat.affinity
  }
  
  // affinity가 없으면 기본값 30
  return 30
})

// 친밀도 퍼센티지 계산 (현재 고양이의 affinity 사용)
const intimacyPercentage = computed(() => {
  return Math.min((currentCatAffinity.value / maxIntimacy) * 100, 100)
})

// 친밀도 바 배경 이미지 ref
const affectionBarBgRef = ref(null)
const barHeight = ref('auto')

// 선물 버튼 표시 여부
const showGiftButtons = ref(false)

// 고양이 선택 팝업 표시 여부
const showCatSelectModal = ref(false)

// 인벤토리에서 가져온 고양이 목록
const inventoryCats = ref([])

// 선택 중인 고양이들 (팝업에서)
const selectingCats = ref([])

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
  if (cats.value.length === 0) return
  currentCatIndex.value = (currentCatIndex.value - 1 + cats.value.length) % cats.value.length
}

const goRight = () => {
  if (cats.value.length === 0) return
  currentCatIndex.value = (currentCatIndex.value + 1) % cats.value.length
}

// 고양이 선택 버튼 핸들러
const handleSelectCats = () => {
  // 인벤토리에서 고양이 가져오기
  const user = getCurrentUser()
  if (!user || !user.gameData || !user.gameData.inventory) {
    alert('No cats in inventory.')
    return
  }
  
  // 인벤토리의 고양이만 필터링 (imageId가 있는 것만)
  inventoryCats.value = user.gameData.inventory.filter(cat => cat && cat.imageId)
  
  if (inventoryCats.value.length === 0) {
    alert('No cats in inventory.')
    return
  }
  
  // 현재 선택된 고양이들을 팝업에 표시
  selectingCats.value = [...selectedCats.value]
  showCatSelectModal.value = true
}

// 고양이 선택 (팝업에서)
const toggleCatSelection = (cat) => {
  const index = selectingCats.value.findIndex(c => c.id === cat.id)
  if (index > -1) {
    // 이미 선택된 경우 제거
    selectingCats.value.splice(index, 1)
  } else {
    // 선택되지 않은 경우 추가 (최대 4마리)
    if (selectingCats.value.length < 4) {
      selectingCats.value.push(cat)
    } else {
      alert('You can select up to 4 cats.')
    }
  }
}

// 고양이 선택 완료
const confirmCatSelection = () => {
  if (selectingCats.value.length === 0) {
    alert('Please select at least 1 cat.')
    return
  }
  
  // affinity가 없으면 기본값 설정
  selectingCats.value.forEach(cat => {
    if (cat.affinity === undefined) {
      cat.affinity = 30
    }
  })
  
  selectedCats.value = [...selectingCats.value]
  
  // localStorage에 저장
  const user = getCurrentUser()
  if (user) {
    user.selectedHomeCats = selectedCats.value.map(cat => cat.id)
    
    // 인벤토리의 고양이들도 업데이트
    if (user.gameData && user.gameData.inventory) {
      selectedCats.value.forEach(selectedCat => {
        const inventoryIndex = user.gameData.inventory.findIndex(cat => cat && cat.id === selectedCat.id)
        if (inventoryIndex > -1) {
          user.gameData.inventory[inventoryIndex].affinity = selectedCat.affinity
        }
      })
    }
    
    localStorage.setItem('currentUser', JSON.stringify(user))
    sessionStorage.setItem('currentUser', JSON.stringify(user))
  }
  
  // 현재 인덱스 리셋
  currentCatIndex.value = 0
  
  showCatSelectModal.value = false
}

// 고양이 선택 취소
const cancelCatSelection = () => {
  selectingCats.value = [...selectedCats.value]
  showCatSelectModal.value = false
}

// 고양이가 선택되어 있는지 확인
const isCatSelected = (cat) => {
  return selectingCats.value.some(c => c.id === cat.id)
}

// 현재 고양이 이미지 경로
const currentCatImage = computed(() => {
  if (cats.value.length === 0) return cat1
  return cats.value[currentCatIndex.value]
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
  
  // 선택된 모든 고양이의 affinity 증가
  if (selectedCats.value.length > 0) {
    const user = getCurrentUser()
    if (user && user.gameData && user.gameData.inventory) {
      // 각 선택된 고양이의 affinity 증가 (최대 100)
      selectedCats.value.forEach(selectedCat => {
        if (!selectedCat.affinity) {
          selectedCat.affinity = 30 // 기본값
        }
        selectedCat.affinity = Math.min(selectedCat.affinity + 1, 100)
        
        // 인벤토리에서 해당 고양이 찾아서 업데이트
        const inventoryIndex = user.gameData.inventory.findIndex(cat => cat && cat.id === selectedCat.id)
        if (inventoryIndex > -1) {
          user.gameData.inventory[inventoryIndex].affinity = selectedCat.affinity
        }
      })
      
      // 사용자 데이터 저장
      localStorage.setItem('currentUser', JSON.stringify(user))
      sessionStorage.setItem('currentUser', JSON.stringify(user))
      
      // appStore에도 업데이트
      store.updateGameData({ inventory: user.gameData.inventory }).catch(err => {
        console.error('인벤토리 업데이트 실패:', err)
      })
    }
  }
  
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
  
  // 사용자가 없으면 기본 게스트 사용자 생성
  if (!currentUser.value) {
    const guestUser = {
      id: 'guest_' + Date.now(),
      email: 'guest@tdl.com',
      name: 'Guest',
      loginType: 'guest',
      gameData: {
        level: 1,
        coins: 0,
        totalCoin: 0,
        catFragments: 50,
        nftCount: 0,
        miningCats: [null, null, null, null],
        huntingCats: [null, null, null, null],
        explorationCats: [null, null, null, null],
        productionCats: [null, null, null, null],
        inventory: []
      }
    }
    
    // localStorage와 sessionStorage에 저장
    localStorage.setItem('currentUser', JSON.stringify(guestUser))
    sessionStorage.setItem('currentUser', JSON.stringify(guestUser))
    currentUser.value = guestUser
    
    // appStore에도 로드
    store.loadCurrentUser()
  } else {
    store.loadCurrentUser()
    
    // 저장된 선택된 고양이 불러오기
    if (currentUser.value.selectedHomeCats && currentUser.value.gameData && currentUser.value.gameData.inventory) {
      const savedCatIds = currentUser.value.selectedHomeCats
      const inventory = currentUser.value.gameData.inventory
      selectedCats.value = inventory
        .filter(cat => cat && savedCatIds.includes(cat.id))
        .slice(0, 4)
        .map(cat => {
          // affinity가 없으면 기본값 설정
          if (cat.affinity === undefined) {
            cat.affinity = 30
          }
          return cat
        })
    }
  }
  
  // 친밀도 바 높이 업데이트 (이미지 로드 후)
  setTimeout(() => {
    updateBarHeight()
  }, 100)
  
  // 홈 화면 진입 시 자동으로 고양이가 말풍선 표시
  setTimeout(() => {
    if (currentUser.value) {
      handleTalk()
    }
  }, 500) // 화면이 로드된 후 약간의 딜레이를 주어 자연스럽게 표시
  
  // 사용자 데이터 업데이트 이벤트 리스너 (인벤토리 변경 시 선택된 고양이 동기화)
  const handleUserDataUpdate = () => {
    const user = getCurrentUser()
    if (user && user.gameData && user.gameData.inventory && selectedCats.value.length > 0) {
      // 선택된 고양이들의 affinity를 인벤토리에서 최신 값으로 동기화
      selectedCats.value.forEach((selectedCat, index) => {
        const inventoryCat = user.gameData.inventory.find(cat => cat && cat.id === selectedCat.id)
        if (inventoryCat && inventoryCat.affinity !== undefined) {
          selectedCats.value[index].affinity = inventoryCat.affinity
        }
      })
    }
  }
  
  window.addEventListener('userDataUpdated', handleUserDataUpdate)
  
  // 컴포넌트 언마운트 시 이벤트 리스너 제거
  onUnmounted(() => {
    window.removeEventListener('userDataUpdated', handleUserDataUpdate)
  })
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
          <!-- 좌측 화살표 (고양이가 2마리 이상일 때만 표시) -->
          <button v-if="cats.length > 1" class="arrowButton arrowLeft" @click="goLeft">
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
          
          <!-- 우측 화살표 (고양이가 2마리 이상일 때만 표시) -->
          <button v-if="cats.length > 1" class="arrowButton arrowRight" @click="goRight">
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
      <div v-if="currentUser" class="actionButtons" :class="{ 'gift-buttons-container': showGiftButtons, 'has-select-btn': currentUser.loginType !== 'guest' && !showGiftButtons }">
        <!-- 일반 버튼들 -->
        <template v-if="!showGiftButtons">
          <button class="actionBtn selectCatsBtn" @click="handleSelectCats" v-if="currentUser.loginType !== 'guest'">
            Select Cats
          </button>
          <div class="bottomButtonsRow">
            <button class="actionBtn talkBtn" @click="handleTalk">
              Talk
            </button>
            <button class="actionBtn petBtn" @click="handlePet">
              Give gifts
            </button>
          </div>
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
    
    <!-- 고양이 선택 팝업 -->
    <div v-if="showCatSelectModal" class="modalOverlay" @click.self="cancelCatSelection">
      <div class="catSelectModal">
        <div class="modalHeader">
          <h2>Select Cats (Max 4)</h2>
          <button class="closeBtn" @click="cancelCatSelection">×</button>
        </div>
        <div class="modalContent">
          <div class="catGrid">
            <div 
              v-for="cat in inventoryCats" 
              :key="cat.id"
              class="catSelectItem"
              :class="{ selected: isCatSelected(cat) }"
              @click="toggleCatSelection(cat)"
            >
              <img :src="getCatImage(cat.imageId)" :alt="cat.name" class="catSelectImage" />
              <div class="catSelectInfo">
                <p class="catSelectName">{{ cat.name }}</p>
                <p class="catSelectLevel">Lv.{{ cat.level || 1 }}</p>
              </div>
              <div v-if="isCatSelected(cat)" class="selectedBadge">✓</div>
            </div>
          </div>
          <div class="selectedCount">
            Selected Cats: {{ selectingCats.length }}/4
          </div>
        </div>
        <div class="modalFooter">
          <button class="modalBtn cancelBtn" @click="cancelCatSelection">Cancel</button>
          <button class="modalBtn confirmBtn" @click="confirmCatSelection" :disabled="selectingCats.length === 0">Confirm</button>
        </div>
      </div>
    </div>
    
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
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
  max-width: 500px;
  padding: 1rem;
  position: fixed;
  bottom: 55px; /* Footer 높이만큼 위에 배치 */
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
}

/* Select Cats 버튼이 있을 때 레이아웃 조정 */
.actionButtons.has-select-btn {
  gap: 0.8rem;
}

.actionButtons.has-select-btn .selectCatsBtn {
  width: 75%;
  margin: auto;
}

.actionButtons.has-select-btn .bottomButtonsRow {
  display: flex;
  gap: 1rem;
  width: 100%;
}

.actionButtons.has-select-btn .talkBtn,
.actionButtons.has-select-btn .petBtn {
  flex: 1;
}

/* Select Cats 버튼이 없을 때 (게스트) 가로 배치 */
.actionButtons:not(.has-select-btn) {
  flex-direction: row;
  justify-content: space-between;
}

.actionButtons:not(.has-select-btn) .bottomButtonsRow {
  display: flex;
  gap: 1rem;
  width: 100%;
}

.actionButtons:not(.has-select-btn) .talkBtn,
.actionButtons:not(.has-select-btn) .petBtn {
  flex: 1;
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
  font-size: 1.3em;
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

.selectCatsBtn {
  background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
  color: white;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.selectCatsBtn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.4);
}

.selectCatsBtn:active {
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

/* 고양이 선택 팝업 */
.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  backdrop-filter: blur(5px);
}

.catSelectModal {
  background: rgba(33, 36, 54, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.modalHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.modalHeader h2 {
  color: white;
  font-size: 1.2em;
  font-weight: 600;
  margin: 0;
}

.closeBtn {
  background: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s;
}

.closeBtn:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: rotate(90deg);
}

.modalContent {
  padding: 1.5rem;
  overflow-y: auto;
  flex: 1;
}

.catGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
}

.catSelectItem {
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.catSelectItem:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.catSelectItem.selected {
  background: rgba(102, 126, 234, 0.3);
  border-color: #667eea;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.catSelectImage {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.catSelectInfo {
  text-align: center;
}

.catSelectName {
  color: white;
  font-size: 0.9em;
  font-weight: 600;
  margin: 0;
}

.catSelectLevel {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8em;
  margin: 0.25rem 0 0 0;
}

.selectedBadge {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 24px;
  height: 24px;
  background: #667eea;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1rem;
}

.selectedCount {
  text-align: center;
  color: white;
  font-size: 1em;
  font-weight: 600;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}

.modalFooter {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.modalBtn {
  flex: 1;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.cancelBtn {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.cancelBtn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.confirmBtn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.confirmBtn:hover:not(:disabled) {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.confirmBtn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 480px) {
  .catSelectModal {
    width: 95%;
    max-height: 85vh;
  }
  
  .catGrid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }
  
  .catSelectImage {
    width: 60px;
    height: 60px;
  }

}

</style>

