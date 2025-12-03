# TDL 프로젝트 전체 분석 보고서

## 📋 프로젝트 개요

**프로젝트명**: TDL (NFT 게임 플랫폼)  
**프레임워크**: Vue 3 + Vite  
**언어**: JavaScript  
**배포**: GitHub Pages (`/tdl` 경로)

---

## 🏗️ 프로젝트 구조

### 루트 디렉토리
```
tdl/
├── src/                    # 소스 코드
├── dist/                   # 빌드 결과물
├── public/                 # 정적 파일
├── node_modules/           # 의존성 패키지
├── package.json            # 프로젝트 설정
├── vite.config.js          # Vite 설정
└── README.md               # 프로젝트 문서
```

### 주요 디렉토리 구조

#### `/src` 디렉토리
- **`components/`**: 재사용 가능한 컴포넌트
  - `Header.vue`: 상단 헤더 (리소스 표시, 설정/알림 버튼)
  - `Footer.vue`: 하단 네비게이션 바 (5개 탭)
  
- **`pages/`**: 페이지 컴포넌트 (19개)
  - `LoadingScreen.vue`: 로딩 화면
  - `LoginScreen.vue`: 로그인 페이지
  - `SignupScreen.vue`: 회원가입 페이지
  - `HomePage.vue`: 홈 페이지
  - `MainScreen.vue`: 메인 게임 화면
  - `MiningPage.vue`: 채굴 모드
  - `HuntingPage.vue`: 사냥 모드
  - `ExplorationPage.vue`: 탐험 모드
  - `ProductionPage.vue`: 생산 모드
  - `ExchangePage.vue`: 교환 페이지
  - `QuestPage.vue`: 퀘스트 페이지
  - `InventoryPage.vue`: 인벤토리 페이지
  - `FactoryPage.vue`: 공장 페이지
  - `NFTPage.vue`: NFT 페이지
  - `ShopPage.vue`: 상점 페이지
  - `SettingsPage.vue`: 설정 페이지
  - `UserProfilePage.vue`: 사용자 프로필 페이지
  - `AttendancePage.vue`: 출석 페이지
  - `NotificationPage.vue`: 알림 페이지

- **`store/`**: 상태 관리
  - `appStore.js`: 전역 상태 관리 (Pinia 없이 커스텀 스토어)
  
- **`utils/`**: 유틸리티 함수 (12개)
  - `userUtils.js`: 사용자 데이터 관리
  - `wallet.js`: 지갑 연결 (MetaMask)
  - `firebaseAuth.js`: Firebase 인증
  - `energyUtils.js`: 에너지 관리
  - `formatUtils.js`: 숫자 포맷팅
  - `nftLevelUtils.js`: NFT 레벨 관리
  - `rarityUtils.js`: 희귀도 관리
  - `questUtils.js`: 퀘스트 관리
  - `marketplaceUtils.js`: 마켓플레이스
  - `referralUtils.js`: 추천인 시스템
  - `passwordUtils.js`: 비밀번호 유틸리티
  - `kakaoUtils.js`: 카카오 로그인 (미사용 가능)

- **`firebase/`**: Firebase 설정
  - `config.js`: Firebase 초기화 및 설정

- **`styles/`**: 스타일시트
  - `common.css`: 공통 스타일
  - `layout.css`: 레이아웃 스타일
  - `main.css`: 메인 스타일

- **`assets/`**: 정적 리소스
  - `img/`: 이미지 파일 (110개 PNG 파일)
  - `audio/`: 오디오 파일 (BGM, 효과음)

---

## 🔧 기술 스택

### 핵심 의존성
```json
{
  "vue": "^3.5.22",           // Vue 3 프레임워크
  "vue-router": "^4.6.0",    // 라우팅
  "firebase": "^12.5.0",      // Firebase (인증, Firestore)
  "ethers": "^6.15.0"         // 이더리움 지갑 연결
}
```

### 개발 도구
```json
{
  "vite": "^7.1.7",                    // 빌드 도구
  "@vitejs/plugin-vue": "^6.0.1",      // Vue 플러그인
  "gh-pages": "^6.3.0"                 // GitHub Pages 배포
}
```

---

## 🎮 주요 기능

### 1. 인증 시스템
- **이메일 로그인**: Firebase Authentication
- **지갑 로그인**: MetaMask (ethers.js)
- **소셜 로그인**: Google (Firebase), 카카오 (구현됨, 미사용 가능)
- **세션 관리**: sessionStorage 기반

### 2. 게임 시스템
- **4가지 게임 모드**:
  - 채굴 (Mining)
  - 사냥 (Hunting)
  - 탐험 (Exploration)
  - 생산 (Production)
  
- **게임 리소스**:
  - 에너지 (Energy): 4000 최대치
  - 포인트 (Coins/P): 게임 내 화폐
  - 코인 (TotalCoin/C): 프리미엄 화폐
  - 고양이 파편 (Cat Fragments): NFT 합성 재료

- **고양이 NFT 시스템**:
  - 6개 슬롯 (각 모드당)
  - 희귀도 시스템
  - 레벨 시스템
  - 합성 시스템

### 3. 상태 관리 (Custom Store)
- **중앙 집중식 상태 관리**: `appStore.js`
- **반응형 상태**: Vue 3 `reactive` 사용
- **주요 상태**:
  - 인증 상태 (`isLoggedIn`, `loginType`)
  - 지갑 정보 (`walletAddress`, `userBalance`)
  - 게임 데이터 (`coins`, `totalCoin`, `catFragments`, `level`)
  - 고양이 슬롯 (`miningCats`, `huntingCats`, etc.)
  - 인벤토리 (`inventory`)

### 4. 데이터 저장
- **Firebase Firestore**: 클라우드 데이터베이스
- **localStorage**: 로컬 사용자 데이터 (지갑 사용자)
- **sessionStorage**: 현재 세션 사용자 정보

### 5. 라우팅
- **라우터 가드**: 인증 상태 확인
- **공개 라우트**: `/loading`, `/login`, `/signup`
- **보호된 라우트**: 나머지 모든 페이지
- **해시 라우팅**: `createWebHashHistory()` (GitHub Pages 호환)

---

## 📱 UI/UX 구조

### 레이아웃
- **Header**: 상단 고정 (sticky)
  - 리소스 표시 (에너지, 포인트, 코인, 고양이 파편)
  - 오른쪽 아이콘 버튼 (NFT, 설정, 알림)
  
- **Footer**: 하단 고정 (fixed)
  - 5개 탭 네비게이션
    - 게임 (Game)
    - 교환 (Exchange)
    - 홈 (Home)
    - 인벤토리 (Inventory)
    - 공장 (Factory)

### 반응형 디자인
- 모바일 우선 설계
- 브레이크포인트:
  - `max-width: 480px`: 작은 모바일
  - `max-width: 360px`: 매우 작은 모바일

---

## 🔐 보안 및 설정

### 환경 변수 (`.env` 파일 필요)
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

### Firebase 설정
- Firestore 데이터베이스 사용
- Authentication (이메일, Google)
- Analytics (선택적)

---

## 🚀 빌드 및 배포

### 개발 서버 실행
```bash
npm run dev
```

### 프로덕션 빌드
```bash
npm run build
```

### GitHub Pages 배포
```bash
npm run deploy
```
- 빌드 후 `dist/` 폴더를 `gh-pages` 브랜치에 배포
- 베이스 경로: `/tdl/`

---

## 📊 주요 파일 분석

### `src/main.js`
- Vue 앱 초기화
- 라우터 설정 및 가드
- 19개 페이지 라우트 정의

### `src/App.vue`
- 루트 컴포넌트
- BGM 관리
- 지갑 연결 상태 확인
- 전역 스타일 임포트

### `src/store/appStore.js`
- 전역 상태 관리
- 게임 데이터 동기화
- 지갑 연결/해제
- Firebase/localStorage 동기화

### `src/components/Header.vue`
- 상단 헤더 컴포넌트
- 리소스 표시 (에너지, 포인트, 코인, 고양이 파편)
- 실시간 업데이트 (500ms 간격)
- 스토어 연동

### `src/components/Footer.vue`
- 하단 네비게이션
- 5개 탭 (게임, 교환, 홈, 인벤토리, 공장)
- 활성 탭 표시
- 다국어 지원

### `src/firebase/config.js`
- Firebase 초기화
- 중복 초기화 방지
- 환경 변수 검증
- Auth, Firestore, Analytics 설정

---

## 🌐 다국어 지원

- **지원 언어**: 한국어, 영어 (추정)
- **구현 방식**: `userUtils.js`의 `getI18nTexts()` 함수
- **저장 위치**: `localStorage.getItem('appLanguage')`
- **기본 언어**: 영어

---

## 🎯 게임 메커니즘

### 에너지 시스템
- 최대 에너지: 4000
- 시간 기반 리셋 (추정)
- `energyUtils.js`에서 관리

### 레벨 시스템
- 사용자 레벨: `level`
- 모드별 레벨:
  - `miningLevel`
  - `huntingLevel`
  - `explorationLevel`
  - `productionLevel`

### NFT 시스템
- 고양이 NFT (30종 추정: cat1.png ~ cat30.png)
- 희귀도 시스템 (`rarityUtils.js`)
- 레벨 시스템 (`nftLevelUtils.js`)
- 합성 시스템 (고양이 파편 사용)

---

## 🔄 데이터 흐름

1. **사용자 로그인**
   - Firebase 또는 지갑 연결
   - `sessionStorage`에 사용자 정보 저장
   - 스토어에 상태 동기화

2. **게임 데이터 업데이트**
   - 스토어 액션 호출 (`updateGameData`)
   - Firebase/localStorage에 저장
   - 스토어 상태 업데이트
   - `userDataUpdated` 이벤트 발생
   - 컴포넌트 자동 업데이트

3. **지갑 연결**
   - MetaMask 연결
   - 계정 주소 확인
   - 잔액 조회
   - 사용자 데이터 로드/생성

---

## ⚠️ 주의사항 및 개선점

### 현재 구조의 특징
1. **커스텀 스토어**: Pinia 대신 직접 구현한 스토어 사용
2. **이중 저장**: Firebase + localStorage 병행 사용
3. **이벤트 기반 업데이트**: `CustomEvent` 사용
4. **폴링**: 일부 데이터는 `setInterval`로 주기적 확인

### 잠재적 개선 사항
1. **상태 관리**: Pinia 도입 고려
2. **데이터 동기화**: 단일 소스로 통합
3. **성능 최적화**: 폴링 대신 실시간 리스너 사용
4. **타입 안정성**: TypeScript 도입 고려
5. **테스트**: 단위 테스트 및 통합 테스트 추가

---

## 📝 추가 문서

프로젝트 루트에 여러 분석 문서가 있습니다:
- `PROJECT_ANALYSIS.md`
- `PROJECT_COMPLETE_ANALYSIS.md`
- `PROJECT_FULL_ANALYSIS_KO.md`
- `CURRENT_STATUS_ANALYSIS.md`
- `COMPLETE_PROJECT_ANALYSIS.md`
- `NFT_GAME_FEATURES_RECOMMENDATION.md`
- `NFT_MARKETPLACE_IMPLEMENTATION.md`
- `WALLET_INTEGRATION_PLAN.md`
- `SOCIAL_LOGIN_REMOVAL.md`
- `STATUS_MANAGEMENT_GUIDE.md`
- `IMMEDIATE_FEATURES.md`
- `IMPROVEMENTS_NEEDED.md`

---

## 🎨 에셋 구조

### 이미지 파일 (110개)
- 고양이 NFT: `cat1.png` ~ `cat30.png`
- UI 아이콘: `energyIcon.png`, `pointIcon.png`, `coinIcon.png` 등
- 배경 이미지: `background.png`, `tdl_splash_bg.png` 등
- 버튼 이미지: `bottom001.png` ~ `bottom005.png` (활성/비활성)
- 기타 게임 에셋

### 오디오 파일
- `clickbgm.mp3`: 클릭 효과음
- BGM 파일 (코드에 언급됨, 파일 존재 여부 확인 필요)

---

## 🔍 코드 품질

### 장점
- ✅ 모듈화된 구조
- ✅ 컴포넌트 재사용성
- ✅ 유틸리티 함수 분리
- ✅ 반응형 디자인

### 개선 필요
- ⚠️ 일부 파일에 한글 주석 (일관성 필요)
- ⚠️ 타입 안정성 부족 (TypeScript 없음)
- ⚠️ 테스트 코드 없음
- ⚠️ 문서화 부족 (JSDoc 등)

---

## 📈 프로젝트 규모

- **페이지**: 19개
- **컴포넌트**: 2개 (Header, Footer)
- **유틸리티**: 12개
- **이미지**: 110개
- **라우트**: 19개
- **게임 모드**: 4개
- **NFT 종류**: 30종 (추정)

---

## 🎯 결론

TDL은 Vue 3 기반의 NFT 게임 플랫폼으로, 다음과 같은 특징을 가집니다:

1. **완전한 게임 시스템**: 4가지 게임 모드와 NFT 시스템
2. **다양한 인증**: 이메일, 지갑, 소셜 로그인 지원
3. **반응형 디자인**: 모바일 우선 설계
4. **클라우드 저장**: Firebase Firestore 연동
5. **블록체인 통합**: MetaMask 지갑 연결

프로젝트는 잘 구조화되어 있으며, 게임의 핵심 기능들이 구현되어 있습니다. 추가 개선을 통해 더욱 견고하고 확장 가능한 애플리케이션으로 발전시킬 수 있습니다.

---

**분석 일시**: 2024년  
**분석자**: AI Assistant  
**프로젝트 버전**: 0.0.0
