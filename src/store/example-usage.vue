<!-- 
  상태 관리 사용 예시 파일
  실제 컴포넌트에서 참고용으로 사용하세요
-->

<script setup>
import { computed } from 'vue'
import { useAppStore } from '@/store/appStore'

// 1. 스토어 가져오기
const store = useAppStore()

// 2. 상태 읽기 (반응형)
const coins = computed(() => store.state.coins)
const totalCoin = computed(() => store.state.totalCoin)
const catFragments = computed(() => store.state.catFragments)
const level = computed(() => store.state.level)

// 3. 상태 업데이트 예시
const earnCoins = async () => {
  // 현재 코인에 100 추가
  await store.updateCoins(store.state.coins + 100)
  // 자동으로 Firebase/localStorage 저장 및 모든 컴포넌트 업데이트
}

const earnMultiple = async () => {
  // 여러 값 동시 업데이트
  await store.updateMultiple({
    coins: store.state.coins + 50,
    catFragments: store.state.catFragments + 5,
    level: store.state.level + 1
  })
}

// 4. 사용자 데이터 새로고침
const refreshUserData = () => {
  store.loadCurrentUser()
}
</script>

<template>
  <div>
    <!-- 상태 표시 (자동 업데이트됨) -->
    <div>포인트: {{ store.formatNumber(coins) }}</div>
    <div>코인: {{ store.formatNumber(totalCoin) }}</div>
    <div>고양이 파편: {{ catFragments }}</div>
    <div>레벨: {{ level }}</div>
    
    <!-- 상태 업데이트 버튼 -->
    <button @click="earnCoins">코인 획득</button>
    <button @click="earnMultiple">여러 보상 획득</button>
    <button @click="refreshUserData">데이터 새로고침</button>
  </div>
</template>

