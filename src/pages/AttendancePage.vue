<script setup>
import { ref, onMounted, computed, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCurrentUser } from '@/utils/userUtils'
import { useAppStore } from '@/store/appStore'

// appStore 사용
const store = useAppStore()

const router = useRouter()
// appStore에서 게임 데이터 가져오기 (반응형)
const coinCount = computed(() => store.state.coins)
const currentUser = ref(null)
const attendanceDays = ref(0) // 출석 일수
const checkedDays = ref([]) // 체크된 날짜들
const lastCheckInDate = ref(null) // 마지막 출석체크 날짜
const consecutiveDays = ref(0) // 연속 출석 일수

// 20일 출석체크 데이터
const attendanceData = ref(
  Array.from({ length: 20 }, (_, i) => ({
    day: i + 1,
    reward: '1K',
    rewardType: 'P', // Point
    hasSpecial: [5, 9, 10, 11, 16, 17].includes(i + 1), // 특별 보상 날짜
    isChecked: false
  }))
)

// 날짜 비교 함수 (하루 차이 확인)
const isNextDay = (date1, date2) => {
  const d1 = new Date(date1)
  const d2 = new Date(date2)
  const diffTime = d2 - d1
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  return diffDays === 1
}

// 날짜가 같은지 확인
const isSameDay = (date1, date2) => {
  return new Date(date1).toDateString() === new Date(date2).toDateString()
}

// 뒤로가기
const goBack = () => {
  router.go(-1)
}

// 출석체크 처리
const checkAttendance = async (dayIndex) => {
  if (!currentUser.value) {
    alert('로그인이 필요합니다.')
    return
  }
  
  // 오늘 날짜
  const today = new Date()
  const todayString = today.toDateString()
  const todayISO = today.toISOString()
  
  // 오늘 이미 출석체크 했는지 확인
  if (lastCheckInDate.value && isSameDay(lastCheckInDate.value, todayISO)) {
    alert('오늘 이미 출석체크를 완료했습니다! 내일 다시 시도해주세요.')
    return
  }
  
  const day = attendanceData.value[dayIndex]
  if (day.isChecked) {
    alert('이미 체크된 날짜입니다.')
    return
  }
  
  // 다음 순서의 날짜만 체크 가능 (연속 출석이 끊겨도 다음 날은 체크 가능)
  const nextDayIndex = checkedDays.value.length
  
  // 하루를 건너뛰었는지 확인
  if (lastCheckInDate.value) {
    const lastDate = new Date(lastCheckInDate.value)
    const daysDiff = Math.floor((today - lastDate) / (1000 * 60 * 60 * 24))
    
    // 하루 이상 지났고, 다음 순서의 날짜가 아니면 체크 불가
    if (daysDiff > 0 && dayIndex !== nextDayIndex) {
      alert('다음 순서의 출석체크만 가능합니다.')
      return
    }
    
    // 연속 출석일수 계산 (하루 차이면 연속, 아니면 리셋)
    if (daysDiff === 1) {
      consecutiveDays.value += 1
    } else if (daysDiff > 1) {
      consecutiveDays.value = 1 // 연속 출석 리셋
    }
  } else {
    // 첫 출석체크
    consecutiveDays.value = 1
  }
  
  // 체크 처리
  day.isChecked = true
  checkedDays.value.push(day.day)
  attendanceDays.value = checkedDays.value.length
  
  // 보상 지급
  const reward = 1000 // 1K
  const newCoins = coinCount.value + reward
  
  // 오늘 날짜 저장
  lastCheckInDate.value = todayISO
  
  // 사용자 데이터 업데이트 (appStore를 통해 - 데이터 일관성 보장)
  if (currentUser.value) {
    await store.updateCoins(newCoins)
    await saveAttendanceData()
  }
  
  alert(`Day ${day.day} 출석체크 완료! ${reward} 포인트 획득!`)
  
  // 헤더 업데이트 이벤트 발생
  window.dispatchEvent(new Event('userDataUpdated'))
}

// 출석체크 데이터 저장 (localStorage)
const saveAttendanceData = async () => {
  if (currentUser.value) {
    const data = {
      checkedDays: checkedDays.value,
      attendanceDays: attendanceDays.value,
      consecutiveDays: consecutiveDays.value,
      lastCheckInDate: lastCheckInDate.value,
      lastUpdate: new Date().toISOString()
    }
    
    // localStorage에 저장
    localStorage.setItem(`attendance_${currentUser.value.id}`, JSON.stringify(data))
    
    // gameData에도 저장 (appStore를 통해 - 데이터 일관성 보장)
    await store.updateGameData({
      attendance: data
    })
  }
}

// 출석체크 데이터 로드
const loadAttendanceData = async () => {
  if (currentUser.value) {
    let data = null
    
    // sessionStorage에서 확인
    if (currentUser.value.gameData?.attendance) {
      data = currentUser.value.gameData.attendance
    }
    
    // sessionStorage에도 없으면 localStorage에서 확인
    if (!data) {
      const localSaved = localStorage.getItem(`attendance_${currentUser.value.id}`)
      if (localSaved) {
        data = JSON.parse(localSaved)
        
        // localStorage 데이터를 gameData에도 저장 (동기화, appStore를 통해)
        if (data) {
          await store.updateGameData({
            attendance: data
          })
        }
      }
    }
    
    if (data) {
      checkedDays.value = data.checkedDays || []
      attendanceDays.value = data.attendanceDays || 0
      consecutiveDays.value = data.consecutiveDays || 0
      lastCheckInDate.value = data.lastCheckInDate || null
      
      // 체크된 날짜 표시
      checkedDays.value.forEach(dayNum => {
        const dayIndex = dayNum - 1
        if (attendanceData.value[dayIndex]) {
          attendanceData.value[dayIndex].isChecked = true
        }
      })
    }
  }
}

// 오늘 출석체크 가능 여부 확인
const canCheckInToday = computed(() => {
  if (!lastCheckInDate.value) return true
  
  const today = new Date()
  const lastDate = new Date(lastCheckInDate.value)
  const todayString = today.toDateString()
  const lastDateString = lastDate.toDateString()
  
  // 오늘 날짜가 아니면 체크 가능
  return todayString !== lastDateString
})

// 다음 체크 가능한 날짜 인덱스
const nextCheckableDayIndex = computed(() => {
  return checkedDays.value.length
})

onMounted(async () => {
  currentUser.value = getCurrentUser()
  // appStore에서 사용자 데이터 로드
  store.loadCurrentUser()
  
  if (currentUser.value) {
    await loadAttendanceData()
  }
  
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
</script>

<template>
  <div class="attendancePage">
    <Header :coinCount="coinCount" />
    
    <main class="mainContent">
      <!-- 뒤로가기 버튼 -->
      <button class="backBtn" @click="goBack">← 뒤로</button>
      
      <!-- 타이틀 -->
      <h1 class="pageTitle">출석체크</h1>
      
      <!-- 출석체크 정보 -->
      <div class="attendanceInfo">
        <div class="infoItem">
          <span class="infoLabel">연속 출석:</span>
          <span class="infoValue">{{ consecutiveDays }}일</span>
        </div>
        <div class="infoItem">
          <span class="infoLabel">총 출석:</span>
          <span class="infoValue">{{ attendanceDays }}일</span>
        </div>
      </div>
      
      <!-- 오늘 출석체크 완료 메시지 -->
      <div v-if="!canCheckInToday" class="attendanceMessage">
        오늘 출석체크를 완료했습니다! 내일 다시 시도해주세요.
      </div>
      
      <!-- 출석체크 그리드 -->
      <div class="attendanceGrid">
        <div 
          v-for="(day, index) in attendanceData" 
          :key="day.day"
          class="dayCell"
          :class="{ 
            checked: day.isChecked, 
            disabled: (!canCheckInToday && !day.isChecked) || (index !== nextCheckableDayIndex && !day.isChecked),
            nextCheckable: canCheckInToday && index === nextCheckableDayIndex && !day.isChecked
          }"
          @click="canCheckInToday && (index === nextCheckableDayIndex || day.isChecked) ? checkAttendance(index) : null"
        >
          <div class="dayNumber">Day {{ day.day }}</div>
          <div class="rewardIcon">
            <div class="iconCircle">P</div>
            <span class="specialStar" v-if="day.hasSpecial && !day.isChecked">⭐</span>
          </div>
          <div class="rewardAmount">{{ day.reward }}</div>
        </div>
      </div>
    </main>
    
    <Footer />
  </div>
</template>

<style scoped>
.attendancePage {
  width: 100%;
  min-height: 100vh;
  background-image: url('@/assets/img/backgroundImg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.mainContent {
  padding: 1.6rem;
  max-width: 500px;
  margin: 0 auto;
  min-height: calc(100vh - 130px);
}

.backBtn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 1rem;
}

.pageTitle {
  color: white;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: center;
  margin: 1rem 0 2rem 0;
}

.attendanceGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.8rem;
  margin-bottom: 2rem;
}

.dayCell {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
}

.dayCell:hover {
  background: rgba(255, 255, 255, 0.2);
}

.dayCell.checked {
  background: rgba(125, 211, 252, 0.3);
  opacity: 0.7;
}

.dayCell.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.dayCell.nextCheckable {
  background: rgba(125, 211, 252, 0.2);
  border: 2px solid rgba(125, 211, 252, 0.5);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(125, 211, 252, 0.4);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(125, 211, 252, 0);
  }
}

.attendanceInfo {
  display: flex;
  justify-content: space-around;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
}

.infoItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.infoLabel {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.01em;
}

.infoValue {
  color: #7DD3FC;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.attendanceMessage {
  background: rgba(16, 185, 129, 0.2);
  color: #10B981;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.01em;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.dayNumber {
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.rewardIcon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0;
}

.iconCircle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #7DD3FC;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
}

.specialStar {
  position: absolute;
  font-size: 0.8rem;
}

.rewardAmount {
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 0.5rem;
}
</style>


