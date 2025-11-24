# 상태 관리 가이드

## 개요

프로젝트의 상태 관리는 `src/store/appStore.js`에서 중앙 집중식으로 관리됩니다.

## 기본 사용법

### 1. 스토어 가져오기

```javascript
import { useAppStore } from '@/store/appStore'

const store = useAppStore()
```

### 2. 상태 읽기 (반응형)

```vue
<script setup>
import { computed } from 'vue'
import { useAppStore } from '@/store/appStore'

const store = useAppStore()

// 방법 1: computed 사용 (권장)
const coins = computed(() => store.state.coins)
const totalCoin = computed(() => store.state.totalCoin)
const catFragments = computed(() => store.state.catFragments)

// 방법 2: 직접 접근 (템플릿에서만)
// 템플릿에서 {{ store.state.coins }} 사용 가능
</script>

<template>
  <div>
    <p>포인트: {{ coins }}</p>
    <p>코인: {{ totalCoin }}</p>
    <p>고양이 파편: {{ catFragments }}</p>
  </div>
</template>
```

### 3. 상태 업데이트

#### 단일 값 업데이트

```javascript
// 코인 업데이트
await store.updateCoins(1000)

// 토탈 코인 업데이트
await store.updateTotalCoin(500)

// 고양이 파편 업데이트
await store.updateCatFragments(75)

// 레벨 업데이트
await store.updateLevel(5)
```

#### 여러 값 동시 업데이트

```javascript
// 여러 값 한번에 업데이트
await store.updateMultiple({
  coins: 1000,
  totalCoin: 500,
  catFragments: 75,
  level: 5,
  miningLevel: 3
})
```

#### 일반 게임 데이터 업데이트

```javascript
// 모든 게임 데이터 업데이트 가능
await store.updateGameData({
  coins: 1000,
  totalCoin: 500,
  catFragments: 75,
  miningCats: [1, 2, null, null, null, null],
  inventory: [...]
})
```

### 4. 사용자 데이터 로드

```javascript
// 현재 사용자 데이터를 스토어에 로드
store.loadCurrentUser()

// 이 함수는 자동으로:
// - sessionStorage에서 currentUser 읽기
// - Firebase/localStorage에서 최신 데이터 가져오기
// - 스토어 상태 동기화
```

## 실제 사용 예시

### 예시 1: 게임에서 코인 획득

```vue
<script setup>
import { useAppStore } from '@/store/appStore'

const store = useAppStore()

const earnCoins = async (amount) => {
  const currentCoins = store.state.coins
  await store.updateCoins(currentCoins + amount)
  
  // 자동으로:
  // 1. Firebase/localStorage에 저장
  // 2. sessionStorage 업데이트
  // 3. 모든 컴포넌트에 자동 반영 (반응형)
  // 4. 'userDataUpdated' 이벤트 발생
}
</script>
```

### 예시 2: Header 컴포넌트에서 상태 표시

```vue
<script setup>
import { computed } from 'vue'
import { useAppStore } from '@/store/appStore'

const store = useAppStore()

// 반응형으로 자동 업데이트됨
const coins = computed(() => store.state.coins)
const totalCoin = computed(() => store.state.totalCoin)
const catFragments = computed(() => store.state.catFragments)
</script>

<template>
  <header>
    <div>포인트: {{ store.formatNumber(coins) }}</div>
    <div>코인: {{ store.formatNumber(totalCoin) }}</div>
    <div>고양이 파편: {{ catFragments }}</div>
  </header>
</template>
```

### 예시 3: 채굴 완료 후 보상 지급

```vue
<script setup>
import { useAppStore } from '@/store/appStore'

const store = useAppStore()

const completeMining = async () => {
  const reward = {
    points: 100,
    fragments: 5
  }
  
  // 여러 값 동시 업데이트
  await store.updateMultiple({
    coins: store.state.coins + reward.points,
    catFragments: store.state.catFragments + reward.fragments,
    miningLevel: store.state.miningLevel + 1
  })
  
  // 모든 컴포넌트가 자동으로 업데이트됨!
}
</script>
```

## 상태 구조

```javascript
state = {
  // 인증
  isLoggedIn: false,
  walletAddress: '',
  userBalance: '0 ETH',
  isLoading: false,
  currentUser: null,  // 전체 사용자 객체
  
  // 게임 리소스
  coins: 0,           // 포인트 (P)
  totalCoin: 0,       // 코인 (C)
  catFragments: 50,   // 고양이 파편
  level: 1,           // 사용자 레벨
  nftCount: 0,        // NFT 개수
  
  // 게임 모드별 레벨
  miningLevel: 1,
  huntingLevel: 1,
  explorationLevel: 1,
  productionLevel: 1,
  
  // 고양이 슬롯
  miningCats: [null, null, null, null, null, null],
  huntingCats: [null, null, null, null, null, null],
  explorationCats: [null, null, null, null, null, null],
  productionCats: [null, null, null, null, null, null],
  
  // 인벤토리
  inventory: []
}
```

## 주요 함수

### `loadCurrentUser()`
- 현재 사용자 데이터를 스토어에 로드
- 앱 시작 시, 로그인 후 자동 호출

### `updateGameData(gameData)`
- 게임 데이터 업데이트 (Firebase/localStorage + 스토어)
- 자동으로 동기화 및 이벤트 발생

### `updateCoins(coins)`
- 포인트 업데이트 (간편 함수)

### `updateTotalCoin(totalCoin)`
- 코인 업데이트 (간편 함수)

### `updateCatFragments(catFragments)`
- 고양이 파편 업데이트 (간편 함수)

### `updateLevel(level)`
- 레벨 업데이트 (간편 함수)

### `updateMultiple(updates)`
- 여러 값 동시 업데이트

### `formatNumber(num)`
- 숫자 포맷팅 (1K, 1M, 1G 등)

## 이벤트 시스템

상태가 업데이트되면 자동으로 `userDataUpdated` 이벤트가 발생합니다.

```javascript
// 이벤트 리스너 등록
window.addEventListener('userDataUpdated', () => {
  console.log('사용자 데이터가 업데이트되었습니다!')
  // 필요시 추가 작업 수행
})
```

## 기존 코드와의 호환성

기존 `getCurrentUser()`, `updateUserGameData()` 함수는 여전히 사용 가능합니다.
하지만 스토어를 사용하면 더 효율적이고 반응형으로 동작합니다.

### 마이그레이션 가이드

**기존 방식:**
```javascript
import { getCurrentUser, updateUserGameData } from '@/utils/userUtils'

const user = getCurrentUser()
const coins = user.gameData.coins

await updateUserGameData(user.id, { coins: coins + 100 })
```

**새 방식:**
```javascript
import { useAppStore } from '@/store/appStore'

const store = useAppStore()
const coins = computed(() => store.state.coins)

await store.updateCoins(store.state.coins + 100)
```

## 장점

1. **반응형**: 상태 변경 시 모든 컴포넌트 자동 업데이트
2. **중앙 집중식**: 한 곳에서 상태 관리
3. **자동 동기화**: Firebase/localStorage 자동 동기화
4. **타입 안정성**: 읽기 전용 상태로 실수 방지
5. **이벤트 기반**: 폴링 대신 이벤트로 효율적 업데이트

## 주의사항

- 상태는 직접 수정하지 마세요. 액션 함수를 사용하세요.
- `store.state`는 읽기 전용입니다.
- 비동기 업데이트는 `await`를 사용하세요.

