<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCurrentUser } from '@/utils/userUtils'

const router = useRouter()
const coinCount = ref(0)

// 알림 목록 (예시 데이터)
const notifications = ref([
  {
    id: 1,
    title: '새로운 퀘스트가 도착했습니다!',
    message: '일일 퀘스트를 완료하고 보상을 받아보세요.',
    time: '5분 전',
    read: false,
    type: 'quest'
  },
  {
    id: 2,
    title: 'Coin 구매 완료',
    message: '1억 Coin 구매가 완료되었습니다.',
    time: '1시간 전',
    read: false,
    type: 'exchange'
  },
  {
    id: 3,
    title: '고양이 제작 완료',
    message: '새로운 고양이가 인벤토리에 추가되었습니다!',
    time: '2시간 전',
    read: true,
    type: 'factory'
  },
  {
    id: 4,
    title: '출석체크 보상',
    message: '출석체크를 완료하여 100 Point를 받았습니다.',
    time: '1일 전',
    read: true,
    type: 'attendance'
  }
])

onMounted(() => {
  const currentUser = getCurrentUser()
  if (currentUser) {
    coinCount.value = currentUser.gameData?.coins || 0
  }
})

// 알림 읽음 처리
const markAsRead = (notification) => {
  if (!notification.read) {
    notification.read = true
  }
}

// 모든 알림 읽음 처리
const markAllAsRead = () => {
  notifications.value.forEach(notif => {
    notif.read = true
  })
}

// 읽지 않은 알림 개수 (computed로 변경하여 반응성 향상)
const unreadCount = computed(() => {
  return notifications.value.filter(n => !n.read).length
})

// 알림 클릭 시 해당 페이지로 이동
const handleNotificationClick = (notification) => {
  // 읽음 처리
  markAsRead(notification)
  
  // 알림 타입에 따라 페이지 이동
  switch(notification.type) {
    case 'quest':
      router.push('/quest')
      break
    case 'exchange':
      router.push('/exchange')
      break
    case 'factory':
      router.push('/factory')
      break
    case 'attendance':
      router.push('/attendance')
      break
    default:
      break
  }
}
</script>

<template>
  <div class="notificationPage">
    <!-- 헤더 -->
    <Header :coinCount="coinCount" />
    
    <!-- 메인 콘텐츠 -->
    <main class="mainContent">
      <!-- 페이지 제목 -->
      <div class="pageHeader">
        <h1 class="pageTitle">알림</h1>
        <button 
          v-if="unreadCount > 0" 
          class="markAllReadBtn"
          @click="markAllAsRead"
        >
          모두 읽음
        </button>
      </div>
      
      <!-- 알림 목록 -->
      <div class="notificationList">
        <div 
          v-for="notification in notifications" 
          :key="notification.id"
          class="notificationItem"
          :class="{ unread: !notification.read }"
          @click="handleNotificationClick(notification)"
        >
          <div class="notificationContent">
            <div class="notificationTitle">{{ notification.title }}</div>
            <div class="notificationMessage">{{ notification.message }}</div>
            <div class="notificationTime">{{ notification.time }}</div>
          </div>
          <div v-if="!notification.read" class="unreadDot"></div>
        </div>
        
        <!-- 알림이 없을 때 -->
        <div v-if="notifications.length === 0" class="emptyState">
          <p>알림이 없습니다.</p>
        </div>
      </div>
    </main>
    
    <!-- 푸터 -->
    <Footer />
  </div>
</template>

<style scoped>
.notificationPage {
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
}

.pageHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.pageTitle {
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0;
}

.markAllReadBtn {
  background: rgba(59, 63, 88, 0.8);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s;
}

.markAllReadBtn:hover {
  background: rgba(59, 63, 88, 1);
  border-color: rgba(255, 255, 255, 0.4);
}

.notificationList {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.notificationItem {
  background: rgba(33, 36, 54, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.2rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

.notificationItem:hover {
  background: rgba(33, 36, 54, 0.95);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.notificationItem.unread {
  border-color: rgba(125, 211, 252, 0.5);
  background: rgba(33, 36, 54, 0.9);
}

.notificationContent {
  flex: 1;
}

.notificationTitle {
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}

.notificationMessage {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.01em;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.notificationTime {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.01em;
}

.unreadDot {
  width: 10px;
  height: 10px;
  background: #7DD3FC;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 0.3rem;
}

.emptyState {
  text-align: center;
  padding: 3rem 1rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1rem;
}

@media (max-width: 480px) {
  .pageTitle {
    font-size: 1.5rem;
  }
  
  .notificationItem {
    padding: 1rem;
  }
}
</style>

