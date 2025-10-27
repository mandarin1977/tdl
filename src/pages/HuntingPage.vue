<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { getCurrentUser } from '@/utils/userUtils'

const router = useRouter()

const coinCount = ref(0)

onMounted(() => {
  const currentUser = getCurrentUser()
  if (currentUser) {
    coinCount.value = currentUser.gameData?.coins || 0
  }
})

const huntingLevel = ref(1)
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
    // 플레이어가 몬스터 공격
    const damage = Math.floor(Math.random() * playerStats.value.attack) + 10
    currentMonster.value.hp -= damage
    
    if (currentMonster.value.hp <= 0) {
      // 몬스터 처치
      clearInterval(huntingInterval)
      isHunting.value = false
      huntingProgress.value = 100
      
      // 경험치와 골드 획득
      playerStats.value.exp += currentMonster.value.exp
      playerStats.value.hp = playerStats.value.maxHp // 체력 회복
      
      // 레벨업 체크
      if (playerStats.value.exp >= playerStats.value.maxExp) {
        playerStats.value.level++
        playerStats.value.exp = 0
        playerStats.value.maxExp = Math.floor(playerStats.value.maxExp * 1.5)
        playerStats.value.attack += 5
        playerStats.value.maxHp += 20
        playerStats.value.hp = playerStats.value.maxHp
      }
      
      // 몬스터 리셋
      setTimeout(() => {
        currentMonster.value = null
        huntingProgress.value = 0
      }, 2000)
    } else {
      huntingProgress.value = ((currentMonster.value.maxHp - currentMonster.value.hp) / currentMonster.value.maxHp) * 100
    }
  }, 500)
}
</script>

<template>
  <div class="huntingPage">
    <!-- 헤더 -->
    <Header :coinCount="coinCount" />
    
    <!-- 메인 콘텐츠 -->
    <main class="mainContent">
      <div class="huntingContainer">
        <div class="pageHeader">
          <button class="backBtn" @click="router.push('/main')">← 뒤로</button>
          <h2>⚔️ 사냥</h2>
        </div>
        
        <!-- 플레이어 스탯 -->
        <div class="playerStats">
          <h3>플레이어 정보</h3>
          <div class="statsGrid">
            <div class="statItem">
              <span>레벨</span>
              <span>{{ playerStats.level }}</span>
            </div>
            <div class="statItem">
              <span>체력</span>
              <span>{{ playerStats.hp }}/{{ playerStats.maxHp }}</span>
            </div>
            <div class="statItem">
              <span>공격력</span>
              <span>{{ playerStats.attack }}</span>
            </div>
            <div class="statItem">
              <span>경험치</span>
              <span>{{ playerStats.exp }}/{{ playerStats.maxExp }}</span>
            </div>
          </div>
        </div>
        
        <!-- 몬스터 선택 -->
        <div class="monsterSelection">
          <h3>몬스터 선택</h3>
          <div class="monsterList">
            <div 
              v-for="monster in monsters" 
              :key="monster.name"
              class="monsterCard"
              :class="{ selected: currentMonster?.name === monster.name }"
              @click="selectMonster(monster)"
            >
              <div class="monsterInfo">
                <span class="monsterName">{{ monster.name }}</span>
                <span class="monsterLevel">Lv.{{ monster.level }}</span>
              </div>
              <div class="monsterRewards">
                <span>EXP: {{ monster.exp }}</span>
                <span>Gold: {{ monster.gold }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 현재 몬스터 -->
        <div v-if="currentMonster" class="currentMonster">
          <h3>{{ currentMonster.name }} (Lv.{{ currentMonster.level }})</h3>
          
          <!-- 몬스터 체력바 -->
          <div class="monsterHp">
            <div class="hpBar">
              <div 
                class="hpFill" 
                :style="{ width: (currentMonster.hp / currentMonster.maxHp) * 100 + '%' }"
              ></div>
            </div>
            <span class="hpText">{{ currentMonster.hp }}/{{ currentMonster.maxHp }}</span>
          </div>
          
          <!-- 사냥 진행 상황 -->
          <div class="huntingProgress">
            <div class="progressBar">
              <div 
                class="progressFill" 
                :style="{ width: huntingProgress + '%' }"
              ></div>
            </div>
            <span class="progressText">{{ Math.floor(huntingProgress) }}%</span>
          </div>
          
          <!-- 사냥 버튼 -->
          <button 
            class="huntingBtn"
            :class="{ hunting: isHunting }"
            @click="startHunting"
            :disabled="isHunting"
          >
            <span v-if="!isHunting">⚔️ 사냥 시작</span>
            <span v-else>⚔️ 사냥 중...</span>
          </button>
        </div>
      </div>
    </main>
    
    <!-- 푸터 -->
    <Footer />
  </div>
</template>

<style scoped>
.huntingPage {
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
  margin: 0 auto;
}

.huntingContainer {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
}

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
  font-weight: 500;
  transition: all 0.3s ease;
}

.backBtn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

.pageHeader h2 {
  color: white;
  font-size: 2rem;
  margin: 0;
}

.playerStats, .monsterSelection, .currentMonster {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
}

.playerStats h3, .monsterSelection h3, .currentMonster h3 {
  color: white;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.statsGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
}

.statItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
}

.monsterList {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.monsterCard {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
}

.monsterCard:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.02);
}

.monsterCard.selected {
  background: rgba(102, 126, 234, 0.3);
  border: 2px solid rgba(102, 126, 234, 0.5);
}

.monsterInfo {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.monsterName {
  font-weight: 600;
  font-size: 1.1rem;
}

.monsterLevel {
  font-size: 0.9rem;
  opacity: 0.8;
}

.monsterRewards {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  text-align: right;
  font-size: 0.9rem;
}

.monsterHp {
  margin-bottom: 1rem;
}

.hpBar {
  width: 100%;
  height: 20px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.hpFill {
  height: 100%;
  background: linear-gradient(90deg, #ff6b6b 0%, #ff8e8e 100%);
  transition: width 0.3s ease;
}

.hpText {
  text-align: center;
  color: white;
  font-weight: 500;
  display: block;
}

.huntingProgress {
  width: 100%;
  margin-bottom: 1rem;
}

.progressBar {
  width: 100%;
  height: 15px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progressFill {
  height: 100%;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  transition: width 0.3s ease;
}

.progressText {
  text-align: center;
  color: white;
  font-weight: 500;
  display: block;
}

.huntingBtn {
  width: 100%;
  height: 50px;
  background: #fff;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  color: #333;
}

.huntingBtn:hover:not(:disabled) {
  transform: scale(1.02);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.huntingBtn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.huntingBtn.hunting {
  background: #ff6b6b;
  color: white;
}
</style>
