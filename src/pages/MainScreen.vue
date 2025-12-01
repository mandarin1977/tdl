<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { getCurrentUser, getI18nTexts } from '@/utils/userUtils'
import { useAppStore } from '@/store/appStore'
import { formatNumber } from '@/utils/formatUtils'
import { checkAndResetEnergy } from '@/utils/energyUtils'
import { calculateMaxExp, initializeNFTExp } from '@/utils/nftLevelUtils'
import '@/styles/main.css'

// appStore 사용
const store = useAppStore()

// 다국어 텍스트
const texts = computed(() => getI18nTexts())

const router = useRouter()

// 현재 사용자 정보
const currentUser = ref(null)

// 현재 활성화된 게임 모드
const activeMode = ref('main')

// 게임 데이터 (appStore에서 가져오기 - 반응형)
const coinCount = computed(() => store.state.coins) // 포인트 (P)
const pointCount = computed(() => store.state.coins) // 포인트 (P) - coinCount와 동일
const totalCoin = computed(() => store.state.totalCoin) // 코인 (C)
const catFragments = computed(() => store.state.catFragments) // 고양이 파편

// appStore에 업데이트하는 함수 (간편 함수 - 에러 처리 포함)
const updateStoreCoins = async (newCoins) => {
  try {
    const success = await store.updateCoins(newCoins)
    if (!success) {
      console.error('코인 업데이트 실패')
      // 사용자에게 알림 (선택적)
      // alert('데이터 저장에 실패했습니다. 다시 시도해주세요.')
    }
  } catch (error) {
    console.error('코인 업데이트 중 오류 발생:', error)
    // 사용자에게 알림 (선택적)
    // alert('데이터 저장 중 오류가 발생했습니다.')
  }
}

const updateStoreCatFragments = async (newFragments) => {
  try {
    const success = await store.updateCatFragments(newFragments)
    if (!success) {
      console.error('고양이 파편 업데이트 실패')
    }
  } catch (error) {
    console.error('고양이 파편 업데이트 중 오류 발생:', error)
  }
}

// 말풍선 관련
const speechBubbles = ref([])
// 고양이 이모지 애니메이션
const catEmojis = ref([])

// 클릭 사운드
const clickSound = ref(null)

// 채굴 클릭 카운터
const miningClickCount = ref(0) // 10번 클릭용 (리셋됨)
const miningTotalClicks = ref(0) // 총 클릭 수 (누적, 레벨업용)
const miningLevel = ref(1) // 채굴 레벨

// 채굴 버튼 상태 관리
const isMiningComplete = ref(false)
const showNewMiningButton = ref(true)
const miningReward = ref({ points: 0, fragments: 0 }) // 채굴 보상 정보

// 탐험 클릭 카운터
const explorationClickCount = ref(0) // 10번 클릭용 (리셋됨)
const explorationTotalClicks = ref(0) // 총 클릭 수 (누적, 레벨업용)
const explorationLevel = ref(1) // 탐험 레벨
const isExplorationComplete = ref(false)
const showNewExplorationButton = ref(true)
const explorationReward = ref({ points: 0, fragments: 0 }) // 탐험 보상 정보

// 사냥 클릭 카운터
const huntingClickCount = ref(0) // 10번 클릭용 (리셋됨)
const huntingTotalClicks = ref(0) // 총 클릭 수 (누적, 레벨업용)
const huntingLevel = ref(1) // 사냥 레벨
const isHuntingComplete = ref(false)
const showNewHuntingButton = ref(true)
const huntingReward = ref({ points: 0, fragments: 0 }) // 사냥 보상 정보

// 생산 클릭 카운터
const productionClickCount = ref(0) // 10번 클릭용 (리셋됨)
const productionTotalClicks = ref(0) // 총 클릭 수 (누적, 레벨업용)
const productionLevel = ref(1) // 생산 레벨
const isProductionComplete = ref(false)
const showNewProductionButton = ref(true)
const productionReward = ref({ points: 0, fragments: 0 }) // 생산 보상 정보

// 레벨에 따른 포인트 배수 계산 (2의 제곱)
const getPointMultiplier = (level) => {
  return Math.pow(2, level - 1) // 레벨 1 = 1배, 레벨 2 = 2배, 레벨 3 = 4배...
}

// 슬롯 NFT 속성 합산 함수
const getNFTStatsSum = (catsList, statName) => {
  if (!catsList || !Array.isArray(catsList)) return 0
  return catsList.reduce((sum, cat) => {
    if (cat && cat[statName]) {
      return sum + (cat[statName] || 0)
    }
    return sum
  }, 0)
}

// 각 모드별 NFT 속성 합산
const getMiningEfficiency = () => getNFTStatsSum(miningCats.value, 'miningEfficiency')
const getHuntingDamage = () => getNFTStatsSum(huntingCats.value, 'huntingDamage')
const getExplorationReward = () => getNFTStatsSum(explorationCats.value, 'explorationReward')
const getProductionSpeed = () => getNFTStatsSum(productionCats.value, 'productionSpeed')

// NFT 경험치 부여 함수
const grantExpToNFTs = async (catsList, expAmount) => {
  if (!catsList || catsList.length === 0) return
  
  const currentUser = getCurrentUser()
  if (!currentUser) return
  
  const inventory = currentUser.gameData?.inventory || []
  const activeNFTIds = catsList.filter(cat => cat !== null).map(cat => cat.id)
  
  if (activeNFTIds.length === 0) return
  
  // 인벤토리에서 해당 NFT들 찾아서 경험치 추가
  const updatedInventory = inventory.map(nft => {
    if (activeNFTIds.includes(nft.id)) {
      const initializedNFT = initializeNFTExp(nft)
      const newExp = (initializedNFT.exp || 0) + expAmount
      const currentLevel = initializedNFT.level || 1
      const newMaxExp = calculateMaxExp(currentLevel)
      
      return {
        ...initializedNFT,
        exp: newExp,
        maxExp: newMaxExp
      }
    }
    return initializeNFTExp(nft) // 기존 NFT 호환성 처리
  })
  
  // 인벤토리 업데이트
  try {
    await store.updateGameData({ inventory: updatedInventory })
  } catch (error) {
    console.error('NFT 경험치 업데이트 실패:', error)
  }
}

// 게임 모드 변경 함수
const setActiveMode = (mode) => {
  activeMode.value = mode
  
  // 모든 모드의 카운터와 상태 리셋
  miningClickCount.value = 0
  isMiningComplete.value = false
  showNewMiningButton.value = true
  
  explorationClickCount.value = 0
  isExplorationComplete.value = false
  showNewExplorationButton.value = true
  
  huntingClickCount.value = 0
  isHuntingComplete.value = false
  showNewHuntingButton.value = true
  
  productionClickCount.value = 0
  isProductionComplete.value = false
  showNewProductionButton.value = true
}

// 라우터 이벤트 감지
const handleRouteChange = () => {
  // 메인 화면으로 돌아올 때 메인 모드로 리셋
  if (router.currentRoute.value.path === '/main') {
    activeMode.value = 'main'
  }
}


onMounted(() => {
  // appStore에서 사용자 데이터 로드
  store.loadCurrentUser()
  currentUser.value = getCurrentUser()
  
  if (currentUser.value) {
    // 각 모드별 레벨 및 총 클릭 수 로드
    miningLevel.value = currentUser.value.gameData?.miningLevel || 1
    miningTotalClicks.value = currentUser.value.gameData?.miningTotalClicks || 0
    huntingLevel.value = currentUser.value.gameData?.huntingLevel || 1
    huntingTotalClicks.value = currentUser.value.gameData?.huntingTotalClicks || 0
    explorationLevel.value = currentUser.value.gameData?.explorationLevel || 1
    explorationTotalClicks.value = currentUser.value.gameData?.explorationTotalClicks || 0
    productionLevel.value = currentUser.value.gameData?.productionLevel || 1
    productionTotalClicks.value = currentUser.value.gameData?.productionTotalClicks || 0
    // 행성 에너지 및 레벨 로드
    planetLevel.value = currentUser.value.gameData?.planetLevel || 1
    planetEnergy.value = currentUser.value.gameData?.planetEnergy || 0
    // 각 모드별 냥이 목록 로드
    if (currentUser.value.gameData?.miningCats) {
      // 빈 배열이면 null 배열로 변환 (기존 Firebase 사용자 호환)
      if (Array.isArray(currentUser.value.gameData.miningCats) && currentUser.value.gameData.miningCats.length === 0) {
        miningCats.value = [null, null, null, null, null, null]
      } else {
        miningCats.value = currentUser.value.gameData.miningCats
      }
    }
    if (currentUser.value.gameData?.huntingCats) {
      if (Array.isArray(currentUser.value.gameData.huntingCats) && currentUser.value.gameData.huntingCats.length === 0) {
        huntingCats.value = [null, null, null, null, null, null]
      } else {
        huntingCats.value = currentUser.value.gameData.huntingCats
      }
    }
    if (currentUser.value.gameData?.explorationCats) {
      if (Array.isArray(currentUser.value.gameData.explorationCats) && currentUser.value.gameData.explorationCats.length === 0) {
        explorationCats.value = [null, null, null, null, null, null]
      } else {
        explorationCats.value = currentUser.value.gameData.explorationCats
      }
    }
    if (currentUser.value.gameData?.productionCats) {
      if (Array.isArray(currentUser.value.gameData.productionCats) && currentUser.value.gameData.productionCats.length === 0) {
        productionCats.value = [null, null, null, null, null, null]
      } else {
        productionCats.value = currentUser.value.gameData.productionCats
      }
    }
  }
  
  // 에너지 체크 및 리셋
  checkAndResetEnergy(currentEnergy, maxEnergy)
  
  // 라우터 경로 변경 감지 (watch 사용 - 더 안전함)
  watch(() => router.currentRoute.value.path, () => {
    handleRouteChange()
  })
  
  // 클릭 사운드 초기화
  try {
    clickSound.value = new Audio()
    clickSound.value.src = new URL('@/assets/audio/clickbgm.mp3', import.meta.url).href
    clickSound.value.volume = 0.3 // 볼륨 30%
  } catch (error) {
    // 개발 환경에서만 로그 출력
    if (import.meta.env.DEV) {
      console.log('클릭 사운드 파일을 찾을 수 없습니다.')
    }
  }
  
  // 소리 설정 변경 이벤트 리스너 (클릭 사운드는 handleClick에서 이미 처리)
  const handleSoundSettingChange = () => {
    // 소리 꺼지면 현재 재생 중인 사운드 정지
    if (!getSoundEnabled() && clickSound.value) {
      clickSound.value.pause()
      clickSound.value.currentTime = 0
    }
  }
  window.addEventListener('soundSettingChanged', handleSoundSettingChange)
  
  // 자동 포인트 획득 시작
  startAutoPointGeneration('mining')
  startAutoPointGeneration('hunting')
  startAutoPointGeneration('exploration')
  startAutoPointGeneration('production')
  
  // 언마운트 시 정리
  onUnmounted(() => {
    // watch는 자동으로 정리되므로 별도 제거 불필요
    
    // 모든 자동 포인트 획득 중지
    stopAllAutoPointGeneration()
    
    // 소리 설정 변경 이벤트 리스너 제거
    window.removeEventListener('soundSettingChanged', handleSoundSettingChange)
  })
})

// 소리 설정 상태 확인 함수
const getSoundEnabled = () => {
  const saved = localStorage.getItem('soundEnabled')
  return saved !== null ? saved === 'true' : true // 기본값 true
}

// 클릭 이벤트 함수 (비동기로 변경 - appStore 업데이트를 위해)
const handleClick = async (mode) => {
  // 클릭 사운드 재생 (소리 설정이 켜져 있을 때만)
  if (clickSound.value && getSoundEnabled()) {
    clickSound.value.currentTime = 0 // 처음부터 재생
    clickSound.value.play().catch(() => {
      // 재생 실패 시 무시
    })
  }
  
  // 에너지 체크
  if (currentEnergy.value < energyPerClick.value) {
    alert('에너지가 부족합니다!')
    return
  }
  
  // 에너지 소모
  if (!consumeEnergy()) {
    return
  }
  
  // 각 모드별로 10번 클릭해야 돈 획득
  if (mode === 'mining') {
    miningClickCount.value++
    miningTotalClicks.value++
    
    // 레벨업 체크 (1000번 클릭마다 레벨 증가)
    if (miningTotalClicks.value >= miningLevel.value * 1000) {
      miningLevel.value++
      // 레벨업 알림
      const bubble = {
        id: Date.now(),
        text: `${texts.value.mining} ${texts.value.levelUp} Lv.${miningLevel.value}`,
        x: Math.random() * (Math.min(window.innerWidth || 500, 500) - 220 - 40) + 20,
        y: Math.random() * (window.innerHeight || 800 - 60 - 40 - 200) + 100
      }
      speechBubbles.value.push(bubble)
      setTimeout(() => {
        const index = speechBubbles.value.findIndex(b => b.id === bubble.id)
        if (index > -1) {
          speechBubbles.value.splice(index, 1)
        }
      }, 3000)
      
      // 레벨 정보 저장 (appStore를 통해)
      if (currentUser.value) {
        try {
          await store.updateGameData({
            miningLevel: miningLevel.value,
            miningTotalClicks: miningTotalClicks.value
          })
        } catch (error) {
          console.error('채굴 레벨 업데이트 실패:', error)
        }
      }
    }
    
    if (miningClickCount.value >= 10) {
      // 레벨에 따른 포인트 배수 적용
      const basePoints = 100
      const multiplier = getPointMultiplier(miningLevel.value)
      // NFT 속성 합산 (miningEfficiency)
      const nftBonus = getMiningEfficiency() / 100 // 퍼센트를 소수로 변환
      const pointsGained = Math.floor(basePoints * multiplier * (1 + nftBonus))
      
      // appStore를 통해 업데이트 (데이터 일관성 보장)
      const newCoins = coinCount.value + pointsGained
      await updateStoreCoins(newCoins)
      
      miningClickCount.value = 0
      isMiningComplete.value = true
      showNewMiningButton.value = false
      
      // 행성 에너지 증가 (10번 클릭마다 50씩 증가)
      await increasePlanetEnergy()
      
      // 랜덤 고양이 파편 획득 (0, 1, 또는 2개)
      const fragmentChance = Math.random()
      let fragmentsGained = 0
      if (fragmentChance < 0.3) {
        fragmentsGained = 1
      } else if (fragmentChance < 0.4) {
        fragmentsGained = 2
      }
      
      // 보상 정보 저장
      miningReward.value = { points: pointsGained, fragments: fragmentsGained }
      
      if (fragmentsGained > 0) {
        const newFragments = catFragments.value + fragmentsGained
        catFragments.value = newFragments
        await updateStoreCatFragments(newFragments)
        
        // 고양이 이모지 애니메이션 추가
        for (let i = 0; i < fragmentsGained; i++) {
          const randomTulId = Math.floor(Math.random() * 6) + 1 // 1~6
          // 이미지 위치 계산 (화면 안에 들어오도록)
          const maxWidth = Math.min(window.innerWidth || 500, 500)
          const maxHeight = window.innerHeight || 800
          const imageSize = 60 // tul 이미지 크기
          const padding = 30 // 여백
          
          const catEmoji = {
            id: Date.now() + i,
            x: Math.random() * (maxWidth - imageSize - padding * 2) + padding,
            y: Math.random() * (maxHeight - imageSize - padding * 2 - 200) + 100,
            imageId: randomTulId
          }
          catEmojis.value.push(catEmoji)
          
          setTimeout(() => {
            const index = catEmojis.value.findIndex(e => e.id === catEmoji.id)
            if (index > -1) {
              catEmojis.value.splice(index, 1)
            }
          }, 2000)
        }
      }
      
      // 사용자 데이터 업데이트 (appStore를 통해 - 이미 coins와 catFragments는 업데이트됨)
      if (currentUser.value) {
        try {
          await store.updateGameData({
            miningTotalClicks: miningTotalClicks.value,
            miningLevel: miningLevel.value
          })
        } catch (error) {
          console.error('채굴 데이터 업데이트 실패:', error)
        }
      }
      
      // 말풍선 위치 계산 (화면 안에 들어오도록)
      const maxWidth = Math.min(window.innerWidth || 500, 500)
      const maxHeight = window.innerHeight || 800
      const bubbleWidth = 220 // 말풍선 최대 너비
      const bubbleHeight = fragmentsGained > 0 ? 80 : 60 // 말풍선 예상 높이 (고양이 파편이 있으면 더 높게)
      const padding = 20 // 여백
      
      // 보상 텍스트 생성
      const nftBonusPercent = Math.round(getMiningEfficiency())
      let rewardText = `${texts.value.miningComplete}\n${pointsGained.toLocaleString()} ${texts.value.pointsEarned}`
      if (nftBonusPercent > 0) {
        rewardText += `\n(NFT Bonus: +${nftBonusPercent}%)`
      }
      if (fragmentsGained > 0) {
        rewardText += `\n${texts.value.fragmentsEarned} ${fragmentsGained} ${texts.value.fragmentsEarnedCount}`
      }
      
      const bubble = {
        id: Date.now(),
        text: rewardText,
        x: Math.random() * (maxWidth - bubbleWidth - padding * 2) + padding,
        y: Math.random() * (maxHeight - bubbleHeight - padding * 2 - 200) + 100
      }
      speechBubbles.value.push(bubble)
      
      setTimeout(() => {
        const index = speechBubbles.value.findIndex(b => b.id === bubble.id)
        if (index > -1) {
          speechBubbles.value.splice(index, 1)
        }
      }, 3000)
      
      setTimeout(() => {
        isMiningComplete.value = false
        showNewMiningButton.value = true
        miningReward.value = { points: 0, fragments: 0 }
      }, 1500)
    } else {
      // 말풍선 위치 계산 (화면 안에 들어오도록)
      const maxWidth = Math.min(window.innerWidth || 500, 500)
      const maxHeight = window.innerHeight || 800
      const bubbleWidth = 220
      const bubbleHeight = 60
      const padding = 20
      
      const bubble = {
        id: Date.now(),
        text: `${texts.value.miningProgress}: ${miningClickCount.value}/10`,
        x: Math.random() * (maxWidth - bubbleWidth - padding * 2) + padding,
        y: Math.random() * (maxHeight - bubbleHeight - padding * 2 - 200) + 100
      }
      speechBubbles.value.push(bubble)
      
      setTimeout(() => {
        const index = speechBubbles.value.findIndex(b => b.id === bubble.id)
        if (index > -1) {
          speechBubbles.value.splice(index, 1)
        }
      }, 2000)
    }
  } else if (mode === 'exploration') {
    explorationClickCount.value++
    explorationTotalClicks.value++
    
    // 레벨업 체크 (1000번 클릭마다 레벨 증가)
    if (explorationTotalClicks.value >= explorationLevel.value * 1000) {
      explorationLevel.value++
      // 레벨업 알림
      const bubble = {
        id: Date.now(),
        text: `${texts.value.exploration} ${texts.value.levelUp} Lv.${explorationLevel.value}`,
        x: Math.random() * (Math.min(window.innerWidth || 500, 500) - 220 - 40) + 20,
        y: Math.random() * (window.innerHeight || 800 - 60 - 40 - 200) + 100
      }
      speechBubbles.value.push(bubble)
      setTimeout(() => {
        const index = speechBubbles.value.findIndex(b => b.id === bubble.id)
        if (index > -1) {
          speechBubbles.value.splice(index, 1)
        }
      }, 3000)
      
      // 레벨 정보 저장 (appStore를 통해)
      if (currentUser.value) {
        try {
          await store.updateGameData({
            explorationLevel: explorationLevel.value,
            explorationTotalClicks: explorationTotalClicks.value
          })
        } catch (error) {
          console.error('탐험 레벨 업데이트 실패:', error)
        }
      }
    }
    
    if (explorationClickCount.value >= 10) {
      // 레벨에 따른 포인트 배수 적용
      const basePoints = 100
      const multiplier = getPointMultiplier(explorationLevel.value)
      // NFT 속성 합산 (explorationReward)
      const nftBonus = getExplorationReward() / 100 // 퍼센트를 소수로 변환
      const pointsGained = Math.floor(basePoints * multiplier * (1 + nftBonus))
      
      // appStore를 통해 업데이트 (데이터 일관성 보장)
      const newCoins = coinCount.value + pointsGained
      await updateStoreCoins(newCoins)
      
      explorationClickCount.value = 0
      isExplorationComplete.value = true
      showNewExplorationButton.value = false
      
      // 행성 에너지 증가 (10번 클릭마다 50씩 증가)
      await increasePlanetEnergy()
      
      // 랜덤 고양이 파편 획득 (0, 1, 또는 2개)
      const fragmentChance = Math.random()
      let fragmentsGained = 0
      if (fragmentChance < 0.3) {
        fragmentsGained = 1
      } else if (fragmentChance < 0.4) {
        fragmentsGained = 2
      }
      
      // 보상 정보 저장
      explorationReward.value = { points: pointsGained, fragments: fragmentsGained }
      
      // NFT 경험치 부여 (슬롯에 배치된 NFT들)
      await grantExpToNFTs(explorationCats.value, 10)
      
      if (fragmentsGained > 0) {
        const newFragments = catFragments.value + fragmentsGained
        catFragments.value = newFragments
        await updateStoreCatFragments(newFragments)
        
        // 고양이 이모지 애니메이션 추가
        for (let i = 0; i < fragmentsGained; i++) {
          const randomTulId = Math.floor(Math.random() * 6) + 1 // 1~6
          // 이미지 위치 계산 (화면 안에 들어오도록)
          const maxWidth = Math.min(window.innerWidth || 500, 500)
          const maxHeight = window.innerHeight || 800
          const imageSize = 60 // tul 이미지 크기
          const padding = 30 // 여백
          
          const catEmoji = {
            id: Date.now() + i,
            x: Math.random() * (maxWidth - imageSize - padding * 2) + padding,
            y: Math.random() * (maxHeight - imageSize - padding * 2 - 200) + 100,
            imageId: randomTulId
          }
          catEmojis.value.push(catEmoji)
          
          setTimeout(() => {
            const index = catEmojis.value.findIndex(e => e.id === catEmoji.id)
            if (index > -1) {
              catEmojis.value.splice(index, 1)
            }
          }, 2000)
        }
      }
      
      // 사용자 데이터 업데이트 (appStore를 통해 - 이미 coins와 catFragments는 업데이트됨)
      if (currentUser.value) {
        try {
          await store.updateGameData({
            explorationTotalClicks: explorationTotalClicks.value,
            explorationLevel: explorationLevel.value
          })
        } catch (error) {
          console.error('탐험 데이터 업데이트 실패:', error)
        }
      }
      
      // 말풍선 위치 계산 (화면 안에 들어오도록)
      const maxWidth = Math.min(window.innerWidth || 500, 500)
      const maxHeight = window.innerHeight || 800
      const bubbleWidth = 220
      const bubbleHeight = fragmentsGained > 0 ? 80 : 60 // 말풍선 예상 높이 (고양이 파편이 있으면 더 높게)
      const padding = 20
      
      // 보상 텍스트 생성
      const nftBonusPercent = Math.round(getExplorationReward())
      let rewardText = `${texts.value.explorationComplete}\n${pointsGained.toLocaleString()} ${texts.value.pointsEarned}`
      if (nftBonusPercent > 0) {
        rewardText += `\n(NFT Bonus: +${nftBonusPercent}%)`
      }
      if (fragmentsGained > 0) {
        rewardText += `\n${texts.value.fragmentsEarned} ${fragmentsGained} ${texts.value.fragmentsEarnedCount}`
      }
      
      const bubble = {
        id: Date.now(),
        text: rewardText,
        x: Math.random() * (maxWidth - bubbleWidth - padding * 2) + padding,
        y: Math.random() * (maxHeight - bubbleHeight - padding * 2 - 200) + 100
      }
      speechBubbles.value.push(bubble)
      
      setTimeout(() => {
        const index = speechBubbles.value.findIndex(b => b.id === bubble.id)
        if (index > -1) {
          speechBubbles.value.splice(index, 1)
        }
      }, 3000)
      
      setTimeout(() => {
        isExplorationComplete.value = false
        showNewExplorationButton.value = true
        explorationReward.value = { points: 0, fragments: 0 }
      }, 1500)
    } else {
      // 말풍선 위치 계산 (화면 안에 들어오도록)
      const maxWidth = Math.min(window.innerWidth || 500, 500)
      const maxHeight = window.innerHeight || 800
      const bubbleWidth = 220
      const bubbleHeight = 60
      const padding = 20
      
      const bubble = {
        id: Date.now(),
        text: `${texts.value.explorationProgress}: ${explorationClickCount.value}/10`,
        x: Math.random() * (maxWidth - bubbleWidth - padding * 2) + padding,
        y: Math.random() * (maxHeight - bubbleHeight - padding * 2 - 200) + 100
      }
      speechBubbles.value.push(bubble)
      
      setTimeout(() => {
        const index = speechBubbles.value.findIndex(b => b.id === bubble.id)
        if (index > -1) {
          speechBubbles.value.splice(index, 1)
        }
      }, 2000)
    }
  } else if (mode === 'hunting') {
    huntingClickCount.value++
    huntingTotalClicks.value++
    
    // 레벨업 체크 (1000번 클릭마다 레벨 증가)
    if (huntingTotalClicks.value >= huntingLevel.value * 1000) {
      huntingLevel.value++
      // 레벨업 알림
      const bubble = {
        id: Date.now(),
        text: `${texts.value.hunting} ${texts.value.levelUp} Lv.${huntingLevel.value}`,
        x: Math.random() * (Math.min(window.innerWidth || 500, 500) - 220 - 40) + 20,
        y: Math.random() * (window.innerHeight || 800 - 60 - 40 - 200) + 100
      }
      speechBubbles.value.push(bubble)
      setTimeout(() => {
        const index = speechBubbles.value.findIndex(b => b.id === bubble.id)
        if (index > -1) {
          speechBubbles.value.splice(index, 1)
        }
      }, 3000)
      
      // 레벨 정보 저장 (appStore를 통해)
      if (currentUser.value) {
        try {
          await store.updateGameData({
            huntingLevel: huntingLevel.value,
            huntingTotalClicks: huntingTotalClicks.value
          })
        } catch (error) {
          console.error('사냥 레벨 업데이트 실패:', error)
        }
      }
    }
    
    if (huntingClickCount.value >= 10) {
      // 레벨에 따른 포인트 배수 적용
      const basePoints = 100
      const multiplier = getPointMultiplier(huntingLevel.value)
      // NFT 속성 합산 (huntingDamage)
      const nftBonus = getHuntingDamage() / 100 // 퍼센트를 소수로 변환
      const pointsGained = Math.floor(basePoints * multiplier * (1 + nftBonus))
      
      // appStore를 통해 업데이트 (데이터 일관성 보장)
      const newCoins = coinCount.value + pointsGained
      await updateStoreCoins(newCoins)
      
      huntingClickCount.value = 0
      isHuntingComplete.value = true
      showNewHuntingButton.value = false
      
      // 행성 에너지 증가 (10번 클릭마다 50씩 증가)
      await increasePlanetEnergy()
      
      // 랜덤 고양이 파편 획득 (0, 1, 또는 2개)
      const fragmentChance = Math.random()
      let fragmentsGained = 0
      if (fragmentChance < 0.3) {
        fragmentsGained = 1
      } else if (fragmentChance < 0.4) {
        fragmentsGained = 2
      }
      
      // 보상 정보 저장
      huntingReward.value = { points: pointsGained, fragments: fragmentsGained }
      
      // NFT 경험치 부여 (슬롯에 배치된 NFT들)
      await grantExpToNFTs(huntingCats.value, 10)
      
      if (fragmentsGained > 0) {
        const newFragments = catFragments.value + fragmentsGained
        catFragments.value = newFragments
        await updateStoreCatFragments(newFragments)
        
        // 고양이 이모지 애니메이션 추가
        for (let i = 0; i < fragmentsGained; i++) {
          const randomTulId = Math.floor(Math.random() * 6) + 1 // 1~6
          // 이미지 위치 계산 (화면 안에 들어오도록)
          const maxWidth = Math.min(window.innerWidth || 500, 500)
          const maxHeight = window.innerHeight || 800
          const imageSize = 60 // tul 이미지 크기
          const padding = 30 // 여백
          
          const catEmoji = {
            id: Date.now() + i,
            x: Math.random() * (maxWidth - imageSize - padding * 2) + padding,
            y: Math.random() * (maxHeight - imageSize - padding * 2 - 200) + 100,
            imageId: randomTulId
          }
          catEmojis.value.push(catEmoji)
          
          setTimeout(() => {
            const index = catEmojis.value.findIndex(e => e.id === catEmoji.id)
            if (index > -1) {
              catEmojis.value.splice(index, 1)
            }
          }, 2000)
        }
      }
      
      // 사용자 데이터 업데이트 (appStore를 통해 - 이미 coins와 catFragments는 업데이트됨)
      if (currentUser.value) {
        try {
          await store.updateGameData({
            huntingTotalClicks: huntingTotalClicks.value,
            huntingLevel: huntingLevel.value
          })
        } catch (error) {
          console.error('사냥 데이터 업데이트 실패:', error)
        }
      }
      
      // 말풍선 위치 계산 (화면 안에 들어오도록)
      const maxWidth = Math.min(window.innerWidth || 500, 500)
      const maxHeight = window.innerHeight || 800
      const bubbleWidth = 220
      const bubbleHeight = fragmentsGained > 0 ? 80 : 60 // 말풍선 예상 높이 (고양이 파편이 있으면 더 높게)
      const padding = 20
      
      // 보상 텍스트 생성
      let rewardText = `${texts.value.huntingComplete}\n${pointsGained.toLocaleString()} ${texts.value.pointsEarned}`
      if (fragmentsGained > 0) {
        rewardText += `\n${texts.value.fragmentsEarned} ${fragmentsGained} ${texts.value.fragmentsEarnedCount}`
      }
      
      const bubble = {
        id: Date.now(),
        text: rewardText,
        x: Math.random() * (maxWidth - bubbleWidth - padding * 2) + padding,
        y: Math.random() * (maxHeight - bubbleHeight - padding * 2 - 200) + 100
      }
      speechBubbles.value.push(bubble)
      
      setTimeout(() => {
        const index = speechBubbles.value.findIndex(b => b.id === bubble.id)
        if (index > -1) {
          speechBubbles.value.splice(index, 1)
        }
      }, 3000)
      
      setTimeout(() => {
        isHuntingComplete.value = false
        showNewHuntingButton.value = true
        huntingReward.value = { points: 0, fragments: 0 }
      }, 1500)
    } else {
      // 말풍선 위치 계산 (화면 안에 들어오도록)
      const maxWidth = Math.min(window.innerWidth || 500, 500)
      const maxHeight = window.innerHeight || 800
      const bubbleWidth = 220
      const bubbleHeight = 60
      const padding = 20
      
      const bubble = {
        id: Date.now(),
        text: `${texts.value.huntingProgress}: ${huntingClickCount.value}/10`,
        x: Math.random() * (maxWidth - bubbleWidth - padding * 2) + padding,
        y: Math.random() * (maxHeight - bubbleHeight - padding * 2 - 200) + 100
      }
      speechBubbles.value.push(bubble)
      
      setTimeout(() => {
        const index = speechBubbles.value.findIndex(b => b.id === bubble.id)
        if (index > -1) {
          speechBubbles.value.splice(index, 1)
        }
      }, 2000)
    }
  } else if (mode === 'production') {
    productionClickCount.value++
    productionTotalClicks.value++
    
    // 레벨업 체크 (1000번 클릭마다 레벨 증가)
    if (productionTotalClicks.value >= productionLevel.value * 1000) {
      productionLevel.value++
      // 레벨업 알림
      const bubble = {
        id: Date.now(),
        text: `${texts.value.production} ${texts.value.levelUp} Lv.${productionLevel.value}`,
        x: Math.random() * (Math.min(window.innerWidth || 500, 500) - 220 - 40) + 20,
        y: Math.random() * (window.innerHeight || 800 - 60 - 40 - 200) + 100
      }
      speechBubbles.value.push(bubble)
      setTimeout(() => {
        const index = speechBubbles.value.findIndex(b => b.id === bubble.id)
        if (index > -1) {
          speechBubbles.value.splice(index, 1)
        }
      }, 3000)
      
      // 레벨 정보 저장 (appStore를 통해)
      if (currentUser.value) {
        try {
          await store.updateGameData({
            productionLevel: productionLevel.value,
            productionTotalClicks: productionTotalClicks.value
          })
        } catch (error) {
          console.error('생산 레벨 업데이트 실패:', error)
        }
      }
    }
    
    if (productionClickCount.value >= 10) {
      // 레벨에 따른 포인트 배수 적용
      const basePoints = 100
      const multiplier = getPointMultiplier(productionLevel.value)
      // NFT 속성 합산 (productionSpeed)
      const nftBonus = getProductionSpeed() / 100 // 퍼센트를 소수로 변환
      const pointsGained = Math.floor(basePoints * multiplier * (1 + nftBonus))
      
      // appStore를 통해 업데이트 (데이터 일관성 보장)
      const newCoins = coinCount.value + pointsGained
      await updateStoreCoins(newCoins)
      
      productionClickCount.value = 0
      isProductionComplete.value = true
      showNewProductionButton.value = false
      
      // 행성 에너지 증가 (10번 클릭마다 50씩 증가)
      await increasePlanetEnergy()
      
      // 랜덤 고양이 파편 획득 (0, 1, 또는 2개)
      const fragmentChance = Math.random()
      let fragmentsGained = 0
      if (fragmentChance < 0.3) {
        fragmentsGained = 1
      } else if (fragmentChance < 0.4) {
        fragmentsGained = 2
      }
      
      // 보상 정보 저장
      productionReward.value = { points: pointsGained, fragments: fragmentsGained }
      
      // NFT 경험치 부여 (슬롯에 배치된 NFT들)
      await grantExpToNFTs(productionCats.value, 10)
      
      if (fragmentsGained > 0) {
        const newFragments = catFragments.value + fragmentsGained
        catFragments.value = newFragments
        await updateStoreCatFragments(newFragments)
        
        // 고양이 이모지 애니메이션 추가
        for (let i = 0; i < fragmentsGained; i++) {
          const randomTulId = Math.floor(Math.random() * 6) + 1 // 1~6
          // 이미지 위치 계산 (화면 안에 들어오도록)
          const maxWidth = Math.min(window.innerWidth || 500, 500)
          const maxHeight = window.innerHeight || 800
          const imageSize = 60 // tul 이미지 크기
          const padding = 30 // 여백
          
          const catEmoji = {
            id: Date.now() + i,
            x: Math.random() * (maxWidth - imageSize - padding * 2) + padding,
            y: Math.random() * (maxHeight - imageSize - padding * 2 - 200) + 100,
            imageId: randomTulId
          }
          catEmojis.value.push(catEmoji)
          
          setTimeout(() => {
            const index = catEmojis.value.findIndex(e => e.id === catEmoji.id)
            if (index > -1) {
              catEmojis.value.splice(index, 1)
            }
          }, 2000)
        }
      }
      
      // 사용자 데이터 업데이트 (appStore를 통해 - 이미 coins와 catFragments는 업데이트됨)
      if (currentUser.value) {
        try {
          await store.updateGameData({
            productionTotalClicks: productionTotalClicks.value,
            productionLevel: productionLevel.value
          })
        } catch (error) {
          console.error('생산 데이터 업데이트 실패:', error)
        }
      }
      
      // 말풍선 위치 계산 (화면 안에 들어오도록)
      const maxWidth = Math.min(window.innerWidth || 500, 500)
      const maxHeight = window.innerHeight || 800
      const bubbleWidth = 220
      const bubbleHeight = fragmentsGained > 0 ? 80 : 60 // 말풍선 예상 높이 (고양이 파편이 있으면 더 높게)
      const padding = 20
      
      // 보상 텍스트 생성
      const nftBonusPercent = Math.round(getProductionSpeed())
      let rewardText = `${texts.value.productionComplete}\n${pointsGained.toLocaleString()} ${texts.value.pointsEarned}`
      if (nftBonusPercent > 0) {
        rewardText += `\n(NFT Bonus: +${nftBonusPercent}%)`
      }
      if (fragmentsGained > 0) {
        rewardText += `\n${texts.value.fragmentsEarned} ${fragmentsGained} ${texts.value.fragmentsEarnedCount}`
      }
      
      const bubble = {
        id: Date.now(),
        text: rewardText,
        x: Math.random() * (maxWidth - bubbleWidth - padding * 2) + padding,
        y: Math.random() * (maxHeight - bubbleHeight - padding * 2 - 200) + 100
      }
      speechBubbles.value.push(bubble)
      
      setTimeout(() => {
        const index = speechBubbles.value.findIndex(b => b.id === bubble.id)
        if (index > -1) {
          speechBubbles.value.splice(index, 1)
        }
      }, 3000)
      
      setTimeout(() => {
        isProductionComplete.value = false
        showNewProductionButton.value = true
        productionReward.value = { points: 0, fragments: 0 }
      }, 1500)
    } else {
      // 말풍선 위치 계산 (화면 안에 들어오도록)
      const maxWidth = Math.min(window.innerWidth || 500, 500)
      const maxHeight = window.innerHeight || 800
      const bubbleWidth = 220
      const bubbleHeight = 60
      const padding = 20
      
      const bubble = {
        id: Date.now(),
        text: `${texts.value.productionProgress}: ${productionClickCount.value}/10`,
        x: Math.random() * (maxWidth - bubbleWidth - padding * 2) + padding,
        y: Math.random() * (maxHeight - bubbleHeight - padding * 2 - 200) + 100
      }
      speechBubbles.value.push(bubble)
      
      setTimeout(() => {
        const index = speechBubbles.value.findIndex(b => b.id === bubble.id)
        if (index > -1) {
          speechBubbles.value.splice(index, 1)
        }
      }, 2000)
    }
  }
}

// 랜덤 메시지 생성
const getRandomMessage = (mode) => {
  const messages = {
    mining: [texts.value.miningSuccess, texts.value.oreFound, texts.value.moneyEarned, texts.value.digMore],
    hunting: [texts.value.monsterKilled, texts.value.expEarned, texts.value.goldEarned, texts.value.levelUp],
    exploration: [texts.value.newAreaFound, texts.value.treasureFound, texts.value.adventureSuccess, texts.value.mysteriousDiscovery],
    production: [texts.value.craftComplete, texts.value.itemCreated, texts.value.skillImproved, texts.value.perfectWork]
  }
  const modeMessages = messages[mode] || [texts.value.success, texts.value.good, texts.value.complete, texts.value.amazing]
  return modeMessages[Math.floor(Math.random() * modeMessages.length)]
}

// 채굴 관련 상태 (miningLevel은 위에서 이미 선언됨)
const miningProgress = ref(0)
const isMining = ref(false)
const resources = ref({
  stone: 0,
  iron: 0,
  gold: 0,
  diamond: 0
})

// 에너지 관련
// 에너지는 하루에 최대 4000개까지 사용 가능하며, 하루가 지나면 4000개로 회복됩니다.
const currentEnergy = ref(4000)
const maxEnergy = ref(4000)
const energyPerClick = ref(1) // 클릭당 소모 에너지

// 행성 에너지 관련
const planetEnergy = ref(0) // 행성 에너지 (0에서 시작)
const maxPlanetEnergy = ref(2000) // 행성 에너지 최대값
const planetLevel = ref(1) // 행성 레벨

// 행성 에너지 증가 함수 (10번 클릭마다 50씩 증가)
const increasePlanetEnergy = async () => {
  planetEnergy.value = Math.min(maxPlanetEnergy.value, planetEnergy.value + 50)
  
  // 행성 에너지가 2000이 되면 현재 활성화된 모드의 레벨업하고 0으로 리셋
  if (planetEnergy.value >= maxPlanetEnergy.value) {
    // 현재 활성화된 모드에 따라 해당 모드의 레벨만 증가
    if (activeMode.value === 'mining') {
      miningLevel.value++
    } else if (activeMode.value === 'hunting') {
      huntingLevel.value++
    } else if (activeMode.value === 'exploration') {
      explorationLevel.value++
    } else if (activeMode.value === 'production') {
      productionLevel.value++
    }
    
    planetEnergy.value = 0
    
    // 사용자 데이터 업데이트 (appStore를 통해)
    if (currentUser.value) {
      try {
        const updateData = {
          planetEnergy: planetEnergy.value,
          miningLevel: miningLevel.value,
          huntingLevel: huntingLevel.value,
          explorationLevel: explorationLevel.value,
          productionLevel: productionLevel.value
        }
        await store.updateGameData(updateData)
      } catch (error) {
        console.error('행성 에너지 업데이트 실패:', error)
      }
    }
  } else {
    // 사용자 데이터 업데이트 (행성 에너지만, appStore를 통해)
    if (currentUser.value) {
      try {
        await store.updateGameData({
          planetEnergy: planetEnergy.value
        })
      } catch (error) {
        console.error('행성 에너지 업데이트 실패:', error)
      }
    }
  }
}

// 에너지 체크 및 리셋은 유틸리티 함수 사용

// 에너지 소모 함수
const consumeEnergy = (amount = energyPerClick.value) => {
  if (currentEnergy.value >= amount) {
    currentEnergy.value = Math.max(0, currentEnergy.value - amount) // 최소 0
    localStorage.setItem('currentEnergy', currentEnergy.value.toString())
    localStorage.setItem('energyLastDate', new Date().toDateString())
    return true
  }
  return false
}

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

// tul 이미지 경로 가져오기 함수
const getTulImage = (id) => {
  try {
    return new URL(`../assets/img/tul${id}.png`, import.meta.url).href
  } catch (error) {
    return `/src/assets/img/tul${id}.png`
  }
}

// 이미지 로드 실패 시 처리 함수
const handleImageError = (emojiId) => {
  const index = catEmojis.value.findIndex(e => e.id === emojiId)
  if (index > -1) {
    catEmojis.value.splice(index, 1)
  }
}

// 채굴 냥이 목록 (처음에는 빈칸)
const miningCats = ref([
  null, null, null, null, null, null
])

// 고양이 선택 팝업 관련
const showCatSelectPopup = ref(false)
const selectedSlotIndex = ref(-1)
const availableCats = ref([])

// 이미 사용 중인 고양이 ID 수집 (모든 모드에서)
const getUsedCatIds = () => {
  const usedIds = new Set()
  
  // 각 모드의 냥이 목록에서 사용 중인 ID 수집
  miningCats.value.forEach(cat => {
    if (cat && cat.id) usedIds.add(cat.id)
  })
  huntingCats.value.forEach(cat => {
    if (cat && cat.id) usedIds.add(cat.id)
  })
  explorationCats.value.forEach(cat => {
    if (cat && cat.id) usedIds.add(cat.id)
  })
  productionCats.value.forEach(cat => {
    if (cat && cat.id) usedIds.add(cat.id)
  })
  
  return usedIds
}

// 인벤토리에서 고양이 목록 가져오기 (사용 중인 고양이 제외)
const loadAvailableCats = () => {
  const currentUser = getCurrentUser()
  if (currentUser) {
    // 실제 게임 인벤토리 데이터만 사용 (InventoryPage와 동일한 로직)
    const userInventory = currentUser.gameData?.inventory || []
    
    // 이미 사용 중인 고양이 제외 (모든 모드에서)
    const usedIds = getUsedCatIds()
    
    // 현재 선택 중인 슬롯의 고양이만 제외하지 않음 (같은 슬롯에서 교체 가능하도록)
    const currentSlotCat = getCurrentSlotCat()
    if (currentSlotCat && currentSlotCat.id) {
      usedIds.delete(currentSlotCat.id)
    }
    
    // 사용 가능한 고양이만 필터링 (다른 모드에서 선택한 고양이 제외)
    // 인벤토리에 있는 고양이들만 표시
    availableCats.value = userInventory.filter(cat => !usedIds.has(cat.id))
  } else {
    availableCats.value = []
  }
}

// 현재 선택 중인 슬롯의 고양이 가져오기
const getCurrentSlotCat = () => {
  const mode = currentSelectMode.value
  const slotIndex = selectedSlotIndex.value
  
  if (slotIndex < 0 || slotIndex >= 6) return null
  
  let catsList = null
  if (mode === 'mining') catsList = miningCats.value
  else if (mode === 'hunting') catsList = huntingCats.value
  else if (mode === 'exploration') catsList = explorationCats.value
  else if (mode === 'production') catsList = productionCats.value
  
  return catsList && catsList[slotIndex] ? catsList[slotIndex] : null
}

// 슬롯 클릭 핸들러
const openCatSelectPopup = (slotIndex, mode, event) => {
  // 고양이가 있든 없든 항상 팝업 열기 (배치/제거 가능)
  currentSelectMode.value = mode
  loadAvailableCats()
  selectedSlotIndex.value = slotIndex
  showCatSelectPopup.value = true
}

// 고양이 카드 클릭 핸들러는 제거됨 (이제 팝업으로만 관리)

// 고양이 선택 핸들러
const selectCatForSlot = async (cat) => {
  if (selectedSlotIndex.value >= 0 && selectedSlotIndex.value < 6) {
    const selectedCat = {
      id: cat.id,
      level: cat.level || 1,
      stars: cat.stars || 1,
      imageId: cat.imageId || cat.id,
      name: cat.name,
      // NFT 속성 포함 (보상 계산에 필요)
      miningEfficiency: cat.miningEfficiency || 0,
      huntingDamage: cat.huntingDamage || 0,
      explorationReward: cat.explorationReward || 0,
      productionSpeed: cat.productionSpeed || 0,
      rarity: cat.rarity || null
    }
    
    // 현재 모드의 고양이 목록 가져오기
    let catsList = []
    if (currentSelectMode.value === 'mining') catsList = miningCats.value
    else if (currentSelectMode.value === 'hunting') catsList = huntingCats.value
    else if (currentSelectMode.value === 'exploration') catsList = explorationCats.value
    else if (currentSelectMode.value === 'production') catsList = productionCats.value
    
    // 같은 모드 내에서 이미 배치된 고양이인지 확인 (현재 선택한 슬롯 제외)
    const existingIndex = catsList.findIndex((c, idx) => 
      c && c.id === cat.id && idx !== selectedSlotIndex.value
    )
    
    // 같은 모드의 다른 슬롯에 이미 배치되어 있다면 제거
    if (existingIndex !== -1) {
      catsList[existingIndex] = null
      
      // 해당 슬롯의 클릭 카운터도 정리
      const mode = currentSelectMode.value
      const oldCatKey = `${mode}_${existingIndex}_${cat.id}`
      if (catClickCounters.value[mode][oldCatKey]) {
        delete catClickCounters.value[mode][oldCatKey]
      }
    }
    
    // 새 슬롯에 고양이 배치
    if (currentSelectMode.value === 'mining') {
      miningCats.value[selectedSlotIndex.value] = selectedCat
      // 자동 포인트 획득 재시작
      startAutoPointGeneration('mining')
    } else if (currentSelectMode.value === 'hunting') {
      huntingCats.value[selectedSlotIndex.value] = selectedCat
      startAutoPointGeneration('hunting')
    } else if (currentSelectMode.value === 'exploration') {
      explorationCats.value[selectedSlotIndex.value] = selectedCat
      startAutoPointGeneration('exploration')
    } else if (currentSelectMode.value === 'production') {
      productionCats.value[selectedSlotIndex.value] = selectedCat
      startAutoPointGeneration('production')
    }
    
    // 사용자 데이터 저장 (appStore를 통해)
    const currentUser = getCurrentUser()
    if (currentUser) {
      try {
        await store.updateGameData({
          miningCats: miningCats.value,
          huntingCats: huntingCats.value,
          explorationCats: explorationCats.value,
          productionCats: productionCats.value
        })
      } catch (error) {
        console.error('고양이 배치 업데이트 실패:', error)
      }
    }
  }
  showCatSelectPopup.value = false
  selectedSlotIndex.value = -1
  currentSelectMode.value = 'mining'
}

// 고양이 제거 함수
const removeCatFromSlot = async () => {
  if (selectedSlotIndex.value >= 0 && selectedSlotIndex.value < 6) {
    const mode = currentSelectMode.value
    let catsList = []
    
    // 현재 모드의 고양이 목록 가져오기
    if (mode === 'mining') catsList = miningCats.value
    else if (mode === 'hunting') catsList = huntingCats.value
    else if (mode === 'exploration') catsList = explorationCats.value
    else if (mode === 'production') catsList = productionCats.value
    
    // 제거할 고양이 정보 저장
    const catToRemove = catsList[selectedSlotIndex.value]
    
    // 모드별로 해당 슬롯을 null로 설정
    if (mode === 'mining') {
      miningCats.value[selectedSlotIndex.value] = null
      startAutoPointGeneration('mining')
    } else if (mode === 'hunting') {
      huntingCats.value[selectedSlotIndex.value] = null
      startAutoPointGeneration('hunting')
    } else if (mode === 'exploration') {
      explorationCats.value[selectedSlotIndex.value] = null
      startAutoPointGeneration('exploration')
    } else if (mode === 'production') {
      productionCats.value[selectedSlotIndex.value] = null
      startAutoPointGeneration('production')
    }
    
    // 제거된 고양이의 클릭 카운터 정리
    if (catToRemove && catToRemove.id) {
      const catKey = `${mode}_${selectedSlotIndex.value}_${catToRemove.id}`
      if (catClickCounters.value[mode][catKey]) {
        delete catClickCounters.value[mode][catKey]
      }
    }
    
    // 사용자 데이터 저장 (appStore를 통해)
    const currentUser = getCurrentUser()
    if (currentUser) {
      try {
        await store.updateGameData({
          miningCats: miningCats.value,
          huntingCats: huntingCats.value,
          explorationCats: explorationCats.value,
          productionCats: productionCats.value
        })
      } catch (error) {
        console.error('고양이 배치 업데이트 실패:', error)
      }
    }
  }
  showCatSelectPopup.value = false
  selectedSlotIndex.value = -1
  currentSelectMode.value = 'mining'
}

// 팝업 닫기
const closeCatSelectPopup = () => {
  showCatSelectPopup.value = false
  selectedSlotIndex.value = -1
  currentSelectMode.value = 'mining'
}

// 사냥 냥이 목록 (처음에는 빈칸)
const huntingCats = ref([
  null, null, null, null, null, null
])

// 탐험 냥이 목록 (처음에는 빈칸)
const explorationCats = ref([
  null, null, null, null, null, null
])

// 생산 냥이 목록 (처음에는 빈칸)
const productionCats = ref([
  null, null, null, null, null, null
])

// 현재 선택 중인 모드 (mining, hunting, exploration, production)
const currentSelectMode = ref('mining')

// 자동 포인트 획득 관련
const autoPointIntervals = ref({
  mining: null,
  hunting: null,
  exploration: null,
  production: null
})

// 고양이 클릭 카운터 (각 고양이마다 독립적으로 관리)
const catClickCounters = ref({
  mining: {},
  hunting: {},
  exploration: {},
  production: {}
})

// 고양이 완료 상태는 더 이상 사용하지 않음 (제거됨)

// 자동 포인트 획득 함수 (고양이들이 1씩 클릭되게 변경)
const startAutoPointGeneration = (mode) => {
  // 기존 인터벌이 있으면 제거
  if (autoPointIntervals.value[mode]) {
    clearInterval(autoPointIntervals.value[mode])
    autoPointIntervals.value[mode] = null
  }
  
  // 해당 모드의 고양이 목록 가져오기
  let catsList = []
  if (mode === 'mining') catsList = miningCats.value
  else if (mode === 'hunting') catsList = huntingCats.value
  else if (mode === 'exploration') catsList = explorationCats.value
  else if (mode === 'production') catsList = productionCats.value
  
  // 선택된 고양이들만 필터링
  const activeCats = catsList.filter(cat => cat !== null)
  
  if (activeCats.length === 0) {
    return // 고양이가 없으면 시작하지 않음
  }
  
  // 각 고양이의 클릭 카운터 초기화 (없는 경우)
  activeCats.forEach((cat, index) => {
    const catKey = `${mode}_${index}_${cat.id}`
    if (!catClickCounters.value[mode][catKey]) {
      catClickCounters.value[mode][catKey] = 0
    }
  })
  
  // 1초마다 각 고양이가 1씩 클릭되게 함
  autoPointIntervals.value[mode] = setInterval(async () => {
    // 현재 활성화된 고양이 수 다시 확인 (동적으로 업데이트)
    let currentCatsList = []
    if (mode === 'mining') currentCatsList = miningCats.value
    else if (mode === 'hunting') currentCatsList = huntingCats.value
    else if (mode === 'exploration') currentCatsList = explorationCats.value
    else if (mode === 'production') currentCatsList = productionCats.value
    
    const currentActiveCats = currentCatsList.filter(cat => cat !== null)
    if (currentActiveCats.length === 0) {
      stopAutoPointGeneration(mode)
      return
    }
    
    // 고양이들은 에너지를 소모하지 않고 자동으로 포인트 획득
    // 각 고양이가 1씩 클릭되게 함 (클리커 버튼과 동일한 방식)
    const modeNames = {
      mining: texts.value.mining,
      hunting: texts.value.hunting,
      exploration: texts.value.exploration,
      production: texts.value.production
    }
    const modeName = modeNames[mode] || '작업'
    
    // 각 고양이의 실제 인덱스 찾기
    let catsList = []
    if (mode === 'mining') catsList = miningCats.value
    else if (mode === 'hunting') catsList = huntingCats.value
    else if (mode === 'exploration') catsList = explorationCats.value
    else if (mode === 'production') catsList = productionCats.value
    
    // forEach 대신 for...of 사용 (async/await 지원)
    for (const cat of currentActiveCats) {
      // 실제 슬롯 인덱스 찾기
      const actualIndex = catsList.findIndex(c => c && c.id === cat.id)
      if (actualIndex === -1) continue
      
      const catKey = `${mode}_${actualIndex}_${cat.id}`
      
      // 클릭 카운터 증가
      if (!catClickCounters.value[mode][catKey]) {
        catClickCounters.value[mode][catKey] = 0
      }
      catClickCounters.value[mode][catKey] += 1
      
      const currentClickCount = catClickCounters.value[mode][catKey]
      const maxWidth = Math.min(window.innerWidth || 500, 500)
      const maxHeight = window.innerHeight || 800
      const bubbleWidth = 220
      const bubbleHeight = 60
      const padding = 20
      
      // 10번 클릭되면 포인트 획득 (고양이는 사라지지 않음)
      if (currentClickCount >= 10) {
        // 레벨에 따른 포인트 배수 적용
        let level = 1
        if (mode === 'mining') level = miningLevel.value
        else if (mode === 'hunting') level = huntingLevel.value
        else if (mode === 'exploration') level = explorationLevel.value
        else if (mode === 'production') level = productionLevel.value
        
        const basePoints = 100
        const multiplier = getPointMultiplier(level)
        
        // NFT 속성 합산
        let nftBonus = 0
        if (mode === 'mining') nftBonus = getMiningEfficiency() / 100
        else if (mode === 'hunting') nftBonus = getHuntingDamage() / 100
        else if (mode === 'exploration') nftBonus = getExplorationReward() / 100
        else if (mode === 'production') nftBonus = getProductionSpeed() / 100
        
        const pointsGained = Math.floor(basePoints * multiplier * (1 + nftBonus))
        
        // appStore를 통해 업데이트 (데이터 일관성 보장)
        const newCoins = coinCount.value + pointsGained
        coinCount.value = newCoins
        pointCount.value = newCoins
        await updateStoreCoins(newCoins)
        
        // 카운터 리셋 (다시 시작)
        catClickCounters.value[mode][catKey] = 0
        
        // NFT 경험치 부여 (자동 포인트 획득 시)
        let catsListForExp = []
        if (mode === 'mining') catsListForExp = miningCats.value
        else if (mode === 'hunting') catsListForExp = huntingCats.value
        else if (mode === 'exploration') catsListForExp = explorationCats.value
        else if (mode === 'production') catsListForExp = productionCats.value
        await grantExpToNFTs(catsListForExp, 10)
        
        // 행성 에너지 감소 (10번 클릭마다 50씩 감소)
        await consumePlanetEnergy()
        
        // 랜덤 고양이 파편 획득 (0, 1, 또는 2개)
        const fragmentChance = Math.random()
        let fragmentsGained = 0
        if (fragmentChance < 0.3) {
          fragmentsGained = 1
        } else if (fragmentChance < 0.4) {
          fragmentsGained = 2
        }
        
        if (fragmentsGained > 0) {
          const newFragments = catFragments.value + fragmentsGained
          await updateStoreCatFragments(newFragments)
          
          // 고양이 이모지 애니메이션 추가 (현재 활성화된 모드에서만 표시)
          if (activeMode.value === mode) {
            for (let i = 0; i < fragmentsGained; i++) {
              const randomTulId = Math.floor(Math.random() * 6) + 1 // 1~6
              const imageSize = 60
              const imagePadding = 30
              
              const catEmoji = {
                id: Date.now() + i + actualIndex * 1000,
                x: Math.random() * (maxWidth - imageSize - imagePadding * 2) + imagePadding,
                y: Math.random() * (maxHeight - imageSize - imagePadding * 2 - 200) + 100,
                imageId: randomTulId
              }
              catEmojis.value.push(catEmoji)
              
              setTimeout(() => {
                const emojiIndex = catEmojis.value.findIndex(e => e.id === catEmoji.id)
                if (emojiIndex > -1) {
                  catEmojis.value.splice(emojiIndex, 1)
                }
              }, 2000)
            }
          }
        }
        
        // 사용자 데이터 업데이트 (appStore를 통해 - 이미 coins와 catFragments는 업데이트됨)
        // 별도 업데이트 불필요 (updateStoreCoins, updateStoreCatFragments에서 이미 처리됨)
        
        // 완료 메시지 표시 (현재 활성화된 모드에서만 표시)
        if (activeMode.value === mode) {
          const bubble = {
            id: Date.now() + actualIndex + cat.id * 10000,
            text: `${modeName} ${texts.value.complete}! 100 ${texts.value.coin} ${texts.value.earned}!`,
            x: Math.random() * (maxWidth - bubbleWidth - padding * 2) + padding,
            y: Math.random() * (maxHeight - bubbleHeight - padding * 2 - 200) + 100
          }
          speechBubbles.value.push(bubble)
          
          setTimeout(() => {
            const bubbleIndex = speechBubbles.value.findIndex(b => b.id === bubble.id)
            if (bubbleIndex > -1) {
              speechBubbles.value.splice(bubbleIndex, 1)
            }
          }, 3000)
        }
      } else {
        // 진행 상황 말풍선 표시 (현재 활성화된 모드에서만 표시, 10번 미만일 때만)
        if (activeMode.value === mode) {
          const bubble = {
            id: Date.now() + actualIndex + cat.id * 1000 + currentClickCount * 100,
            text: `${modeName} ${texts.value.progress}: ${currentClickCount}/10`,
            x: Math.random() * (maxWidth - bubbleWidth - padding * 2) + padding,
            y: Math.random() * (maxHeight - bubbleHeight - padding * 2 - 200) + 100
          }
          speechBubbles.value.push(bubble)
          
          setTimeout(() => {
            const bubbleIndex = speechBubbles.value.findIndex(b => b.id === bubble.id)
            if (bubbleIndex > -1) {
              speechBubbles.value.splice(bubbleIndex, 1)
            }
          }, 2000)
        }
      }
    }
  }, 1000) // 1초마다 실행
}

// 자동 포인트 획득 중지
const stopAutoPointGeneration = (mode) => {
  if (autoPointIntervals.value[mode]) {
    clearInterval(autoPointIntervals.value[mode])
    autoPointIntervals.value[mode] = null
  }
}

// 모든 자동 포인트 획득 중지
const stopAllAutoPointGeneration = () => {
  Object.keys(autoPointIntervals.value).forEach(mode => {
    stopAutoPointGeneration(mode)
  })
}

// coinCount 변경 시 pointCount도 실시간 업데이트
watch(coinCount, (newValue) => {
  pointCount.value = newValue
})

// 고양이 목록 변경 감지하여 자동 포인트 획득 재시작
watch([miningCats, huntingCats, explorationCats, productionCats], () => {
  // 제거된 고양이의 클릭 카운터 정리
  const modes = ['mining', 'hunting', 'exploration', 'production']
  modes.forEach(mode => {
    let catsList = []
    if (mode === 'mining') catsList = miningCats.value
    else if (mode === 'hunting') catsList = huntingCats.value
    else if (mode === 'exploration') catsList = explorationCats.value
    else if (mode === 'production') catsList = productionCats.value
    
    const activeCatKeys = catsList
      .map((cat, index) => cat ? `${mode}_${index}_${cat.id}` : null)
      .filter(key => key !== null)
    
    // 제거된 고양이의 클릭 카운터 삭제
    Object.keys(catClickCounters.value[mode]).forEach(key => {
      if (!activeCatKeys.includes(key)) {
        delete catClickCounters.value[mode][key]
      }
    })
  })
  
  startAutoPointGeneration('mining')
  startAutoPointGeneration('hunting')
  startAutoPointGeneration('exploration')
  startAutoPointGeneration('production')
}, { deep: true })

const startMining = () => {
  if (isMining.value) return
  
  isMining.value = true
  miningProgress.value = 0
  
  const miningInterval = setInterval(() => {
    miningProgress.value += 10
    
    if (miningProgress.value >= 100) {
      clearInterval(miningInterval)
      isMining.value = false
      miningProgress.value = 0
      
      // 랜덤 자원 획득
      const randomResource = Math.random()
      if (randomResource < 0.4) resources.value.stone++
      else if (randomResource < 0.7) resources.value.iron++
      else if (randomResource < 0.9) resources.value.gold++
      else resources.value.diamond++
    }
  }, 200)
}

// 사냥 관련 상태 (huntingLevel은 위에서 이미 선언됨)
const huntingProgress = ref(0)
const isHunting = ref(false)
const monsters = ref([
  { name: '슬라임', level: 1, hp: 100, maxHp: 100, exp: 10, gold: 5 },
  { name: '고블린', level: 2, hp: 150, maxHp: 150, exp: 20, gold: 10 },
  { name: '오크', level: 3, hp: 200, maxHp: 200, exp: 35, gold: 20 }
])
const currentMonster = ref(null)
const playerStats = ref({
  level: 1,
  exp: 0,
  maxExp: 100,
  hp: 100,
  maxHp: 100,
  attack: 20
})

const selectMonster = (monster) => {
  currentMonster.value = { ...monster }
}

const startHunting = () => {
  if (!currentMonster.value || isHunting.value) return
  
  isHunting.value = true
  huntingProgress.value = 0
  
  const huntingInterval = setInterval(() => {
    const damage = Math.floor(Math.random() * playerStats.value.attack) + 10
    currentMonster.value.hp -= damage
    
    if (currentMonster.value.hp <= 0) {
      clearInterval(huntingInterval)
      isHunting.value = false
      huntingProgress.value = 100
      
      playerStats.value.exp += currentMonster.value.exp
      playerStats.value.hp = playerStats.value.maxHp
      
      if (playerStats.value.exp >= playerStats.value.maxExp) {
        playerStats.value.level++
        playerStats.value.exp = 0
        playerStats.value.maxExp = Math.floor(playerStats.value.maxExp * 1.5)
        playerStats.value.attack += 5
        playerStats.value.maxHp += 20
        playerStats.value.hp = playerStats.value.maxHp
      }
      
      setTimeout(() => {
        currentMonster.value = null
        huntingProgress.value = 0
      }, 2000)
    } else {
      huntingProgress.value = ((currentMonster.value.maxHp - currentMonster.value.hp) / currentMonster.value.maxHp) * 100
    }
  }, 500)
}

// 탐험 관련 상태 (explorationLevel은 위에서 이미 선언됨)
const explorationProgress = ref(0)
const isExploring = ref(false)
const currentLocation = ref(null)
const locations = ref([
  { 
    name: '신비한 숲', 
    level: 1, 
    difficulty: '쉬움', 
    rewards: ['나무', '열매', '약초'],
    description: '평화로운 숲에서 기본 자원을 수집할 수 있습니다.',
    discovered: true
  },
  { 
    name: '고대 유적', 
    level: 2, 
    difficulty: '보통', 
    rewards: ['고대 유물', '마법석', '보석'],
    description: '신비한 힘이 깃든 고대 유적지입니다.',
    discovered: false
  },
  { 
    name: '용의 동굴', 
    level: 3, 
    difficulty: '어려움', 
    rewards: ['용의 비늘', '마나 크리스탈', '희귀 보석'],
    description: '위험하지만 귀중한 보물이 숨겨진 곳입니다.',
    discovered: false
  }
])

const explorationRewards = ref({
  wood: 0,
  fruit: 0,
  herb: 0,
  artifact: 0,
  magicStone: 0,
  gem: 0,
  dragonScale: 0,
  manaCrystal: 0,
  rareGem: 0
})

const selectLocation = (location) => {
  if (location.discovered) {
    currentLocation.value = location
  }
}

const startExploration = () => {
  if (!currentLocation.value || isExploring.value) return
  
  isExploring.value = true
  explorationProgress.value = 0
  
  const explorationInterval = setInterval(() => {
    explorationProgress.value += 5
    
    if (explorationProgress.value >= 100) {
      clearInterval(explorationInterval)
      isExploring.value = false
      explorationProgress.value = 0
      
      const randomReward = Math.floor(Math.random() * currentLocation.value.rewards.length)
      const reward = currentLocation.value.rewards[randomReward]
      
      const rewardMap = {
        '나무': 'wood',
        '열매': 'fruit',
        '약초': 'herb',
        '고대 유물': 'artifact',
        '마법석': 'magicStone',
        '보석': 'gem',
        '용의 비늘': 'dragonScale',
        '마나 크리스탈': 'manaCrystal',
        '희귀 보석': 'rareGem'
      }
      
      if (rewardMap[reward]) {
        explorationRewards.value[rewardMap[reward]]++
      }
      
      if (Math.random() < 0.3) {
        const undiscoveredLocation = locations.value.find(loc => !loc.discovered)
        if (undiscoveredLocation) {
          undiscoveredLocation.discovered = true
        }
      }
      
      explorationLevel.value++
      
      setTimeout(() => {
        currentLocation.value = null
      }, 2000)
    }
  }, 300)
}

// 생산 관련 상태 (productionLevel은 위에서 이미 선언됨)
const productionProgress = ref(0)
const isProducing = ref(false)
const currentRecipe = ref(null)
const inventory = ref({
  wood: 10,
  stone: 5,
  iron: 3,
  gold: 1,
  diamond: 0,
  herb: 8,
  fruit: 12
})

const recipes = ref([
  {
    id: 'woodenSword',
    name: '나무 검',
    level: 1,
    materials: { wood: 5, stone: 2 },
    result: { woodenSword: 1 },
    time: 30,
    description: '기본적인 나무 검입니다.'
  },
  {
    id: 'ironSword',
    name: '철 검',
    level: 2,
    materials: { wood: 3, iron: 5, stone: 3 },
    result: { ironSword: 1 },
    time: 60,
    description: '강력한 철 검입니다.'
  },
  {
    id: 'healthPotion',
    name: '체력 포션',
    level: 1,
    materials: { herb: 3, fruit: 2 },
    result: { healthPotion: 1 },
    time: 20,
    description: '체력을 회복시켜주는 포션입니다.'
  }
])

const producedItems = ref({
  woodenSword: 0,
  ironSword: 0,
  healthPotion: 0
})

const selectRecipe = (recipe) => {
  const hasEnoughMaterials = Object.entries(recipe.materials).every(
    ([material, amount]) => inventory.value[material] >= amount
  )
  
  if (hasEnoughMaterials && recipe.level <= productionLevel.value) {
    currentRecipe.value = recipe
  }
}

const startProduction = () => {
  if (!currentRecipe.value || isProducing.value) return
  
  Object.entries(currentRecipe.value.materials).forEach(([material, amount]) => {
    inventory.value[material] -= amount
  })
  
  isProducing.value = true
  productionProgress.value = 0
  
  const productionInterval = setInterval(() => {
    productionProgress.value += (100 / (currentRecipe.value.time / 0.1))
    
    if (productionProgress.value >= 100) {
      clearInterval(productionInterval)
      isProducing.value = false
      productionProgress.value = 0
      
      Object.entries(currentRecipe.value.result).forEach(([item, amount]) => {
        producedItems.value[item] += amount
      })
      
      if (Math.random() < 0.1) {
        productionLevel.value++
      }
      
      setTimeout(() => {
        currentRecipe.value = null
      }, 2000)
    }
  }, 100)
}

const canProduce = (recipe) => {
  const hasEnoughMaterials = Object.entries(recipe.materials).every(
    ([material, amount]) => inventory.value[material] >= amount
  )
  return hasEnoughMaterials && recipe.level <= productionLevel.value
}
</script>

<template>
  <div class="mainScreen">
    <!-- 헤더 -->
    <Header 
      :coinCount="coinCount" 
      :currentEnergy="currentEnergy"
      :maxEnergy="maxEnergy"
      :totalCoin="totalCoin"
      :catCount="catCount"
    />
    
    <!-- 메인 콘텐츠 -->
    <main class="mainContent">
      <!-- 메인 메뉴 -->
      <article v-if="activeMode === 'main'" class="mainMenuNew">
        <!-- 총 포인트 & 총 코인 -->
        <div class="totalStats">
          <div class="totalPoint">
            <div class="statLabel">{{ texts.totalPoints }}</div>
            <div class="statValue">
              <div class="iconCircle pointIcon">
                <img src="@/assets/img/mainPoint.png" alt="P" />
              </div>
              <span class="statNumber">{{ formatNumber(pointCount) }}</span>
            </div>
          </div>
          <div class="divider"></div>
          <div class="totalCoin">
            <div class="statLabel">{{ texts.totalCoins }}</div>
            <div class="statValue">
              <div class="iconCircle coinIcon">
                <img src="@/assets/img/mainCoin.png" alt="C" />
              </div>
              <span class="statNumber">{{ formatNumber(totalCoin) }}</span>
            </div>
          </div>
        </div>
        
        <!-- 게임 모드 그리드 -->
        <div class="gameModeGrid">
          <div class="modeCard miningCard" @click="setActiveMode('mining')">
            <div class="mainmenuBtns"></div>
            <div class="modeTitle">{{ texts.mining }}</div>
            <div class="modeLevel">Level {{ String(miningLevel).padStart(2, '0') }}</div>
          </div>
          <div class="modeCard huntingCard" @click="setActiveMode('hunting')">
            <div class="mainmenuBtns"></div>
            <div class="modeTitle">{{ texts.hunting }}</div>
            <div class="modeLevel">Level {{ String(huntingLevel).padStart(2, '0') }}</div>
          </div>
          <div class="modeCard explorationCard" @click="setActiveMode('exploration')">
            <div class="mainmenuBtns"></div>
            <div class="modeTitle">{{ texts.exploration }}</div>
            <div class="modeLevel">Level {{ String(explorationLevel).padStart(2, '0') }}</div>
          </div>
          <div class="modeCard productionCard" @click="setActiveMode('production')">
            <div class="mainmenuBtns"></div>
            <div class="modeTitle">{{ texts.production }}</div>
            <div class="modeLevel">Level {{ String(productionLevel).padStart(2, '0') }}</div>
          </div>
        </div>
      </article>

      <!-- 채굴 모드 -->
      <div v-if="activeMode === 'mining'" class="miningMode">
        <div class="pageHeader">
          <button class="backBtn" @click="setActiveMode('main')">{{ texts.back }}</button>
        </div>
        
        <!-- 상단 총 포인트 -->
        <div class="totalPointsDisplay">
          {{ formatNumber(pointCount) }}
        </div>
        
        <!-- 클리커 버튼 (구름 모양) -->
        <div class="miningButtonContainer">
          <button 
            v-if="showNewMiningButton && !isMiningComplete" 
            @click="handleClick('mining')" 
            class="clickerBtn miningBtn"
            :class="{ 'mining-active': miningClickCount > 0 }"
          >
          </button>
          <div v-if="isMiningComplete" class="completeMessageContainer">
            <div class="completeMessageText">{{ texts.miningComplete }}</div>
            <div class="rewardInfo">
              <div class="rewardItem">{{ miningReward.points.toLocaleString() }} {{ texts.pointsEarned }}</div>
              <div v-if="miningReward.fragments > 0" class="rewardItem">{{ texts.fragmentsEarned }} {{ miningReward.fragments }} {{ texts.fragmentsEarnedCount }}</div>
            </div>
          </div>
        </div>
        
        <!-- 행성 에너지 섹션 -->
        <div class="energySection">
          <div class="energyInfo">
            <span class="energyIcon">⚡</span>
            <span class="energyText">{{ planetEnergy.toLocaleString() }}/{{ maxPlanetEnergy.toLocaleString() }}</span>
          </div>
          <div class="energyBar">
            <div class="energyFill" :style="{ width: (planetEnergy / maxPlanetEnergy * 100) + '%' }"></div>
          </div>
        </div>
        
        <!-- 채굴 냥이 목록 -->
        <div class="miningCatsSection">
          <div class="catsListLabel">{{ texts.miningCatList }}</div>
          <div class="catsListScroll">
            <template v-for="(cat, index) in miningCats" :key="index">
              <div 
                class="catCard"
                :class="{ 'emptySlot': !cat, 'working': cat && activeMode === 'mining' }"
                @click="openCatSelectPopup(index, 'mining', $event)"
              >
                <div v-if="cat" class="catLevel">Lv {{ String(cat.level).padStart(2, '0') }}</div>
                <div v-if="cat" class="catImage">
                  <img :src="getCatImage(cat.imageId)" alt="Cat" />
                </div>
                <div v-if="cat" class="catStars">
                  <span v-for="n in cat.stars" :key="n" class="star"><img src="" alt=""></span>
                </div>
                <div v-if="!cat" class="emptySlotContent">
                  <span class="emptySlotText">+</span>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>

      <!-- 사냥 모드 -->
      <div v-if="activeMode === 'hunting'" class="miningMode">
        <div class="pageHeader">
          <button class="backBtn" @click="setActiveMode('main')">{{ texts.back }}</button>
        </div>
        
        <!-- 상단 총 포인트 -->
        <div class="totalPointsDisplay">
          {{ formatNumber(pointCount) }}
        </div>
        
        <!-- 클리커 버튼 -->
        <div class="miningButtonContainer">
          <button 
            v-if="showNewHuntingButton && !isHuntingComplete" 
            @click="handleClick('hunting')" 
            class="clickerBtn huntingBtn"
            :class="{ 'hunting-active': huntingClickCount > 0 }"
          >
          </button>
          <div v-if="isHuntingComplete" class="completeMessageContainer">
            <div class="completeMessageText">{{ texts.huntingComplete }}</div>
            <div class="rewardInfo">
              <div class="rewardItem">{{ huntingReward.points.toLocaleString() }} {{ texts.pointsEarned }}</div>
              <div v-if="huntingReward.fragments > 0" class="rewardItem">{{ texts.fragmentsEarned }} {{ huntingReward.fragments }} {{ texts.fragmentsEarnedCount }}</div>
            </div>
          </div>
        </div>
        
        <!-- 행성 에너지 섹션 -->
        <div class="energySection">
          <div class="energyInfo">
            <span class="energyIcon">⚡</span>
            <span class="energyText">{{ planetEnergy.toLocaleString() }}/{{ maxPlanetEnergy.toLocaleString() }}</span>
          </div>
          <div class="energyBar">
            <div class="energyFill" :style="{ width: (planetEnergy / maxPlanetEnergy * 100) + '%' }"></div>
          </div>
        </div>
        
        <!-- 사냥 냥이 목록 -->
        <div class="miningCatsSection">
          <div class="catsListLabel">{{ texts.huntingCatList }}</div>
          <div class="catsListScroll">
            <template v-for="(cat, index) in huntingCats" :key="index">
              <div 
                class="catCard"
                :class="{ 'emptySlot': !cat, 'working': cat && activeMode === 'hunting' }"
                @click="openCatSelectPopup(index, 'hunting', $event)"
              >
                <div v-if="cat" class="catLevel">Lv {{ String(cat.level).padStart(2, '0') }}</div>
                <div v-if="cat" class="catImage">
                  <img :src="getCatImage(cat.imageId)" alt="Cat" />
                </div>
                <div v-if="cat" class="catStars">
                  <span v-for="n in cat.stars" :key="n" class="star"><img src="" alt=""></span>
                </div>
                <div v-if="!cat" class="emptySlotContent">
                  <span class="emptySlotText">+</span>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>

      <!-- 탐험 모드 -->
      <div v-if="activeMode === 'exploration'" class="miningMode">
        <div class="pageHeader">
          <button class="backBtn" @click="setActiveMode('main')">{{ texts.back }}</button>
        </div>
        
        <!-- 상단 총 포인트 -->
        <div class="totalPointsDisplay">
          {{ formatNumber(pointCount) }}
        </div>
        
        <!-- 클리커 버튼 -->
        <div class="miningButtonContainer">
          <button 
            v-if="showNewExplorationButton && !isExplorationComplete" 
            @click="handleClick('exploration')" 
            class="clickerBtn explorationBtn"
            :class="{ 'exploration-active': explorationClickCount > 0 }"
          >
          </button>
          <div v-if="isExplorationComplete" class="completeMessageContainer">
            <div class="completeMessageText">{{ texts.explorationComplete }}</div>
            <div class="rewardInfo">
              <div class="rewardItem">{{ explorationReward.points.toLocaleString() }} {{ texts.pointsEarned }}</div>
              <div v-if="explorationReward.fragments > 0" class="rewardItem">{{ texts.fragmentsEarned }} {{ explorationReward.fragments }} {{ texts.fragmentsEarnedCount }}</div>
            </div>
          </div>
        </div>
        
        <!-- 행성 에너지 섹션 -->
        <div class="energySection">
          <div class="energyInfo">
            <span class="energyIcon">⚡</span>
            <span class="energyText">{{ planetEnergy.toLocaleString() }}/{{ maxPlanetEnergy.toLocaleString() }}</span>
          </div>
          <div class="energyBar">
            <div class="energyFill" :style="{ width: (planetEnergy / maxPlanetEnergy * 100) + '%' }"></div>
          </div>
        </div>
        
        <!-- 탐험 냥이 목록 -->
        <div class="miningCatsSection">
          <div class="catsListLabel">{{ texts.explorationCatList }}</div>
          <div class="catsListScroll">
            <template v-for="(cat, index) in explorationCats" :key="index">
              <div 
                class="catCard"
                :class="{ 'emptySlot': !cat, 'working': cat && activeMode === 'exploration' }"
                @click="openCatSelectPopup(index, 'exploration', $event)"
              >
                <div v-if="cat" class="catLevel">Lv {{ String(cat.level).padStart(2, '0') }}</div>
                <div v-if="cat" class="catImage">
                  <img :src="getCatImage(cat.imageId)" alt="Cat" />
                </div>
                <div v-if="cat" class="catStars">
                  <span v-for="n in cat.stars" :key="n" class="star"><img src="" alt=""></span>
                </div>
                <div v-if="!cat" class="emptySlotContent">
                  <span class="emptySlotText">+</span>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>

      <!-- 생산 모드 -->
      <div v-if="activeMode === 'production'" class="miningMode">
        <div class="pageHeader">
          <button class="backBtn" @click="setActiveMode('main')">{{ texts.back }}</button>
        </div>
        
        <!-- 상단 총 포인트 -->
        <div class="totalPointsDisplay">
          {{ formatNumber(pointCount) }}
        </div>
        
        <!-- 클리커 버튼 -->
        <div class="miningButtonContainer">
          <button 
            v-if="showNewProductionButton && !isProductionComplete" 
            @click="handleClick('production')" 
            class="clickerBtn productionBtn"
            :class="{ 'production-active': productionClickCount > 0 }"
          >
          </button>
          <div v-if="isProductionComplete" class="completeMessageContainer">
            <div class="completeMessageText">{{ texts.productionComplete }}</div>
            <div class="rewardInfo">
              <div class="rewardItem">{{ productionReward.points.toLocaleString() }} {{ texts.pointsEarned }}</div>
              <div v-if="productionReward.fragments > 0" class="rewardItem">{{ texts.fragmentsEarned }} {{ productionReward.fragments }} {{ texts.fragmentsEarnedCount }}</div>
            </div>
          </div>
        </div>
        
        <!-- 행성 에너지 섹션 -->
        <div class="energySection">
          <div class="energyInfo">
            <span class="energyIcon">⚡</span>
            <span class="energyText">{{ planetEnergy.toLocaleString() }}/{{ maxPlanetEnergy.toLocaleString() }}</span>
          </div>
          <div class="energyBar">
            <div class="energyFill" :style="{ width: (planetEnergy / maxPlanetEnergy * 100) + '%' }"></div>
          </div>
        </div>
        
        <!-- 생산 냥이 목록 -->
        <div class="miningCatsSection">
          <div class="catsListLabel">{{ texts.productionCatList }}</div>
          <div class="catsListScroll">
            <template v-for="(cat, index) in productionCats" :key="index">
              <div 
                class="catCard"
                :class="{ 'emptySlot': !cat, 'working': cat && activeMode === 'production' }"
                @click="openCatSelectPopup(index, 'production', $event)"
              >
                <div v-if="cat" class="catLevel">Lv {{ String(cat.level).padStart(2, '0') }}</div>
                <div v-if="cat" class="catImage">
                  <img :src="getCatImage(cat.imageId)" alt="Cat" />
                </div>
                <div v-if="cat" class="catStars">
                  <span v-for="n in cat.stars" :key="n" class="star"><img src="" alt=""></span>
                </div>
                <div v-if="!cat" class="emptySlotContent">
                  <span class="emptySlotText">+</span>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </main>

    <!-- 푸터 -->
    <Footer />
    
    <!-- 말풍선들 (메인 화면에서는 숨김) -->
    <div v-if="activeMode !== 'main'" class="speechBubbles">
      <div 
        v-for="bubble in speechBubbles" 
        :key="bubble.id"
        class="speechBubble"
        :style="{ left: bubble.x + 'px', top: bubble.y + 'px', transform: 'translateX(-50%)' }"
      >
        {{ bubble.text }}
      </div>
    </div>
    
    <!-- 고양이 이모지 애니메이션 (메인 화면에서는 숨김) -->
    <div v-if="activeMode !== 'main'" class="catEmojis">
      <div 
        v-for="emoji in catEmojis" 
        :key="emoji.id"
        class="catEmoji"
        :style="{ left: emoji.x + 'px', top: emoji.y + 'px' }"
      >
        <img 
          :src="getTulImage(emoji.imageId)" 
          alt="" 
          class="tulImage"
          @error="handleImageError(emoji.id)"
        />
      </div>
    </div>
    
    <!-- 고양이 선택 팝업 (모든 모드에서 공유) -->
    <div v-if="showCatSelectPopup" class="catSelectPopupOverlay" @click="closeCatSelectPopup">
      <div class="catSelectPopupContent" @click.stop>
        <div class="catSelectPopupHeader">
          <h3>{{ texts.selectCat }}</h3>
          <button class="closePopupBtn" @click="closeCatSelectPopup">×</button>
        </div>
        <div class="catSelectPopupBody">
          <!-- 현재 슬롯에 고양이가 있으면 제거 버튼 표시 -->
          <div v-if="getCurrentSlotCat()" class="removeCatSection">
            <button class="removeCatBtn" @click="removeCatFromSlot">
              {{ texts.removeCat }}
            </button>
          </div>
          <div class="availableCatsGrid">
            <div 
              v-for="cat in availableCats" 
              :key="cat.id"
              class="availableCatCard"
              @click="selectCatForSlot(cat)"
            >
              <div class="availableCatImage">
                <img :src="getCatImage(cat.imageId || cat.id)" alt="Cat" />
              </div>
              <div class="availableCatInfo">
                <div class="availableCatName">{{ cat.name }}</div>
                <div class="availableCatLevel">Lv {{ String(cat.level || 1).padStart(2, '0') }}</div>
                <div class="availableCatStars">
                  <span v-for="n in (cat.stars || 1)" :key="n" class="star">★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 클릭 버튼 애니메이션 */
.clickerBtn {
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.1s ease;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}


/* 말풍선 스타일 */
.speechBubbles {
  position: absolute;
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
  background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%);
  color: white;
  padding: 0.8rem 1.2rem;
  border-radius: 25px;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
  animation: bubbleAppear 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55), bubbleFloat 2.5s ease-out 0.4s forwards;
  white-space: pre-line;
  max-width: 220px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  transform-origin: center;
  text-align: center;
  line-height: 1.4;
}

/* 모바일 반응형 */
@media (max-width: 480px) {
  .speechBubble {
    font-size: 1rem;
    padding: 0.6rem 1rem;
    max-width: 180px;
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
  border-top: 10px solid #ff6b6b;
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
  border-top: 8px solid rgba(255, 255, 255, 0.3);
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
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  30% {
    transform: translateY(-15px) scale(1.05);
    opacity: 0.9;
  }
  70% {
    transform: translateY(-30px) scale(0.95);
    opacity: 0.6;
  }
  100% {
    transform: translateY(-50px) scale(0.8);
    opacity: 0;
  }
}

/* 페이지 헤더 스타일 */
.pageHeader {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.backBtn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

/* 모바일 반응형 */
@media (max-width: 480px) {
  .backBtn {
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
  }
}

.backBtn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

.pageHeader h2 {
  color: white;
  font-size: 1.8rem;
  margin: 0;
}

/* 모바일 반응형 */
@media (max-width: 480px) {
  .pageHeader h2 {
    font-size: 1.6rem;
  }
}

/* 게임 모드 컨테이너 */
.gameMode {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
}

.levelInfo {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.8rem 1.6rem;
  border-radius: 20px;
  color: white;
  font-weight: 500;
  text-align: center;
}

/* 채굴 완료 상태 스타일 */
.miningComplete {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 500px;
  animation: fadeInCentered 0.5s ease-in;
  z-index: 999;
}

/* 사냥 완료 상태 스타일 */
.huntingComplete {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 500px;
  animation: fadeInCentered 0.5s ease-in;
  z-index: 999;
}

/* 탐험 완료 상태 스타일 */
.explorationComplete {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 500px;
  animation: fadeInCentered 0.5s ease-in;
  z-index: 999;
}

/* 생산 완료 상태 스타일 */
.productionComplete {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 500px;
  animation: fadeInCentered 0.5s ease-in;
  z-index: 999;
}

.completeMessage {
  text-align: center;
  color: white;
}

.completeMessage h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  animation: bounce 1s ease-in-out infinite;
}

.completeMessage p {
  font-size: 1.4rem;
  margin-bottom: 2rem;
  opacity: 0.8;
}

/* 모바일 반응형 */
@media (max-width: 480px) {
  .completeMessage h3 {
    font-size: 1.6rem;
  }
  
  .completeMessage p {
    font-size: 1.2rem;
  }
}

/* 고양이 카드 완료 메시지 컨테이너 스타일 */
.catsListScroll .completeMessageContainer {
  width: calc(100% / 6 - 1rem);
  min-width: calc(100% / 6 - 1rem);
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  min-height: 120px;
}

.catsListScroll .completeMessageContainer .completeMessageText {
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;
  animation: bounce 1s ease-in-out infinite;
}

.rewardInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  margin-top: 0.5rem;
}

.rewardItem {
  color: #FFD700;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

/* 모바일 반응형 */
@media (max-width: 480px) {
  .catsListScroll .completeMessageContainer .completeMessageText {
    font-size: 1.2rem;
  }
  
  .rewardItem {
    font-size: 0.9rem;
  }
}

.loadingDots {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.loadingDots span {
  width: 12px;
  height: 12px;
  background: white;
  border-radius: 50%;
  animation: dotPulse 1.5s ease-in-out infinite;
}

.loadingDots span:nth-child(2) {
  animation-delay: 0.2s;
}

.loadingDots span:nth-child(3) {
  animation-delay: 0.4s;
}

/* 채굴 버튼 스타일 */
.miningBtn {
  transition: all 0.3s ease;

}

.miningBtn.mining-active {
  transform: scale(1.05);
}


/* 사냥 버튼 스타일 */
.huntingBtn {
  transition: all 0.3s ease;

}


/* 탐험 버튼 스타일 */
.explorationBtn {
  transition: all 0.3s ease;

}


/* 생산 버튼 스타일 */
.productionBtn {
  transition: all 0.3s ease;

}


/* 애니메이션 키프레임 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInCentered {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

@keyframes dotPulse {
  0%, 80%, 100% { transform: scale(1); opacity: 0.5; }
  40% { transform: scale(1.2); opacity: 1; }
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

/* 고양이 이모지 애니메이션 */
.catEmojis {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1001;
  overflow: hidden;
}

.catEmoji {
  position: absolute;
  animation: catPopUp 2s ease-out forwards;
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

@keyframes catPopUp {
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
