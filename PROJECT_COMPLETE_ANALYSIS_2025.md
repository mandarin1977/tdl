# TDL 프로젝트 전체 분석 보고서 (2025)

## 📋 프로젝트 개요

**프로젝트명**: TDL (NFT 클리커 게임)  
**프레임워크**: Vue 3 (Composition API) + Vite  
**언어**: JavaScript (ES6+)  
**배포**: GitHub Pages (`https://mandarin1977.github.io/tdl`)  
**상태 관리**: 커스텀 스토어 (Pinia 미사용)  
**데이터 저장**: localStorage + Firebase Firestore (이중 저장)

---

## 🏗️ 프로젝트 구조

### 전체 디렉토리 구조
```
tdl/
├── src/
│   ├── components/          # 재사용 컴포넌트 (2개)
│   │   ├── Header.vue      # 상단 헤더 (리소스, 설정, 알림)
│   │   └── Footer.vue       # 하단 네비게이션 (5개 탭)
│   │
│   ├── pages/              # 페이지 컴포넌트 (19개)
│   │   ├── LoadingScreen.vue
│   │   ├── LoginScreen.vue
│   │   ├── SignupScreen.vue
│   │   ├── HomePage.vue           # 홈 (캐릭터, 대화하기, 추르주기)
│   │   ├── MainScreen.vue          # 메인 게임 화면 (클리커)
│   │   ├── MiningPage.vue          # 채굴 모드 (레거시)
│   │   ├── HuntingPage.vue         # 사냥 모드 (레거시)
│   │   ├── ExplorationPage.vue     # 탐험 모드 (레거시)
│   │   ├── ProductionPage.vue       # 생산 모드 (레거시)
│   │   ├── ExchangePage.vue         # 교환 페이지
│   │   ├── QuestPage.vue            # 퀘스트 페이지
│   │   ├── InventoryPage.vue        # 인벤토리 페이지
│   │   ├── FactoryPage.vue          # 공장 페이지
│   │   ├── NFTPage.vue              # NFT 페이지
│   │   ├── ShopPage.vue             # 상점 페이지
│   │   ├── SettingsPage.vue         # 설정 페이지
│   │   ├── UserProfilePage.vue       # 사용자 프로필
│   │   ├── AttendancePage.vue       # 출석 페이지
│   │   └── NotificationPage.vue     # 알림 페이지
│   │
│   ├── store/              # 상태 관리
│   │   └── appStore.js     # 전역 상태 관리 (커스텀 스토어)
│   │
│   ├── utils/              # 유틸리티 함수 (12개)
│   │   ├── userUtils.js           # 사용자 데이터 관리 (CRUD)
│   │   ├── wallet.js               # MetaMask 지갑 연결
│   │   ├── firebaseAuth.js         # Firebase 인증
│   │   ├── energyUtils.js          # 에너지 관리 (일일 리셋)
│   │   ├── formatUtils.js          # 숫자 포맷팅 (K, M, B)
│   │   ├── nftLevelUtils.js         # NFT 레벨업 시스템
│   │   ├── rarityUtils.js          # NFT 희귀도 관리
│   │   ├── questUtils.js           # 퀘스트 관리
│   │   ├── marketplaceUtils.js     # 마켓플레이스
│   │   ├── referralUtils.js        # 추천인 시스템
│   │   ├── passwordUtils.js        # 비밀번호 유틸리티
│   │   └── kakaoUtils.js           # 카카오 로그인 (미사용)
│   │
│   ├── firebase/           # Firebase 설정
│   │   └── config.js       # Firebase 초기화 및 설정
│   │
│   ├── styles/             # 스타일시트 (3개)
│   │   ├── common.css     # 공통 스타일
│   │   ├── layout.css     # 레이아웃 스타일
│   │   └── main.css       # 메인 스타일 (1076줄)
│   │
│   ├── assets/             # 정적 리소스
│   │   ├── img/           # 이미지 파일 (133개 PNG)
│   │   └── audio/         # 오디오 파일 (BGM, 효과음)
│   │
│   ├── App.vue            # 루트 컴포넌트 (BGM 관리)
│   └── main.js            # 진입점 (라우터 설정)
│
├── dist/                   # 빌드 결과물
├── public/                 # 정적 파일
├── node_modules/          # 의존성 패키지
├── package.json           # 프로젝트 설정
├── vite.config.js         # Vite 설정
└── README.md              # 프로젝트 문서
```

---

## 🔧 기술 스택

### 핵심 의존성
```json
{
  "vue": "^3.5.22",              // Vue 3 프레임워크 (Composition API)
  "vue-router": "^4.6.0",        // 라우팅 (Hash 모드)
  "firebase": "^12.5.0",         // Firebase (인증, Firestore)
  "ethers": "^6.15.0"            // 이더리움 지갑 연결 (MetaMask)
}
```

### 개발 도구
```json
{
  "vite": "^7.1.7",                      // 빌드 도구
  "@vitejs/plugin-vue": "^6.0.1",       // Vue 플러그인
  "gh-pages": "^6.3.0"                  // GitHub Pages 배포
}
```

### Node.js 버전 요구사항
- `^20.19.0 || >=22.12.0`

---

## 🎮 주요 기능

### 1. 인증 시스템
- **이메일 로그인**: Firebase Authentication
- **지갑 로그인**: MetaMask (Web3)
- **세션 관리**: sessionStorage 기반
- **자동 로그인**: 세션 유지

### 2. 게임 모드 (4가지)
- **Mining (채굴)**: 클릭으로 포인트 획득
- **Hunting (사냥)**: 클릭으로 포인트 획득
- **Exploration (탐험)**: 클릭으로 포인트 획득
- **Production (생산)**: 클릭으로 포인트 획득

각 모드는 독립적인 레벨 시스템을 가지며, 레벨에 따라 포인트 배수가 증가 (2의 제곱).

### 3. NFT 시스템
- **30종류의 고양이 NFT**: 각각 고유한 이미지와 속성
- **희귀도 시스템**: Common, Rare, Epic, Legendary
- **레벨업 시스템**: 경험치 획득 → 레벨업 → 스탯 증가
- **슬롯 시스템**: 각 모드당 4개 슬롯 (총 16개)
- **속성 시스템**:
  - `miningEfficiency`: 채굴 효율
  - `huntingDamage`: 사냥 데미지
  - `explorationReward`: 탐험 보상
  - `productionSpeed`: 생산 속도

### 4. 리소스 시스템
- **포인트 (P)**: 기본 게임 화폐
- **코인 (C)**: 고급 화폐
- **고양이 파편**: NFT 합성 재료
- **에너지**: 일일 4000개 제한 (자동 리셋)

### 5. 클리커 게임플레이
- **클릭 횟수**: 모드별 독립적 카운터
- **보상 시스템**: 클릭 시 포인트 + 고양이 파편 획득
- **레벨업**: 총 클릭 수에 따라 레벨 증가
- **NFT 보너스**: 슬롯에 배치된 NFT의 속성 합산

### 6. 홈 페이지 기능
- **캐릭터 표시**: 5마리 고양이 순환 표시
- **대화하기**: 랜덤 말풍선 표시
- **추르주기**: 코인 소모 (100코인) → 음식 이모지 애니메이션 + 친밀도 표시

### 7. 네비게이션
- **하단 탭 (5개)**:
  1. Game (메인 게임 화면)
  2. Exchange (교환)
  3. Home (홈)
  4. Inventory (인벤토리)
  5. Factory (공장)

---

## 💾 데이터 관리

### 저장소 구조

#### 1. localStorage
```javascript
{
  "users": [...],                    // 모든 사용자 데이터 배열
  "currentEnergy": "4000",          // 현재 에너지
  "energyLastDate": "Mon Dec 02 2024", // 마지막 에너지 리셋 날짜
  "soundEnabled": "true",            // 소리 설정
  "appLanguage": "English"           // 언어 설정
}
```

#### 2. sessionStorage
```javascript
{
  "currentUser": {                   // 현재 로그인한 사용자
    "id": "...",
    "loginType": "email" | "wallet",
    "walletAddress": "...",
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
      "miningCats": [null, null, null, null],
      "huntingCats": [null, null, null, null],
      "explorationCats": [null, null, null, null],
      "productionCats": [null, null, null, null],
      "inventory": []
    }
  }
}
```

#### 3. Firebase Firestore
```javascript
// Collection: users
{
  "uid": {
    "email": "...",
    "displayName": "...",
    "photoURL": "...",
    "createdAt": "...",
    "gameData": { /* 동일한 구조 */ }
  }
}
```

### 데이터 동기화
- **이중 저장**: localStorage + Firebase Firestore
- **우선순위**: localStorage → Firebase (오프라인 지원)
- **동기화**: `updateUserGameData()` 함수로 양쪽 모두 업데이트

---

## 🔄 상태 관리 (appStore.js)

### 상태 구조
```javascript
{
  // 인증 상태
  isLoggedIn: false,
  loginType: null,              // 'email' | 'wallet' | null
  walletAddress: '',
  userBalance: '0 ETH',
  isWalletConnected: false,
  
  // 현재 사용자
  currentUser: null,
  
  // 게임 데이터
  coins: 0,                     // 포인트 (P)
  totalCoin: 0,                 // 코인 (C)
  catFragments: 50,             // 고양이 파편
  level: 1,                     // 사용자 레벨
  nftCount: 0,                  // NFT 개수
  
  // 모드별 레벨
  miningLevel: 1,
  huntingLevel: 1,
  explorationLevel: 1,
  productionLevel: 1,
  
  // 고양이 슬롯 (각 모드당 4개)
  miningCats: [null, null, null, null],
  huntingCats: [null, null, null, null],
  explorationCats: [null, null, null, null],
  productionCats: [null, null, null, null],
  
  // 인벤토리
  inventory: []
}
```

### 주요 액션
- `loadCurrentUser()`: 현재 사용자 로드
- `syncGameData()`: 게임 데이터 동기화
- `updateGameData()`: 게임 데이터 업데이트
- `connectWalletToApp()`: 지갑 연결
- `disconnectWalletFromApp()`: 지갑 연결 해제
- `checkWalletStatus()`: 지갑 상태 확인
- `setupWalletListeners()`: 지갑 이벤트 리스너 설정

---

## 🛣️ 라우팅 구조

### 라우트 정의
```javascript
{
  '/': '/loading',                    // 리다이렉트
  '/loading': LoadingScreen,         // 공개
  '/login': LoginScreen,              // 공개
  '/signup': SignupScreen,            // 공개
  '/main': MainScreen,                // 보호됨
  '/home': HomePage,                  // 보호됨
  '/mining': MiningPage,              // 보호됨 (레거시)
  '/hunting': HuntingPage,            // 보호됨 (레거시)
  '/exploration': ExplorationPage,    // 보호됨 (레거시)
  '/production': ProductionPage,      // 보호됨 (레거시)
  '/exchange': ExchangePage,          // 보호됨
  '/quest': QuestPage,                // 보호됨
  '/inventory': InventoryPage,        // 보호됨
  '/factory': FactoryPage,            // 보호됨
  '/nft': NFTPage,                    // 보호됨
  '/shop': ShopPage,                  // 보호됨
  '/settings': SettingsPage,          // 보호됨
  '/profile': UserProfilePage,        // 보호됨
  '/attendance': AttendancePage,      // 보호됨
  '/notification': NotificationPage   // 보호됨
}
```

### 라우터 가드
- **인증 확인**: `sessionStorage`의 `currentUser` 확인
- **공개 라우트**: `/loading`, `/login`, `/signup`
- **보호된 라우트**: 나머지 모든 라우트
- **자동 리다이렉트**: 
  - 미인증 → `/login`
  - 인증 + 로그인/회원가입 페이지 → `/home`

---

## 🎨 UI/UX 특징

### 메인 화면 (MainScreen.vue)
- **상단**: 모드 탭 (Mining, Hunting, Exploration, Production)
- **중앙**: 클리커 버튼 (모드별 이미지 변경)
- **왼쪽**: 에너지 바 (세로형)
- **하단**: 고양이 슬롯 (4개, 모드별)

### 홈 화면 (HomePage.vue)
- **중앙**: 캐릭터 이미지 (5마리 순환)
- **하단**: 대화하기 / 추르주기 버튼
- **말풍선**: 랜덤 위치, 랜덤 텍스트

### 하단 네비게이션 (Footer.vue)
- **5개 탭**: 아이콘만 표시 (텍스트 없음)
- **활성 상태**: 현재 경로에 따라 자동 하이라이트

### 상단 헤더 (Header.vue)
- **리소스 표시**: 포인트, 코인, 고양이 파편
- **버튼**: 설정, 알림, 상점, NFT

---

## 🔐 보안 및 인증

### 인증 방식
1. **이메일 로그인**: Firebase Authentication
2. **지갑 로그인**: MetaMask (Web3)

### 세션 관리
- **sessionStorage**: 현재 사용자 정보 저장
- **자동 로그아웃**: 브라우저 종료 시
- **자동 로그인**: 세션 유지 시

### 데이터 보안
- **비밀번호**: Firebase에서 관리 (해싱)
- **지갑 주소**: 평문 저장 (공개 정보)
- **게임 데이터**: localStorage + Firebase (이중 저장)

---

## 🚀 배포 설정

### 빌드 설정 (vite.config.js)
```javascript
{
  base: process.env.NODE_ENV === 'production' 
    ? '/tdl/' 
    : './',
  resolve: {
    alias: {
      '@': './src'
    }
  }
}
```

### 배포 스크립트
```json
{
  "deploy": "npm run build && gh-pages -d dist"
}
```

### 배포 URL
- **프로덕션**: `https://mandarin1977.github.io/tdl`
- **개발**: `npm run dev` (로컬 서버)

---

## 📊 코드 통계

### 파일 수
- **페이지 컴포넌트**: 19개
- **유틸리티 함수**: 12개
- **이미지 파일**: 133개 PNG
- **스타일시트**: 3개 (총 1000+ 줄)

### 주요 파일 크기
- `MainScreen.vue`: 2922줄 (가장 큰 컴포넌트)
- `main.css`: 1076줄 (가장 큰 스타일시트)
- `appStore.js`: 369줄 (상태 관리)

---

## 🔍 주요 로직

### 1. 클리커 게임플레이
```javascript
// 클릭 시 실행되는 로직
1. 클릭 횟수 증가
2. NFT 속성 합산 (보너스 계산)
3. 포인트 획득 (레벨 배수 × NFT 보너스)
4. 고양이 파편 획득
5. NFT 경험치 부여
6. 레벨업 체크
7. 애니메이션 표시 (포인트, 이모지)
```

### 2. 에너지 시스템
```javascript
// 일일 에너지 리셋
1. localStorage에서 마지막 리셋 날짜 확인
2. 오늘 날짜와 비교
3. 날짜가 다르면 → 에너지 4000으로 리셋
4. 날짜가 같으면 → 저장된 에너지 로드
```

### 3. NFT 레벨업
```javascript
// 레벨업 필요 경험치
maxExp = (level + 1) * 100

// 레벨업 비용
cost = level * 50 코인

// 스탯 증가량
increase = 5% × 레어리티 배수
```

### 4. 지갑 연결
```javascript
// MetaMask 연결 프로세스
1. MetaMask 설치 확인
2. 계정 요청 (eth_requestAccounts)
3. 지갑 주소 가져오기
4. 잔액 조회
5. 사용자 데이터 로드/생성
6. 이벤트 리스너 설정 (계정 변경, 네트워크 변경)
```

---

## 🐛 알려진 이슈 및 제한사항

### 1. 데이터 동기화
- **문제**: localStorage와 Firebase 간 동기화가 완벽하지 않음
- **영향**: 오프라인에서 변경한 데이터가 온라인에서 덮어씌워질 수 있음

### 2. 성능
- **문제**: `MainScreen.vue`가 매우 큼 (2922줄)
- **영향**: 초기 로딩 시간 증가, 유지보수 어려움

### 3. 상태 관리
- **문제**: Pinia 미사용, 커스텀 스토어 사용
- **영향**: Vue DevTools 지원 제한, 타입 안정성 부족

### 4. 이미지 최적화
- **문제**: 모든 이미지가 PNG 형식, 최적화되지 않음
- **영향**: 번들 크기 증가 (2.2MB+)

### 5. 레거시 페이지
- **문제**: MiningPage, HuntingPage, ExplorationPage, ProductionPage가 사용되지 않음
- **영향**: 불필요한 코드 증가

---

## 💡 개선 권장사항

### 1. 코드 리팩토링
- [ ] `MainScreen.vue`를 작은 컴포넌트로 분리
- [ ] 공통 로직을 컴포저블(composable)로 추출
- [ ] 레거시 페이지 제거 또는 통합

### 2. 상태 관리 개선
- [ ] Pinia 도입 고려
- [ ] 타입스크립트 도입 고려
- [ ] 상태 동기화 로직 개선

### 3. 성능 최적화
- [ ] 이미지 최적화 (WebP 변환, 압축)
- [ ] 코드 스플리팅 (동적 import)
- [ ] 번들 크기 최적화

### 4. 데이터 관리 개선
- [ ] Firebase와 localStorage 동기화 로직 개선
- [ ] 오프라인 지원 강화
- [ ] 데이터 백업/복원 기능 추가

### 5. 테스트
- [ ] 단위 테스트 추가
- [ ] 통합 테스트 추가
- [ ] E2E 테스트 추가

### 6. 문서화
- [ ] API 문서 작성
- [ ] 컴포넌트 문서 작성
- [ ] 개발 가이드 작성

---

## 📝 최근 변경사항 (2025-12-03)

### UI 개선
1. ✅ 하단 네비게이션 아이콘 변경 (`tabIcon1.png` ~ `tabIcon5.png`)
2. ✅ 메인 화면 레이아웃 재구성 (모드 탭 상단, 클리커 중앙, 슬롯 하단)
3. ✅ 에너지 바 세로형으로 변경 (`progressBar.png`, `progressBar2.png`)
4. ✅ 고양이 슬롯 배경 변경 (`characterSlot.png`)
5. ✅ 클리커 버튼 이미지 변경 (`furball_0001.png` ~ `furball_0004.png`)
6. ✅ 홈 페이지 대화하기/추르주기 기능 추가

### 기능 개선
1. ✅ 고양이 슬롯 6개 → 4개로 변경
2. ✅ 모드별 레벨 표시 형식 변경 (`Lv.01` → `Lv.1`)
3. ✅ 클리커 오버레이 텍스트 변경 (`X/10` → `X`)
4. ✅ 포인트 획득 애니메이션 추가

---

## 🎯 프로젝트 목표

### 단기 목표
- [ ] 레거시 페이지 제거
- [ ] 코드 리팩토링
- [ ] 성능 최적화

### 중기 목표
- [ ] NFT 마켓플레이스 구현
- [ ] 퀘스트 시스템 완성
- [ ] 소셜 기능 추가

### 장기 목표
- [ ] 모바일 앱 개발
- [ ] 멀티플레이어 기능
- [ ] 블록체인 통합 강화

---

## 📚 참고 문서

- [Vue 3 공식 문서](https://vuejs.org/)
- [Vite 공식 문서](https://vite.dev/)
- [Firebase 공식 문서](https://firebase.google.com/docs)
- [Ethers.js 공식 문서](https://docs.ethers.org/)

---

**작성일**: 2025-12-03  
**버전**: 1.0.0  
**작성자**: AI Assistant

