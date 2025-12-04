<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCurrentUser, getI18nTexts } from '@/utils/userUtils'
import { useAppStore } from '@/store/appStore'
import { trackGameAction } from '@/utils/questUtils'
import { addRarityToNFT, getRarityName, getRarityColors, getRarityStyle } from '@/utils/rarityUtils'
import { calculateMaxExp } from '@/utils/nftLevelUtils'
import factoryBtnOff from '@/assets/img/factoryBtn_off.png'
import factoryBtnOn from '@/assets/img/factoryBtn_on.png'

// 라우터 사용
const router = useRouter()

// 다국어 텍스트
const texts = computed(() => getI18nTexts())

// appStore 사용
const store = useAppStore()

// appStore에서 게임 데이터 가져오기 (반응형)
const totalCoin = computed(() => store.state.totalCoin) // Coin (C)
const catFragments = computed(() => store.state.catFragments) // 고양이 파편

const requiredCoin = ref(100) // 필요 코인
const requiredFragments = ref(3) // 필요 고양이 파편

// 탭 상태
const activeTab = ref('catcraft') // 기본값: Cat craft

// 팝업 상태
const showSuccessPopup = ref(false)
const newCatImageId = ref(1) // 새로 데려온 고양이 이미지 ID
const newCatRarity = ref(null) // 새로 데려온 고양이 레어리티

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

// 고양이 제작하기
const createCat = async () => {
  if (totalCoin.value < requiredCoin.value) {
    alert(`${texts.value.insufficientCoins} (Required: ${requiredCoin.value})`)
    return
  }
  
  if (catFragments.value < requiredFragments.value) {
    alert(`${texts.value.insufficientFragments} (Required: ${requiredFragments.value})`)
    return
  }
  
  // 재료 차감
  const currentUser = getCurrentUser()
  if (currentUser) {
    const newTotalCoin = totalCoin.value - requiredCoin.value
    const newCatFragments = catFragments.value - requiredFragments.value
    
    // 랜덤 고양이 이미지 ID 생성 (1-30)
    newCatImageId.value = getRandomCatId()
    
    // 고양이 개수 증가 (헤더의 고양이 숫자)
    const currentInventory = currentUser.gameData?.inventory || []
    const catCount = currentInventory.length + 1
    
    // 인벤토리에 고양이 추가
    const baseCat = {
      id: Date.now(), // 고유 ID
      imageId: newCatImageId.value,
      name: `Cat ${newCatImageId.value}`,
      level: 1,
      exp: 0, // 초기 경험치
      maxExp: calculateMaxExp(1), // 레벨 2로 가려면 200 필요
      selected: false,
      isNew: true // 새 고양이 표시
    }
    // 레어리티 시스템 적용
    const newCat = addRarityToNFT(baseCat)
    // 팝업에 표시할 레어리티 저장
    newCatRarity.value = newCat.rarity
    // 새 고양이는 맨 앞에 추가
    const updatedInventory = [newCat, ...currentInventory]
    
    // 데이터 업데이트 (appStore를 통해 - 데이터 일관성 보장)
    await store.updateGameData({
      totalCoin: newTotalCoin,
      catFragments: newCatFragments,
      inventory: updatedInventory
    })
    
    // 퀘스트 진행도 업데이트 (NFT 제작)
    trackGameAction('nftCreated', 1)
    
    // 성공 팝업 표시
    showSuccessPopup.value = true
  }
}

// 재료 충족 여부
const canCreate = computed(() => {
  return totalCoin.value >= requiredCoin.value && catFragments.value >= requiredFragments.value
})

// 코인 충족 여부
const hasEnoughCoins = computed(() => {
  return totalCoin.value >= requiredCoin.value
})

// 고양이 파편 충족 여부
const hasEnoughFragments = computed(() => {
  return catFragments.value >= requiredFragments.value
})

// 랜덤 고양이 이미지 ID 생성 함수
const getRandomCatId = () => {
  return Math.floor(Math.random() * 30) + 1 // 1부터 30까지
}

// 고양이 이미지 경로 가져오기 함수
const getCatImage = (id) => {
  try {
    return new URL(`../assets/img/cat${id}.png`, import.meta.url).href
  } catch (error) {
    return `/src/assets/img/cat${id}.png`
  }
}

// 팝업 닫기
const closePopup = () => {
  showSuccessPopup.value = false
  newCatRarity.value = null
}

// 탭 버튼 클릭 핸들러
const handleTabClick = (tab) => {
  if (tab === 'exchange') {
    router.push('/exchange')
  } else if (tab === 'catcraft') {
    // FactoryPage에 머물기 (현재 페이지)
    activeTab.value = 'catcraft'
  }
}

</script>

<template>
  <div class="factoryPage">
    <!-- 헤더 -->
    <Header :catCount="catFragments" />
    
    <!-- 메인 콘텐츠 -->
    <main class="mainContent">
      <!-- 탭 버튼 -->
      <div class="tabButtons">
        <button class="tabButton" :class="{ active: activeTab === 'exchange' }" @click="handleTabClick('exchange')">
          Exchange
        </button>
        <button class="tabButton" :class="{ active: activeTab === 'catcraft' }" @click="handleTabClick('catcraft')">
          Cat craft
        </button>
      </div>
      
      <!-- 고양이 실루엣 -->
      <div class="catSilhouette">
        <img src="@/assets/img/factory_cat.png" alt="Cat" class="catShape" />
      </div>
      
      <!-- 재료 섹션 -->
      <div class="materialsSection">
        <div class="materialItem" :class="{ insufficient: !hasEnoughCoins }">
          <img src="@/assets/img/coinIcon.png" :alt="texts.coin" class="materialIcon">
          <span class="materialText">
            <span class="materialCount">{{ totalCoin }}</span> / {{ requiredCoin }}
          </span>
        </div>
        <div class="materialItem" :class="{ insufficient: !hasEnoughFragments }">
          <img src="@/assets/img/catPoint.png" alt="Cat" class="materialIcon">
          <span class="materialText">
            <span class="materialCount">{{ catFragments }}</span> / {{ requiredFragments }}
          </span>
        </div>
      </div>
      
      <!-- 데려 오기 버튼 -->
      <button 
        class="createButton"
        :class="{ disabled: !canCreate }"
        @click="createCat"
        :disabled="!canCreate"
      >
        {{ texts.createCat }}
      </button>
    </main>
    
    <!-- 푸터 -->
    <Footer />
    
    <!-- 성공 팝업 -->
    <div v-if="showSuccessPopup" class="popupOverlay" @click="closePopup">
      <div class="popupContent" :class="`rarity-${newCatRarity}`" @click.stop>
        <div class="popupCatImage" :style="newCatRarity ? getRarityStyle(newCatRarity) : {}">
          <img :src="getCatImage(newCatImageId)" alt="고양이" />
        </div>
        <div v-if="newCatRarity" class="rarityBadge" :style="getRarityStyle(newCatRarity)">
          {{ getRarityName(newCatRarity) }}
        </div>
        <h2 class="popupTitle">{{ texts.createCatSuccess }}</h2>
        <p class="popupMessage">{{ texts.newCatAdded }}</p>
        <button class="popupCloseBtn" @click="closePopup">{{ texts.confirm }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.factoryPage {
  width: 100%;
  min-height: 100vh;
  background-image: url('@/assets/img/mainBackground01.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
}

.mainContent {
  padding: 2rem 1.6rem;
  max-width: 500px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-image: url('@/assets/img/factoryBg.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

.tabButtons {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
  margin-right: auto;
}

.tabButton {
  padding: 0;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  width: 120px;
  height: 50px;
  background-image: url('@/assets/img/factoryBtn_off.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1em;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.tabButton.active {
  background-image: url('@/assets/img/factoryBtn_on.png');
}



.pageTitle {
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: center;
  margin: 0;
}

.catSilhouette {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 95%;
  height: auto;
  aspect-ratio: 1/1;
  background-image: url('@/assets/img/createCatBox.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}


.catShape {
  width: 200px;
  height: 200px;
  object-fit: contain;
}

.materialsSection {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  padding: 0 1rem;
}

.materialItem {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  flex: 1;
}

.materialIcon {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.materialText {
  color: #000;
  font-size: 1em;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  white-space: nowrap;
  font-weight: bold;
}

.materialCount {
  font-weight: bold;
}

.materialItem.insufficient .materialCount {
  color: #ff6b6b;
}

.materialItem.insufficient {
  border: 1px solid rgba(255, 107, 107, 0.5);
}

.plusSign {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

.createButton {
  width: 90%;
  height: auto;
aspect-ratio: 3/0.7;
  background-image: url('@/assets/img/createBtn.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.createButton:hover:not(.disabled) {
  transform: translateY(-2px);
}

.createButton.disabled {
  background: rgba(255, 107, 107, 0.5);
  cursor: not-allowed;
  opacity: 0.6;
}

/* 팝업 스타일 */
.popupOverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: fadeIn 0.3s ease;
}

.popupContent {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 24px;
  padding: 2.5rem;
  max-width: 90%;
  width: 400px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  animation: popupSlideIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

/* 레어리티별 팝업 스타일 */
.popupContent.rarity-common {
  background: linear-gradient(135deg, #9E9E9E 0%, #757575 100%);
  border-color: #9E9E9E;
  box-shadow: 0 20px 60px rgba(158, 158, 158, 0.3);
}

.popupContent.rarity-rare {
  background: linear-gradient(135deg, #2196F3 0%, #1976D2 100%);
  border-color: #2196F3;
  box-shadow: 0 20px 60px rgba(33, 150, 243, 0.4);
}

.popupContent.rarity-epic {
  background: linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%);
  border-color: #9C27B0;
  box-shadow: 0 20px 60px rgba(156, 39, 176, 0.4);
}

.popupContent.rarity-legendary {
  background: linear-gradient(135deg, #FF9800 0%, #F57C00 100%);
  border-color: #FF9800;
  box-shadow: 0 20px 60px rgba(255, 152, 0, 0.5);
  animation: legendaryGlow 2s ease-in-out infinite, popupSlideIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes legendaryGlow {
  0%, 100% {
    box-shadow: 0 20px 60px rgba(255, 152, 0, 0.5);
  }
  50% {
    box-shadow: 0 20px 80px rgba(255, 152, 0, 0.8);
  }
}

.popupCatImage {
  width: 200px;
  height: 200px;
  margin: 0 auto 1.5rem;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  border: 3px solid transparent;
  transition: all 0.3s ease;
  position: relative;
}

.popupCatImage::before {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  background: var(--rarity-glow, transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.popupContent.rarity-legendary .popupCatImage::before {
  opacity: 0.6;
  animation: pulseGlow 2s ease-in-out infinite;
}

@keyframes pulseGlow {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

.rarityBadge {
  display: inline-block;
  padding: 0.5rem 1.2rem;
  background: var(--rarity-color, #9E9E9E);
  color: white;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 15px var(--rarity-glow, rgba(0, 0, 0, 0.2));
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.popupCatImage img {
  width: 180px;
  height: 180px;
  object-fit: contain;
}

.popupTitle {
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.popupMessage {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  margin: 0 0 2rem 0;
  line-height: 1.6;
}

.popupCloseBtn {
  background: white;
  color: #667eea;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.popupCloseBtn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes popupSlideIn {
  from {
    opacity: 0;
    transform: scale(0.7) translateY(50px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@media (max-width: 500px) {
  .catSilhouette::before{
    display: none;
  }
  .catCircle{
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
  }
  .catShape{
    width: 30vw;
    height: auto;
  }
}
</style>
