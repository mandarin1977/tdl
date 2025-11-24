# TDL 프로젝트 전체 분석 보고서

## 📋 프로젝트 개요

**프로젝트명**: TDL (Tuldung)  
**타입**: Vue 3 기반 웹 게임 애플리케이션  
**배포**: GitHub Pages (`https://mandarin1977.github.io/tdl`)  
**빌드 도구**: Vite 7.1.7  
**프레임워크**: Vue 3.5.22 + Vue Router 4.6.0

---

## 🏗️ 프로젝트 구조

```
tdl/
├── src/
│   ├── pages/              # 페이지 컴포넌트 (18개)
│   ├── components/         # 공통 컴포넌트 (Header, Footer)
│   ├── firebase/          # Firebase 설정 및 인증
│   ├── store/             # 전역 상태 관리 (appStore.js)
│   ├── utils/             # 유틸리티 함수들
│   ├── styles/            # CSS 스타일 파일들
│   ├── assets/            # 이미지, 오디오 리소스
│   ├── App.vue           # 루트 컴포넌트
│   └── main.js           # 앱 진입점
├── dist/                  # 빌드 결과물
├── public/                # 정적 파일
└── package.json          # 의존성 관리
```

---

## 🎮 게임 기능 분석

### 1. 게임 모드 (4가지)
- **채굴 (Mining)**: 클릭 기반 채굴 시스템
- **사냥 (Hunting)**: 몬스터 사냥 시스템
- **탐험 (Exploration)**: 지역 탐험 및 보상 획득
- **생산 (Production)**: 아이템 제작 시스템

### 2. 게임 리소스
- **포인트 (P/Coins)**: 기본 게임 화폐
- **코인 (C/TotalCoin)**: 고급 게임 화폐
- **고양이 파편 (Cat Fragments)**: 고양이 NFT 제작 재료
- **에너지**: 하루 최대 4000, 매일 리셋
- **레벨 시스템**: 전체 레벨 + 모드별 레벨

### 3. 주요 페이지 (18개)

#### 인증 관련
- `LoadingScreen.vue`: 초기 로딩 화면
- `LoginScreen.vue`: 로그인 화면 (Google 소셜 로그인)
- `SignupScreen.vue`: 회원가입 화면

#### 메인 게임
- `MainScreen.vue`: 메인 게임 화면 (4가지 모드 통합)
- `MiningPage.vue`: 채굴 전용 페이지
- `HuntingPage.vue`: 사냥 전용 페이지
- `ExplorationPage.vue`: 탐험 전용 페이지
- `ProductionPage.vue`: 생산 전용 페이지

#### 게임 시스템
- `ExchangePage.vue`: 교환소 (포인트 ↔ 코인)
- `QuestPage.vue`: 퀘스트 시스템
- `InventoryPage.vue`: 인벤토리 관리
- `FactoryPage.vue`: 제작소 (고양이 NFT 제작)
- `NFTPage.vue`: NFT 관리
- `ShopPage.vue`: 상점

#### 사용자 관련
- `UserProfilePage.vue`: 사용자 프로필
- `SettingsPage.vue`: 설정 페이지
- `AttendancePage.vue`: 출석 체크
- `NotificationPage.vue`: 알림

---

## 🔐 인증 시스템

### Firebase 인증
- **인증 방식**: Google 소셜 로그인 (리다이렉트 방식)
- **데이터 저장**: Firestore Database
- **세션 관리**: sessionStorage + Firebase Auth 상태

### 인증 플로우
1. 사용자가 Google 로그인 클릭
2. Google 리다이렉트 → Firebase 인증
3. `handleGoogleRedirect()` 함수로 리다이렉트 결과 처리
4. Firestore에서 게임 데이터 로드
5. sessionStorage에 사용자 정보 저장
6. 라우터 가드로 인증 상태 확인

### 주요 파일
- `src/firebase/config.js`: Firebase 초기화 및 설정
- `src/utils/firebaseAuth.js`: 인증 관련 유틸리티
- `src/utils/userUtils.js`: 사용자 데이터 관리

---

## 💾 데이터 관리

### 저장소 구조

#### Firestore (Firebase)
```javascript
users/{userId} {
  email: string,
  displayName: string,
  photoURL: string,
  createdAt: string,
  gameData: {
    level: number,
    coins: number,              // 포인트 (P)
    totalCoin: number,          // 코인 (C)
    catFragments: number,
    nftCount: number,
    miningLevel: number,
    huntingLevel: number,
    explorationLevel: number,
    productionLevel: number,
    miningCats: [6개 슬롯],
    huntingCats: [6개 슬롯],
    explorationCats: [6개 슬롯],
    productionCats: [6개 슬롯],
    inventory: []
  }
}
```

#### sessionStorage
- `currentUser`: 현재 로그인한 사용자 전체 정보 (JSON)

#### localStorage
- `users`: 로컬 사용자 데이터 (Firebase 미사용 시)
- `currentEnergy`: 현재 에너지
- `energyLastDate`: 에너지 리셋 날짜
- `soundEnabled`: 사운드 설정
- `appLanguage`: 언어 설정 (한국어/영어)

---

## 🎯 상태 관리 (appStore.js)

### 전역 상태
```javascript
state = {
  // 인증
  isLoggedIn: boolean,
  walletAddress: string,
  userBalance: string,
  isLoading: boolean,
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
  miningCats: array,
  huntingCats: array,
  explorationCats: array,
  productionCats: array,
  
  // 인벤토리
  inventory: array
}
```

### 주요 함수
- `loadCurrentUser()`: 사용자 데이터 로드
- `updateGameData(gameData)`: 게임 데이터 업데이트
- `updateCoins(coins)`: 포인트 업데이트
- `updateTotalCoin(totalCoin)`: 코인 업데이트
- `syncGameData(gameData)`: 상태 동기화

### 이벤트 시스템
- `userDataUpdated`: 게임 데이터 업데이트 시 발생하는 커스텀 이벤트

---

## 🛣️ 라우팅 시스템

### 라우트 구조
- **공개 라우트**: `/loading`, `/login`, `/signup`
- **보호된 라우트**: 나머지 모든 페이지

### 라우터 가드
- 인증되지 않은 사용자는 로그인 페이지로 리다이렉트
- 로그인된 사용자는 로그인/회원가입 페이지 접근 시 메인으로 리다이렉트
- sessionStorage → Firebase Auth 순서로 인증 상태 확인

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

---

## 🎨 UI/UX 구조

### 컴포넌트
- **Header.vue**: 상단 헤더 (포인트, 코인, 고양이 파편, 에너지 표시)
- **Footer.vue**: 하단 네비게이션 바 (5개 탭)

### 스타일
- `common.css`: 공통 스타일
- `layout.css`: 레이아웃 스타일
- `main.css`: 메인 화면 스타일

### 다국어 지원
- 한국어/영어 지원
- `getI18nTexts()` 함수로 언어별 텍스트 제공

---

## 🎵 오디오 시스템

### BGM (배경음악)
- `src/assets/audio/bgm.mp3` (참조는 있으나 파일 없음)
- `src/assets/audio/clickbgm.mp3`: 클릭 효과음
- 사용자 상호작용 후 재생 (브라우저 정책 준수)
- localStorage의 `soundEnabled` 설정으로 제어

---

## 🐱 고양이 NFT 시스템

### 고양이 슬롯
- 각 게임 모드당 6개 슬롯
- 고양이를 슬롯에 배치하여 게임 효율 향상

### 고양이 제작
- FactoryPage에서 고양이 파편으로 NFT 제작
- 30종류의 고양이 (cat1.png ~ cat30.png)

---

## 🔄 게임 메커니즘

### 레벨 시스템
- **전체 레벨**: 사용자 전체 레벨
- **모드별 레벨**: 각 게임 모드의 독립적인 레벨
- 레벨에 따라 포인트 배수 증가 (2의 제곱: 1배, 2배, 4배...)

### 클릭 기반 게임플레이
- 각 모드마다 10번 클릭으로 완료
- 완료 시 보상 지급 (포인트, 고양이 파편 등)
- 총 클릭 수로 레벨업

### 에너지 시스템
- 하루 최대 4000 에너지
- 매일 자정에 자동 리셋
- 게임 액션마다 에너지 소모

---

## 📦 의존성 분석

### 프로덕션 의존성
```json
{
  "firebase": "^12.5.0",      // Firebase 서비스
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
- `npm run dev`: 개발 서버 실행
- `npm run build`: 프로덕션 빌드
- `npm run preview`: 빌드 결과 미리보기
- `npm run deploy`: 빌드 + GitHub Pages 배포

### 배포 설정
- Base URL: `/tdl/` (프로덕션)
- 빌드 결과물: `dist/` 폴더

---

## 🔍 주요 특징

### 장점
1. ✅ Firebase를 활용한 안정적인 인증 시스템
2. ✅ 반응형 상태 관리 (Vue 3 Composition API)
3. ✅ 모듈화된 코드 구조
4. ✅ 다국어 지원
5. ✅ 세션 관리 및 자동 로그인 유지

### 개선 가능한 부분
1. ⚠️ 인증 플로우가 복잡함 (여러 곳에서 중복 처리)
2. ⚠️ BGM 파일이 없음 (참조만 존재)
3. ⚠️ 에러 처리 개선 필요
4. ⚠️ 타입 안정성 부족 (TypeScript 미사용)
5. ⚠️ 테스트 코드 없음

---

## 📝 코드 품질

### 코딩 스타일
- Vue 3 Composition API 사용
- `<script setup>` 문법 활용
- 반응형 데이터 관리 (ref, reactive, computed)

### 아키텍처 패턴
- 컴포넌트 기반 구조
- 유틸리티 함수 분리
- 전역 상태 관리 (간단한 스토어 패턴)

---

## 🔐 보안 고려사항

### 현재 상태
- ✅ Firestore 보안 규칙 필요 (README에 가이드 있음)
- ✅ Firebase API 키가 코드에 하드코딩됨 (환경 변수 권장)
- ✅ 세션 관리 안전함 (sessionStorage 사용)

### 권장 사항
1. `.env` 파일로 Firebase 설정 관리
2. Firestore 보안 규칙 설정 (프로덕션)
3. API 키를 Git에 커밋하지 않기

---

## 📊 프로젝트 통계

- **총 페이지**: 18개
- **컴포넌트**: 2개 (Header, Footer)
- **유틸리티 파일**: 2개
- **스타일 파일**: 3개
- **이미지 리소스**: 85개 PNG 파일
- **오디오 리소스**: 1개 MP3 파일

---

## 🎯 결론

TDL은 Vue 3와 Firebase를 활용한 클릭 기반 웹 게임 애플리케이션입니다. 고양이 NFT 수집, 다양한 게임 모드, 레벨 시스템 등이 포함되어 있으며, Firebase 인증과 Firestore를 통한 데이터 관리가 구현되어 있습니다.

프로젝트는 잘 구조화되어 있으나, 인증 플로우 단순화, 타입 안정성 추가, 테스트 코드 작성 등의 개선이 필요합니다.

