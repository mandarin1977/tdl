# 프로젝트 전체 분석 보고서
**생성일**: 2025-01-17  
**프로젝트명**: TDL (NFT 게임 플랫폼)

---

## 📋 목차
1. [프로젝트 개요](#프로젝트-개요)
2. [기술 스택](#기술-스택)
3. [프로젝트 구조](#프로젝트-구조)
4. [주요 기능](#주요-기능)
5. [데이터 구조](#데이터-구조)
6. [인증 시스템](#인증-시스템)
7. [게임 시스템](#게임-시스템)
8. [파일별 상세 분석](#파일별-상세-분석)
9. [개선 사항 및 권장사항](#개선-사항-및-권장사항)

---

## 프로젝트 개요

### 프로젝트 성격
- **타입**: NFT 기반 클리커 게임 (Cat-themed NFT Game)
- **플랫폼**: 웹 애플리케이션 (Vue.js 3)
- **배포**: GitHub Pages (`/tdl/` 경로)
- **타겟**: 모바일 우선 반응형 웹앱

### 핵심 컨셉
고양이 NFT를 수집하고, 다양한 게임 모드(채굴, 사냥, 탐험, 생산)를 통해 포인트와 코인을 획득하는 게임 플랫폼

---

## 기술 스택

### 프론트엔드
- **프레임워크**: Vue 3.5.22 (Composition API)
- **빌드 도구**: Vite 7.1.7
- **라우팅**: Vue Router 4.6.0 (Hash History)
- **상태 관리**: Vue 3 Composition API (Reactive Store)

### 백엔드/인프라
- **인증**: Firebase Authentication
  - Google 로그인 (리다이렉트 방식)
  - 이메일/비밀번호 인증
- **데이터베이스**: Firebase Firestore
- **분석**: Firebase Analytics
- **로컬 스토리지**: localStorage, sessionStorage

### Web3 통합
- **지갑**: MetaMask (Ethers.js 6.15.0)
- **블록체인**: Ethereum 호환 네트워크

### 개발 도구
- **Vue DevTools**: vite-plugin-vue-devtools
- **배포**: gh-pages

---

## 프로젝트 구조

```
tdl/
├── src/
│   ├── main.js                 # 앱 진입점, 라우터 설정
│   ├── App.vue                  # 루트 컴포넌트
│   ├── components/              # 공통 컴포넌트
│   │   ├── Header.vue          # 상단 헤더 (리소스 표시)
│   │   └── Footer.vue          # 하단 네비게이션 바
│   ├── pages/                   # 페이지 컴포넌트 (22개)
│   │   ├── LoadingScreen.vue   # 로딩 화면
│   │   ├── LoginScreen.vue     # 로그인
│   │   ├── SignupScreen.vue    # 회원가입
│   │   ├── MainScreen.vue       # 메인 게임 화면
│   │   ├── HomePage.vue         # 홈 (고양이 펫 화면)
│   │   ├── MiningPage.vue       # 채굴 모드
│   │   ├── HuntingPage.vue     # 사냥 모드
│   │   ├── ExplorationPage.vue  # 탐험 모드
│   │   ├── ProductionPage.vue   # 생산 모드
│   │   ├── ExchangePage.vue     # 교환소
│   │   ├── QuestPage.vue        # 퀘스트
│   │   ├── InventoryPage.vue    # 인벤토리
│   │   ├── FactoryPage.vue      # 제작소
│   │   ├── ShopPage.vue         # 상점
│   │   ├── NFTPage.vue          # NFT 마켓플레이스
│   │   ├── SettingsPage.vue     # 설정
│   │   ├── UserProfilePage.vue   # 프로필
│   │   ├── AttendancePage.vue    # 출석체크
│   │   ├── NotificationPage.vue  # 알림
│   │   ├── ForgotPasswordPage.vue
│   │   └── ResetPasswordPage.vue
│   ├── store/
│   │   └── appStore.js          # 전역 상태 관리
│   ├── utils/                   # 유틸리티 함수 (14개)
│   │   ├── userUtils.js         # 사용자 데이터 관리
│   │   ├── firebaseAuth.js      # Firebase 인증
│   │   ├── wallet.js            # Web3 지갑 연결
│   │   ├── formatUtils.js       # 숫자 포맷팅
│   │   ├── energyUtils.js       # 에너지 관리
│   │   ├── nftLevelUtils.js     # NFT 레벨/경험치
│   │   ├── rarityUtils.js       # 레어리티 계산
│   │   ├── questUtils.js        # 퀘스트 관리
│   │   ├── marketplaceUtils.js  # 마켓플레이스
│   │   ├── referralUtils.js     # 추천인 시스템
│   │   ├── passwordUtils.js     # 비밀번호 유틸
│   │   ├── resetTokenUtils.js   # 비밀번호 리셋
│   │   ├── kakaoUtils.js        # 카카오톡 공유
│   │   └── createTestAccount.js # 테스트 계정 생성
│   ├── firebase/
│   │   └── config.js            # Firebase 설정
│   ├── assets/
│   │   ├── img/                 # 이미지 리소스 (161개 PNG)
│   │   └── audio/               # 오디오 파일
│   └── styles/
│       ├── common.css           # 공통 스타일
│       ├── layout.css           # 레이아웃 스타일
│       └── main.css             # 메인 스타일
├── package.json
├── vite.config.js
├── index.html
└── README.md
```

---

## 주요 기능

### 1. 인증 시스템
- **이메일/비밀번호**: Firebase Authentication
- **Google 로그인**: 리다이렉트 방식
- **지갑 로그인**: MetaMask 연동 (Ethers.js)
- **비밀번호 재설정**: 이메일 기반 토큰 방식

### 2. 게임 모드 (4가지)
1. **채굴 (Mining)**
   - 클릭 기반 채굴
   - 포인트 및 고양이 파편 획득
   - NFT 고양이로 효율 증가
   - 레벨 시스템 (2의 제곱 배수)

2. **사냥 (Hunting)**
   - 몬스터 전투 시스템
   - 경험치 및 골드 획득
   - NFT 고양이로 데미지 증가

3. **탐험 (Exploration)**
   - 지역 탐험 시스템
   - 보물 및 보상 획득
   - NFT 고양이로 보상 증가

4. **생산 (Production)**
   - 아이템 제작 시스템
   - 재료 소모 및 아이템 생성
   - NFT 고양이로 속도 증가

### 3. NFT 시스템
- **고양이 NFT**: 이미지 ID 기반 (cat1.png ~ cat30.png 등)
- **레어리티**: Common, Rare, Epic, Legendary
- **레벨 시스템**: 경험치 기반 레벨업
- **스탯**: 채굴 효율, 사냥 데미지, 탐험 보상, 생산 속도
- **슬롯 시스템**: 각 모드당 4개 슬롯

### 4. 경제 시스템
- **포인트 (P)**: 기본 게임 화폐
- **코인 (C)**: 고급 화폐 (교환소 거래)
- **고양이 파편**: NFT 제작 재료
- **에너지**: 게임 활동 제한 (일일 리셋)

### 5. 마켓플레이스
- NFT 구매/판매
- 가격 필터링 및 정렬
- 내 NFT 관리

### 6. 추가 기능
- **출석체크**: 일일 보상
- **퀘스트**: 일일/주간/월간 퀘스트
- **제작소**: 고양이 파편으로 NFT 생성
- **교환소**: 포인트 ↔ 코인 교환
- **상점**: 에너지 구매
- **추천인 시스템**: 친구 초대 보상

---

## 데이터 구조

### 사용자 데이터 (Firestore: `users/{userId}`)
```javascript
{
  email: string,
  displayName: string,
  photoURL: string,
  createdAt: string,
  gameData: {
    level: number,              // 사용자 레벨
    coins: number,              // 포인트 (P)
    totalCoin: number,          // 코인 (C)
    catFragments: number,       // 고양이 파편
    nftCount: number,          // NFT 개수
    miningLevel: number,        // 채굴 레벨
    huntingLevel: number,       // 사냥 레벨
    explorationLevel: number,   // 탐험 레벨
    productionLevel: number,    // 생산 레벨
    miningCats: [NFT|null]×4,  // 채굴 슬롯
    huntingCats: [NFT|null]×4, // 사냥 슬롯
    explorationCats: [NFT|null]×4, // 탐험 슬롯
    productionCats: [NFT|null]×4, // 생산 슬롯
    inventory: NFT[]           // 인벤토리
  }
}
```

### NFT 데이터 구조
```javascript
{
  id: string,                  // 고유 ID
  imageId: number,            // 이미지 ID (cat1.png = 1)
  name: string,               // 이름
  rarity: string,             // 'common' | 'rare' | 'epic' | 'legendary'
  level: number,              // 레벨
  exp: number,                // 현재 경험치
  maxExp: number,             // 최대 경험치
  stars: number,              // 별 등급 (1-5)
  miningEfficiency: number,   // 채굴 효율
  huntingDamage: number,       // 사냥 데미지
  explorationReward: number,  // 탐험 보상
  productionSpeed: number,     // 생산 속도
  createdAt: string,          // 생성일
  // 기타 스탯...
}
```

### 로컬 스토리지
- `users`: 전체 사용자 목록 (지갑 사용자용)
- `currentUser`: 현재 로그인 사용자 (sessionStorage)
- `currentEnergy`: 현재 에너지
- `appLanguage`: 언어 설정 ('English' | '한국어')

---

## 인증 시스템

### 1. Firebase 인증
- **Google 로그인**: `signInWithRedirect` 방식
- **이메일/비밀번호**: `createUserWithEmailAndPassword`, `signInWithEmailAndPassword`
- **리다이렉트 처리**: `handleGoogleRedirect` 함수로 처리

### 2. 지갑 인증
- **MetaMask**: Ethers.js를 통한 연결
- **계정 변경 감지**: `accountsChanged` 이벤트
- **네트워크 변경 감지**: `chainChanged` 이벤트

### 3. 라우터 가드
- **공개 라우트**: `/loading`, `/login`, `/signup`, `/forgot-password`, `/reset-password`
- **보호된 라우트**: 나머지 모든 라우트
- **자동 리다이렉트**: 미인증 시 `/login`으로 이동

---

## 게임 시스템

### 에너지 시스템
- **최대 에너지**: 4000
- **일일 리셋**: 매일 자정 리셋
- **소모**: 게임 활동 시 소모
- **구매**: 상점에서 포인트로 구매 가능

### 레벨 시스템
- **사용자 레벨**: 전체 게임 진행도
- **모드별 레벨**: 각 게임 모드별 독립 레벨
- **레벨업 보상**: 포인트 배수 증가 (2의 제곱)

### NFT 슬롯 시스템
- **슬롯 수**: 각 모드당 4개
- **효과**: 슬롯된 NFT의 스탯 합산
- **선택/제거**: 팝업을 통한 관리

---

## 파일별 상세 분석

### 핵심 파일

#### `src/main.js`
- **역할**: 앱 진입점, 라우터 설정
- **주요 기능**:
  - Vue 앱 초기화
  - 라우터 설정 (Hash History)
  - 라우터 가드 (인증 체크)
  - Firebase 사용자 변환

#### `src/store/appStore.js`
- **역할**: 전역 상태 관리
- **주요 상태**:
  - 인증 상태 (`isLoggedIn`, `loginType`)
  - 게임 데이터 (`coins`, `totalCoin`, `catFragments`, `level`)
  - NFT 슬롯 (`miningCats`, `huntingCats`, etc.)
  - 지갑 정보 (`walletAddress`, `userBalance`)
- **주요 액션**:
  - `loadCurrentUser()`: 사용자 데이터 로드
  - `updateGameData()`: 게임 데이터 업데이트
  - `connectWalletToApp()`: 지갑 연결
  - `syncGameData()`: 게임 데이터 동기화

#### `src/firebase/config.js`
- **역할**: Firebase 설정 및 인증 함수
- **주요 함수**:
  - `signInWithGoogle()`: Google 로그인
  - `handleRedirectResult()`: 리다이렉트 결과 처리
  - `saveUserToFirestore()`: 사용자 데이터 저장
  - `getUserGameData()`: 게임 데이터 조회
  - `updateUserGameDataInFirestore()`: 게임 데이터 업데이트

#### `src/utils/userUtils.js`
- **역할**: 사용자 데이터 관리 유틸리티
- **주요 함수**:
  - `getCurrentUser()`: 현재 사용자 조회
  - `createWalletUser()`: 지갑 사용자 생성
  - `updateUserGameData()`: 게임 데이터 업데이트
  - `getI18nTexts()`: 다국어 텍스트 (한국어/영어)

#### `src/utils/wallet.js`
- **역할**: Web3 지갑 연결 유틸리티
- **주요 함수**:
  - `connectWallet()`: MetaMask 연결
  - `getWalletAddress()`: 지갑 주소 조회
  - `getWalletBalance()`: 지갑 잔액 조회
  - `checkWalletConnection()`: 연결 상태 확인
  - `onAccountsChanged()`: 계정 변경 리스너

### 페이지 컴포넌트

#### `MainScreen.vue`
- **역할**: 메인 게임 화면
- **기능**:
  - 4가지 게임 모드 탭 전환
  - 클릭 기반 게임플레이
  - NFT 슬롯 관리
  - 포인트/파편 획득 애니메이션
  - 레벨업 시스템

#### `HomePage.vue`
- **역할**: 홈 화면 (고양이 펫)
- **기능**:
  - 고양이 이미지 표시 (5마리 순환)
  - 대화하기 기능
  - 선물 주기 기능 (코인 소모)
  - 친밀도 시스템

#### `NFTPage.vue`
- **역할**: NFT 마켓플레이스
- **기능**:
  - NFT 구매/판매
  - 필터링 및 정렬
  - 내 NFT 관리

---

## 개선 사항 및 권장사항

### 🔴 긴급 개선 사항

1. **Firebase 환경 변수 검증**
   - 현재: 환경 변수 누락 시 에러만 출력
   - 개선: 개발 모드에서 명확한 안내 메시지

2. **에러 처리 강화**
   - Firebase 오류 시 사용자 친화적 메시지
   - 네트워크 오류 처리

3. **보안**
   - `.env` 파일 Git 제외 확인
   - Firebase 보안 규칙 검토 필요

### 🟡 중요 개선 사항

1. **상태 관리 개선**
   - Pinia 도입 고려 (현재는 커스텀 스토어)
   - 상태 동기화 로직 정리

2. **성능 최적화**
   - 이미지 지연 로딩
   - 컴포넌트 코드 스플리팅
   - 불필요한 리렌더링 방지

3. **코드 품질**
   - TypeScript 도입 고려
   - ESLint/Prettier 설정
   - 컴포넌트 재사용성 향상

4. **테스트**
   - 단위 테스트 추가
   - 통합 테스트 추가

### 🟢 기능 개선 사항

1. **UI/UX**
   - 로딩 상태 개선
   - 에러 토스트 메시지
   - 성공 피드백 강화

2. **다국어 지원**
   - 현재 한국어/영어만 지원
   - 추가 언어 지원 고려

3. **반응형 디자인**
   - 다양한 화면 크기 테스트
   - 터치 제스처 최적화

4. **오프라인 지원**
   - Service Worker 추가
   - 오프라인 캐싱

---

## 기술 부채

1. **하드코딩된 값들**
   - 에너지 최대값 (4000)
   - 슬롯 개수 (4개)
   - 레벨업 배수 (2의 제곱)

2. **중복 코드**
   - 게임 모드별 유사한 로직 반복
   - NFT 슬롯 관리 로직 중복

3. **타입 안정성 부족**
   - JavaScript만 사용 (TypeScript 없음)
   - 런타임 에러 가능성

---

## 배포 정보

- **배포 경로**: `/tdl/` (GitHub Pages)
- **빌드 명령**: `npm run build`
- **배포 명령**: `npm run deploy` (gh-pages)

---

## 환경 변수

`.env` 파일 필요:
```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
VITE_KAKAO_APP_KEY=584452592bd145e42fd18a9448e24ab3
```

---

## 결론

이 프로젝트는 **Vue 3 기반의 NFT 게임 플랫폼**으로, 다음과 같은 특징을 가지고 있습니다:

✅ **강점**:
- 모던한 기술 스택 (Vue 3, Vite)
- Firebase 통합으로 빠른 개발
- Web3 지갑 지원
- 다양한 게임 모드
- 반응형 디자인

⚠️ **개선 필요**:
- 상태 관리 체계화
- 타입 안정성 (TypeScript)
- 테스트 코드 추가
- 성능 최적화
- 코드 중복 제거

전반적으로 **잘 구조화된 프로젝트**이며, 위 개선 사항들을 적용하면 더욱 견고한 애플리케이션이 될 것입니다.

