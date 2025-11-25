# TDL 프로젝트 전체 파일 분석 보고서

## 📋 프로젝트 개요

**프로젝트명**: TDL (Tuldung)  
**타입**: Vue 3 기반 NFT 클릭 게임 웹 애플리케이션  
**배포**: GitHub Pages (`https://mandarin1977.github.io/tdl`)  
**빌드 도구**: Vite 7.1.7  
**프레임워크**: Vue 3.5.22 + Vue Router 4.6.0  
**블록체인**: Ethereum (MetaMask 연동)  
**백엔드**: Firebase (Firestore, Authentication)

---

## 🏗️ 프로젝트 구조 상세 분석

### 루트 디렉토리

```
tdl/
├── src/                    # 소스 코드
├── dist/                   # 빌드 결과물 (GitHub Pages 배포용)
├── public/                 # 정적 파일
├── node_modules/           # 의존성 패키지
├── package.json            # 프로젝트 설정 및 의존성
├── vite.config.js          # Vite 빌드 설정
├── vue.config.js           # Vue 설정 (사용 안 함)
├── jsconfig.json           # JavaScript 설정
├── index.html              # 진입점 HTML
└── *.md                    # 문서 파일들
```

### 📁 src/ 디렉토리 구조

#### 1. **pages/** - 페이지 컴포넌트 (18개)

##### 인증 관련 (3개)
- **LoadingScreen.vue**: 초기 로딩 화면, Firebase 리다이렉트 결과 처리
- **LoginScreen.vue**: 로그인 화면
  - 이메일/비밀번호 로그인
  - MetaMask 지갑 연결 로그인
  - 비밀번호 표시/숨김 기능
  - 회원가입 페이지 이동
- **SignupScreen.vue**: 회원가입 화면
  - 이메일/비밀번호 회원가입
  - localStorage에 사용자 저장

##### 메인 게임 (5개)
- **MainScreen.vue**: 메인 게임 화면 (2,579줄)
  - 4가지 게임 모드 통합 (채굴, 사냥, 탐험, 생산)
  - 클릭 기반 게임플레이
  - NFT 슬롯 시스템 (각 모드당 6개)
  - 보상 시스템 (포인트, 코인, 고양이 파편)
  - 레벨 시스템 (전체 레벨 + 모드별 레벨)
  - 애니메이션 효과 (말풍선, 고양이 이모지)
- **MiningPage.vue**: 채굴 전용 페이지
- **HuntingPage.vue**: 사냥 전용 페이지
- **ExplorationPage.vue**: 탐험 전용 페이지
- **ProductionPage.vue**: 생산 전용 페이지

##### 게임 시스템 (6개)
- **ExchangePage.vue**: 교환소
  - 포인트(P) ↔ 코인(C) 교환
- **QuestPage.vue**: 퀘스트 시스템
  - 일일/주간/월간 퀘스트
  - 보상 지급 (코인, 고양이 파편)
  - 자동 리셋 시스템
- **InventoryPage.vue**: 인벤토리 관리
  - NFT 목록 표시
  - 필터링 (별 등급, 레벨)
  - 정렬 (최신순, 오래된순, 레벨, 별 등급, 이름순)
  - 검색 기능
  - NFT 상세 정보 모달
  - NFT 선택 기능
- **FactoryPage.vue**: 제작소
  - 고양이 파편으로 NFT 제작
  - 30종류의 고양이 (cat1.png ~ cat30.png)
  - 레어리티 시스템 (Common, Rare, Epic, Legendary)
- **NFTPage.vue**: NFT 관리 페이지
- **ShopPage.vue**: 상점 (에너지 구매 등)

##### 사용자 관련 (4개)
- **UserProfilePage.vue**: 사용자 프로필
- **SettingsPage.vue**: 설정 페이지
  - 언어 설정 (한국어/영어)
  - 사운드 설정
  - 지갑 관리
  - 로그아웃
- **AttendancePage.vue**: 출석 체크
- **NotificationPage.vue**: 알림

#### 2. **components/** - 공통 컴포넌트 (2개)

- **Header.vue**: 상단 헤더
  - 에너지 표시 (⚡)
  - 포인트(P) 표시
  - 코인(C) 표시
  - 고양이 파편 표시
  - 알림 아이콘
  - 설정 아이콘
  - 스토어와 연동하여 실시간 업데이트

- **Footer.vue**: 하단 네비게이션 바
  - 5개 탭: 홈, 교환소, 퀘스트, 인벤토리, 제작소
  - 활성 탭 표시
  - 라우터와 연동

#### 3. **store/** - 상태 관리

- **appStore.js**: 전역 상태 관리 (374줄)
  - 인증 상태 (isLoggedIn, loginType, walletAddress)
  - 게임 데이터 (coins, totalCoin, catFragments, level)
  - 모드별 레벨 (miningLevel, huntingLevel, etc.)
  - 고양이 슬롯 (각 모드당 6개)
  - 인벤토리
  - 주요 함수:
    - `loadCurrentUser()`: 사용자 데이터 로드
    - `updateGameData()`: 게임 데이터 업데이트
    - `connectWalletToApp()`: 지갑 연결
    - `syncGameData()`: 상태 동기화

#### 4. **utils/** - 유틸리티 함수 (6개)

- **userUtils.js**: 사용자 데이터 관리
  - `getCurrentUser()`: 현재 사용자 가져오기
  - `getAllUsers()`: 모든 사용자 가져오기
  - `createWalletUser()`: 지갑 사용자 생성
  - `updateUserGameData()`: 게임 데이터 업데이트
  - `getI18nTexts()`: 다국어 텍스트

- **wallet.js**: Web3 지갑 연결 유틸리티 (251줄)
  - `connectWallet()`: MetaMask 연결
  - `getWalletAddress()`: 지갑 주소 가져오기
  - `getWalletBalance()`: 지갑 잔액 조회
  - `checkWalletConnection()`: 연결 상태 확인
  - `onAccountsChanged()`: 계정 변경 이벤트
  - `onChainChanged()`: 네트워크 변경 이벤트
  - `switchNetwork()`: 네트워크 전환

- **rarityUtils.js**: NFT 레어리티 시스템 (229줄)
  - 레어리티 등급: Common (70%), Rare (20%), Epic (8%), Legendary (2%)
  - 레어리티별 속성 범위:
    - Common: 5-15%
    - Rare: 15-30%
    - Epic: 30-60%
    - Legendary: 60-100%
  - 속성: miningEfficiency, huntingDamage, explorationReward, productionSpeed
  - 레어리티별 색상 및 스타일

- **questUtils.js**: 퀘스트 시스템 유틸리티 (114줄)
  - `getQuestProgress()`: 퀘스트 진행도 로드
  - `updateQuestProgress()`: 진행도 업데이트
  - `trackGameAction()`: 게임 액션 추적
  - `calculateQuestProgress()`: 진행도 계산
  - `isQuestCompleted()`: 완료 여부 확인

- **marketplaceUtils.js**: NFT 마켓플레이스 유틸리티 (133줄)
  - `listNFT()`: NFT 판매 등록
  - `buyNFT()`: NFT 구매
  - `cancelListing()`: 판매 취소
  - `getActiveListings()`: 판매 중인 NFT 목록
  - `getMarketplaceStats()`: 마켓플레이스 통계

- **firebaseAuth.js**: Firebase 인증 유틸리티 (추정)

#### 5. **firebase/** - Firebase 설정

- **config.js**: Firebase 초기화 및 설정 (259줄)
  - Firebase 앱 초기화
  - Auth 인스턴스
  - Firestore 인스턴스
  - Analytics 초기화
  - Google 로그인 제공자
  - `signInWithGoogle()`: Google 로그인
  - `handleRedirectResult()`: 리다이렉트 결과 처리
  - `saveUserToFirestore()`: 사용자 데이터 저장
  - `getUserGameData()`: 게임 데이터 가져오기
  - `updateUserGameDataInFirestore()`: 게임 데이터 업데이트

#### 6. **styles/** - 스타일 파일 (3개)

- **common.css**: 공통 스타일
  - 기본 리셋
  - 타이틀/본문 폰트 스타일
  - 버튼 기본 스타일

- **layout.css**: 레이아웃 스타일

- **main.css**: 메인 화면 스타일

#### 7. **assets/** - 리소스 파일

- **img/**: 85개 PNG 이미지 파일
  - 고양이 이미지 (cat1.png ~ cat30.png)
  - UI 아이콘 (coin_ico.png, point_ico.png, cat_ico.png 등)
  - 게임 배경 이미지
  - 버튼 이미지

- **audio/**: 오디오 파일
  - clickbgm.mp3: 클릭 효과음

#### 8. **루트 파일**

- **main.js**: 앱 진입점 (88줄)
  - Vue 앱 생성
  - 라우터 설정 (19개 라우트)
  - 라우터 가드 (인증 확인)
  - 공개 라우트: `/loading`, `/login`, `/signup`

- **App.vue**: 루트 컴포넌트 (112줄)
  - 라우터 뷰
  - BGM 제어
  - 사용자 데이터 로드
  - 지갑 상태 확인

---

## 📦 의존성 분석

### 프로덕션 의존성 (package.json)

```json
{
  "ethers": "^6.15.0",        // Web3 라이브러리 (지갑 연결)
  "firebase": "^12.5.0",      // Firebase 서비스 (인증, 데이터베이스)
  "vue": "^3.5.22",           // Vue 프레임워크
  "vue-router": "^4.6.0"      // 라우팅
}
```

### 개발 의존성

```json
{
  "@vitejs/plugin-vue": "^6.0.1",
  "gh-pages": "^6.3.0",       // GitHub Pages 배포
  "vite": "^7.1.7",           // 빌드 도구
  "vite-plugin-vue-devtools": "^8.0.2"
}
```

---

## 🎮 게임 시스템 분석

### 1. 게임 리소스

- **포인트 (P/Coins)**: 기본 게임 화폐
- **코인 (C/TotalCoin)**: 고급 게임 화폐
- **고양이 파편 (Cat Fragments)**: NFT 제작 재료
- **에너지**: 하루 최대 4000, 매일 자정 리셋

### 2. 게임 모드 (4가지)

#### 채굴 (Mining)
- 클릭 기반 채굴
- 10번 클릭으로 완료
- 보상: 포인트, 고양이 파편
- 레벨 시스템 (레벨업 시 보상 증가)

#### 사냥 (Hunting)
- 몬스터 사냥
- 10번 클릭으로 완료
- 보상: 포인트, 고양이 파편

#### 탐험 (Exploration)
- 지역 탐험
- 10번 클릭으로 완료
- 보상: 포인트, 고양이 파편

#### 생산 (Production)
- 아이템 제작
- 10번 클릭으로 완료
- 보상: 포인트, 고양이 파편

### 3. 레벨 시스템

- **전체 레벨**: 사용자 전체 레벨
- **모드별 레벨**: 각 게임 모드의 독립적인 레벨
- **레벨 배수**: 2의 제곱 (레벨 1 = 1배, 레벨 2 = 2배, 레벨 3 = 4배...)

### 4. NFT 시스템

#### 고양이 NFT
- 30종류의 고양이 (cat1.png ~ cat30.png)
- 레어리티 등급: Common, Rare, Epic, Legendary
- 속성:
  - `miningEfficiency`: 채굴 효율 증가
  - `huntingDamage`: 사냥 데미지 증가
  - `explorationReward`: 탐험 보상 증가
  - `productionSpeed`: 생산 속도 증가
- 슬롯 시스템: 각 모드당 6개 슬롯

#### NFT 제작
- FactoryPage에서 고양이 파편으로 제작
- 레어리티 랜덤 생성
- 속성 랜덤 생성 (레어리티에 따라 범위 다름)

---

## 🔐 인증 시스템 분석

### 1. 인증 방식

#### 이메일/비밀번호 로그인
- localStorage 기반
- SignupScreen에서 회원가입
- LoginScreen에서 로그인

#### 지갑 연결 로그인
- MetaMask 지갑 연결
- 지갑 주소 기반 사용자 생성
- 지갑 이벤트 리스너 (계정 변경, 네트워크 변경)

#### Firebase Google 로그인 (구현되어 있으나 사용 안 함)
- Google 소셜 로그인
- Firestore 데이터 저장

### 2. 세션 관리

- **sessionStorage**: 현재 로그인한 사용자 정보
- **localStorage**: 모든 사용자 데이터, 게임 설정
- **Firebase Auth**: Google 로그인 시 사용

### 3. 라우터 가드

- 인증되지 않은 사용자 → `/login`으로 리다이렉트
- 로그인된 사용자 → 로그인/회원가입 페이지 접근 시 `/main`으로 리다이렉트

---

## 💾 데이터 저장 구조

### localStorage

```javascript
{
  "users": [...],                    // 모든 사용자 데이터
  "currentEnergy": "4000",           // 현재 에너지
  "energyLastDate": "Mon Jan 01 2024", // 에너지 리셋 날짜
  "soundEnabled": "true",            // 사운드 설정
  "appLanguage": "한국어",           // 언어 설정
  "questProgress": {...},            // 퀘스트 진행도
  "marketplace": [...]               // 마켓플레이스 데이터
}
```

### sessionStorage

```javascript
{
  "currentUser": {
    "id": "user_id",
    "email": "user@example.com",
    "loginType": "email" | "wallet",
    "walletAddress": "0x...",
    "gameData": {
      "level": 1,
      "coins": 0,
      "totalCoin": 0,
      "catFragments": 50,
      "nftCount": 0,
      "miningLevel": 1,
      "huntingLevel": 1,
      "explorationLevel": 1,
      "productionLevel": 1,
      "miningCats": [null, null, null, null, null, null],
      "huntingCats": [null, null, null, null, null, null],
      "explorationCats": [null, null, null, null, null, null],
      "productionCats": [null, null, null, null, null, null],
      "inventory": []
    }
  }
}
```

### Firestore (Firebase)

```javascript
users/{userId} {
  email: string,
  displayName: string,
  photoURL: string,
  createdAt: string,
  gameData: {
    level: number,
    coins: number,
    totalCoin: number,
    catFragments: number,
    nftCount: number,
    miningLevel: number,
    huntingLevel: number,
    explorationLevel: number,
    productionLevel: number,
    miningCats: array,
    huntingCats: array,
    explorationCats: array,
    productionCats: array,
    inventory: array
  }
}
```

---

## 🛣️ 라우팅 시스템

### 라우트 목록 (19개)

```
/ → /loading (리다이렉트)
/loading → LoadingScreen
/login → LoginScreen
/signup → SignupScreen
/main → MainScreen
/mining → MiningPage
/hunting → HuntingPage
/exploration → ExplorationPage
/production → ProductionPage
/exchange → ExchangePage
/quest → QuestPage
/inventory → InventoryPage
/factory → FactoryPage
/settings → SettingsPage
/profile → UserProfilePage
/attendance → AttendancePage
/nft → NFTPage
/notification → NotificationPage
/shop → ShopPage
```

### 공개 라우트
- `/loading`
- `/login`
- `/signup`

### 보호된 라우트
- 나머지 모든 페이지

---

## 🎨 UI/UX 구조

### 컴포넌트 계층

```
App.vue
├── RouterView
    ├── Header.vue (상단 헤더)
    ├── Page Components (18개)
    └── Footer.vue (하단 네비게이션)
```

### 스타일 시스템

- **공통 스타일**: common.css
- **레이아웃**: layout.css
- **메인 화면**: main.css
- **컴포넌트별 스타일**: 각 Vue 파일의 `<style scoped>`

### 다국어 지원

- 한국어/영어 지원
- `getI18nTexts()` 함수로 언어별 텍스트 제공
- localStorage의 `appLanguage`로 언어 저장

---

## 🎵 오디오 시스템

### BGM (배경음악)
- `src/assets/audio/bgm.mp3` (참조는 있으나 파일 없음)
- 사용자 상호작용 후 재생 (브라우저 정책 준수)
- localStorage의 `soundEnabled` 설정으로 제어

### 효과음
- `clickbgm.mp3`: 클릭 효과음
- 게임 액션 시 재생

---

## 🔄 상태 관리 흐름

### 데이터 흐름

```
사용자 액션
  ↓
컴포넌트에서 함수 호출
  ↓
appStore.js의 액션 함수
  ↓
userUtils.js의 유틸리티 함수
  ↓
localStorage/Firestore 업데이트
  ↓
sessionStorage 업데이트
  ↓
appStore 상태 동기화
  ↓
커스텀 이벤트 발생 ('userDataUpdated')
  ↓
컴포넌트 자동 업데이트
```

### 주요 이벤트

- `userDataUpdated`: 게임 데이터 업데이트 시 발생
- `questProgressUpdated`: 퀘스트 진행도 업데이트 시 발생
- `soundSettingChanged`: 사운드 설정 변경 시 발생

---

## 🚀 빌드 및 배포

### 스크립트

```json
{
  "dev": "vite",                    // 개발 서버 실행
  "build": "vite build",            // 프로덕션 빌드
  "preview": "vite preview",        // 빌드 결과 미리보기
  "deploy": "npm run build && gh-pages -d dist"  // 빌드 + 배포
}
```

### 배포 설정

- **Base URL**: `/tdl/` (프로덕션)
- **빌드 결과물**: `dist/` 폴더
- **배포 대상**: GitHub Pages

---

## 📊 프로젝트 통계

### 파일 수
- **페이지 컴포넌트**: 18개
- **공통 컴포넌트**: 2개
- **유틸리티 파일**: 6개
- **스타일 파일**: 3개
- **이미지 리소스**: 85개 PNG 파일
- **오디오 리소스**: 1개 MP3 파일

### 코드 규모
- **가장 큰 파일**: MainScreen.vue (2,579줄)
- **상태 관리**: appStore.js (374줄)
- **지갑 유틸리티**: wallet.js (251줄)
- **Firebase 설정**: config.js (259줄)
- **레어리티 시스템**: rarityUtils.js (229줄)

---

## ✅ 완료된 기능

1. ✅ 이메일/비밀번호 로그인
2. ✅ MetaMask 지갑 연결
3. ✅ 4가지 게임 모드 (채굴, 사냥, 탐험, 생산)
4. ✅ 레벨 시스템
5. ✅ NFT 제작 시스템
6. ✅ 레어리티 시스템
7. ✅ 인벤토리 시스템
8. ✅ 퀘스트 시스템
9. ✅ 교환소 (포인트 ↔ 코인)
10. ✅ 마켓플레이스 유틸리티 (로컬)

---

## ⚠️ 개선 가능한 부분

### 1. 코드 품질
- TypeScript 미사용 (타입 안정성 부족)
- 테스트 코드 없음
- 일부 파일이 너무 큼 (MainScreen.vue: 2,579줄)

### 2. 아키텍처
- 인증 플로우가 복잡함 (여러 곳에서 중복 처리)
- 상태 관리가 단순함 (Pinia/Vuex 미사용)
- 컴포넌트 분리 필요 (MainScreen.vue)

### 3. 기능
- NFT가 게임에서 실제로 사용되지 않음 (슬롯에 배치만 가능)
- NFT 레벨업 시스템 없음
- 블록체인 NFT 민팅 없음 (로컬 데이터만)
- BGM 파일 없음 (참조만 존재)

### 4. 보안
- Firebase API 키가 코드에 하드코딩됨 (환경 변수 권장)
- Firestore 보안 규칙 필요

---

## 🎯 주요 특징

### 장점
1. ✅ Firebase를 활용한 안정적인 인증 시스템
2. ✅ 반응형 상태 관리 (Vue 3 Composition API)
3. ✅ 모듈화된 코드 구조
4. ✅ 다국어 지원
5. ✅ 세션 관리 및 자동 로그인 유지
6. ✅ 레어리티 시스템 구현
7. ✅ 퀘스트 시스템 구현
8. ✅ 마켓플레이스 유틸리티 구현

### 특징
- 클릭 기반 게임플레이
- NFT 수집 및 관리
- 레벨 시스템
- 리소스 관리 (포인트, 코인, 고양이 파편, 에너지)
- 지갑 연동 (MetaMask)

---

## 📝 결론

TDL은 Vue 3와 Firebase를 활용한 NFT 클릭 게임 웹 애플리케이션입니다. 고양이 NFT 수집, 다양한 게임 모드, 레벨 시스템, 퀘스트 시스템 등이 포함되어 있으며, Firebase 인증과 Firestore를 통한 데이터 관리가 구현되어 있습니다.

프로젝트는 잘 구조화되어 있으나, NFT가 게임에서 실제로 사용되지 않는 점, 블록체인 민팅 미구현, 코드 분리 필요 등의 개선이 필요합니다.

**현재 상태**: 기본 게임 메커니즘과 시스템은 완성되었으나, NFT의 실제 게임 활용과 블록체인 연동이 필요한 단계입니다.


