# TDL 프로젝트 완전 분석 보고서
**생성일**: 2025-01-18  
**프로젝트명**: TDL (TulDung) - NFT 클리커 게임  
**프레임워크**: Vue.js 3 (Composition API) + Vite  
**배포**: GitHub Pages (https://mandarin1977.github.io/tdl)

---

## 📋 목차
1. [프로젝트 개요](#프로젝트-개요)
2. [기술 스택](#기술-스택)
3. [프로젝트 구조](#프로젝트-구조)
4. [주요 기능](#주요-기능)
5. [인증 시스템](#인증-시스템)
6. [게임 시스템](#게임-시스템)
7. [상태 관리](#상태-관리)
8. [라우팅](#라우팅)
9. [최근 변경사항](#최근-변경사항)
10. [주요 파일 분석](#주요-파일-분석)
11. [개선 사항 및 권장사항](#개선-사항-및-권장사항)

---

## 프로젝트 개요

TDL은 고양이 NFT를 수집하고 관리하는 클리커 게임입니다. 사용자는 고양이를 생성하고, 다양한 게임 모드(채굴, 사냥, 탐험, 생산)를 통해 포인트와 코인을 획득하며, NFT를 거래할 수 있습니다.

### 핵심 특징
- **클리커 게임**: 클릭을 통해 포인트와 리소스 획득
- **NFT 수집**: 고양이 NFT 생성 및 관리
- **다양한 게임 모드**: 채굴, 사냥, 탐험, 생산
- **게스트 모드**: 로그인 없이 게임 플레이 가능
- **지갑 연동**: MetaMask 지갑 연결 지원
- **Firebase 통합**: 사용자 인증 및 데이터 저장

---

## 기술 스택

### 프론트엔드
- **Vue.js 3.5.22**: Composition API 사용
- **Vue Router 4.6.0**: 클라이언트 사이드 라우팅
- **Vite 7.1.7**: 빌드 도구 및 개발 서버
- **CSS3**: 커스텀 스타일링

### 백엔드/서비스
- **Firebase 12.5.0**:
  - Authentication (이메일/비밀번호, Google 로그인)
  - Firestore (사용자 데이터 저장)
  - Analytics
- **LocalStorage/SessionStorage**: 로컬 데이터 저장

### 블록체인
- **Ethers.js 6.15.0**: 이더리움 지갑 연동

### 배포
- **GitHub Pages**: 정적 사이트 호스팅
- **gh-pages**: 자동 배포 스크립트

---

## 프로젝트 구조

```
tdl/
├── src/
│   ├── assets/
│   │   ├── audio/          # BGM 및 효과음
│   │   └── img/            # 이미지 리소스 (163개 PNG 파일)
│   ├── components/          # 재사용 가능한 컴포넌트
│   │   ├── Header.vue       # 상단 헤더 (네비게이션)
│   │   └── Footer.vue       # 하단 푸터 (탭 메뉴)
│   ├── firebase/
│   │   └── config.js        # Firebase 설정 및 유틸리티
│   ├── pages/               # 페이지 컴포넌트 (20개)
│   │   ├── LoadingScreen.vue
│   │   ├── LoginScreen.vue
│   │   ├── SignupScreen.vue
│   │   ├── MainScreen.vue   # 메인 클리커 게임 화면
│   │   ├── HomePage.vue      # 홈 화면
│   │   ├── MiningPage.vue
│   │   ├── HuntingPage.vue
│   │   ├── ExplorationPage.vue
│   │   ├── ProductionPage.vue
│   │   ├── ExchangePage.vue
│   │   ├── QuestPage.vue
│   │   ├── InventoryPage.vue
│   │   ├── FactoryPage.vue
│   │   ├── NFTPage.vue
│   │   ├── ShopPage.vue
│   │   ├── SettingsPage.vue
│   │   ├── UserProfilePage.vue
│   │   ├── AttendancePage.vue
│   │   ├── NotificationPage.vue
│   │   ├── ForgotPasswordPage.vue
│   │   └── ResetPasswordPage.vue
│   ├── store/
│   │   └── appStore.js      # 전역 상태 관리 (Pinia 스타일)
│   ├── styles/
│   │   ├── common.css       # 공통 스타일
│   │   ├── layout.css       # 레이아웃 스타일
│   │   └── main.css         # 메인 스타일
│   ├── utils/               # 유틸리티 함수들
│   │   ├── userUtils.js     # 사용자 데이터 관리
│   │   ├── firebaseAuth.js  # Firebase 인증
│   │   ├── wallet.js        # 지갑 연동
│   │   ├── energyUtils.js   # 에너지 관리
│   │   ├── formatUtils.js   # 숫자 포맷팅
│   │   ├── nftLevelUtils.js # NFT 레벨 관리
│   │   ├── rarityUtils.js   # 레어리티 계산
│   │   ├── questUtils.js    # 퀘스트 관리
│   │   ├── referralUtils.js # 추천인 시스템
│   │   ├── marketplaceUtils.js # 마켓플레이스
│   │   ├── passwordUtils.js # 비밀번호 유틸리티
│   │   ├── resetTokenUtils.js # 비밀번호 리셋 토큰
│   │   └── kakaoUtils.js    # 카카오톡 공유
│   ├── App.vue              # 루트 컴포넌트
│   └── main.js              # 앱 진입점 및 라우터 설정
├── public/                  # 정적 파일
├── dist/                    # 빌드 결과물
├── package.json
├── vite.config.js
└── README.md
```

---

## 주요 기능

### 1. 인증 시스템
- **이메일/비밀번호 로그인**: Firebase Authentication
- **Google 소셜 로그인**: Firebase Google Provider
- **지갑 연결**: MetaMask 지갑 연동
- **게스트 모드**: 로그인 없이 게임 플레이 가능
- **비밀번호 재설정**: 이메일 기반 비밀번호 리셋

### 2. 게임 모드
- **채굴 (Mining)**: 클릭을 통해 광물 획득
- **사냥 (Hunting)**: 몬스터 처치 및 경험치 획득
- **탐험 (Exploration)**: 새로운 지역 발견 및 보물 획득
- **생산 (Production)**: 아이템 제작 및 생산

### 3. NFT 시스템
- **고양이 NFT 생성**: Factory에서 고양이 파편으로 NFT 생성
- **NFT 레벨업**: 경험치를 통한 레벨 상승
- **NFT 인벤토리**: 보유 NFT 관리 및 필터링
- **NFT 마켓플레이스**: NFT 구매/판매

### 4. 경제 시스템
- **포인트 (P)**: 기본 게임 화폐
- **코인 (C)**: 고급 게임 화폐
- **고양이 파편**: NFT 생성 재료
- **교환소**: 포인트 ↔ 코인 교환

### 5. 추가 기능
- **출석체크**: 일일 보상 시스템
- **퀘스트**: 다양한 미션 및 보상
- **상점**: 에너지 및 아이템 구매
- **추천인 시스템**: 친구 초대 보상

---

## 인증 시스템

### 인증 방식

#### 1. 게스트 모드
```javascript
// 게스트 사용자 생성 (MainScreen.vue, HomePage.vue, UserProfilePage.vue)
const guestUser = {
  id: 'guest_' + Date.now(),
  email: 'guest@tdl.com',
  name: 'Guest',
  loginType: 'guest',
  gameData: { /* 기본 게임 데이터 */ }
}
```

**특징**:
- 로그인 없이 즉시 게임 플레이 가능
- localStorage/sessionStorage에 저장
- 게스트는 로그인/회원가입 페이지 접근 가능
- 로그인 시 게스트 데이터는 유지되지 않음

#### 2. 이메일/비밀번호 인증
- Firebase Authentication 사용
- Firestore에 사용자 데이터 저장
- 영구 로그인 상태 유지 (localStorage)

#### 3. Google 소셜 로그인
- Firebase Google Provider 사용
- 리다이렉트 방식으로 구현
- 자동 사용자 데이터 생성

#### 4. 지갑 연결
- MetaMask 지갑 연동
- 지갑 주소 기반 사용자 생성
- 계정 변경 감지 및 자동 재연결

### 라우터 가드

```javascript
// main.js - 라우터 가드 로직
router.beforeEach(async (to, from, next) => {
  // 게스트 사용자 확인
  const isGuest = currentUser?.loginType === 'guest' || 
                  currentUser?.email?.includes('@guest.com') || 
                  currentUser?.email === 'guest@tdl.com'
  
  // 게스트는 로그인된 것으로 간주하지 않음
  let isAuthenticated = !!currentUser && !isGuest
  
  // 공개 페이지: /loading, /login, /signup, /forgot-password, /reset-password, /home, /main
  // 보호된 페이지: 나머지 모든 페이지
})
```

**라우팅 규칙**:
- 게스트 사용자는 로그인/회원가입 페이지 접근 가능
- 인증된 사용자는 로그인/회원가입 페이지 접근 시 `/home`으로 리다이렉트
- 비인증 사용자는 보호된 페이지 접근 시 `/login`으로 리다이렉트

---

## 게임 시스템

### 클리커 게임 메커니즘

#### MainScreen.vue
- **4가지 게임 모드**: 채굴, 사냥, 탐험, 생산
- **클릭 기반 진행**: 각 모드마다 10회 클릭 필요
- **보상 시스템**: 포인트, 고양이 파편, 경험치 획득
- **레벨 시스템**: 모드별 독립적인 레벨 관리
- **에너지 시스템**: 각 액션마다 에너지 소모

#### 게임 데이터 구조
```javascript
gameData: {
  level: 1,                    // 전체 레벨
  coins: 0,                   // 포인트 (P)
  totalCoin: 0,               // 코인 (C)
  catFragments: 50,           // 고양이 파편
  nftCount: 0,                // NFT 개수
  miningLevel: 1,             // 채굴 레벨
  huntingLevel: 1,            // 사냥 레벨
  explorationLevel: 1,        // 탐험 레벨
  productionLevel: 1,         // 생산 레벨
  miningCats: [null, null, null, null],  // 채굴 고양이 슬롯 (최대 4개)
  huntingCats: [null, null, null, null], // 사냥 고양이 슬롯
  explorationCats: [null, null, null, null], // 탐험 고양이 슬롯
  productionCats: [null, null, null, null],   // 생산 고양이 슬롯
  inventory: []                // NFT 인벤토리
}
```

### NFT 시스템

#### NFT 속성
- **레어리티**: Common, Rare, Epic, Legendary
- **별 등급**: 1~5성
- **레벨**: 경험치 기반 레벨업
- **스탯**: 근력, 체력, 지능, 손재주, 용기, 행운
- **게임 모드별 효율**: 채굴 효율, 사냥 데미지, 탐험 보상, 생산 속도

#### Factory (제작소)
- 고양이 파편을 사용하여 NFT 생성
- 랜덤 레어리티 및 스탯 부여
- 생성된 NFT는 인벤토리에 자동 추가

---

## 상태 관리

### appStore.js 구조

**상태 (State)**:
```javascript
const state = reactive({
  // 인증 상태
  isLoggedIn: false,
  loginType: null,
  walletAddress: '',
  userBalance: '0 ETH',
  isWalletConnected: false,
  
  // 현재 사용자 정보
  currentUser: null,
  
  // 게임 데이터
  coins: 0,
  totalCoin: 0,
  catFragments: 50,
  level: 1,
  nftCount: 0,
  
  // 모드별 레벨
  miningLevel: 1,
  huntingLevel: 1,
  explorationLevel: 1,
  productionLevel: 1,
  
  // 고양이 슬롯
  miningCats: [null, null, null, null],
  huntingCats: [null, null, null, null],
  explorationCats: [null, null, null, null],
  productionCats: [null, null, null, null],
  
  // 인벤토리
  inventory: []
})
```

**주요 액션**:
- `loadCurrentUser()`: 사용자 데이터 로드
- `syncGameData()`: 게임 데이터 동기화
- `updateGameData()`: 게임 데이터 업데이트 (Firebase/localStorage)
- `connectWalletToApp()`: 지갑 연결
- `disconnectWalletFromApp()`: 지갑 연결 해제
- `updateCoins()`, `updateTotalCoin()`, `updateCatFragments()`: 개별 데이터 업데이트

**데이터 동기화**:
- Firebase Firestore와 localStorage 이중 저장
- `userDataUpdated` 이벤트를 통한 컴포넌트 간 동기화
- 실시간 업데이트 지원

---

## 라우팅

### 라우트 구성

```javascript
const routes = [
  { path: '/', redirect: '/loading' },
  { path: '/loading', component: LoadingScreen },
  { path: '/login', component: LoginScreen },
  { path: '/signup', component: SignupScreen },
  { path: '/forgot-password', component: ForgotPasswordPage },
  { path: '/reset-password', component: ResetPasswordPage },
  { path: '/main', component: MainScreen },        // 클리커 게임
  { path: '/home', component: HomePage },         // 홈 화면
  { path: '/mining', component: MiningPage },
  { path: '/hunting', component: HuntingPage },
  { path: '/exploration', component: ExplorationPage },
  { path: '/production', component: ProductionPage },
  { path: '/exchange', component: ExchangePage },
  { path: '/quest', component: QuestPage },
  { path: '/inventory', component: InventoryPage },
  { path: '/factory', component: FactoryPage },
  { path: '/settings', component: SettingsPage },
  { path: '/profile', component: UserProfilePage },
  { path: '/attendance', component: AttendancePage },
  { path: '/nft', component: NFTPage },
  { path: '/notification', component: NotificationPage },
  { path: '/shop', component: ShopPage }
]
```

**라우터 모드**: `createWebHashHistory()` (해시 모드)

---

## 최근 변경사항

### 2025-01-18 업데이트

#### 1. 게스트 모드 구현
- 로그인 없이 게임 플레이 가능
- MainScreen, HomePage, UserProfilePage에서 자동 게스트 사용자 생성
- 게스트 사용자는 로그인/회원가입 페이지 접근 가능

#### 2. 로그인/회원가입 페이지 UI 개선
- **LoginScreen.vue**:
  - 랜덤 고양이 이미지 (cat1.png ~ cat30.png)
  - 입력 필드 배경 이미지 (`logininputBG.png`)
  - 브라우저 자동완성 배경 제거
  - 비밀번호 토글 버튼 제거
  - 레이블 색상 조정 (rgba(255,255,255,0.6))
  
- **SignupScreen.vue**:
  - 입력 필드 배경 이미지 (`signupBg.png`)
  - 레이블 절대 위치 지정
  - 브라우저 자동완성 배경 제거
  
- **ForgotPasswordPage.vue**:
  - 입력 필드 배경 이미지 (`signupBg.png`)
  - 레이아웃 조정

#### 3. 라우팅 변경
- 로딩 화면 후 `/main`으로 직접 이동 (클리커 게임 화면)
- 게스트 사용자도 로그인/회원가입 페이지 접근 가능하도록 라우터 가드 수정

#### 4. UI 개선
- Header에서 알림 버튼 숨김 처리
- SettingsPage에서 지갑 연결 해제 시 `/main`으로 이동
- UserProfilePage에서 게스트 모드일 때 "로그인" 버튼 표시

#### 5. 텍스트 변경
- "Login" → "Log in" (영문)
- "로그인" → "로그인" (한글, 변경 없음)

---

## 주요 파일 분석

### 1. main.js
**역할**: 앱 진입점, 라우터 설정, 라우터 가드

**주요 기능**:
- Vue 앱 초기화
- 라우터 생성 및 설정
- 인증 상태 확인 및 라우팅 제어
- Firebase 사용자 변환

**중요 로직**:
- 게스트 사용자 감지 및 처리
- Firebase 인증 상태와 localStorage 동기화
- 공개/보호된 페이지 구분

### 2. App.vue
**역할**: 루트 컴포넌트, 전역 설정

**주요 기능**:
- Google 로그인 리다이렉트 처리
- Firebase Auth 상태 확인 및 자동 로그인
- BGM 재생 제어
- 지갑 이벤트 리스너 설정

### 3. store/appStore.js
**역할**: 전역 상태 관리

**주요 기능**:
- 사용자 데이터 관리
- 게임 데이터 동기화
- 지갑 연결 관리
- 데이터 업데이트 및 저장

**특징**:
- Pinia 스타일의 반응형 상태 관리
- Firebase와 localStorage 이중 저장
- 이벤트 기반 컴포넌트 간 통신

### 4. firebase/config.js
**역할**: Firebase 설정 및 유틸리티 함수

**주요 기능**:
- Firebase 초기화
- 인증 함수 (이메일/비밀번호, Google)
- Firestore 데이터 저장/조회
- 사용자 데이터 관리

**환경 변수**:
- `.env` 파일 또는 기본값 사용
- 개발/프로덕션 환경 구분

### 5. utils/userUtils.js
**역할**: 사용자 데이터 관리 유틸리티

**주요 기능**:
- 사용자 CRUD 작업
- 게임 데이터 업데이트
- 다국어 지원 (한국어/영어)
- localStorage/sessionStorage 관리

### 6. pages/MainScreen.vue
**역할**: 메인 클리커 게임 화면

**주요 기능**:
- 4가지 게임 모드 (채굴, 사냥, 탐험, 생산)
- 클릭 기반 진행 시스템
- 보상 계산 및 지급
- 레벨업 시스템
- 애니메이션 효과 (말풍선, 이모지, 포인트 획득)

**게임 메커니즘**:
- 각 모드마다 10회 클릭 필요
- 클릭 완료 시 보상 지급
- 레벨에 따른 보상 증가
- 고양이 NFT의 스탯에 따른 보상 보정

### 7. pages/LoginScreen.vue
**역할**: 로그인 페이지

**주요 기능**:
- 이메일/비밀번호 로그인
- Google 소셜 로그인
- 게스트 사용자 감지 및 처리
- 랜덤 고양이 이미지 표시

**UI 특징**:
- 반응형 디자인
- 커스텀 입력 필드 스타일
- 브라우저 자동완성 배경 제거
- 다국어 지원

### 8. pages/LoadingScreen.vue
**역할**: 로딩 화면

**주요 기능**:
- 앱 시작 시 로딩 애니메이션
- 3초 후 자동으로 `/main`으로 이동
- 스플래시 로고 표시

---

## 개선 사항 및 권장사항

### 1. 코드 품질
- **에러 처리 강화**: try-catch 블록 추가 및 사용자 친화적 에러 메시지
- **타입 안정성**: TypeScript 도입 고려
- **코드 분할**: 큰 컴포넌트를 작은 컴포넌트로 분리
- **중복 코드 제거**: 공통 로직을 유틸리티 함수로 추출

### 2. 성능 최적화
- **이미지 최적화**: WebP 포맷 사용, lazy loading
- **코드 스플리팅**: 동적 import를 통한 번들 크기 감소
- **메모이제이션**: computed 속성 활용
- **가상 스크롤**: 긴 리스트에 가상 스크롤 적용

### 3. 사용자 경험
- **로딩 상태 표시**: 비동기 작업 시 로딩 인디케이터
- **오프라인 지원**: Service Worker를 통한 오프라인 기능
- **푸시 알림**: Firebase Cloud Messaging 통합
- **접근성**: ARIA 레이블 및 키보드 네비게이션

### 4. 보안
- **환경 변수 관리**: 민감한 정보는 환경 변수로 관리
- **입력 검증**: 클라이언트 및 서버 측 검증
- **XSS 방지**: 사용자 입력 이스케이프 처리
- **CSRF 보호**: 토큰 기반 인증 강화

### 5. 테스트
- **단위 테스트**: Jest 또는 Vitest 도입
- **통합 테스트**: Vue Test Utils 사용
- **E2E 테스트**: Playwright 또는 Cypress 도입

### 6. 문서화
- **API 문서**: 주요 함수 및 컴포넌트 문서화
- **주석 개선**: 복잡한 로직에 대한 설명 추가
- **README 업데이트**: 설치 및 실행 방법 명시

### 7. 기능 개선
- **실시간 동기화**: Firestore 실시간 리스너 활용
- **알림 시스템**: 게임 이벤트 알림
- **소셜 기능**: 친구 시스템, 리더보드
- **아이템 시스템**: 장비 및 소모품 추가

---

## 결론

TDL 프로젝트는 Vue.js 3와 Firebase를 활용한 잘 구조화된 NFT 클리커 게임입니다. 최근 게스트 모드 추가 및 UI 개선으로 사용자 경험이 향상되었으며, 다양한 게임 모드와 NFT 시스템으로 확장 가능한 구조를 가지고 있습니다.

**강점**:
- 명확한 프로젝트 구조
- 다양한 인증 방식 지원
- 반응형 UI 디자인
- 확장 가능한 게임 시스템

**개선 필요**:
- 코드 품질 및 테스트
- 성능 최적화
- 보안 강화
- 문서화 개선

---

**분석 완료일**: 2025-01-18  
**분석자**: AI Assistant  
**버전**: 1.0

