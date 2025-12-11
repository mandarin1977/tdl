<script setup>
import { ref, computed, onMounted } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCurrentUser, getI18nTexts } from '@/utils/userUtils'
import { useAppStore } from '@/store/appStore'
import { getOrCreateInviteCode } from '@/utils/referralUtils'
import cat1 from '@/assets/img/cat1.png'
import friendBoxOff from '@/assets/img/friendBox_off.png'
import friendBoxOn from '@/assets/img/friendBox_on.png'
import requestBoxOff from '@/assets/img/requestBox_off.png'
import requestBoxOn from '@/assets/img/requestBox_on.png'
import inviteCodeIcon from '@/assets/img/inviteCode.png'

// appStore 사용
const store = useAppStore()

// appStore에서 게임 데이터 가져오기 (반응형)
const coinCount = computed(() => store.state.coins)
const totalCoin = computed(() => store.state.totalCoin)

// 다국어 텍스트
const texts = computed(() => getI18nTexts())

// 현재 사용자
const currentUser = ref(null)

// 활성 탭
const activeTab = ref('friends')

// 초대 코드
const inviteCode = ref('')

// 검색어
const searchQuery = ref('')

// 탭 변경
const setActiveTab = (tab) => {
  activeTab.value = tab
}

// 초대 코드 복사
const copyInviteCode = async () => {
  if (!inviteCode.value) return
  
  try {
    await navigator.clipboard.writeText(inviteCode.value)
    alert('Invite code copied!')
  } catch (error) {
    console.error('복사 실패:', error)
    alert('Failed to copy invite code.')
  }
}

// 더미 친구 데이터
const friends = ref([
  { id: 'TDL_8923', name: 'Luna', profileImage: cat1 },
  { id: 'TDL_4567', name: 'Max', profileImage: cat1 },
  { id: 'TDL_7891', name: 'Zoe', profileImage: cat1 }
])

// 더미 추천 친구 데이터 (검색용 전체 데이터)
const allSuggestedFriends = ref([
  { id: 'TDL_2345', name: 'Alice', profileImage: cat1 },
  { id: 'TDL_6789', name: 'Bob', profileImage: cat1 },
  { id: 'TDL_3456', name: 'Charlie', profileImage: cat1 },
  { id: 'TDL_7890', name: 'Diana', profileImage: cat1 },
  { id: 'TDL_1234', name: 'Eve', profileImage: cat1 },
  { id: 'TDL_5678', name: 'Frank', profileImage: cat1 },
  { id: 'TDL_9012', name: 'Grace', profileImage: cat1 },
  { id: 'TDL_2468', name: 'Henry', profileImage: cat1 }
])

// 검색어에 따라 필터링된 추천 친구 목록
const suggestedFriends = computed(() => {
  if (!searchQuery.value || searchQuery.value.trim() === '') {
    return allSuggestedFriends.value
  }
  
  const query = searchQuery.value.toLowerCase().trim()
  return allSuggestedFriends.value.filter(friend => 
    friend.name.toLowerCase().includes(query) || 
    friend.id.toLowerCase().includes(query)
  )
})

// 더미 친구 요청 데이터
const friendRequests = ref([
  { id: 'TDL_1357', name: 'Oliver', profileImage: cat1 },
  { id: 'TDL_8024', name: 'Sophia', profileImage: cat1 },
  { id: 'TDL_3691', name: 'Mason', profileImage: cat1 }
])

// 친구 초대
const inviteFriend = (friendId) => {
  alert(`Invite sent to ${friendId}`)
}

// 친구 요청 수락
const acceptRequest = (requestId) => {
  friendRequests.value = friendRequests.value.filter(req => req.id !== requestId)
  alert('Friend request accepted!')
}

// 친구 요청 거절
const declineRequest = (requestId) => {
  friendRequests.value = friendRequests.value.filter(req => req.id !== requestId)
  alert('Friend request declined.')
}

onMounted(async () => {
  // 현재 사용자 로드
  currentUser.value = getCurrentUser()
  
  // appStore에도 로드
  if (currentUser.value) {
    store.loadCurrentUser()
    
    // 초대 코드 가져오기
    try {
      inviteCode.value = await getOrCreateInviteCode(currentUser.value.id)
    } catch (error) {
      console.error('초대 코드 가져오기 실패:', error)
      inviteCode.value = 'ABC123' // 기본값
    }
  } else {
    inviteCode.value = 'ABC123' // 기본값
  }
})
</script>

<template>
  <div class="socialPage">
    <!-- 헤더 -->
    <Header :coinCount="coinCount" :totalCoin="totalCoin" />
    
    <!-- 메인 콘텐츠 -->
    <main class="mainContent">
      <div class="socialContent">
        
        <!-- 탭 버튼 -->
        <div class="tabButtons">
          <button 
            class="tabButton tabButtonFriends" 
            :class="{ active: activeTab === 'friends' }"
            @click="setActiveTab('friends')"
          >
            Friends
          </button>
          <button 
            class="tabButton tabButtonRequests" 
            :class="{ active: activeTab === 'requests' }"
            @click="setActiveTab('requests')"
          >
            Requests
          </button>
        </div>
        
        <!-- 탭 콘텐츠 -->
        <div class="tabContent">
          <!-- Friends 탭 -->
          <div v-if="activeTab === 'friends'" class="tabPanel">
            <!-- Invite Code 섹션 -->
            <div class="inviteCodeSection">
              <h3 class="sectionTitle">Invite Code</h3>
              <div class="inviteCodeBox">
                <input 
                  type="text" 
                  class="inviteCodeInput" 
                  :value="inviteCode" 
                  readonly
                />
                <button class="copyCodeBtn" @click="copyInviteCode" title="Copy">
                  <img :src="inviteCodeIcon" alt="Copy" class="copyCodeIcon" />
                </button>
              </div>
            </div>
            
            <!-- 현재 친구 목록 -->
            <div class="friendsListSection">
              <div class="friendsGrid">
                <div 
                  v-for="friend in friends" 
                  :key="friend.id"
                  class="friendCard"
                >
                  <div class="friendProfileWrapper">
                    <img :src="friend.profileImage" :alt="friend.name" class="friendProfile" />
                    <div class="giftIcon">🎁</div>
                  </div>
                  <div class="friendInfo">
                    <p class="friendName">{{ friend.name }}</p>
                    <p class="friendId">{{ friend.id }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Search Friends 섹션 -->
            <div class="searchSection">
              <h3 class="sectionTitle">Search friends 😊</h3>
              <input 
                type="text" 
                class="searchInput" 
                v-model="searchQuery"
                placeholder="Search by name or ID..."
              />
            </div>
            
            <!-- Suggested Friends 섹션 -->
            <div class="suggestedSection">
              <h3 class="sectionTitle">
                Suggested Friends ✨
              </h3>
              <div v-if="suggestedFriends.length > 0" class="suggestedGrid">
                <div 
                  v-for="suggested in suggestedFriends" 
                  :key="suggested.id"
                  class="suggestedCard"
                >
                  <img :src="suggested.profileImage" :alt="suggested.name" class="suggestedProfile" />
                  <div class="suggestedInfo">
                    <p class="suggestedName">{{ suggested.name }}</p>
                    <p class="suggestedId">{{ suggested.id }}</p>
                  </div>
                  <button class="inviteBtn" @click="inviteFriend(suggested.id)">
                    Invite
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Requests 탭 -->
          <div v-if="activeTab === 'requests'" class="tabPanel">
            <div class="requestsList">
              <div v-if="friendRequests.length === 0" class="emptyMessage">
                <p>No friend requests yet.</p>
              </div>
              <div v-else class="requestsGrid">
                <div 
                  v-for="request in friendRequests" 
                  :key="request.id"
                  class="requestCard"
                >
                  <img :src="request.profileImage" :alt="request.name" class="requestProfile" />
                  <div class="requestInfo">
                    <p class="requestName">{{ request.name }}</p>
                    <p class="requestId">{{ request.id }}:)</p>
                    <p class="requestMessage">wants to be your friend</p>
                  </div>
                  <div class="requestActions">
                    <button class="acceptBtn" @click="acceptRequest(request.id)">
                      Accept
                    </button>
                    <button class="declineBtn" @click="declineRequest(request.id)">
                      ×
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    <!-- 푸터 -->
    <Footer />
  </div>
</template>

<style scoped>
.socialPage {
  width: 100%;
  min-height: 100vh;
  background-image: url('@/assets/img/mainBackground01.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.mainContent {
  padding: 3vw 5vw;
  max-width: 500px;
  width: 95%;
  min-height: unset;
  margin: 0 auto;
  padding-bottom: 5rem;
  background-image: url('@/assets/img/factoryAllbg.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.socialContent {
  width: 100%;
  color: white;
  text-align: center;
}

.pageTitle {
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.pageDescription {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
}

/* 탭 버튼 */
.tabButtons {
  display: flex;
  gap: 0.5rem;
}

.tabButton {
  width: max-content;
  height: auto;
  padding: 0.8rem 1.5rem; 
  border: none;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

/* Friends 버튼 스타일 */
.tabButtonFriends {
  background-image: url('@/assets/img/friendBox_off.png');
}

.tabButtonFriends.active {
  background-image: url('@/assets/img/friendBox_on.png');
  color: white;
}

/* Requests 버튼 스타일 */
.tabButtonRequests {
  background-image: url('@/assets/img/requestBox_off.png');
}

.tabButtonRequests.active {
  background-image: url('@/assets/img/requestBox_on.png');
  color: white;
}

.tabButton:hover {
  opacity: 0.9;
}

/* 탭 콘텐츠 */
.tabContent {
  width: 100%;
  margin-top: 1rem;
}

.tabPanel {
  width: 100%;
  min-height: 300px;
}

.friendsList,
.requestsList {
  width: 100%;
  padding: 1rem 0;
}

.emptyMessage {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
  text-align: center;
  padding: 2rem 1rem;
  margin: 0;
}

/* Invite Code 섹션 */
.inviteCodeSection {
  margin-bottom: 1.5rem;
  text-align: left;
}

.sectionTitle {
  font-size: 1em;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
  text-align: left;
}

.inviteCodeBox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.inviteCodeInput {
  flex: 1;
  background: transparent;
  border: none;
  color: white;
  font-size: 1rem;
  font-family: monospace;
  outline: none;
}

.copyCodeBtn {

  border: none;
  border-radius: 6px;

  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.copyCodeBtn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.copyCodeIcon {
  width: 16px;
  height: 16px;
  object-fit: contain;
}

/* Friends List 섹션 */
.friendsListSection {
  margin-bottom: 1.5rem;
}

.friendsGrid {
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.friendCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  min-width: 80px;
}

.friendProfileWrapper {
  position: relative;
  width: 60px;
  height: 60px;
}

.friendProfile {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.giftIcon {
  position: absolute;
  top: -5px;
  right: -5px;
  font-size: 1.2rem;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.friendInfo {
  text-align: center;
}

.friendName {
  font-size: 0.9em;
  font-weight: 600;
  color: white;
  margin: 0;
  margin-bottom: 0.2rem;
}

.friendId {
  font-size: 0.9em;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

/* Search 섹션 */
.searchSection {
  margin-bottom: 1.5rem;
  text-align: left;
}

.searchInput {
  width: 100%;
  padding: 0.8rem;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 0.95rem;
  outline: none;
}

.searchInput::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.noResults {
  padding: 2rem 1rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
}

/* Suggested Friends 섹션 */
.suggestedSection {
  text-align: left;
}

.suggestedGrid {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 0.5rem;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) rgba(0, 0, 0, 0.2);
}

/* 스크롤바 스타일링 */
.suggestedGrid::-webkit-scrollbar {
  height: 6px;
}

.suggestedGrid::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.suggestedGrid::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
}

.suggestedGrid::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

.suggestedCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: rgba(33, 36, 54, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  min-width: calc((100% - 2rem) / 3); /* 3개가 보이도록 */
  flex-shrink: 0;
}

.suggestedProfile {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.3);
  flex-shrink: 0;
}

.suggestedInfo {
  width: 100%;
  text-align: center;
}

.suggestedName {
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  margin: 0;
  margin-bottom: 0.2rem;
}

.suggestedId {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.inviteBtn {
  padding: 0.6rem 1.2rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.inviteBtn:hover {
  background: #45a049;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.4);
}

.inviteBtn:active {
  transform: translateY(0);
}

/* Requests 탭 스타일 */
.requestsGrid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.requestCard {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

.requestProfile {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.3);
  flex-shrink: 0;
}

.requestInfo {
  flex: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.requestName {
  font-size: 1rem;
  font-weight: 700;
  color: white;
  margin: 0;
}

.requestId {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.requestMessage {
  font-size: 0.9rem;
  color: white;
  margin: 0;
  margin-top: 0.3rem;
}

.requestActions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.acceptBtn {
  padding: 0.6rem 1.2rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.acceptBtn:hover {
  background: #45a049;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.4);
}

.acceptBtn:active {
  transform: translateY(0);
}

.declineBtn {
  width: 32px;
  height: 32px;
  background: #f44336;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  line-height: 1;
  padding: 0;
}

.declineBtn:hover {
  background: #da190b;
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(244, 67, 54, 0.4);
}

.declineBtn:active {
  transform: scale(0.95);
}

@media (max-width: 480px) {
  .requestCard {
    padding: 0.8rem;
    gap: 0.8rem;
  }
  
  .requestProfile {
    width: 50px;
    height: 50px;
  }
  
  .requestName {
    font-size: 0.9rem;
  }
  
  .requestId {
    font-size: 0.75rem;
  }
  
  .requestMessage {
    font-size: 0.8rem;
  }
  
  .acceptBtn {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
  
  .declineBtn {
    width: 28px;
    height: 28px;
    font-size: 1rem;
  }
}
</style>

