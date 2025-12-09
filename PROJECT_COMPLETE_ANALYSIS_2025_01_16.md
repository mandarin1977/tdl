# TDL 프로젝트 전체 분석 보고서
**생성일**: 2025-01-16  
**프로젝트명**: TDL (NFT 고양이 게임)  
**프레임워크**: Vue 3 + Vite

---

## 📋 목차
1. [프로젝트 개요](#프로젝트-개요)
2. [기술 스택](#기술-스택)
3. [프로젝트 구조](#프로젝트-구조)
4. [주요 기능](#주요-기능)
5. [인증 시스템](#인증-시스템)
6. [게임 메커니즘](#게임-메커니즘)
7. [데이터 관리](#데이터-관리)
8. [컴포넌트 및 페이지](#컴포넌트-및-페이지)
9. [유틸리티 함수](#유틸리티-함수)
10. [설정 및 환경](#설정-및-환경)
11. [개선 사항 및 이슈](#개선-사항-및-이슈)

---

## 프로젝트 개요

### 프로젝트 설명
TDL은 NFT 기반 고양이 수집 및 육성 게임입니다. 사용자는 고양이를 수집하고, 다양한 게임 모드(채굴, 사냥, 탐험, 생산)를 통해 리소스를 획득하며, NFT를 생성하고 거래할 수 있습니다.

### 주요 특징
- 🎮 **4가지 게임 모드**: 채굴(Mining), 사냥(Hunting), 탐험(Exploration), 생산(Production)
- 🐱 **NFT 고양이 시스템**: 레어리티, 레벨, 스탯 시스템
- 💰 **이중 화폐 시스템**: 포인트(P)와 코인(C)
- 🔐 **다중 인증**: 이메일/비밀번호, Google 소셜 로그인, 지갑 연결(MetaMask)
- 🌐 **다국어 지원**: 한국어/영어 (기본값: 영어)
- 📱 **반응형 디자인**: 모바일 최적화

---

## 기술 스택

### 프론트엔드
- **Vue 3.5.22** - Composition API 사용
- **Vite 7.1.7** - 빌드 도구
- **Vue Router 4.6.0** - 라우팅 (Hash 모드)
- **Ethers.js 6.15.0** - Web3 지갑 연결

### 백엔드/인프라
- **Firebase 12.5.0**
  - Authentication (Google 소셜 로그인, 이메일/비밀번호)
  - Firestore (사용자 데이터, 게임 데이터 저장)
  - Analytics

### 상태 관리
- **커스텀 스토어** (`src/store/appStore.js`) - Vue 3 Composition API 기반

### 스타일링
- **CSS Modules** - Scoped styles
- **반응형 CSS** - 모바일 우선 설계

---

## 프로젝트 구조

```
tdl/
├── public/                 # 정적 파일
├── src/
│   ├── assets/            # 이미지, 오디오 등 리소스
│   │   ├── img/           # 게임 이미지 (고양이, 아이콘 등)
│   │   └── audio/         # BGM 파일
│   ├── components/        # 재사용 가능한 컴포넌트
│   │   ├── Header.vue    # 상단 헤더 (리소스 표시)
│   │   └── Footer.vue    # 하단 네비게이션 바
│   ├── firebase/          # Firebase 설정
│   │   └── config.js     # Firebase 초기화 및 인증 함수
│   ├── pages/             # 페이지 컴포넌트
│   │   ├── HomePage.vue          # 홈 (고양이 상호작용)
│   │   ├── MainScreen.vue        # 게임 메인 화면
│   │   ├── MiningPage.vue        # 채굴 게임
│   │   ├── HuntingPage.vue       # 사냥 게임
│   │   ├── ExplorationPage.vue   # 탐험 게임
│   │   ├── ProductionPage.vue    # 생산 게임
│   │   ├── InventoryPage.vue     # 인벤토리 (NFT 관리)
│   │   ├── FactoryPage.vue       # 제작소 (NFT 생성)
│   │   ├── ExchangePage.vue      # 교환소 (포인트↔코인)
│   │   ├── QuestPage.vue         # 퀘스트
│   │   ├── ShopPage.vue          # 상점 (에너지 구매)
│   │   ├── NFTPage.vue           # NFT 마켓플레이스
│   │   ├── SettingsPage.vue       # 설정
│   │   ├── LoginScreen.vue        # 로그인
│   │   ├── SignupScreen.vue       # 회원가입
│   │   └── ... (기타 페이지)
│   ├── store/             # 상태 관리
│   │   └── appStore.js   # 전역 상태 스토어
│   ├── styles/            # 전역 스타일
│   │   ├── common.css
│   │   ├── layout.css
│   │   └── main.css
│   ├── utils/             # 유틸리티 함수
│   │   ├── firebaseAuth.js      # Firebase 인증
│   │   ├── wallet.js            # 지갑 연결
│   │   ├── userUtils.js         # 사용자 데이터 관리
│   │   ├── energyUtils.js       # 에너지 관리
│   │   ├── questUtils.js        # 퀘스트 관리
│   │   ├── rarityUtils.js       # NFT 레어리티 시스템
│   │   ├── nftLevelUtils.js      # NFT 레벨 시스템
│   │   ├── marketplaceUtils.js  # 마켓플레이스
│   │   ├── referralUtils.js     # 추천인 시스템
│   │   ├── formatUtils.js       # 숫자 포맷팅
│   │   └── passwordUtils.js     # 비밀번호 해싱
│   ├── App.vue            # 루트 컴포넌트
│   └── main.js            # 앱 진입점
├── vite.config.js         # Vite 설정
├── package.json          # 의존성 관리
└── .env                  # 환경 변수 (Firebase 설정)
```

---

## 주요 기능

### 1. 인증 시스템
- **이메일/비밀번호 로그인**: bcrypt 해싱 지원
- **Google 소셜 로그인**: Firebase Authentication 리다이렉트 방식
- **지갑 연결**: MetaMask를 통한 Web3 지갑 연결
- **세션 관리**: sessionStorage 기반

### 2. 게임 모드

#### 채굴 (Mining)
- 레벨 시스템
- 진행률 표시
- 자원 획득 (돌, 철, 금, 다이아몬드)
- 고양이 슬롯 4개 (효율 증가)

#### 사냥 (Hunting)
- 몬스터 전투 시스템
- 경험치 및 골드 획득
- 플레이어 스탯 (체력, 공격력)

#### 탐험 (Exploration)
- 지역 탐험 시스템
- 보물 및 보상 획득
- 미발견 지역 시스템

#### 생산 (Production)
- 제작 레시피 시스템
- 재료 관리
- 아이템 생성

### 3. NFT 시스템

#### 고양이 NFT
- **레어리티**: Common, Rare, Epic, Legendary
- **별 등급**: 2-5성
- **레벨 시스템**: 경험치 기반 레벨업
- **스탯**: 근력, 체력, 지능, 손재주, 용기, 행운
- **성격**: 8가지 성격 타입
- **친밀도**: 30-100%

#### NFT 생성 (Factory)
- 코인 + 고양이 파편 소모
- 랜덤 이미지 ID (1-30)
- 랜덤 레어리티 할당
- 인벤토리에 자동 추가

#### NFT 관리 (Inventory)
- 필터링: 별 등급, 레벨, 레어리티
- 정렬: 최신순, 오래된순, 레벨순, 별순, 레어리티순
- 검색: 이름 또는 ID로 검색
- 상세 정보 모달
- 레벨업 시스템

#### NFT 마켓플레이스
- NFT 판매/구매
- 가격 필터링
- 내 NFT 목록
- 판매 중인 NFT 관리

### 4. 리소스 시스템

#### 화폐
- **포인트 (P)**: 기본 화폐, 게임 플레이로 획득
- **코인 (C)**: 고급 화폐, NFT 생성 및 거래에 사용
- **고양이 파편**: NFT 생성 재료

#### 교환소 (Exchange)
- 포인트 ↔ 코인 교환
- 고정 환율 시스템

#### 에너지 시스템
- 최대 에너지: 4000
- 게임 모드별 에너지 소모
- 상점에서 에너지 구매 가능 (100/500/1000/2000)

### 5. 퀘스트 시스템
- 일일/주간/월간 퀘스트
- 보상 시스템
- 진행 상황 추적

### 6. 출석체크
- 일일 출석 보상
- 연속 출석 시스템

### 7. 추천인 시스템
- 초대 코드 생성
- 초대 보상 (100 포인트)
- 신규 가입 보상 (50 포인트)

---

## 인증 시스템

### 인증 방식

#### 1. 이메일/비밀번호
- **회원가입**: `SignupScreen.vue`
  - 이메일, 비밀번호 입력
  - 비밀번호 해싱 (bcrypt)
  - localStorage에 저장
- **로그인**: `LoginScreen.vue`
  - 이메일/비밀번호 검증
  - sessionStorage에 사용자 저장

#### 2. Google 소셜 로그인
- **구현**: Firebase Authentication 리다이렉트 방식
- **흐름**:
  1. `signInWithGoogle()` 호출 → Google 로그인 페이지로 리다이렉트
  2. 로그인 완료 후 앱으로 리다이렉트
  3. `handleGoogleRedirect()` 호출하여 인증 결과 처리
  4. Firestore에서 게임 데이터 로드
  5. sessionStorage에 사용자 저장
- **파일**: `src/utils/firebaseAuth.js`, `src/firebase/config.js`

#### 3. 지갑 연결 (MetaMask)
- **구현**: Ethers.js 사용
- **기능**:
  - 지갑 주소 가져오기
  - 잔액 조회
  - 계정 변경 감지
  - 네트워크 변경 감지
- **파일**: `src/utils/wallet.js`

### 인증 상태 관리
- **sessionStorage**: 현재 로그인한 사용자 정보
- **localStorage**: 모든 사용자 데이터 (이메일/비밀번호 방식)
- **Firebase**: 클라우드 사용자 데이터 (Google 로그인)
- **Router Guard**: `main.js`에서 인증 상태 확인 및 리다이렉트

---

## 게임 메커니즘

### 게임 데이터 구조

```javascript
gameData: {
  level: 1,                    // 사용자 레벨
  coins: 0,                    // 포인트 (P)
  totalCoin: 0,                // 코인 (C)
  catFragments: 50,            // 고양이 파편
  nftCount: 0,                 // NFT 개수
  miningLevel: 1,              // 채굴 레벨
  huntingLevel: 1,              // 사냥 레벨
  explorationLevel: 1,          // 탐험 레벨
  productionLevel: 1,           // 생산 레벨
  miningCats: [null, null, null, null],      // 채굴 고양이 슬롯
  huntingCats: [null, null, null, null],     // 사냥 고양이 슬롯
  explorationCats: [null, null, null, null], // 탐험 고양이 슬롯
  productionCats: [null, null, null, null],   // 생산 고양이 슬롯
  inventory: []                // NFT 인벤토리
}
```

### NFT 데이터 구조

```javascript
{
  id: Date.now(),              // 고유 ID
  imageId: 1,                  // 이미지 ID (1-30)
  name: "Cat 1",              // 이름
  level: 1,                   // 레벨
  exp: 0,                      // 경험치
  maxExp: 100,                 // 최대 경험치
  stars: 3,                    // 별 등급 (2-5)
  rarity: "rare",              // 레어리티
  stats: [                     // 스탯 배열
    { name: "근력", value: 50, progress: 50, color: "#FF6B6B" },
    { name: "체력", value: 45, progress: 45, color: "#FF8A80" },
    // ... (6개 스탯)
  ],
  personality: "Active",      // 성격
  affinity: 75,                // 친밀도 (30-100)
  selected: false,             // 선택 여부
  isNew: false,                // 신규 여부
  createdAt: "2025-01-16..."  // 생성일
}
```

### 레벨업 시스템
- **레벨업 비용**: 레벨에 따라 증가
- **스탯 증가**: 레벨업 시 랜덤 스탯 증가
- **최대 경험치 계산**: `calculateMaxExp(level)` 함수 사용

### 레어리티 시스템
- **Common**: 60% 확률
- **Rare**: 25% 확률
- **Epic**: 12% 확률
- **Legendary**: 3% 확률

---

## 데이터 관리

### 저장소 전략

#### 1. sessionStorage
- 현재 로그인한 사용자 정보
- 페이지 새로고침 시 유지
- 탭 닫으면 삭제

#### 2. localStorage
- 모든 사용자 데이터 (이메일/비밀번호 방식)
- 게임 설정 (언어, 소리 설정)
- 에너지 데이터

#### 3. Firestore (Firebase)
- Google 로그인 사용자 데이터
- 게임 데이터 동기화
- 클라우드 백업

### 데이터 동기화
- **appStore**: 중앙 집중식 상태 관리
- **이벤트 시스템**: `userDataUpdated` 이벤트로 컴포넌트 간 동기화
- **자동 동기화**: 컴포넌트 마운트 시 `loadCurrentUser()` 호출

---

## 컴포넌트 및 페이지

### 공통 컴포넌트

#### Header.vue
- **기능**: 상단 리소스 바
- **표시 항목**: 에너지, 포인트, 코인, 고양이 파편
- **버튼**: NFT, 설정, 알림

#### Footer.vue
- **기능**: 하단 네비게이션 바
- **탭**: 게임, 인벤토리, 홈, 교환소, 설정

### 주요 페이지

#### HomePage.vue
- 고양이 상호작용 (대화하기, 추르주기)
- 고양이 슬라이드 (5마리)
- 말풍선 애니메이션
- 친밀도 시스템

#### InventoryPage.vue
- NFT 목록 표시
- 필터링 및 정렬
- 상세 정보 모달
- 레벨업 기능
- 탭: 고양이/아이템

#### FactoryPage.vue
- NFT 생성 (고양이 제작)
- 재료 소모 (코인 + 고양이 파편)
- 성공 팝업

#### ExchangePage.vue
- 포인트 ↔ 코인 교환
- 환율 표시
- 거래 내역

#### ShopPage.vue
- 에너지 구매
- 가격: 100/500/1000/2000 에너지

#### NFTPage.vue
- 마켓플레이스
- NFT 판매/구매
- 필터링 및 정렬

---

## 유틸리티 함수

### firebaseAuth.js
- `loginWithGoogle()`: Google 로그인 시작
- `handleGoogleRedirect()`: 리다이렉트 결과 처리
- `logout()`: 로그아웃
- `updateGameData()`: 게임 데이터 업데이트

### wallet.js
- `connectWallet()`: MetaMask 연결
- `getWalletAddress()`: 지갑 주소 가져오기
- `getWalletBalance()`: 잔액 조회
- `checkWalletConnection()`: 연결 상태 확인
- `onAccountsChanged()`: 계정 변경 감지
- `onChainChanged()`: 네트워크 변경 감지

### userUtils.js
- `getCurrentUser()`: 현재 사용자 가져오기
- `updateUserGameData()`: 게임 데이터 업데이트
- `getI18nTexts()`: 다국어 텍스트
- `createWalletUser()`: 지갑 사용자 생성

### rarityUtils.js
- `addRarityToNFT()`: NFT에 레어리티 할당
- `getRarityName()`: 레어리티 이름 가져오기
- `getRarityColors()`: 레어리티 색상 가져오기

### nftLevelUtils.js
- `canLevelUp()`: 레벨업 가능 여부
- `getLevelUpCost()`: 레벨업 비용 계산
- `calculateMaxExp()`: 최대 경험치 계산
- `calculateStatIncrease()`: 스탯 증가량 계산

### energyUtils.js
- `checkAndResetEnergy()`: 에너지 체크 및 리셋

### questUtils.js
- `trackGameAction()`: 게임 액션 추적

### marketplaceUtils.js
- 마켓플레이스 관련 함수들

### formatUtils.js
- `formatNumber()`: 숫자 포맷팅 (천 단위 구분)

### passwordUtils.js
- `hashPassword()`: 비밀번호 해싱
- `verifyPassword()`: 비밀번호 검증

---

## 설정 및 환경

### 환경 변수 (.env)
```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
VITE_FIREBASE_MEASUREMENT_ID=...
VITE_KAKAO_APP_KEY=...
```

### Vite 설정 (vite.config.js)
- Vue 플러그인
- 경로 별칭: `@` → `./src`
- 프로덕션 base 경로: `/tdl/`

### 라우팅 (main.js)
- Hash 모드 사용 (`createWebHashHistory`)
- 공개 라우트: `/loading`, `/login`, `/signup`
- 보호된 라우트: 나머지 모든 페이지
- Router Guard로 인증 확인

---

## 개선 사항 및 이슈

### 발견된 이슈

#### 1. 인증 관련
- ✅ Google 로그인 리다이렉트 처리 복잡 (여러 재시도 로직)
- ⚠️ sessionStorage와 Firebase 인증 상태 동기화 이슈 가능성
- ⚠️ 지갑 연결 시 localStorage와 Firestore 데이터 분리

#### 2. 데이터 관리
- ⚠️ localStorage와 Firestore 이중 저장 (동기화 필요)
- ⚠️ 에너지 데이터가 localStorage에만 저장 (Firestore 미동기화)
- ⚠️ 사용자 데이터 백업/복원 기능 없음

#### 3. 성능
- ⚠️ InventoryPage.vue 파일이 매우 큼 (1968줄) - 분리 필요
- ⚠️ 이미지 로딩 최적화 필요 (lazy loading)
- ⚠️ 대량 NFT 렌더링 시 성능 이슈 가능성

#### 4. 사용자 경험
- ⚠️ 에러 처리 및 사용자 피드백 개선 필요
- ⚠️ 로딩 상태 표시 일관성 부족
- ⚠️ 다국어 지원 불완전 (일부 하드코딩된 텍스트)

#### 5. 보안
- ⚠️ 비밀번호 해싱은 구현되었으나, localStorage에 평문 저장 가능성
- ⚠️ Firebase 보안 규칙 확인 필요
- ⚠️ API 키 노출 방지 (환경 변수 사용 중)

### 권장 개선 사항

#### 1. 코드 구조
- [ ] InventoryPage.vue를 여러 컴포넌트로 분리
- [ ] 공통 로직을 Composable로 추출
- [ ] 타입 안정성을 위한 TypeScript 도입 고려

#### 2. 상태 관리
- [ ] Pinia 도입 고려 (현재 커스텀 스토어 대신)
- [ ] 데이터 동기화 로직 개선
- [ ] 에러 상태 관리 추가

#### 3. 성능 최적화
- [ ] 이미지 lazy loading 구현
- [ ] 가상 스크롤링 (대량 NFT 목록)
- [ ] 코드 스플리팅 및 지연 로딩

#### 4. 테스트
- [ ] 단위 테스트 추가
- [ ] 통합 테스트 추가
- [ ] E2E 테스트 추가

#### 5. 문서화
- [ ] API 문서화
- [ ] 컴포넌트 문서화
- [ ] 게임 로직 문서화

---

## 결론

TDL 프로젝트는 Vue 3 기반의 완성도 높은 NFT 게임입니다. 다양한 인증 방식, 게임 모드, NFT 시스템이 잘 구현되어 있습니다. 다만, 코드 구조 개선, 성능 최적화, 테스트 추가 등의 개선이 필요합니다.

### 강점
- ✅ 완성도 높은 게임 기능
- ✅ 다양한 인증 방식 지원
- ✅ 반응형 디자인
- ✅ 다국어 지원

### 개선 필요
- ⚠️ 코드 구조 개선 (대형 컴포넌트 분리)
- ⚠️ 성능 최적화
- ⚠️ 테스트 추가
- ⚠️ 에러 처리 개선

---

**분석 완료일**: 2025-01-16  
**분석자**: AI Assistant
