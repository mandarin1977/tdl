<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCurrentUser } from '@/utils/userUtils'
import { useAppStore } from '@/store/appStore'
import { calculateQuestProgress, isQuestCompleted, getQuestProgress, resetQuestProgress } from '@/utils/questUtils'

// appStore 사용
const store = useAppStore()
// appStore에서 게임 데이터 가져오기 (반응형)
const coinCount = computed(() => store.state.coins)
const activeMainTab = ref('inProgress')
const activeFilterTab = ref('daily')

// 오늘 날짜 가져오기
const getTodayDate = () => {
  return new Date().toDateString()
}

// localStorage에 저장된 날짜 확인
const checkDateChange = () => {
  const lastDate = localStorage.getItem('questLastDate')
  const today = getTodayDate()
  
  if (lastDate !== today) {
    // 날짜가 바뀌었으면 리셋
    localStorage.setItem('questLastDate', today)
    localStorage.removeItem('rewardedQuests')
    return true
  }
  return false
}

// 보상받은 퀘스트 로드
const loadRewardedQuests = () => {
  const rewardedIds = localStorage.getItem('rewardedQuests')
  return rewardedIds ? JSON.parse(rewardedIds) : []
}

// 보상받은 퀘스트 저장
const saveRewardedQuests = (ids) => {
  localStorage.setItem('rewardedQuests', JSON.stringify(ids))
  localStorage.setItem('questLastDate', getTodayDate())
}

// 보상 타입 정의
const rewardTypes = {
  coins: { icon: '💰', name: '코인' },
  catFragments: { icon: '✨', name: '고양이 파편' },
  exp: { icon: '⭐', name: '경험치' }
}

const allQuests = ref([
  // Daily 퀘스트
  {
    id: 1,
    title: '일일 채굴 10회',
    description: '오늘 하루 채굴을 10회 완료하세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 10,
    type: 'daily',
    reward: { coins: 100, catFragments: 5 },
    actionType: 'mining'
  },
  {
    id: 2,
    title: '일일 사냥 5회',
    description: '몬스터를 5마리 처치하세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 5,
    type: 'daily',
    reward: { coins: 100, catFragments: 5 },
    actionType: 'hunting'
  },
  {
    id: 3,
    title: '일일 탐험 1회',
    description: '탐험 활동을 1회 완료하세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 1,
    type: 'daily',
    reward: { coins: 150, catFragments: 10 },
    actionType: 'exploration'
  },
  {
    id: 4,
    title: '일일 생산 3개',
    description: '아이템을 3개 이상 생산하세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 3,
    type: 'daily',
    reward: { coins: 120, catFragments: 8 },
    actionType: 'production'
  },
  {
    id: 5,
    title: '일일 코인 1,000 획득',
    description: '코인을 1,000개 이상 획득하세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 1000,
    type: 'daily',
    reward: { coins: 200, catFragments: 15 },
    actionType: 'coinEarned'
  },
  {
    id: 6,
    title: '일일 레벨업 1회',
    description: '레벨을 1레벨 이상 올리세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 1,
    type: 'daily',
    reward: { coins: 300, catFragments: 20 },
    actionType: 'levelUp'
  },
  {
    id: 7,
    title: '일일 데일리 체크',
    description: '게임에 접속하여 일일 퀘스트를 확인하세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 1,
    type: 'daily',
    reward: { coins: 50, catFragments: 3 },
    actionType: 'login'
  },
  {
    id: 8,
    title: '일일 NFT 제작 1개',
    description: '고양이 NFT를 1개 제작하세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 1,
    type: 'daily',
    reward: { coins: 500, catFragments: 30 },
    actionType: 'nftCreated'
  },
  // Weekly 퀘스트
  {
    id: 9,
    title: '주간 퀘스트: 채굴 마스터',
    description: '일주일간 채굴을 50회 완료하세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 50,
    type: 'weekly',
    reward: { coins: 1000, catFragments: 50 },
    actionType: 'mining'
  },
  {
    id: 10,
    title: '주간 퀘스트: 사냥꾼',
    description: '일주일 동안 몬스터를 100마리 처치하세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 100,
    type: 'weekly',
    reward: { coins: 2000, catFragments: 100 },
    actionType: 'hunting'
  },
  {
    id: 11,
    title: '주간 퀘스트: 탐험가',
    description: '새로운 지역을 5곳 탐험하세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 5,
    type: 'weekly',
    reward: { coins: 1500, catFragments: 80 },
    actionType: 'exploration'
  },
  {
    id: 12,
    title: '주간 퀘스트: 생산자',
    description: '아이템을 50개 이상 생산하세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 50,
    type: 'weekly',
    reward: { coins: 1800, catFragments: 90 },
    actionType: 'production'
  },
  {
    id: 13,
    title: '주간 퀘스트: 코인 모으기',
    description: '코인을 5만개 이상 획득하세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 50000,
    type: 'weekly',
    reward: { coins: 5000, catFragments: 200 },
    actionType: 'coinEarned'
  },
  {
    id: 14,
    title: '주간 퀘스트: 레벨업 5',
    description: '레벨을 5레벨 이상 올리세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 5,
    type: 'weekly',
    reward: { coins: 3000, catFragments: 150 },
    actionType: 'levelUp'
  },
  {
    id: 15,
    title: '주간 퀘스트: NFT 수집가',
    description: 'NFT를 5개 이상 제작하세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 5,
    type: 'weekly',
    reward: { coins: 4000, catFragments: 250 },
    actionType: 'nftCreated'
  },
  {
    id: 16,
    title: '주간 퀘스트: 레어 NFT 소유',
    description: '레어 등급(3성 이상) NFT를 1개 이상 소유하세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 1,
    type: 'weekly',
    reward: { coins: 5000, catFragments: 300 },
    actionType: 'nftOwned'
  },
  // Monthly 퀘스트
  {
    id: 17,
    title: '월간 퀘스트: 코인왕',
    description: '이번 달 코인을 20만 개 이상 획득하세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 200000,
    type: 'monthly',
    reward: { coins: 20000, catFragments: 1000 },
    actionType: 'coinEarned'
  },
  {
    id: 18,
    title: '월간 퀘스트: 극한 레벨업',
    description: '레벨을 20레벨 이상 올리세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 20,
    type: 'monthly',
    reward: { coins: 15000, catFragments: 800 },
    actionType: 'levelUp'
  },
  {
    id: 19,
    title: '월간 퀘스트: NFT 마스터',
    description: 'NFT를 20개 이상 제작하세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 20,
    type: 'monthly',
    reward: { coins: 25000, catFragments: 1500 },
    actionType: 'nftCreated'
  },
  {
    id: 20,
    title: '월간 퀘스트: 마스터 채굴러',
    description: '채굴을 500회 이상 완료하세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 500,
    type: 'monthly',
    reward: { coins: 10000, catFragments: 500 },
    actionType: 'mining'
  },
  {
    id: 21,
    title: '월간 퀘스트: 용사',
    description: '몬스터를 500마리 처치하세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 500,
    type: 'monthly',
    reward: { coins: 12000, catFragments: 600 },
    actionType: 'hunting'
  },
  {
    id: 22,
    title: '월간 퀘스트: 대탐험가',
    description: '새로운 지역을 20곳 탐험하세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 20,
    type: 'monthly',
    reward: { coins: 10000, catFragments: 500 },
    actionType: 'exploration'
  },
  {
    id: 23,
    title: '월간 퀘스트: 완벽한 제작자',
    description: '다양한 아이템을 200개 생산하세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 200,
    type: 'monthly',
    reward: { coins: 15000, catFragments: 700 },
    actionType: 'production'
  },
  {
    id: 24,
    title: '월간 퀘스트: 에픽 NFT 소유',
    description: '에픽 등급(4성 이상) NFT를 1개 이상 소유하세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 1,
    type: 'monthly',
    reward: { coins: 30000, catFragments: 2000 },
    actionType: 'nftOwned'
  },
  // NFT 관련 추가 퀘스트
  {
    id: 25,
    title: '일일 NFT 제작 1개',
    description: '고양이 NFT를 1개 제작하세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 1,
    type: 'daily',
    reward: { coins: 500, catFragments: 30 },
    actionType: 'nftCreated'
  },
  {
    id: 26,
    title: '주간 NFT 제작 5개',
    description: '고양이 NFT를 5개 제작하세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 5,
    type: 'weekly',
    reward: { coins: 4000, catFragments: 250 },
    actionType: 'nftCreated'
  },
  {
    id: 27,
    title: '월간 NFT 제작 20개',
    description: '고양이 NFT를 20개 제작하세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 20,
    type: 'monthly',
    reward: { coins: 25000, catFragments: 1500 },
    actionType: 'nftCreated'
  },
  {
    id: 28,
    title: '레어 NFT 소유',
    description: '레어 등급(3성 이상) NFT를 1개 이상 소유하세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 1,
    type: 'daily',
    reward: { coins: 1000, catFragments: 50 },
    actionType: 'nftOwned'
  },
  {
    id: 29,
    title: '에픽 NFT 소유',
    description: '에픽 등급(4성 이상) NFT를 1개 이상 소유하세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 1,
    type: 'weekly',
    reward: { coins: 5000, catFragments: 300 },
    actionType: 'nftOwned'
  },
  {
    id: 30,
    title: '레전더리 NFT 소유',
    description: '레전더리 등급(5성) NFT를 1개 이상 소유하세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 1,
    type: 'monthly',
    reward: { coins: 50000, catFragments: 5000 },
    actionType: 'nftOwned'
  }
])

// 퀘스트 진행도 업데이트
const updateQuestProgresses = () => {
  const currentUser = getCurrentUser()
  if (!currentUser || !currentUser.gameData) return
  
  allQuests.value.forEach(quest => {
    const progress = calculateQuestProgress(quest.id, currentUser.gameData)
    quest.progress = progress
    quest.completed = isQuestCompleted(quest, currentUser.gameData)
  })
}

// 보상 받기 함수
const receiveReward = async (questId) => {
  const quest = allQuests.value.find(q => q.id === questId)
  if (!quest || !quest.completed || quest.rewardReceived) return
  
  const currentUser = getCurrentUser()
  if (!currentUser) {
    alert('로그인이 필요합니다.')
    return
  }
  
  // 보상 지급
  const reward = quest.reward || {}
  const updates = {}
  
  if (reward.coins) {
    updates.totalCoin = (currentUser.gameData?.totalCoin || 0) + reward.coins
  }
  
  if (reward.catFragments) {
    updates.catFragments = (currentUser.gameData?.catFragments || 50) + reward.catFragments
  }
  
  if (reward.exp) {
    // 경험치는 레벨업으로 변환 (간단히)
    const currentLevel = currentUser.gameData?.level || 1
    const expGain = reward.exp
    // 경험치 100당 레벨 1 증가 (예시)
    const levelGain = Math.floor(expGain / 100)
    if (levelGain > 0) {
      updates.level = currentLevel + levelGain
    }
  }
  
  // 게임 데이터 업데이트 (appStore를 통해 - 데이터 일관성 보장)
  await store.updateGameData(updates)
  
  // 퀘스트 보상 받음 표시
  quest.rewardReceived = true
  
  // localStorage에 저장
  const rewardedIds = loadRewardedQuests()
  if (!rewardedIds.includes(questId)) {
    rewardedIds.push(questId)
    saveRewardedQuests(rewardedIds)
  }
  
  // 이벤트 발생
  window.dispatchEvent(new CustomEvent('userDataUpdated'))
  
  // 보상 알림
  const rewardText = []
  if (reward.coins) rewardText.push(`${reward.coins} 코인`)
  if (reward.catFragments) rewardText.push(`${reward.catFragments} 고양이 파편`)
  if (reward.exp) rewardText.push(`${reward.exp} 경험치`)
  
  alert(`보상 받기 완료!\n${rewardText.join(', ')}를 획득했습니다.`)
  
  // 코인 카운트는 appStore에서 자동으로 업데이트됨
}

// 필터링된 퀘스트
const quests = computed(() => {
  let filtered = allQuests.value.filter(quest => quest.type === activeFilterTab.value)
  
  // 탭에 따라 필터링
  if (activeMainTab.value === 'inProgress') {
    // 진행중 탭: 완료 안됐거나, 완료됐지만 보상받기 버튼이 있는 경우
    filtered = filtered.filter(quest => !quest.completed || (quest.completed && !quest.rewardReceived))
  } else if (activeMainTab.value === 'completed') {
    // 완료 탭: 완료되고 보상을 받은 경우
    filtered = filtered.filter(quest => quest.completed && quest.rewardReceived)
  }
  
  // 보상받기 버튼이 있는 완료된 퀘스트를 맨 위로
  return filtered.sort((a, b) => {
    // completed가 true이고 rewardReceived가 false인 것(보상받기 버튼)을 먼저
    if (a.completed && !a.rewardReceived && (b.rewardReceived || !b.completed)) return -1
    if ((a.rewardReceived || !a.completed) && b.completed && !b.rewardReceived) return 1
    return 0
  })
})

// 일일/주간/월간 퀘스트 리셋
const resetQuestsByType = () => {
  const today = getTodayDate()
  const lastResetDate = localStorage.getItem('questResetDate')
  
  if (lastResetDate !== today) {
    // 일일 퀘스트 리셋
    const dailyQuestIds = allQuests.value.filter(q => q.type === 'daily').map(q => q.id)
    resetQuestProgress(dailyQuestIds)
    
    // 일일 퀘스트 보상 리셋
    const rewardedIds = loadRewardedQuests()
    const dailyRewardedIds = rewardedIds.filter(id => dailyQuestIds.includes(id))
    dailyRewardedIds.forEach(id => {
      const index = rewardedIds.indexOf(id)
      if (index > -1) rewardedIds.splice(index, 1)
    })
    saveRewardedQuests(rewardedIds)
    
    // 일일 퀘스트 완료 상태 리셋
    allQuests.value.forEach(quest => {
      if (quest.type === 'daily') {
        quest.rewardReceived = false
        quest.completed = false
        quest.progress = 0
      }
    })
    
    localStorage.setItem('questResetDate', today)
  }
  
  // 주간 퀘스트 리셋 (매주 월요일)
  const now = new Date()
  const dayOfWeek = now.getDay()
  const lastWeeklyReset = localStorage.getItem('questWeeklyResetDate')
  const weeklyResetDate = new Date(now.setDate(now.getDate() - dayOfWeek + 1)).toDateString()
  
  if (lastWeeklyReset !== weeklyResetDate) {
    const weeklyQuestIds = allQuests.value.filter(q => q.type === 'weekly').map(q => q.id)
    resetQuestProgress(weeklyQuestIds)
    
    const rewardedIds = loadRewardedQuests()
    const weeklyRewardedIds = rewardedIds.filter(id => weeklyQuestIds.includes(id))
    weeklyRewardedIds.forEach(id => {
      const index = rewardedIds.indexOf(id)
      if (index > -1) rewardedIds.splice(index, 1)
    })
    saveRewardedQuests(rewardedIds)
    
    allQuests.value.forEach(quest => {
      if (quest.type === 'weekly') {
        quest.rewardReceived = false
        quest.completed = false
        quest.progress = 0
      }
    })
    
    localStorage.setItem('questWeeklyResetDate', weeklyResetDate)
  }
  
  // 월간 퀘스트 리셋 (매월 1일)
  const lastMonthlyReset = localStorage.getItem('questMonthlyResetDate')
  const monthlyResetDate = new Date(now.getFullYear(), now.getMonth(), 1).toDateString()
  
  if (lastMonthlyReset !== monthlyResetDate) {
    const monthlyQuestIds = allQuests.value.filter(q => q.type === 'monthly').map(q => q.id)
    resetQuestProgress(monthlyQuestIds)
    
    const rewardedIds = loadRewardedQuests()
    const monthlyRewardedIds = rewardedIds.filter(id => monthlyQuestIds.includes(id))
    monthlyRewardedIds.forEach(id => {
      const index = rewardedIds.indexOf(id)
      if (index > -1) rewardedIds.splice(index, 1)
    })
    saveRewardedQuests(rewardedIds)
    
    allQuests.value.forEach(quest => {
      if (quest.type === 'monthly') {
        quest.rewardReceived = false
        quest.completed = false
        quest.progress = 0
      }
    })
    
    localStorage.setItem('questMonthlyResetDate', monthlyResetDate)
  }
}

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
  
  // 날짜 체크 및 퀘스트 리셋
  checkDateChange()
  resetQuestsByType()
  
  // 보상받은 퀘스트 로드
  const rewardedIds = loadRewardedQuests()
  allQuests.value.forEach(quest => {
    if (rewardedIds.includes(quest.id)) {
      quest.rewardReceived = true
    }
  })
  
  // 퀘스트 진행도 업데이트
  updateQuestProgresses()
  
  // 일일 로그인 퀘스트 자동 완료
  const loginQuest = allQuests.value.find(q => q.id === 7 && q.type === 'daily')
  if (loginQuest && !loginQuest.completed) {
    loginQuest.progress = 1
    loginQuest.completed = true
    // 진행도 저장
    const progress = getQuestProgress()
    progress[7] = 1
    localStorage.setItem('questProgress', JSON.stringify(progress))
  }
  
  // 퀘스트 진행도 업데이트 이벤트 리스너
  window.addEventListener('questProgressUpdated', updateQuestProgresses)
  window.addEventListener('userDataUpdated', updateQuestProgresses)
})

onUnmounted(() => {
  window.removeEventListener('questProgressUpdated', updateQuestProgresses)
  window.removeEventListener('userDataUpdated', updateQuestProgresses)
})
</script>

<template>
  <div class="questPage">
    <!-- 헤더 -->
    <Header :coinCount="coinCount" />
    
    <!-- 메인 콘텐츠 -->
    <main class="mainContent">
      <!-- 필터 탭 -->
      <div class="filterTabs">
        <button 
          class="filterTab" 
          :class="{ active: activeFilterTab === 'daily' }"
          @click="activeFilterTab = 'daily'"
        >
          Daily
        </button>
        <button 
          class="filterTab" 
          :class="{ active: activeFilterTab === 'weekly' }"
          @click="activeFilterTab = 'weekly'"
        >
          Weekly
        </button>
        <button 
          class="filterTab" 
          :class="{ active: activeFilterTab === 'monthly' }"
          @click="activeFilterTab = 'monthly'"
        >
          Monthly
        </button>
      </div>
      <!-- 메인 탭 -->
      <div class="mainTabs">
        <button 
          class="mainTab" 
          :class="{ active: activeMainTab === 'inProgress' }"
          @click="activeMainTab = 'inProgress'"
        >
          진행중
        </button>
        <button 
          class="mainTab" 
          :class="{ active: activeMainTab === 'completed' }"
          @click="activeMainTab = 'completed'"
        >
          완료
        </button>
      </div>
      

      
      <!-- 퀘스트 리스트 -->
      <div class="questList">
        <div 
          v-for="quest in quests" 
          :key="quest.id"
          class="questCard"
        >
          <div class="questContent">
            <div class="questInfo">
              <h3 class="questTitle">{{ quest.title }}</h3>
              <p class="questDescription">{{ quest.description }}</p>
              
              <!-- 보상 표시 -->
              <div v-if="quest.reward" class="questRewards">
                <span v-if="quest.reward.coins" class="rewardItem">
                  💰 {{ quest.reward.coins }}
                </span>
                <span v-if="quest.reward.catFragments" class="rewardItem">
                  ✨ {{ quest.reward.catFragments }}
                </span>
                <span v-if="quest.reward.exp" class="rewardItem">
                  ⭐ {{ quest.reward.exp }}
                </span>
              </div>
            </div>
            <div class="questCharacter">
              <!-- 캐릭터 이미지 영역 -->
              <div class="characterImg">🐱</div>
            </div>
          </div>
          
          <!-- 완료되고 보상 안받은 퀘스트 (보상받기 버튼) -->
          <button 
            v-if="quest.completed && !quest.rewardReceived" 
            class="rewardBtn"
            @click="receiveReward(quest.id)"
          >
            보상받기
          </button>
          
          <!-- 완료되고 보상을 받은 퀘스트 (완료 탭에서 표시) -->
          <div v-else-if="quest.completed && quest.rewardReceived" class="completedBadge">
            ✓ 완료됨
          </div>
          
          <!-- 진행중인 퀘스트 -->
          <div v-else class="progressBar">
            <div class="progressFill" :style="{ width: (quest.progress / quest.total * 100) + '%' }"></div>
            <span class="progressText">{{ quest.progress }}/{{ quest.total }}</span>
          </div>
        </div>
      </div>
    </main>
    
    <!-- 푸터 -->
    <Footer />
  </div>
</template>

<style scoped>
.questPage {
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
  min-height: calc(100vh - 130px);
  max-height: calc(100vh - 130px);
  overflow-y: auto;
}

/* 메인 탭 */
.mainTabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  background: #212436;
  border-radius: 5vw;
  padding: 4px;
}

.mainTab {
  flex: 1;
  padding: 0.8rem;
  border-radius: 5vw;
  border: none;
  cursor: pointer;
  color: #7C7D82;
  background: transparent;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s;
}

.mainTab.active {
  background: #3B3F58;
  color: #fff;
}

/* 필터 탭 */
.filterTabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  background: rgba(33, 36, 54, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 5rem;
  width: max-content;
  margin-left: auto;
  padding: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.filterTab {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 20px;
  color: #7C7D82;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  background: transparent;
}

.filterTab.active {
  background: #3B3F58;
  color: #fff;
}

/* 퀘스트 리스트 */
.questList {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* 퀘스트 카드 */
.questCard {
  background: rgba(33, 36, 54, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

.questContent {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 1rem;
}

.questInfo {
  flex: 1;
}

.questTitle {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #fff;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
}

.questDescription {
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 0.01em;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  line-height: 1.4;
}

.questCharacter {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
}

.characterImg {
  width: 100%;
  height: 100%;
  background: rgba(59, 63, 88, 0.8);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* 보상 받기 버튼 */
.rewardBtn {
  padding: 0.8rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.rewardBtn:hover {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

/* 진행도 바 */
.progressBar {
  position: relative;
  width: 100%;
  height: 8px;
  background: rgba(59, 63, 88, 0.8);
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.progressFill {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  transition: width 0.3s;
}

.progressText {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.75rem;
  color: #fff;
  font-weight: 600;
}

.completedBadge {
  padding: 0.8rem;
  background: rgba(59, 63, 88, 0.8);
  color: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  font-size: 0.85rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* 보상 표시 */
.questRewards {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
}

.rewardItem {
  background: rgba(125, 211, 252, 0.2);
  border: 1px solid rgba(125, 211, 252, 0.3);
  border-radius: 6px;
  padding: 0.3rem 0.6rem;
  font-size: 0.8rem;
  color: #7DD3FC;
  font-weight: 600;
}

/* 모바일 반응형 */
@media (max-width: 480px) {
  .mainContent {
    padding: 1.2rem;
  }
  
  .filterTab {
    font-size: 0.85rem;
    padding: 0.5rem 1rem;
  }
  
  .mainTab {
    font-size: 0.9rem;
    padding: 0.7rem;
  }
  
  .questTitle {
    font-size: 0.95rem;
  }
  
  .questDescription {
    font-size: 0.8rem;
  }
  
  .rewardBtn {
    font-size: 0.9rem;
    padding: 0.7rem;
  }
  
  .completedBadge {
    font-size: 0.8rem;
    padding: 0.7rem;
  }
  
  .progressText {
    font-size: 0.7rem;
  }
}
</style>
