# TDL 프로젝트 전체 분석 요약

## 📋 프로젝트 개요

**프로젝트명**: TDL (Tuldung)  
**타입**: Vue 3 기반 NFT 클릭 게임 웹 애플리케이션  
**배포**: GitHub Pages (`https://mandarin1977.github.io/tdl`)  
**빌드 도구**: Vite 7.1.7  
**프레임워크**: Vue 3.5.22 + Vue Router 4.6.0  
**블록체인**: Ethereum (MetaMask 연동 via ethers.js 6.15.0)  
**백엔드**: Firebase (Firestore, Authentication) + localStorage (폴백)

---

## 🏗️ 프로젝트 구조

```
tdl/
├── src/
│   ├── pages/              # 18개 페이지 컴포넌트
│   │   ├── 인증: LoadingScreen, LoginScreen, SignupScreen
│   │   ├── 메인 게임: MainScreen, MiningPage, HuntingPage, ExplorationPage, ProductionPage
│   │   ├── 게임 시스템: ExchangePage, QuestPage, InventoryPage, FactoryPage, NFTPage, ShopPage
│   │   └── 사용자: UserProfilePage, SettingsPage, AttendancePage, NotificationPage
│   ├── components/         # 2개 공통 컴포넌트
│   │   ├── Header.vue      # 상단 헤더 (리소스 표시, 설정/알림 버튼)
│   │   └── Footer.vue      # 하단 네비게이션 바
│   ├── firebase/          # Firebase 설정
│   │   └── config.js       # Firebase 초기화 및 인증 함수
│   ├── store/             # 전역 상태 관리
│   │   └── appStore.js     # Pinia 스타일의 반응형 스토어
│   ├── utils/             # 10개 유틸리티 파일
│   │   ├── userUtils.js    # 사용자 데이터 관리 (localStorage 기반)
│   │   ├── wallet.js      # MetaMask 지갑 연결 유틸리티
│   │   ├── formatUtils.js  # 숫자 포맷팅 (K, M, B)
│   │   ├── energyUtils.js # 에너지 관리 (일일 리셋)
│   │   ├── nftLevelUtils.js # NFT 레벨 시스템
│   │   ├── rarityUtils.js  # NFT 레어리티 시스템
│   │   ├── questUtils.js   # 퀘스트 시스템
│   │   ├── marketplaceUtils.js # 마켓플레이스 유틸리티
│   │   ├── passwordUtils.js # 비밀번호 해시화
│   │   └── firebaseAuth.js # Firebase 인증 (미사용 가능성)
│   ├── styles/            # 3개 CSS 파일
│   │   ├── common.css      # 공통 스타일
│   │   ├── layout.css     # 레이아웃 스타일
│   │   └── main.css       # 메인 스타일
│   ├── assets/            # 리소스 파일
│   │   ├── img/           # 86개 PNG 이미지 파일
│   │   └── audio/         # 1개 MP3 파일 (BGM)
│   ├── App.vue            # 루트 컴포넌트 (BGM 관리, 지갑 리스너)
│   └── main.js            # 앱 진입점 (라우터 설정, 인증 가드)
├── dist/                  # 빌드 결과물 (GitHub Pages 배포용)
├── public/                # 정적 파일
├── package.json           # 프로젝트 설정 및 의존성
├── vite.config.js        # Vite 빌드 설정
└── *.md                   # 문서 파일들 (13개)
```

---

## 🔑 핵심 기능 분석

### 1. 인증 시스템

#### 로그인 방식
- **이메일/비밀번호**: localStorage 기반 (Firebase 미사용)
- **MetaMask 지갑**: Web3 지갑 연결 로그인
- **세션 관리**: sessionStorage 사용

#### 인증 플로우
1. `LoadingScreen`에서 Firebase 리다이렉트 결과 확인
2. `LoginScreen`에서 이메일/비밀번호 또는 지갑 연결
3. `main.js`의 라우터 가드로 보호된 페이지 접근 제어
4. `appStore.js`에서 전역 인증 상태 관리

### 2. 게임 시스템

#### 게임 모드 (4가지)
1. **채굴 (Mining)**: 클릭 기반 채굴 게임
2. **사냥 (Hunting)**: 클릭 기반 사냥 게임
3. **탐험 (Exploration)**: 클릭 기반 탐험 게임
4. **생산 (Production)**: 클릭 기반 생산 게임

#### 게임 리소스
- **포인트 (P)**: 기본 게임 통화
- **코인 (C)**: 고급 게임 통화
- **고양이 파편**: NFT 제작 재료
- **에너지**: 일일 4000개 제한, 자동 리셋

#### 레벨 시스템
- **전체 레벨**: 사용자 전체 레벨
- **모드별 레벨**: 각 게임 모드별 독립 레벨
- **레벨업 보상**: 포인트 배수 증가 (2의 제곱)

#### NFT 시스템
- **30종류의 고양이 NFT**: cat1.png ~ cat30.png
- **레어리티**: Common, Rare, Epic, Legendary
- **슬롯 시스템**: 각 모드당 6개 슬롯
- **레벨 시스템**: NFT별 경험치 및 레벨
- **인벤토리**: NFT 목록, 필터링, 정렬, 검색

### 3. 상태 관리 (appStore.js)

#### 상태 구조
```javascript
{
  // 인증 상태
  isLoggedIn: boolean
  loginType: 'email' | 'wallet' | null
  walletAddress: string
  userBalance: string
  
  // 게임 데이터
  coins: number           // 포인트 (P)
  totalCoin: number       // 코인 (C)
  catFragments: number    // 고양이 파편
  level: number           // 전체 레벨
  nftCount: number        // NFT 개수
  
  // 모드별 레벨
  miningLevel: number
  huntingLevel: number
  explorationLevel: number
  productionLevel: number
  
  // 고양이 슬롯 (각 모드당 6개)
  miningCats: Array
  huntingCats: Array
  explorationCats: Array
  productionCats: Array
  
  // 인벤토리
  inventory: Array
}
```

#### 주요 액션
- `loadCurrentUser()`: 사용자 데이터 로드
- `updateGameData()`: 게임 데이터 업데이트 (Firebase/localStorage)
- `connectWalletToApp()`: 지갑 연결
- `syncGameData()`: 게임 데이터 동기화

### 4. 데이터 저장소

#### 저장 방식
1. **Firebase Firestore**: 사용자 게임 데이터 (선택적)
2. **localStorage**: 
   - 사용자 데이터 (`users` 배열)
   - 에너지 (`currentEnergy`, `energyLastDate`)
   - 언어 설정 (`appLanguage`)
   - 소리 설정 (`soundEnabled`)
3. **sessionStorage**: 
   - 현재 로그인한 사용자 (`currentUser`)

#### 데이터 구조
```javascript
// 사용자 데이터 구조
{
  id: string,
  email?: string,
  walletAddress?: string,
  loginType: 'email' | 'wallet',
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
    miningCats: Array,
    huntingCats: Array,
    explorationCats: Array,
    productionCats: Array,
    inventory: Array
  }
}
```

### 5. 라우팅 시스템

#### 라우트 구조
- `/loading` - 로딩 화면 (공개)
- `/login` - 로그인 (공개)
- `/signup` - 회원가입 (공개)
- `/main` - 메인 게임 화면 (보호됨)
- `/mining` - 채굴 페이지 (보호됨)
- `/hunting` - 사냥 페이지 (보호됨)
- `/exploration` - 탐험 페이지 (보호됨)
- `/production` - 생산 페이지 (보호됨)
- `/exchange` - 교환소 (보호됨)
- `/quest` - 퀘스트 (보호됨)
- `/inventory` - 인벤토리 (보호됨)
- `/factory` - 제작소 (보호됨)
- `/settings` - 설정 (보호됨)
- `/profile` - 프로필 (보호됨)
- `/attendance` - 출석체크 (보호됨)
- `/nft` - NFT 페이지 (보호됨)
- `/notification` - 알림 (보호됨)
- `/shop` - 상점 (보호됨)

#### 라우터 가드
- 인증되지 않은 사용자는 보호된 페이지 접근 시 `/login`으로 리다이렉트
- 로그인된 사용자는 `/login`, `/signup` 접근 시 `/main`으로 리다이렉트

### 6. Web3 통합

#### MetaMask 연동
- **ethers.js 6.15.0** 사용
- 지갑 연결, 잔액 조회, 계정 변경 감지
- 네트워크 변경 감지
- 지갑 주소 포맷팅

#### 지갑 기능
- `connectWallet()`: 지갑 연결
- `getWalletAddress()`: 현재 연결된 지갑 주소
- `getWalletBalance()`: 지갑 잔액 조회
- `onAccountsChanged()`: 계정 변경 이벤트 리스너
- `onChainChanged()`: 네트워크 변경 이벤트 리스너

---

## 📦 의존성 분석

### 프로덕션 의존성
- **vue**: ^3.5.22 - Vue 프레임워크
- **vue-router**: ^4.6.0 - 라우팅
- **firebase**: ^12.5.0 - Firebase 백엔드
- **ethers**: ^6.15.0 - Ethereum 블록체인 연동

### 개발 의존성
- **vite**: ^7.1.7 - 빌드 도구
- **@vitejs/plugin-vue**: ^6.0.1 - Vue 플러그인
- **vite-plugin-vue-devtools**: ^8.0.2 - Vue DevTools
- **gh-pages**: ^6.3.0 - GitHub Pages 배포

---

## 🎨 UI/UX 특징

### 디자인 시스템
- 모바일 우선 반응형 디자인
- 고양이 테마의 게임 UI
- 리소스 표시: 에너지(빨강), 포인트(파랑), 코인(노랑), 고양이 파편(보라)
- 하단 네비게이션 바 (5개 탭)
- 상단 헤더 (리소스 바 + 설정/알림 버튼)

### 애니메이션
- 클릭 시 말풍선 효과
- 고양이 이모지 애니메이션
- 버튼 호버 효과
- 탭 전환 애니메이션

### 오디오
- BGM 재생 (bgm.mp3)
- 클릭 사운드 (clickbgm.mp3)
- 소리 설정 (localStorage 기반)

---

## 🔧 주요 유틸리티 함수

### userUtils.js
- `getCurrentUser()`: 현재 로그인한 사용자 가져오기
- `createWalletUser()`: 지갑 사용자 생성
- `updateUserGameData()`: 게임 데이터 업데이트
- `getI18nTexts()`: 다국어 텍스트

### wallet.js
- `connectWallet()`: MetaMask 연결
- `getWalletAddress()`: 지갑 주소 가져오기
- `getWalletBalance()`: 잔액 조회
- `checkWalletConnection()`: 연결 상태 확인

### formatUtils.js
- `formatNumber()`: 숫자 포맷팅 (K, M, B)

### energyUtils.js
- `checkAndResetEnergy()`: 에너지 일일 리셋

---

## 🚀 빌드 및 배포

### 개발 서버
```bash
npm run dev
```

### 프로덕션 빌드
```bash
npm run build
```

### 배포
```bash
npm run deploy
```
- GitHub Pages에 자동 배포
- `dist/` 폴더를 `gh-pages` 브랜치에 배포

### 환경 변수
`.env` 파일 필요:
```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
VITE_FIREBASE_MEASUREMENT_ID=...
```

---

## ⚠️ 주요 이슈 및 개선 사항

### 1. 데이터 저장소 이중화
- Firebase와 localStorage를 동시에 사용하지만 완전히 동기화되지 않음
- 일관성 문제 가능성

### 2. 인증 시스템
- 이메일/비밀번호는 localStorage만 사용 (Firebase 미사용)
- 지갑 로그인은 localStorage 기반
- Firebase 인증 코드는 있으나 실제로는 미사용 가능성

### 3. 상태 관리
- Pinia 대신 커스텀 스토어 사용
- 반응형은 유지하지만 표준 라이브러리 미사용

### 4. 에러 처리
- 일부 함수에서 에러 처리가 부족
- 사용자 피드백 부족

### 5. 성능
- `MainScreen.vue`가 2,579줄로 매우 큼
- 컴포넌트 분리 필요

### 6. 타입 안정성
- TypeScript 미사용
- 타입 체크 불가능

---

## 📊 코드 통계

- **총 페이지**: 18개
- **컴포넌트**: 2개 (Header, Footer)
- **유틸리티 파일**: 10개
- **스타일 파일**: 3개
- **이미지 파일**: 86개
- **오디오 파일**: 1개
- **가장 큰 파일**: MainScreen.vue (2,579줄)

---

## 🎯 프로젝트 특징 요약

### 장점
1. ✅ 완전한 게임 시스템 구현
2. ✅ Web3 지갑 연동
3. ✅ 반응형 디자인
4. ✅ 다국어 지원 (한국어/영어)
5. ✅ 다양한 게임 모드
6. ✅ NFT 시스템

### 개선 필요 사항
1. ⚠️ 코드 구조화 (대형 컴포넌트 분리)
2. ⚠️ 데이터 저장소 일관성
3. ⚠️ 에러 처리 강화
4. ⚠️ 타입 안정성 (TypeScript 도입)
5. ⚠️ 테스트 코드 부재
6. ⚠️ 문서화 개선

---

## 📝 결론

TDL은 Vue 3 기반의 완전한 NFT 클릭 게임 웹 애플리케이션입니다. Web3 지갑 연동, 다양한 게임 모드, NFT 시스템 등이 구현되어 있으나, 코드 구조화와 데이터 일관성 개선이 필요합니다. 전반적으로 기능적으로는 완성도가 높지만, 유지보수성과 확장성을 위해 리팩토링이 권장됩니다.

