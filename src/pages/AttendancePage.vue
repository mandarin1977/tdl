<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCurrentUser, updateUserCoins } from '@/utils/userUtils'

const router = useRouter()
const coinCount = ref(0)
const currentUser = ref(null)
const attendanceDays = ref(0) // 출석 일수
const checkedDays = ref([]) // 체크된 날짜들

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

// 뒤로가기
const goBack = () => {
  router.go(-1)
}

// 출석체크 처리
const checkAttendance = (dayIndex) => {
  if (!currentUser.value) {
    alert('로그인이 필요합니다.')
    return
  }
  
  // 오늘 날짜 확인
  const today = new Date().toDateString()
  const lastCheckInDate = localStorage.getItem(`attendance_checkIn_${currentUser.value.id}`)
  
  // 하루에 한 번만 출석체크 가능
  if (lastCheckInDate === today) {
    alert('오늘 이미 출석체크를 완료했습니다! 내일 다시 시도해주세요.')
    return
  }
  
  const day = attendanceData.value[dayIndex]
  if (day.isChecked) {
    alert('이미 체크된 날짜입니다.')
    return // 이미 체크된 날짜
  }
  
  // 연속 출석일 계산 (첫 번째 날이거나 다음 순서의 날만 체크 가능)
  if (checkedDays.value.length === 0 || dayIndex === checkedDays.value.length) {
    day.isChecked = true
    checkedDays.value.push(day.day)
    
    // 보상 지급
    const reward = 1000 // 1K
    coinCount.value += reward
    
    // 오늘 출석체크 날짜 저장
    localStorage.setItem(`attendance_checkIn_${currentUser.value.id}`, today)
    isCheckedInToday.value = true
    
    // 사용자 데이터 업데이트
    if (currentUser.value) {
      updateUserCoins(currentUser.value.id, coinCount.value)
    }
    
    // localStorage에 저장
    saveAttendanceData()
    alert(`Day ${day.day} 출석체크 완료! ${reward} 포인트 획득!`)
  } else {
    alert('연속 출석체크만 가능합니다.')
  }
}

// 출석체크 데이터 저장
const saveAttendanceData = () => {
  if (currentUser.value) {
    const data = {
      checkedDays: checkedDays.value,
      attendanceDays: checkedDays.value.length,
      lastUpdate: new Date().toISOString()
    }
    localStorage.setItem(`attendance_${currentUser.value.id}`, JSON.stringify(data))
  }
}

// 출석체크 데이터 로드
const loadAttendanceData = () => {
  if (currentUser.value) {
    const saved = localStorage.getItem(`attendance_${currentUser.value.id}`)
    if (saved) {
      const data = JSON.parse(saved)
      checkedDays.value = data.checkedDays || []
      attendanceDays.value = data.attendanceDays || 0
      
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

// 오늘 출석체크 여부 확인
const isCheckedInToday = ref(false)

onMounted(() => {
  currentUser.value = getCurrentUser()
  if (currentUser.value) {
    coinCount.value = currentUser.value.gameData?.coins || 0
    
    // 오늘 출석체크 여부 확인
    const today = new Date().toDateString()
    const lastCheckInDate = localStorage.getItem(`attendance_checkIn_${currentUser.value.id}`)
    isCheckedInToday.value = lastCheckInDate === today
  }
  loadAttendanceData()
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
      
      <!-- 오늘 출석체크 완료 메시지 -->
      <div v-if="isCheckedInToday" class="attendanceMessage">
        오늘 출석체크를 완료했습니다! 내일 다시 시도해주세요.
      </div>
      
      <!-- 출석체크 그리드 -->
      <div class="attendanceGrid">
        <div 
          v-for="(day, index) in attendanceData" 
          :key="day.day"
          class="dayCell"
          :class="{ checked: day.isChecked, disabled: isCheckedInToday && !day.isChecked }"
          @click="!isCheckedInToday || day.isChecked ? checkAttendance(index) : null"
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
  font-weight: bold;
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

.attendanceMessage {
  background: rgba(16, 185, 129, 0.2);
  color: #10B981;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 500;
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


