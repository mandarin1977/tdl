# TDL 프로젝트 전체 분석 보고서 (한국어)

## 📋 프로젝트 개요

**프로젝트명**: TDL (Tuldung)  
**타입**: Vue 3 기반 NFT 클릭 게임 웹 애플리케이션  
**배포**: GitHub Pages (`https://mandarin1977.github.io/tdl`)  
**빌드 도구**: Vite 7.1.7  
**프레임워크**: Vue 3.5.22 + Vue Router 4.6.0  
**블록체인**: Ethereum (MetaMask 연동)  
**백엔드**: Firebase (Firestore, Authentication) + localStorage (폴백)

---

## 🏗️ 프로젝트 구조 상세 분석

### 루트 디렉토리 구조

```
tdl/
├── src/                    # 소스 코드
│   ├── pages/             # 페이지 컴포넌트 (18개)
│   ├── components/        # 공통 컴포넌트 (2개)
│   ├── firebase/         # Firebase 설정 및 인증
│   ├── store/            # 전역 상태 관리
│   ├── utils/            # 유틸리티 함수들 (10개)
│   ├── styles/           # CSS 스타일 파일들 (3개)
│   ├── assets/           # 이미지, 오디오 리소스
│   │   ├── img/         # 85개 PNG 파일
│   │   └── audio/        # 1개 MP3 파일
│   ├── App.vue          # 루트 컴포넌트
│   └── main.js          # 앱 진입점
├── dist/                 # 빌드 결과물 (GitHub Pages 배포용)
├── public/               # 정적 파일
├── node_modules/        # 의존성 패키지
├── package.json         # 프로젝트 설정 및 의존성
├── vite.config.js       # Vite 빌드 설정
├── jsconfig.json        # JavaScript 설정
├── index.html           # 진입점 HTML
└── *.md                 # 문서 파일들
```

---

## 📁 주요 디렉토리 및 파일 분석

### 1. **pages/** - 페이지 컴포넌트 (18개)

#### 인증 관련 (3개)
- **LoadingScreen.vue**: 초기 로딩 화면, Firebase 리다이렉트 결과 처리
- **LoginScreen.vue** (617줄): 로그인 화면
  - 이메일/비밀번호 로그인 (localStorage 기반)
  - MetaMask 지갑 연결 로그인
  - 비밀번호 표시/숨김 기능
  - 회원가입 페이지 이동
  - 비밀번호 해시화 (bcrypt 유사)
- **SignupScreen.vue**: 회원가입 화면
  - 이메일/비밀번호 회원가입
  - localStorage에 사용자 저장
  - 비밀번호 해시화 저장

#### 메인 게임 (5개)
- **MainScreen.vue** (2,579줄): 메인 게임 화면 ⚠️ **가장 큰 파일**
  - 클릭 기반 게임플레이
  - NFT 슬롯 시스템 (각 모드당 6개)
  - 보상 시스템 (포인트, 코인, 고양이 파편)
  - 레벨 시스템 (전체 레벨 + 모드별 레벨)
  - 애니메이션 효과 (말풍선, 고양이 이모지)
  - 4가지 게임 모드 통합 (채굴, 사냥, 탐험, 생산)
- **MiningPage.vue**: 채굴 전용 페이지
- **HuntingPage.vue**: 사냥 전용 페이지
- **ExplorationPage.vue**: 탐험 전용 페이지
- **ProductionPage.vue**: 생산 전용 페이지

#### 게임 시스템 (6개)
- **ExchangePage.vue**: 교환소
  - 포인트(P) ↔ 코인(C) 교환
  - 환율 시스템
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

#### 사용자 관련 (4개)
- **UserProfilePage.vue**: 사용자 프로필
- **SettingsPage.vue**: 설정 페이지
  - 언어 설정 (한국어/영어)
  - 사운드 설정
  - 지갑 관리
  - 로그아웃
- **AttendancePage.vue**: 출석 체크
- **NotificationPage.vue**: 알림

### 2. **components/** - 공통 컴포넌트 (2개)

- **Header.vue**: 상단 헤더
  - 에너지 표시 (⚡)
  - 포인트(P) 표시
  - 코인(C) 표시
  - 고양이 파편 표시
  - 알림 아이콘
  - 설정 아이콘
  - 스토어와 연동하여 실시간 업데이트

- **Footer.vue**: 하단 네비게이션 바
  - 5개 탭 (홈, 교환소, 퀘스트, 인벤토리, 제작소)
  - 활성 탭 표시
  - 다국어 지원

### 3. **store/** - 전역 상태 관리

- **appStore.js** (363줄): 전역 상태 관리 스토어
  - Vue 3 Composition API 기반
  - 반응형 상태 관리 (reactive, ref, computed)
  - 게임 데이터 동기화
  - 지갑 연결 관리
  - 사용자 인증 상태 관리

**주요 상태:**
```javascript
{
  // 인증
  isLoggedIn: boolean,
  loginType: 'email' | 'wallet' | null,
  walletAddress: string,
  userBalance: string,
  currentUser: object,
  
  // 게임 리소스
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
  
  // 고양이 슬롯 (각 모드당 6개)
  miningCats: array[6],
  huntingCats: array[6],
  explorationCats: array[6],
  productionCats: array[6],
  
  // 인벤토리
  inventory: array
}
```

### 4. **utils/** - 유틸리티 함수들 (10개)

- **userUtils.js**: 사용자 데이터 관리
  - 사용자 CRUD 작업
  - 게임 데이터 업데이트
  - 다국어 텍스트 제공
- **wallet.js** (251줄): Web3 지갑 연결
  - MetaMask 연동
  - 지갑 주소, 잔액 조회
  - 계정 변경 감지
  - 네트워크 변경 감지
- **passwordUtils.js**: 비밀번호 관리
  - 비밀번호 해시화
  - 비밀번호 검증
- **energyUtils.js**: 에너지 시스템
  - 에너지 체크 및 리셋
  - 일일 리셋 로직
- **formatUtils.js**: 숫자 포맷팅
  - 큰 숫자 표시 (K, M, B 등)
- **rarityUtils.js** (229줄): 레어리티 시스템
  - NFT 레어리티 계산
  - 별 등급 시스템
- **nftLevelUtils.js**: NFT 레벨 관리
  - 경험치 계산
  - 레벨업 로직
- **questUtils.js**: 퀘스트 시스템
  - 퀘스트 생성 및 관리
  - 보상 지급
- **marketplaceUtils.js**: 마켓플레이스 유틸리티
  - NFT 거래 관리 (로컬)
- **firebaseAuth.js**: Firebase 인증 유틸리티

### 5. **firebase/** - Firebase 설정

- **config.js** (262줄): Firebase 초기화 및 설정
  - Firebase 앱 초기화
  - Firestore 설정
  - Authentication 설정
  - Analytics 설정
  - Google 로그인 제공자
  - 사용자 데이터 저장/조회 함수

### 6. **styles/** - CSS 스타일 파일들 (3개)

- **common.css**: 공통 스타일
- **layout.css**: 레이아웃 스타일
- **main.css**: 메인 화면 스타일

---

## 🎮 게임 기능 상세 분석

### 1. 게임 모드 (4가지)

#### 채굴 (Mining)
- 클릭 기반 채굴 시스템
- 10번 클릭으로 완료
- 보상: 포인트, 고양이 파편
- 레벨 시스템 (레벨에 따라 보상 배수 증가)

#### 사냥 (Hunting)
- 몬스터 사냥 시스템
- 클릭 기반 게임플레이
- 보상: 포인트, 고양이 파편

#### 탐험 (Exploration)
- 지역 탐험 및 보상 획득
- 클릭 기반 게임플레이
- 보상: 포인트, 고양이 파편

#### 생산 (Production)
- 아이템 제작 시스템
- 클릭 기반 게임플레이
- 보상: 포인트, 고양이 파편

### 2. 게임 리소스

- **포인트 (P/Coins)**: 기본 게임 화폐
  - 게임 플레이로 획득
  - 교환소에서 코인으로 교환 가능
- **코인 (C/TotalCoin)**: 고급 게임 화폐
  - 교환소에서 포인트로 교환 가능
  - 퀘스트 보상으로 획득
- **고양이 파편 (Cat Fragments)**: 고양이 NFT 제작 재료
  - 게임 플레이로 획득
  - 퀘스트 보상으로 획득
  - 제작소에서 NFT 제작에 사용
- **에너지**: 하루 최대 4000, 매일 자정에 자동 리셋
  - 게임 액션마다 소모
  - 상점에서 구매 가능
- **레벨 시스템**: 전체 레벨 + 모드별 레벨
  - 레벨에 따라 포인트 배수 증가 (2의 제곱: 1배, 2배, 4배...)

### 3. NFT 시스템

#### 고양이 슬롯
- 각 게임 모드당 6개 슬롯
- 고양이를 슬롯에 배치하여 게임 효율 향상
- 슬롯에 배치된 고양이의 레벨/레어리티에 따라 보상 증가

#### 고양이 제작
- FactoryPage에서 고양이 파편으로 NFT 제작
- 30종류의 고양이 (cat1.png ~ cat30.png)
- 레어리티 시스템:
  - Common (일반)
  - Rare (희귀)
  - Epic (영웅)
  - Legendary (전설)

#### NFT 속성
- 레벨: 경험치로 레벨업 가능
- 레어리티: 별 등급 (1~5성)
- 이름: 고양이 종류별 이름
- 생성일: NFT 제작 날짜

### 4. 퀘스트 시스템

- **일일 퀘스트**: 매일 리셋
- **주간 퀘스트**: 매주 리셋
- **월간 퀘스트**: 매월 리셋
- 보상: 코인, 고양이 파편
- 자동 완료 감지 및 보상 지급

---

## 🔐 인증 시스템 분석

### 인증 방식

#### 1. 이메일/비밀번호 로그인
- **저장소**: localStorage
- **비밀번호**: 해시화 저장 (bcrypt 유사)
- **세션 관리**: sessionStorage
- **플로우**:
  1. 사용자가 이메일/비밀번호 입력
  2. localStorage에서 사용자 검색
  3. 비밀번호 검증 (해시 비교)
  4. sessionStorage에 사용자 정보 저장
  5. 메인 화면으로 이동

#### 2. MetaMask 지갑 연결
- **저장소**: localStorage + sessionStorage
- **라이브러리**: ethers.js 6.15.0
- **플로우**:
  1. 사용자가 "지갑 연결" 버튼 클릭
  2. MetaMask 설치 확인
  3. 지갑 연결 요청
  4. 지갑 주소로 사용자 찾기 또는 생성
  5. sessionStorage에 사용자 정보 저장
  6. 메인 화면으로 이동

#### 3. Firebase 인증 (구현되어 있으나 현재 미사용)
- **저장소**: Firestore
- **인증 방식**: Google 소셜 로그인 (리다이렉트)
- **상태**: 코드는 있으나 실제 사용되지 않음

### 세션 관리

- **sessionStorage**: 현재 로그인한 사용자 정보 저장
- **localStorage**: 사용자 데이터 영구 저장
- **라우터 가드**: 인증되지 않은 사용자는 로그인 페이지로 리다이렉트

---

## 💾 데이터 관리 분석

### 저장소 구조

#### localStorage
```javascript
{
  "users": [                    // 모든 사용자 데이터
    {
      "id": "user_id",
      "email": "user@example.com",
      "password": "hashed_password",
      "walletAddress": "0x...",  // 지갑 사용자만
      "loginType": "email" | "wallet",
      "createdAt": "2024-01-01T00:00:00.000Z",
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
  ],
  "currentEnergy": 4000,        // 현재 에너지
  "energyLastDate": "2024-01-01", // 에너지 리셋 날짜
  "soundEnabled": "true",       // 사운드 설정
  "appLanguage": "한국어"        // 언어 설정
}
```

#### sessionStorage
```javascript
{
  "currentUser": {              // 현재 로그인한 사용자 (비밀번호 제외)
    "id": "user_id",
    "email": "user@example.com",
    "loginType": "email" | "wallet",
    "walletAddress": "0x...",   // 지갑 사용자만
    "gameData": { ... }
  }
}
```

#### Firestore (Firebase) - 현재 미사용
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
    miningCats: [6개 슬롯],
    huntingCats: [6개 슬롯],
    explorationCats: [6개 슬롯],
    productionCats: [6개 슬롯],
    inventory: []
  }
}
```

---

## 🛣️ 라우팅 시스템 분석

### 라우트 구조

#### 공개 라우트 (인증 불필요)
- `/loading`: 초기 로딩 화면
- `/login`: 로그인 화면
- `/signup`: 회원가입 화면

#### 보호된 라우트 (인증 필요)
- `/main`: 메인 게임 화면
- `/mining`: 채굴 페이지
- `/hunting`: 사냥 페이지
- `/exploration`: 탐험 페이지
- `/production`: 생산 페이지
- `/exchange`: 교환소
- `/quest`: 퀘스트
- `/inventory`: 인벤토리
- `/factory`: 제작소
- `/settings`: 설정
- `/profile`: 프로필
- `/attendance`: 출석 체크
- `/nft`: NFT 관리
- `/notification`: 알림
- `/shop`: 상점

### 라우터 가드

```javascript
router.beforeEach((to, from, next) => {
  const currentUser = getCurrentUser()
  const isAuthenticated = !!currentUser
  const isPublicRoute = publicRoutes.includes(to.path)

  // 로그인된 상태에서 로그인/회원가입 페이지 접근 시 메인으로 리다이렉트
  if (isAuthenticated && (to.path === '/login' || to.path === '/signup')) {
    next('/main')
    return
  }

  // 로그인하지 않은 상태에서 보호된 페이지 접근 시 로그인 페이지로 리다이렉트
  if (!isAuthenticated && !isPublicRoute) {
    next('/login')
    return
  }

  next()
})
```

---

## 📦 의존성 분석

### 프로덕션 의존성

```json
{
  "ethers": "^6.15.0",        // Web3 지갑 연동
  "firebase": "^12.5.0",      // Firebase 서비스 (현재 미사용)
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

## 🚀 빌드 및 배포

### 스크립트

- `npm run dev`: 개발 서버 실행 (Vite)
- `npm run build`: 프로덕션 빌드
- `npm run preview`: 빌드 결과 미리보기
- `npm run deploy`: 빌드 + GitHub Pages 배포

### 배포 설정

- **Base URL**: `/tdl/` (프로덕션)
- **빌드 결과물**: `dist/` 폴더
- **배포 플랫폼**: GitHub Pages

---

## 🎯 주요 특징

### 장점

1. ✅ **모듈화된 코드 구조**: 유틸리티 함수 분리, 컴포넌트 기반 구조
2. ✅ **반응형 상태 관리**: Vue 3 Composition API 활용
3. ✅ **다국어 지원**: 한국어/영어 지원
4. ✅ **세션 관리**: sessionStorage를 통한 안전한 세션 관리
5. ✅ **레어리티 시스템**: NFT 레어리티 및 별 등급 시스템 구현
6. ✅ **퀘스트 시스템**: 일일/주간/월간 퀘스트 구현
7. ✅ **지갑 연동**: MetaMask 지갑 연결 기능 구현
8. ✅ **에너지 시스템**: 일일 리셋 에너지 시스템 구현

### 특징

- 클릭 기반 게임플레이
- NFT 수집 및 관리
- 레벨 시스템 (전체 + 모드별)
- 리소스 관리 (포인트, 코인, 고양이 파편, 에너지)
- 지갑 연동 (MetaMask)
- 다국어 지원

---

## ⚠️ 개선 가능한 부분

### 1. 코드 품질

- ⚠️ **TypeScript 미사용**: 타입 안정성 부족
- ⚠️ **테스트 코드 없음**: 단위 테스트, 통합 테스트 없음
- ⚠️ **파일 크기**: MainScreen.vue가 2,579줄로 너무 큼 (컴포넌트 분리 필요)
- ⚠️ **코드 중복**: 일부 로직이 여러 곳에서 중복됨

### 2. 아키텍처

- ⚠️ **상태 관리**: Pinia/Vuex 미사용 (간단한 스토어 패턴만 사용)
- ⚠️ **컴포넌트 분리**: MainScreen.vue를 더 작은 컴포넌트로 분리 필요
- ⚠️ **인증 플로우**: 여러 곳에서 중복 처리됨

### 3. 기능

- ⚠️ **NFT 활용**: NFT가 게임에서 실제로 사용되지 않음 (슬롯에 배치만 가능)
- ⚠️ **NFT 레벨업**: NFT 레벨업 시스템이 완전히 구현되지 않음
- ⚠️ **블록체인 민팅**: 블록체인 NFT 민팅 없음 (로컬 데이터만)
- ⚠️ **BGM 파일**: BGM 파일 없음 (참조만 존재)
- ⚠️ **Firebase 미사용**: Firebase 코드는 있으나 실제로는 localStorage만 사용

### 4. 보안

- ⚠️ **Firebase API 키**: 환경 변수로 관리 필요 (현재 .env 파일 사용)
- ⚠️ **Firestore 보안 규칙**: Firestore 보안 규칙 설정 필요
- ⚠️ **비밀번호 해시**: bcrypt 유사 구현이나 실제 bcrypt 라이브러리 사용 권장

### 5. 성능

- ⚠️ **이미지 최적화**: 85개 PNG 파일 최적화 필요
- ⚠️ **코드 스플리팅**: 라우트별 코드 스플리팅 미구현
- ⚠️ **번들 크기**: 번들 크기 최적화 필요

---

## 📊 프로젝트 통계

### 파일 수

- **페이지 컴포넌트**: 18개
- **공통 컴포넌트**: 2개
- **유틸리티 파일**: 10개
- **스타일 파일**: 3개
- **이미지 리소스**: 85개 PNG 파일
- **오디오 리소스**: 1개 MP3 파일

### 코드 규모

- **가장 큰 파일**: MainScreen.vue (2,579줄) ⚠️
- **상태 관리**: appStore.js (363줄)
- **지갑 유틸리티**: wallet.js (251줄)
- **Firebase 설정**: config.js (262줄)
- **레어리티 시스템**: rarityUtils.js (229줄)
- **로그인 화면**: LoginScreen.vue (617줄)

---

## 🔍 기술 스택 요약

### 프론트엔드
- **프레임워크**: Vue 3.5.22 (Composition API)
- **라우팅**: Vue Router 4.6.0
- **빌드 도구**: Vite 7.1.7
- **상태 관리**: 커스텀 스토어 (Vue 3 reactive)

### 블록체인
- **지갑**: MetaMask
- **라이브러리**: ethers.js 6.15.0
- **네트워크**: Ethereum

### 백엔드/데이터베이스
- **주 저장소**: localStorage (현재 사용 중)
- **백업 저장소**: Firebase Firestore (구현되어 있으나 미사용)
- **인증**: localStorage 기반 (Firebase 인증 코드는 있으나 미사용)

### 배포
- **플랫폼**: GitHub Pages
- **빌드**: Vite
- **배포 스크립트**: gh-pages

---

## 📝 결론

TDL은 Vue 3와 localStorage를 활용한 NFT 클릭 게임 웹 애플리케이션입니다. 고양이 NFT 수집, 다양한 게임 모드, 레벨 시스템, 퀘스트 시스템 등이 포함되어 있으며, MetaMask 지갑 연동 기능도 구현되어 있습니다.

### 현재 상태

✅ **완료된 기능**:
- 기본 게임 메커니즘 (클릭 기반 게임플레이)
- NFT 제작 및 관리 시스템
- 레벨 시스템
- 퀘스트 시스템
- 교환소
- 지갑 연동 (MetaMask)
- 다국어 지원

⚠️ **개선 필요**:
- NFT의 실제 게임 활용 (현재는 슬롯 배치만 가능)
- 블록체인 NFT 민팅 (현재는 로컬 데이터만)
- 코드 분리 및 최적화 (MainScreen.vue 분리)
- Firebase 실제 사용 또는 제거
- 테스트 코드 추가
- TypeScript 도입 고려

### 다음 단계 권장사항

1. **즉시 개선**: MainScreen.vue 컴포넌트 분리
2. **단기 개선**: NFT의 실제 게임 활용 구현
3. **중기 개선**: 블록체인 NFT 민팅 구현
4. **장기 개선**: TypeScript 도입, 테스트 코드 작성

---

**분석 일자**: 2024년  
**프로젝트 버전**: 0.0.0  
**분석자**: AI Assistant

