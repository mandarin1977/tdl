<script setup>
import { ref, computed, onMounted } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCurrentUser } from '@/utils/userUtils'

const coinCount = ref(0)
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

const allQuests = ref([
  // Daily 퀘스트 (8개)
  {
    id: 1,
    title: '일일 채굴 10회',
    description: '오늘 하루 채굴을 10회 완료하세요',
    completed: true,
    rewardReceived: false,
    progress: 10,
    total: 10,
    type: 'daily'
  },
  {
    id: 2,
    title: '일일 사냥 5회',
    description: '몬스터를 5마리 처치하세요',
    completed: true,
    rewardReceived: false,
    progress: 5,
    total: 5,
    type: 'daily'
  },
  {
    id: 3,
    title: '일일 탐험 1회',
    description: '탐험 활동을 1회 완료하세요',
    completed: false,
    rewardReceived: false,
    progress: 0,
    total: 1,
    type: 'daily'
  },
  {
    id: 4,
    title: '일일 생산 3개',
    description: '아이템을 3개 이상 생산하세요',
    completed: false,
    rewardReceived: false,
    progress: 1,
    total: 3,
    type: 'daily'
  },
  {
    id: 5,
    title: '일일 코인 1,000 획득',
    description: '코인을 1,000개 이상 획득하세요',
    completed: false,
    rewardReceived: false,
    progress: 650,
    total: 1000,
    type: 'daily'
  },
  {
    id: 6,
    title: '일일 레벨업 1회',
    description: '레벨을 1레벨 이상 올리세요',
    completed: false,
    rewardReceived: false,
    progress: 0.6,
    total: 1,
    type: 'daily'
  },
  {
    id: 7,
    title: '일일 데일리 체크',
    description: '게임에 접속하여 일일 퀘스트를 확인하세요',
    completed: true,
    rewardReceived: false,
    progress: 1,
    total: 1,
    type: 'daily'
  },
  {
    id: 8,
    title: '일일 랜덤 상자 수집',
    description: '랜덤 상자를 2개 이상 수집하세요',
    completed: false,
    rewardReceived: false,
    progress: 1,
    total: 2,
    type: 'daily'
  },
  // Weekly 퀘스트 (8개)
  {
    id: 9,
    title: '주간 퀘스트: 채굴 마스터',
    description: '일주일간 채굴을 50회 완료하세요',
    completed: false,
    rewardReceived: false,
    progress: 23,
    total: 50,
    type: 'weekly'
  },
  {
    id: 10,
    title: '주간 퀘스트: 사냥꾼',
    description: '일주일 동안 몬스터를 100마리 처치하세요',
    completed: false,
    rewardReceived: false,
    progress: 45,
    total: 100,
    type: 'weekly'
  },
  {
    id: 11,
    title: '주간 퀘스트: 탐험가',
    description: '새로운 지역을 5곳 탐험하세요',
    completed: true,
    rewardReceived: false,
    progress: 5,
    total: 5,
    type: 'weekly'
  },
  {
    id: 12,
    title: '주간 퀘스트: 생산자',
    description: '아이템을 50개 이상 생산하세요',
    completed: false,
    rewardReceived: false,
    progress: 28,
    total: 50,
    type: 'weekly'
  },
  {
    id: 13,
    title: '주간 퀘스트: 코인 모으기',
    description: '코인을 5만개 이상 획득하세요',
    completed: false,
    rewardReceived: false,
    progress: 32000,
    total: 50000,
    type: 'weekly'
  },
  {
    id: 14,
    title: '주간 퀘스트: 레벨업 5',
    description: '레벨을 5레벨 이상 올리세요',
    completed: false,
    rewardReceived: false,
    progress: 3,
    total: 5,
    type: 'weekly'
  },
  {
    id: 15,
    title: '주간 퀘스트: 수집가',
    description: '다양한 보물을 20개 수집하세요',
    completed: false,
    rewardReceived: false,
    progress: 12,
    total: 20,
    type: 'weekly'
  },
  {
    id: 16,
    title: '주간 퀘스트: 종합 능력',
    description: '모든 활동을 각각 10회 이상 수행하세요',
    completed: false,
    rewardReceived: false,
    progress: 35,
    total: 40,
    type: 'weekly'
  },
  // Monthly 퀘스트 (8개)
  {
    id: 17,
    title: '월간 퀘스트: 코인왕',
    description: '이번 달 코인을 20만 개 이상 획득하세요',
    completed: false,
    rewardReceived: false,
    progress: 95000,
    total: 200000,
    type: 'monthly'
  },
  {
    id: 18,
    title: '월간 퀘스트: 극한 레벨업',
    description: '레벨을 20레벨 이상 올리세요',
    completed: false,
    rewardReceived: false,
    progress: 15,
    total: 20,
    type: 'monthly'
  },
  {
    id: 19,
    title: '월간 퀘스트: 완벽한 수집가',
    description: '보물을 100개 이상 수집하세요',
    completed: false,
    rewardReceived: false,
    progress: 67,
    total: 100,
    type: 'monthly'
  },
  {
    id: 20,
    title: '월간 퀘스트: 마스터 채굴러',
    description: '채굴을 500회 이상 완료하세요',
    completed: false,
    rewardReceived: false,
    progress: 289,
    total: 500,
    type: 'monthly'
  },
  {
    id: 21,
    title: '월간 퀘스트: 용사',
    description: '몬스터를 500마리 처치하세요',
    completed: false,
    rewardReceived: false,
    progress: 234,
    total: 500,
    type: 'monthly'
  },
  {
    id: 22,
    title: '월간 퀘스트: 대탐험가',
    description: '새로운 지역을 20곳 탐험하세요',
    completed: false,
    rewardReceived: false,
    progress: 14,
    total: 20,
    type: 'monthly'
  },
  {
    id: 23,
    title: '월간 퀘스트: 완벽한 제작자',
    description: '다양한 아이템을 200개 생산하세요',
    completed: false,
    rewardReceived: false,
    progress: 123,
    total: 200,
    type: 'monthly'
  },
  {
    id: 24,
    title: '월간 퀘스트: 최고 달성자',
    description: '이번 달 모든 활동을 완벽하게 수행하세요',
    completed: true,
    rewardReceived: false,
    progress: 100,
    total: 100,
    type: 'monthly'
  }
])

// 보상 받기 함수
const receiveReward = (questId) => {
  const quest = allQuests.value.find(q => q.id === questId)
  if (quest && quest.completed && !quest.rewardReceived) {
    quest.rewardReceived = true
    
    // localStorage에 저장
    const rewardedIds = loadRewardedQuests()
    if (!rewardedIds.includes(questId)) {
      rewardedIds.push(questId)
      saveRewardedQuests(rewardedIds)
    }
    
    alert('보상 받기 완료!')
  }
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

onMounted(() => {
  const currentUser = getCurrentUser()
  if (currentUser) {
    coinCount.value = currentUser.gameData?.coins || 0
  }
  
  // 날짜 체크
  checkDateChange()
  
  // 보상받은 퀘스트 로드
  const rewardedIds = loadRewardedQuests()
  allQuests.value.forEach(quest => {
    if (rewardedIds.includes(quest.id)) {
      quest.rewardReceived = true
    }
  })
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
