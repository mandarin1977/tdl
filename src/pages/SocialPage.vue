<script setup>
import { ref, computed, onMounted } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCurrentUser, getI18nTexts } from '@/utils/userUtils'
import { useAppStore } from '@/store/appStore'
import { getOrCreateInviteCode } from '@/utils/referralUtils'
import friendBoxOff from '@/assets/img/friendBox_off.png'
import friendBoxOn from '@/assets/img/friendBox_on.png'
import requestBoxOff from '@/assets/img/requestBox_off.png'
import requestBoxOn from '@/assets/img/requestBox_on.png'
import inviteCodeIcon from '@/assets/img/inviteCode.png'
import giftIcon from '@/assets/img/friendGifts.png'
import suggestedIcon from '@/assets/img/suggStar.png'

// 모든 고양이 이미지 import
import cat1 from '@/assets/img/cat1.png'
import cat2 from '@/assets/img/cat2.png'
import cat3 from '@/assets/img/cat3.png'
import cat4 from '@/assets/img/cat4.png'
import cat5 from '@/assets/img/cat5.png'
import cat6 from '@/assets/img/cat6.png'
import cat7 from '@/assets/img/cat7.png'
import cat8 from '@/assets/img/cat8.png'
import cat9 from '@/assets/img/cat9.png'
import cat10 from '@/assets/img/cat10.png'
import cat11 from '@/assets/img/cat11.png'
import cat12 from '@/assets/img/cat12.png'
import cat13 from '@/assets/img/cat13.png'
import cat14 from '@/assets/img/cat14.png'
import cat15 from '@/assets/img/cat15.png'
import cat16 from '@/assets/img/cat16.png'
import cat17 from '@/assets/img/cat17.png'
import cat18 from '@/assets/img/cat18.png'
import cat19 from '@/assets/img/cat19.png'
import cat20 from '@/assets/img/cat20.png'
import cat21 from '@/assets/img/cat21.png'
import cat22 from '@/assets/img/cat22.png'
import cat23 from '@/assets/img/cat23.png'
import cat24 from '@/assets/img/cat24.png'
import cat25 from '@/assets/img/cat25.png'
import cat26 from '@/assets/img/cat26.png'
import cat27 from '@/assets/img/cat27.png'
import cat28 from '@/assets/img/cat28.png'
import cat29 from '@/assets/img/cat29.png'
import cat30 from '@/assets/img/cat30.png'

// appStore 사용
const store = useAppStore()

// 고양이 이미지 배열
const catImages = [
  cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10,
  cat11, cat12, cat13, cat14, cat15, cat16, cat17, cat18, cat19, cat20,
  cat21, cat22, cat23, cat24, cat25, cat26, cat27, cat28, cat29, cat30
]

// 고양이 이미지 가져오기 함수
const getCatImage = (id) => {
  const index = id - 1 // id는 1-30, 배열 인덱스는 0-29
  if (index >= 0 && index < catImages.length) {
    return catImages[index]
  }
  return cat1 // 기본 이미지
}

// 이름 기반으로 일관된 랜덤 고양이 이미지 생성 (같은 이름은 항상 같은 고양이)
const getCatImageFromName = (name) => {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  const catId = (Math.abs(hash) % 30) + 1 // 1-30
  return getCatImage(catId)
}

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
  { id: 'TDL_8923', name: 'Luna', profileImage: getCatImageFromName('Luna') },
  { id: 'TDL_4567', name: 'Max', profileImage: getCatImageFromName('Max') },
  { id: 'TDL_7891', name: 'Zoe', profileImage: getCatImageFromName('Zoe') }
])

// 더미 추천 친구 데이터 (검색용 전체 데이터)
const allSuggestedFriends = ref([
  { id: 'TDL_2345', name: 'Alice', profileImage: getCatImageFromName('Alice') },
  { id: 'TDL_6789', name: 'Bob', profileImage: getCatImageFromName('Bob') },
  { id: 'TDL_3456', name: 'Charlie', profileImage: getCatImageFromName('Charlie') },
  { id: 'TDL_7890', name: 'Diana', profileImage: getCatImageFromName('Diana') },
  { id: 'TDL_1234', name: 'Eve', profileImage: getCatImageFromName('Eve') },
  { id: 'TDL_5678', name: 'Frank', profileImage: getCatImageFromName('Frank') },
  { id: 'TDL_9012', name: 'Grace', profileImage: getCatImageFromName('Grace') },
  { id: 'TDL_2468', name: 'Henry', profileImage: getCatImageFromName('Henry') }
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
  { id: 'TDL_1357', name: 'Oliver', profileImage: getCatImageFromName('Oliver') },
  { id: 'TDL_8024', name: 'Sophia', profileImage: getCatImageFromName('Sophia') },
  { id: 'TDL_3691', name: 'Mason', profileImage: getCatImageFromName('Mason') }
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
                    <figure class="friendListWrap">
                      <img :src="friend.profileImage" :alt="friend.name" class="friendProfile" />
                    </figure>
                    <div class="giftIcon">
                      <img :src="giftIcon" :alt="giftIcon" />
                    </div>
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
                Suggested Friends <img :src="suggestedIcon" :alt="suggestedIcon" />
              </h3>
              <div v-if="suggestedFriends.length > 0" class="suggestedGrid">
                <div 
                  v-for="suggested in suggestedFriends" 
                  :key="suggested.id"
                  class="suggestedCard"
                >
                  <figure class="suggestedProfileWrapper">
                    <img :src="suggested.profileImage" :alt="suggested.name" class="suggestedProfile" />
                  </figure>
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
  padding: 3rem;
  max-width: 500px;
  width: 95%;
  min-height: unset;
  margin: 0 auto;
  background-image: url('@/assets/img/friendBoxBg.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 78dvh;
  overflow-y: auto;
}

.socialContent {
  width: 100%;
  height: 100%;
  overflow-y: auto;
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
  gap: 1rem;
  position: sticky;
  top: 0;
  z-index: 1;
}

.tabButton {
  width: max-content;
  height: auto;
  padding: 1rem 1.5rem 2rem; 
  border: none;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.3em;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.3s ease;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

/* Friends 버튼 스타일 */
.tabButtonFriends {
  background-image: url('@/assets/img/friendBox_off.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

.tabButtonFriends.active {
  background-image: url('@/assets/img/friendBox_on.png');

  color: white;
}

/* Requests 버튼 스타일 */
.tabButtonRequests {
  background-image: url('@/assets/img/requestBox_off.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
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
  font-weight: 300;
  color: white;
  margin-bottom: 0.5rem;
  text-align: left;
  display: flex;
  gap: 0.5rem;
}

.sectionTitle img {
  width: 1.5em;
  height: 1.5em;
  object-fit: contain;
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
  font-size: 1em;
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
  gap: 3rem;
  justify-content: flex-start;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 0.5rem;
  scrollbar-width: thin;
}

.friendCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  min-width: calc((100% - 7rem) / 3); /* 3개가 보이도록 */
}

.friendProfileWrapper {
  position: relative;
  width: 100%;
}

.friendListWrap {
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.7);
  border: 3px solid #576B9B;
  position: relative;
}

.friendProfile {
  width: 130%;
  height: auto;
  object-fit: contain;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.giftIcon {
  position: absolute;
  top: 5px;
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

.giftIcon img {
  width: 5dvw;
  height: auto;
  aspect-ratio: auto;
  max-width: 30px;
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
  background: url('@/assets/img/friendSearchInput.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
  color: white;
  font-size: 1em;
  outline: none;
  font-weight: 300;
}

.searchInput::placeholder {
  color: rgba(255, 255, 255, 0.3);
  font-weight: 300;
  border: none;
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
  gap: 3rem;
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
  gap: 1rem;
  border-radius: 12px;
  min-width: calc((100% - 7rem) / 3); /* 3개가 보이도록 */
}

.suggestedProfileWrapper {
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.7);
  position: relative;
  border: 3px solid #576B9B;
}

.suggestedProfile {
  width: 130%;
  height: auto;
  object-fit: contain;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.suggestedInfo {
  width: 100%;
  text-align: center;
  
}

.suggestedName {
  font-size: 0.9em;
  font-weight: 400;
  color: white;
  margin: 0;
  margin-bottom: 0.2rem;
}

.suggestedId {
  font-size: 0.9em;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}

.inviteBtn {
  width: 100%;
  padding: 0.3rem 1.2rem 0.6rem;
  background: url('@/assets/img/inviteBox.png');
  background-size: 100% 100%;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1em;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.inviteBtn:hover {
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
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1rem;
  position: relative;
  background: url('@/assets/img/requestFirendBg.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

.requestProfile {
  width: 30%;
  height: auto;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #576B9B;
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
  font-size: 1.5em;
  font-weight: 100;
  color: white;
  margin: 0;
}

.requestId {
  font-size: 0.9em;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.requestMessage {
  font-size: 0.8em;
  font-weight: 300;
  color: white;
  margin: 0;
  margin-top: 0.3rem;
}

.requestActions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  margin-top: 10%;
}

.acceptBtn {
  padding: 0.6rem 1.2rem;
  background:url('@/assets/img/acceptBox.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.acceptBtn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.4);
}

.acceptBtn:active {
  transform: translateY(0);
}

.declineBtn {
  width: 32px;
  height: 32px;
  background: url('@/assets/img/acceptClose.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 1.4em;
  font-weight: 300;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  line-height: 1;
  padding: 0;
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.declineBtn:active {
  transform: scale(0.95);
}

@media (max-width: 480px) {
  .requestCard {
    padding: 0.8rem;
    gap: 0.8rem;
  }
  

  .declineBtn {
    width: 28px;
    height: 28px;
  }
}
</style>

