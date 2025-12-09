# TDL 프로젝트 전체 분석 보고서

**생성일**: 2025-01-XX  
**프로젝트명**: TDL (NFT 게임 플랫폼)  
**프레임워크**: Vue 3 + Vite

---

## 📋 목차

1. [프로젝트 개요](#프로젝트-개요)
2. [기술 스택](#기술-스택)
3. [프로젝트 구조](#프로젝트-구조)
4. [주요 기능](#주요-기능)
5. [데이터 관리](#데이터-관리)
6. [라우팅 구조](#라우팅-구조)
7. [상태 관리](#상태-관리)
8. [주요 컴포넌트](#주요-컴포넌트)
9. [유틸리티 함수](#유틸리티-함수)
10. [개선 사항 및 권장사항](#개선-사항-및-권장사항)

---

## 프로젝트 개요

TDL은 NFT 기반의 클리커 게임 플랫폼입니다. 사용자는 고양이 NFT를 수집하고, 다양한 게임 모드(채굴, 사냥, 탐험, 생산)에서 NFT를 활용하여 포인트와 코인을 획득할 수 있습니다.

### 핵심 특징
- 🎮 4가지 게임 모드 (채굴, 사냥, 탐험, 생산)
- 🐱 NFT 고양이 수집 및 관리
- 💰 포인트(P)와 코인(C) 이중 화폐 시스템
- 🔌 Web3 지갑 연결 지원 (MetaMask)
- 🔥 Firebase 백엔드 연동
- 🌐 다국어 지원 (한국어/영어)

---

## 기술 스택

### 프론트엔드
- **Vue 3** (v3.5.22) - Composition API 사용
- **Vite** (v7.1.7) - 빌드 도구
- **Vue Router** (v4.6.0) - 라우팅
- **Ethers.js** (v6.15.0) - Web3 지갑 연결

### 백엔드/데이터베이스
- **Firebase** (v12.5.0)
  - Firestore - 사용자 데이터 저장
  - Authentication - 이메일/구글 로그인
  - Analytics - 사용자 분석

### 스타일링
- CSS3 (커스텀 스타일)
- 반응형 디자인 (모바일 우선)

### 개발 도구
- **gh-pages** - GitHub Pages 배포
- **vite-plugin-vue-devtools** - Vue 개발자 도구

---

## 프로젝트 구조

```
tdl/
├── src/
│   ├── assets/          # 이미지, 오디오 등 정적 파일
│   │   ├── audio/       # BGM, 효과음
│   │   └── img/         # 게임 이미지 (142개 PNG 파일)
│   ├── components/      # 공통 컴포넌트
│   │   ├── Header.vue   # 상단 헤더 (리소스 표시)
│   │   └── Footer.vue   # 하단 네비게이션 바
│   ├── firebase/        # Firebase 설정
│   │   └── config.js    # Firebase 초기화 및 설정
│   ├── pages/           # 페이지 컴포넌트 (19개)
│   │   ├── LoadingScreen.vue
│   │   ├── LoginScreen.vue
│   │   ├── SignupScreen.vue
│   │   ├── MainScreen.vue      # 메인 게임 화면
│   │   ├── HomePage.vue         # 홈 화면
│   │   ├── MiningPage.vue       # 채굴 페이지
│   │   ├── HuntingPage.vue      # 사냥 페이지
│   │   ├── ExplorationPage.vue # 탐험 페이지
│   │   ├── ProductionPage.vue # 생산 페이지
│   │   ├── ExchangePage.vue     # 교환소
│   │   ├── QuestPage.vue        # 퀘스트
│   │   ├── InventoryPage.vue    # 인벤토리
│   │   ├── FactoryPage.vue      # 제작소
│   │   ├── SettingsPage.vue     # 설정
│   │   ├── UserProfilePage.vue  # 프로필
│   │   ├── AttendancePage.vue   # 출석체크
│   │   ├── NFTPage.vue          # NFT 마켓플레이스
│   │   └── NotificationPage.vue # 알림
│   ├── store/           # 상태 관리
│   │   └── appStore.js  # 전역 상태 관리 (Pinia 스타일)
│   ├── styles/          # 전역 스타일
│   │   ├── common.css
│   │   ├── layout.css
│   │   └── main.css
│   ├── utils/           # 유틸리티 함수 (13개)
│   │   ├── userUtils.js         # 사용자 데이터 관리
│   │   ├── wallet.js            # 지갑 연결
│   │   ├── firebaseAuth.js      # Firebase 인증
│   │   ├── energyUtils.js       # 에너지 관리
│   │   ├── formatUtils.js        # 숫자 포맷팅
│   │   ├── nftLevelUtils.js     # NFT 레벨 관리
│   │   ├── rarityUtils.js        # 레어리티 계산
│   │   ├── questUtils.js         # 퀘스트 관리
│   │   ├── marketplaceUtils.js  # 마켓플레이스
│   │   ├── referralUtils.js     # 추천인 시스템
│   │   ├── kakaoUtils.js        # 카카오톡 공유
│   │   └── passwordUtils.js     # 비밀번호 유틸리티
│   ├── App.vue          # 루트 컴포넌트
│   └── main.js          # 진입점
├── public/               # 정적 파일
├── dist/                # 빌드 결과물
├── package.json         # 의존성 관리
├── vite.config.js       # Vite 설정
└── README.md            # 프로젝트 문서
```

---

## 주요 기능

### 1. 게임 모드

#### 채굴 (Mining)
- 클릭 기반 채굴 시스템
- 10번 클릭마다 포인트 획득
- 레벨에 따른 포인트 배수 (2의 제곱)
- NFT 효율 보너스 적용
- 고양이 파편 랜덤 획득

#### 사냥 (Hunting)
- 몬스터 처치 시스템
- 데미지 계산 및 경험치 획득
- NFT 데미지 보너스

#### 탐험 (Exploration)
- 지역 탐험 시스템
- 보물 및 자원 획득
- NFT 탐험 보상 보너스

#### 생산 (Production)
- 아이템 제작 시스템
- 레시피 기반 생산
- NFT 생산 속도 보너스

### 2. NFT 시스템

- **고양이 NFT 수집**: 30가지 고양이 이미지
- **NFT 속성**:
  - 레벨 (Level)
  - 별 등급 (Stars: 1-5)
  - 레어리티 (Common, Rare, Epic, Legendary)
  - 게임 모드별 효율 (miningEfficiency, huntingDamage, explorationReward, productionSpeed)
- **NFT 슬롯**: 각 모드당 최대 4개 NFT 배치 가능
- **자동 포인트 획득**: 배치된 NFT가 1초마다 자동으로 포인트 획득

### 3. 화폐 시스템

- **포인트 (P)**: 기본 화폐, 클릭으로 획득
- **코인 (C)**: 고급 화폐, 교환소에서 거래
- **고양이 파편**: NFT 제작에 사용

### 4. 에너지 시스템

- 하루 최대 4000 에너지
- 클릭당 1 에너지 소모
- 자정 자동 회복
- 행성 에너지: 10번 클릭마다 50씩 증가, 2000 도달 시 레벨업

### 5. 인증 시스템

- **이메일/비밀번호 로그인**
- **지갑 연결** (MetaMask)
- **Firebase Authentication** 연동
- **localStorage + sessionStorage** 하이브리드 저장

### 6. 마켓플레이스

- NFT 구매/판매
- 가격 필터링
- 레어리티 필터링
- 정렬 기능

---

## 데이터 관리

### 저장소 구조

#### localStorage
- `users`: 모든 사용자 데이터 배열
- `currentEnergy`: 현재 에너지
- `energyLastDate`: 에너지 마지막 업데이트 날짜
- `soundEnabled`: 소리 설정
- `appLanguage`: 언어 설정

#### sessionStorage
- `currentUser`: 현재 로그인한 사용자 정보

#### Firestore (Firebase)
- `users/{userId}`: 사용자 문서
  - `email`, `displayName`, `photoURL`
  - `gameData`: 게임 데이터 객체
    - `coins`, `totalCoin`, `catFragments`
    - `level`, `nftCount`
    - `miningLevel`, `huntingLevel`, `explorationLevel`, `productionLevel`
    - `miningCats`, `huntingCats`, `explorationCats`, `productionCats`
    - `inventory`: NFT 배열

### 사용자 데이터 구조

```javascript
{
  id: string,                    // 사용자 ID (이메일 또는 지갑 주소)
  email?: string,                // 이메일 (이메일 로그인 시)
  walletAddress?: string,       // 지갑 주소 (지갑 로그인 시)
  loginType: 'email' | 'wallet', // 로그인 타입
  inviteCode: string,            // 추천인 코드
  createdAt: string,             // 생성일
  referrals: string[],           // 추천한 사용자 ID 배열
  gameData: {
    level: number,
    coins: number,               // 포인트 (P)
    totalCoin: number,            // 코인 (C)
    catFragments: number,
    nftCount: number,
    miningLevel: number,
    huntingLevel: number,
    explorationLevel: number,
    productionLevel: number,
    miningCats: Array<Cat | null>, // 최대 4개
    huntingCats: Array<Cat | null>,
    explorationCats: Array<Cat | null>,
    productionCats: Array<Cat | null>,
    inventory: Cat[]              // 보유 NFT 배열
  }
}
```

### NFT 데이터 구조

```javascript
{
  id: string,                    // 고유 ID
  name: string,                   // 이름
  imageId: number,                // 이미지 ID (1-30)
  level: number,                  // 레벨
  stars: number,                  // 별 등급 (1-5)
  rarity: string,                // 레어리티
  exp: number,                   // 경험치
  maxExp: number,                // 최대 경험치
  miningEfficiency: number,      // 채굴 효율 (%)
  huntingDamage: number,          // 사냥 데미지 (%)
  explorationReward: number,     // 탐험 보상 (%)
  productionSpeed: number,        // 생산 속도 (%)
  createdAt: string              // 생성일
}
```

---

## 라우팅 구조

### 공개 라우트 (인증 불필요)
- `/loading` - 로딩 화면
- `/login` - 로그인
- `/signup` - 회원가입

### 보호된 라우트 (인증 필요)
- `/` → `/loading` (리다이렉트)
- `/main` - 메인 게임 화면
- `/home` - 홈 화면
- `/mining` - 채굴 페이지
- `/hunting` - 사냥 페이지
- `/exploration` - 탐험 페이지
- `/production` - 생산 페이지
- `/exchange` - 교환소
- `/quest` - 퀘스트
- `/inventory` - 인벤토리
- `/factory` - 제작소
- `/settings` - 설정
- `/profile` - 프로필
- `/attendance` - 출석체크
- `/nft` - NFT 마켓플레이스
- `/notification` - 알림
- `/shop` - 상점

### 라우터 가드
- 인증되지 않은 사용자는 로그인 페이지로 리다이렉트
- 로그인된 사용자가 로그인/회원가입 페이지 접근 시 홈으로 리다이렉트

---

## 상태 관리

### appStore.js 구조

커스텀 상태 관리 시스템 (Pinia 스타일):

```javascript
state = {
  // 인증 상태
  isLoggedIn: boolean,
  loginType: 'email' | 'wallet' | null,
  walletAddress: string,
  userBalance: string,
  isWalletConnected: boolean,
  
  // 사용자 정보
  currentUser: User | null,
  
  // 게임 데이터
  coins: number,              // 포인트 (P)
  totalCoin: number,          // 코인 (C)
  catFragments: number,
  level: number,
  nftCount: number,
  
  // 모드별 레벨
  miningLevel: number,
  huntingLevel: number,
  explorationLevel: number,
  productionLevel: number,
  
  // NFT 슬롯 (각 모드당 4개)
  miningCats: Array<Cat | null>,
  huntingCats: Array<Cat | null>,
  explorationCats: Array<Cat | null>,
  productionCats: Array<Cat | null>,
  
  // 인벤토리
  inventory: Cat[]
}
```

### 주요 액션

- `loadCurrentUser()` - 현재 사용자 로드
- `updateGameData(gameData)` - 게임 데이터 업데이트
- `updateCoins(coins)` - 포인트 업데이트
- `updateTotalCoin(totalCoin)` - 코인 업데이트
- `connectWalletToApp()` - 지갑 연결
- `disconnectWalletFromApp()` - 지갑 연결 해제
- `logout()` - 로그아웃

### 데이터 동기화

1. **localStorage ↔ state**: `loadCurrentUser()` 호출 시
2. **Firebase ↔ localStorage**: `updateUserGameData()` 호출 시
3. **state ↔ 컴포넌트**: 반응형 computed 속성 사용

---

## 주요 컴포넌트

### Header.vue
- 상단 리소스 바 (에너지, 포인트, 코인, 고양이 파편)
- NFT, 설정, 알림 아이콘 버튼
- 실시간 데이터 업데이트

### Footer.vue
- 하단 네비게이션 바 (5개 탭)
- 게임, 교환소, 홈, 인벤토리, 제작소
- 현재 경로에 따른 활성 탭 표시

### MainScreen.vue
- 메인 게임 화면 (약 2900줄)
- 4가지 게임 모드 탭 전환
- 클리커 버튼 및 NFT 슬롯
- 자동 포인트 획득 시스템
- 말풍선 및 애니메이션 효과

### HomePage.vue
- 홈 화면
- 고양이 캐러셀
- 대화 기능
- 친밀도 시스템

---

## 유틸리티 함수

### userUtils.js
- 사용자 데이터 CRUD
- 다국어 텍스트 관리 (한국어/영어)
- 초대 코드 생성

### wallet.js
- MetaMask 연결
- 지갑 주소/잔액 조회
- 네트워크 전환
- 계정 변경 감지

### firebaseAuth.js
- Firebase 인증 설정
- Google 로그인
- Firestore 데이터 저장/조회

### energyUtils.js
- 에너지 체크 및 리셋
- 일일 에너지 관리

### nftLevelUtils.js
- NFT 경험치 계산
- 레벨업 로직
- 최대 경험치 계산

### marketplaceUtils.js
- NFT 마켓플레이스 기능
- 구매/판매 로직

### formatUtils.js
- 숫자 포맷팅 (천 단위 구분)

---

## 개선 사항 및 권장사항

### 1. 상태 관리 개선
- **현재**: 커스텀 상태 관리
- **권장**: Pinia 도입
  - 더 나은 타입 지원
  - DevTools 통합
  - 모듈화된 스토어 구조

### 2. 타입 안정성
- **현재**: JavaScript만 사용
- **권장**: TypeScript 도입
  - 타입 안정성 향상
  - IDE 자동완성 개선
  - 런타임 에러 감소

### 3. 코드 구조 개선
- **MainScreen.vue**: 약 2900줄로 너무 큼
- **권장**: 컴포넌트 분리
  - `GameModeTabs.vue`
  - `ClickerArea.vue`
  - `CatSlots.vue`
  - `CatSelectPopup.vue`

### 4. 에러 처리 강화
- 전역 에러 핸들러 추가
- 사용자 친화적인 에러 메시지
- 에러 로깅 시스템

### 5. 성능 최적화
- 이미지 최적화 (WebP 형식)
- 코드 스플리팅
- 가상 스크롤 (인벤토리)
- 메모이제이션 활용

### 6. 테스트 코드
- **현재**: 테스트 코드 없음
- **권장**: 테스트 추가
  - Unit 테스트 (Vitest)
  - E2E 테스트 (Playwright)

### 7. 문서화
- API 문서화
- 컴포넌트 문서화 (Storybook)
- 개발 가이드라인

### 8. 보안 강화
- 환경 변수 검증
- 입력값 검증
- XSS 방지
- CSRF 보호

### 9. 접근성 개선
- ARIA 레이블 추가
- 키보드 네비게이션
- 스크린 리더 지원

### 10. 모바일 최적화
- 터치 제스처 개선
- 모바일 성능 최적화
- PWA 지원

---

## 결론

TDL 프로젝트는 Vue 3 기반의 잘 구조화된 NFT 게임 플랫폼입니다. 주요 기능들이 구현되어 있으며, Firebase와 Web3 지갑 연동도 포함되어 있습니다. 

다만 코드 구조 개선, 타입 안정성 강화, 테스트 코드 추가 등의 개선이 필요합니다. 특히 MainScreen.vue의 크기와 복잡도는 리팩토링이 시급합니다.

전반적으로 프로젝트는 잘 설계되었으며, 위의 개선 사항들을 적용하면 더욱 견고하고 유지보수하기 쉬운 프로젝트가 될 것입니다.

---

**분석 완료일**: 2025-01-XX  
**분석자**: AI Assistant

