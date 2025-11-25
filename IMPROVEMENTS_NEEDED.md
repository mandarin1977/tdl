# TDL 프로젝트 개선 필요 사항 분석 보고서

## 🔍 분석 개요

프로젝트 전체 코드를 분석하여 발견된 개선 필요 사항, 버그, 코드 품질 이슈를 정리했습니다.

---

## 🚨 심각한 문제 (Critical Issues)

### 1. **비밀번호 평문 저장** ⚠️ 보안 위험
**위치**: `src/pages/SignupScreen.vue:62`
```javascript
password: formData.value.password, // 실제로는 해시화해야 함
```
**문제점**: 
- 비밀번호가 평문으로 localStorage에 저장됨
- 브라우저 개발자 도구로 쉽게 확인 가능
- 보안 취약점

**개선 방안**:
- bcrypt 또는 crypto-js로 해시화
- 또는 서버 사이드 인증으로 전환

---

### 2. **Firebase API 키 하드코딩** ⚠️ 보안 위험
**위치**: `src/firebase/config.js:9-15`
```javascript
apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCwvJ8cUWLZPZ26i1deIAXnoLuzToIcB70",
```
**문제점**:
- API 키가 코드에 직접 노출됨
- Git에 커밋되면 공개됨
- 환경 변수 fallback이 있지만 기본값이 하드코딩됨

**개선 방안**:
- `.env` 파일 사용 (`.gitignore`에 추가)
- 환경 변수만 사용, 기본값 제거

---

### 3. **데이터 일관성 문제** ⚠️ 데이터 손실 위험
**위치**: 여러 파일
**문제점**:
- `localStorage`와 `sessionStorage`에 중복 저장
- `appStore` 상태와 실제 데이터 불일치 가능
- 동기화 실패 시 데이터 손실 가능

**예시**:
- `MainScreen.vue`에서 `coinCount.value` 직접 수정
- `appStore`의 `state.coins`와 불일치 가능
- Header는 `appStore`를 참조하지만 MainScreen은 로컬 상태 사용

**개선 방안**:
- 단일 소스 원칙 적용
- 모든 데이터 변경은 `appStore`를 통해서만
- localStorage는 `appStore`에서만 관리

---

## ⚠️ 중간 수준 문제 (Medium Issues)

### 4. **MainScreen.vue 파일이 너무 큼** (2,579줄)
**위치**: `src/pages/MainScreen.vue`
**문제점**:
- 단일 파일에 모든 게임 로직 포함
- 유지보수 어려움
- 테스트 불가능
- 코드 재사용 어려움

**개선 방안**:
- 컴포넌트 분리:
  - `MiningMode.vue`
  - `HuntingMode.vue`
  - `ExplorationMode.vue`
  - `ProductionMode.vue`
- 공통 로직은 composable로 추출:
  - `useGameMode.js`
  - `useRewardSystem.js`
  - `useEnergySystem.js`

---

### 5. **중복 코드 다수**
**위치**: 여러 파일
**문제점**:

#### 5.1 숫자 포맷팅 함수 중복
- `MainScreen.vue:10-19`
- `appStore.js:318-327`
- 동일한 로직이 여러 곳에 존재

#### 5.2 에너지 체크/리셋 로직 중복
- `MainScreen.vue:973-998`
- `Header.vue:26-46`
- 동일한 로직이 두 곳에 존재

#### 5.3 localStorage 언어 감지 중복
- `Header.vue:76-81` (setInterval 사용)
- `Footer.vue:62-67` (setInterval 사용)
- 비효율적인 폴링 방식

**개선 방안**:
- 공통 유틸리티 함수로 추출
- 이벤트 기반 업데이트로 변경 (setInterval 제거)

---

### 6. **에러 처리 부족**
**위치**: 여러 파일
**문제점**:
- `try-catch` 블록이 있지만 사용자에게 적절한 피드백 없음
- 에러 발생 시 `console.error`만 사용
- 사용자 경험 저하

**예시**:
```javascript
// wallet.js:62
catch (error) {
  console.error('지갑 연결 오류:', error)
  return { success: false, error: error.message || '...' }
}
```
- 에러 메시지가 사용자에게 전달되지만, 재시도 로직 없음

**개선 방안**:
- 전역 에러 핸들러 추가
- 사용자 친화적인 에러 메시지
- 에러 로깅 시스템 (Sentry 등)

---

### 7. **타입 안정성 부족**
**위치**: 전체 프로젝트
**문제점**:
- TypeScript 미사용
- 함수 파라미터/반환값 타입 불명확
- 런타임 에러 가능성

**예시**:
```javascript
// userUtils.js:61
export const updateUserGameData = async (userId, gameData) => {
  // userId가 문자열인지 숫자인지 불명확
  // gameData 구조가 명확하지 않음
}
```

**개선 방안**:
- TypeScript 도입 (점진적)
- JSDoc 주석 추가
- PropTypes 또는 유사한 검증 추가

---

### 8. **메모리 누수 가능성**
**위치**: 여러 파일
**문제점**:

#### 8.1 이벤트 리스너 정리 누락
- `Header.vue:76-81`: setInterval이 두 번 등록됨 (onUnmounted 중복)
- `Footer.vue:62-67`: setInterval 정리됨 (정상)

#### 8.2 라우터 이벤트 리스너
- `MainScreen.vue:194`: `router.afterEach` 등록
- `MainScreen.vue:224`: `router.afterEach` 제거 시도 (잘못된 사용)
  ```javascript
  router.afterEach(handleRouteChange) // 제거가 아니라 등록!
  ```

**개선 방안**:
- 이벤트 리스너 정리 로직 수정
- `onUnmounted`에서 올바르게 정리

---

## 💡 개선 권장 사항 (Recommendations)

### 9. **코드 품질**

#### 9.1 console.log 남용
**위치**: 전체 프로젝트 (76개 발견)
**문제점**:
- 프로덕션 코드에 `console.log` 다수
- 디버깅 코드가 남아있음

**개선 방안**:
- 개발 환경에서만 로그 출력
- 로깅 라이브러리 사용 (winston, pino 등)

#### 9.2 매직 넘버/문자열
**위치**: 여러 파일
**예시**:
```javascript
// MainScreen.vue:267
if (miningTotalClicks.value >= miningLevel.value * 1000) {
  // 1000은 매직 넘버
}

// MainScreen.vue:313
if (fragmentChance < 0.3) { // 0.3은 매직 넘버
```

**개선 방안**:
- 상수로 추출
- 설정 파일로 관리

---

### 10. **성능 최적화**

#### 10.1 불필요한 리렌더링
**위치**: 여러 컴포넌트
**문제점**:
- `setInterval`로 100ms마다 언어 체크 (Header, Footer)
- 불필요한 리렌더링 발생

**개선 방안**:
- `storage` 이벤트 사용
- 또는 `watch` 사용

#### 10.2 큰 배열 조작
**위치**: `MainScreen.vue` 등
**문제점**:
- `findIndex`, `filter` 등이 큰 배열에서 반복 호출
- 성능 저하 가능

**개선 방안**:
- 메모이제이션 사용
- 가상 스크롤링 (인벤토리 등)

---

### 11. **사용자 경험**

#### 11.1 로딩 상태 부족
**위치**: 여러 페이지
**문제점**:
- 비동기 작업 중 로딩 표시 없음
- 사용자가 대기 중인지 알 수 없음

**예시**:
- `FactoryPage.vue:29`: 고양이 제작 시 로딩 없음
- `LoginScreen.vue:30`: 로그인 시 2초 대기하지만 로딩 표시 있음 (좋음)

**개선 방안**:
- 전역 로딩 컴포넌트
- 각 비동기 작업에 로딩 상태 추가

#### 11.2 에러 메시지 개선
**위치**: 여러 파일
**문제점**:
- `alert()` 사용 (브라우저 기본 다이얼로그)
- 사용자 경험 저하

**개선 방안**:
- 커스텀 토스트/모달 컴포넌트
- 더 친화적인 메시지

---

### 12. **테스트 코드 없음**
**위치**: 전체 프로젝트
**문제점**:
- 단위 테스트 없음
- 통합 테스트 없음
- 리팩토링 시 위험

**개선 방안**:
- Vitest 도입
- 핵심 로직부터 테스트 작성
- 유틸리티 함수 우선 테스트

---

### 13. **문서화 부족**
**위치**: 전체 프로젝트
**문제점**:
- 함수 주석 부족
- 복잡한 로직 설명 없음
- API 문서 없음

**개선 방안**:
- JSDoc 주석 추가
- README 업데이트
- 아키텍처 문서 작성

---

## 🐛 발견된 버그

### 14. **Header.vue의 onUnmounted 중복** ⚠️ 버그
**위치**: `src/components/Header.vue:91-106`
```javascript
onUnmounted(() => {
  window.removeEventListener('userDataUpdated', handleUserDataUpdate)
})

onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
})

onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
})
```
**문제점**: 
- `onUnmounted`가 **3번** 정의됨
- 두 번째와 세 번째가 동일한 코드 (interval 정리)
- 첫 번째는 이벤트 리스너 제거, 나머지는 interval 정리
- 하나로 합쳐야 함

**영향**: 
- 메모리 누수 가능성
- 코드 중복
- 유지보수 어려움

**수정 방법**:
```javascript
onUnmounted(() => {
  window.removeEventListener('userDataUpdated', handleUserDataUpdate)
  if (interval) {
    clearInterval(interval)
  }
})
```

---

### 15. **SignupScreen의 gameData 불완전**
**위치**: `src/pages/SignupScreen.vue:64-68`
```javascript
gameData: {
  level: 1,
  coins: 0,
  nftCount: 0
}
```
**문제점**: 
- `totalCoin`, `catFragments`, `miningLevel` 등 필수 필드 누락
- 다른 곳에서 사용 시 `undefined` 에러 가능

**비교**: `userUtils.js:36-51`에는 완전한 gameData 구조가 있음

---

### 16. **FactoryPage의 catFragments 더미 데이터**
**위치**: `src/pages/FactoryPage.vue:23-24`
```javascript
// 고양이 파편은 더미데이터로 50으로 설정
catFragments.value = 50
```
**문제점**:
- 실제 사용자 데이터를 로드하지 않음
- 항상 50으로 고정
- 사용자 데이터와 불일치

---

### 17. **MainScreen의 router.afterEach 잘못된 사용**
**위치**: `src/pages/MainScreen.vue:224`
```javascript
onUnmounted(() => {
  router.afterEach(handleRouteChange) // 제거가 아니라 등록!
})
```
**문제점**: 
- `router.afterEach`는 제거 함수를 반환하지 않음
- 이벤트 리스너가 제거되지 않음
- 메모리 누수

**올바른 방법**:
```javascript
const removeAfterEach = router.afterEach(handleRouteChange)
onUnmounted(() => {
  removeAfterEach()
})
```

---

## 📊 코드 품질 지표

### 파일 크기
- **MainScreen.vue**: 2,579줄 (매우 큼)
- **appStore.js**: 374줄 (적정)
- **wallet.js**: 251줄 (적정)
- **config.js**: 259줄 (적정)

### 중복 코드
- 숫자 포맷팅: 3곳
- 에너지 체크: 2곳
- 언어 감지: 2곳

### console 사용
- `console.log`: 20개
- `console.error`: 30개
- `console.warn`: 2개

---

## 🎯 우선순위별 개선 계획

### Phase 1: 보안 (즉시 수정 필요)
1. ✅ 비밀번호 해시화
2. ✅ Firebase API 키 환경 변수화
3. ✅ 데이터 일관성 개선

### Phase 2: 버그 수정 (1주일 내)
4. ✅ Header.vue onUnmounted 중복 제거 (3개 → 1개로 통합)
5. ✅ SignupScreen gameData 완성
6. ✅ FactoryPage catFragments 실제 데이터 사용
7. ✅ MainScreen router 이벤트 리스너 수정

### Phase 3: 코드 품질 (1개월 내)
8. ✅ MainScreen.vue 컴포넌트 분리
9. ✅ 중복 코드 제거
10. ✅ console.log 정리
11. ✅ 에러 처리 개선

### Phase 4: 장기 개선 (2-3개월)
12. ✅ TypeScript 도입
13. ✅ 테스트 코드 작성
14. ✅ 문서화
15. ✅ 성능 최적화

---

## 📝 결론

프로젝트는 기본적인 기능은 잘 구현되어 있으나, 보안, 코드 품질, 유지보수성 측면에서 개선이 필요합니다. 특히 보안 관련 이슈(비밀번호 평문 저장, API 키 노출)는 즉시 수정이 필요합니다.

**전체 개선 항목**: 17개
- 심각 (Critical): 3개
- 중간 (Medium): 5개
- 권장 (Recommendation): 9개

**예상 작업 시간**:
- Phase 1: 1-2일
- Phase 2: 3-5일
- Phase 3: 2-3주
- Phase 4: 1-2개월

