# TDL 프로젝트 전체 분석 보고서

## 📋 프로젝트 개요

**프로젝트명**: TDL (NFT 게임 프로토타입)  
**프레임워크**: Vue 3 + Vite  
**언어**: JavaScript (ES6+)  
**배포**: GitHub Pages (`/tdl/` 경로)

---

## 🏗️ 프로젝트 구조

### 디렉토리 구조

```
tdl/
├── dist/                    # 빌드 결과물
│   ├── assets/             # 빌드된 리소스 파일들
│   └── index.html
├── public/                  # 정적 파일
│   └── favicon.ico
├── src/                     # 소스 코드
│   ├── assets/             # 이미지, 오디오 등 리소스
│   │   ├── audio/          # BGM, 효과음
│   │   └── img/            # 100개 이상의 PNG 이미지
│   ├── components/         # 공통 컴포넌트
│   │   ├── Header.vue      # 상단 헤더
│   │   └── Footer.vue      # 하단 푸터
│   ├── firebase/           # Firebase 설정
│   │   └── config.js       # Firebase 초기화 및 인증
│   ├── pages/              # 페이지 컴포넌트 (19개)
│   ├── store/              # 상태 관리
│   │   └── appStore.js     # 전역 상태 관리 (Pinia 스타일)
│   ├── styles/             # 스타일 파일
│   │   ├── common.css
│   │   ├── layout.css
│   │   └── main.css
│   ├── utils/              # 유틸리티 함수들
│   │   ├── energyUtils.js
│   │   ├── firebaseAuth.js
│   │   ├── formatUtils.js
│   │   ├── kakaoUtils.js
│   │   ├── marketplaceUtils.js
│   │   ├── nftLevelUtils.js
│   │   ├── passwordUtils.js
│   │   ├── questUtils.js
│   │   ├── rarityUtils.js
│   │   ├── referralUtils.js
│   │   ├── userUtils.js
│   │   └── wallet.js
│   ├── App.vue             # 루트 컴포넌트
│   └── main.js             # 엔트리 포인트
├── index.html              # HTML 엔트리 포인트
├── package.json            # 의존성 관리
├── vite.config.js          # Vite 설정
└── jsconfig.json           # JavaScript 경로 별칭 설정
```

---

## 🛠️ 기술 스택

### 핵심 프레임워크
- **Vue 3.5.22** - Composition API 사용
- **Vite 7.1.7** - 빌드 도구
- **Vue Router 4.6.0** - 라우팅 (Hash 모드)

### 주요 라이브러리
- **Firebase 12.5.0** - 백엔드 서비스
  - Authentication (Google 로그인)
  - Firestore (데이터베이스)
  - Analytics
- **Ethers.js 6.15.0** - Web3 지갑 연결 (MetaMask)
- **Kakao SDK** - 카카오톡 공유 기능

### 개발 도구
- **@vitejs/plugin-vue** - Vue 플러그인
- **vite-plugin-vue-devtools** - 개발자 도구 (주석 처리됨)
- **gh-pages** - GitHub Pages 배포

---

## 📱 주요 기능

### 1. 인증 시스템
- **이메일/비밀번호 로그인** (Firebase)
- **Google 소셜 로그인** (Firebase Redirect)
- **지갑 연결 로그인** (MetaMask, Ethers.js)
- 세션 관리 (sessionStorage)

### 2. 게임 모드 (4가지)
- **채굴 (Mining)**: 클릭 기반 채굴, 레벨 시스템
- **사냥 (Hunting)**: 몬스터 전투, 경험치 획득
- **탐험 (Exploration)**: 지역 탐험, 보물 발견
- **생산 (Production)**: 아이템 제작, 레시피 시스템

### 3. NFT 시스템
- 고양이 NFT 생성 (Factory)
- NFT 레벨업 시스템
- NFT 인벤토리 관리
- NFT 마켓플레이스 (구매/판매)
- NFT 레어리티 시스템 (Common, Rare, Epic, Legendary)
- NFT 스타 등급 시스템

### 4. 게임 경제
- **포인트 (P/Coins)**: 기본 게임 화폐
- **코인 (C/TotalCoin)**: 고급 화폐
- **고양이 파편**: NFT 생성 재료
- **에너지 시스템**: 게임 활동 제한
- **교환소**: 포인트 ↔ 코인 교환

### 5. 추가 기능
- **퀘스트 시스템**: 일일/주간/월간 퀘스트
- **출석체크**: 일일 보상 시스템
- **상점**: 에너지 구매
- **친구 초대**: 추천인 시스템
- **알림 시스템**
- **설정**: 언어, 소리, 진동 설정

---

## 🗂️ 페이지 구조 (19개)

### 인증 페이지
1. **LoadingScreen.vue** - 로딩 화면
2. **LoginScreen.vue** - 로그인
3. **SignupScreen.vue** - 회원가입

### 메인 페이지
4. **MainScreen.vue** - 메인 게임 화면 (4가지 모드 통합)
5. **HomePage.vue** - 홈 화면

### 게임 모드 페이지
6. **MiningPage.vue** - 채굴 전용 페이지
7. **HuntingPage.vue** - 사냥 전용 페이지
8. **ExplorationPage.vue** - 탐험 전용 페이지
9. **ProductionPage.vue** - 생산 전용 페이지

### 기능 페이지
10. **QuestPage.vue** - 퀘스트
11. **InventoryPage.vue** - 인벤토리
12. **FactoryPage.vue** - NFT 제작소
13. **ExchangePage.vue** - 교환소
14. **ShopPage.vue** - 상점
15. **NFTPage.vue** - NFT 마켓플레이스
16. **NotificationPage.vue** - 알림
17. **AttendancePage.vue** - 출석체크
18. **UserProfilePage.vue** - 사용자 프로필
19. **SettingsPage.vue** - 설정

---

## 🏪 상태 관리 (appStore.js)

### 상태 구조
```javascript
{
  // 인증 상태
  isLoggedIn: boolean
  loginType: 'email' | 'wallet' | null
  walletAddress: string
  userBalance: string
  isWalletConnected: boolean
  
  // 게임 데이터
  coins: number              // 포인트 (P)
  totalCoin: number          // 코인 (C)
  catFragments: number       // 고양이 파편
  level: number              // 사용자 레벨
  nftCount: number           // NFT 개수
  
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

### 주요 액션
- `loadCurrentUser()` - 사용자 데이터 로드
- `updateGameData()` - 게임 데이터 업데이트
- `connectWalletToApp()` - 지갑 연결
- `updateCoins()`, `updateTotalCoin()` - 화폐 업데이트
- `syncGameData()` - 데이터 동기화

---

## 💾 데이터 저장 방식

### 1. Firebase Firestore
- 사용자 프로필 정보
- 게임 데이터 (coins, level, inventory 등)
- NFT 데이터

### 2. localStorage
- 사용자 목록 (지갑 사용자)
- 에너지 데이터
- 언어 설정
- 소리 설정

### 3. sessionStorage
- 현재 로그인한 사용자 정보
- 세션 관리

---

## 🔐 인증 플로우

### 이메일/Google 로그인
1. Firebase Authentication 사용
2. 리다이렉트 방식 (Google)
3. Firestore에 사용자 데이터 저장
4. sessionStorage에 사용자 정보 저장

### 지갑 로그인
1. MetaMask 연결 (Ethers.js)
2. 지갑 주소로 사용자 식별
3. localStorage에 사용자 데이터 저장
4. sessionStorage에 세션 정보 저장

---

## 🎮 게임 메커니즘

### 에너지 시스템
- 최대 에너지: 4000
- 게임 활동 시 에너지 소모
- 일일 자동 회복 (에너지 유틸리티 함수)

### 레벨 시스템
- 사용자 레벨: 전체 게임 레벨
- 모드별 레벨: 각 게임 모드의 독립적인 레벨
- NFT 레벨: 각 NFT의 개별 레벨

### 보상 시스템
- 포인트 (P): 기본 보상
- 고양이 파편: NFT 생성 재료
- 경험치: 레벨업에 사용
- 코인 (C): 고급 화폐

---

## 🌐 다국어 지원

### 지원 언어
- **English** (기본값)
- **한국어** (Korean)

### 구현 방식
- `userUtils.js`의 `getI18nTexts()` 함수
- localStorage에 언어 설정 저장
- 500개 이상의 번역 키 제공

---

## 🎨 UI/UX 특징

### 디자인
- 모바일 우선 반응형 디자인
- 고양이 테마의 귀여운 UI
- 카드 기반 레이아웃
- 애니메이션 효과 (말풍선, 이모지)

### 리소스
- 100개 이상의 PNG 이미지
- 고양이 캐릭터 이미지 (cat1~cat30)
- 게임 모드별 아이콘
- BGM 및 효과음

---

## 🔧 설정 파일

### vite.config.js
- Vue 플러그인 설정
- 경로 별칭 (`@` → `./src`)
- 프로덕션 빌드 시 `/tdl/` 베이스 경로

### jsconfig.json
- TypeScript/JavaScript 경로 매핑
- `@/*` → `./src/*`

### package.json
- Node.js 버전 요구사항: `^20.19.0 || >=22.12.0`
- 스크립트:
  - `dev`: 개발 서버 실행
  - `build`: 프로덕션 빌드
  - `preview`: 빌드 미리보기
  - `deploy`: 빌드 후 GitHub Pages 배포

---

## 📦 주요 유틸리티 함수

### userUtils.js
- 사용자 데이터 관리
- 다국어 텍스트 제공
- localStorage/sessionStorage 관리

### wallet.js
- MetaMask 연결
- 지갑 주소/잔액 조회
- 네트워크 전환
- 이벤트 리스너 (계정 변경, 네트워크 변경)

### firebaseAuth.js
- Firebase 인증 처리
- Google 로그인 리다이렉트 처리
- 사용자 데이터 변환

### energyUtils.js
- 에너지 체크 및 리셋
- 일일 에너지 회복

### nftLevelUtils.js
- NFT 레벨 계산
- 경험치 관리

### formatUtils.js
- 숫자 포맷팅 (천 단위 구분)

---

## 🚀 배포 설정

### GitHub Pages
- 베이스 경로: `/tdl/`
- 빌드 명령: `npm run build`
- 배포 명령: `npm run deploy`
- 배포 디렉토리: `dist/`

---

## ⚠️ 현재 상태 및 이슈

### 알려진 이슈
1. **소셜 로그인 제거**: 일부 문서에서 소셜 로그인 제거 언급
2. **Firebase 설정**: 환경 변수 필요 (`.env` 파일)
3. **Kakao SDK**: 카카오 SDK 로드되지만 일부 기능 미완성 가능성

### 개선 필요 사항
1. **에러 처리**: 일부 함수에서 에러 처리 부족
2. **타입 안정성**: TypeScript 미사용
3. **테스트**: 테스트 코드 없음
4. **문서화**: 일부 함수 주석 부족

---

## 📊 프로젝트 통계

- **총 페이지**: 19개
- **컴포넌트**: 2개 (Header, Footer)
- **유틸리티 파일**: 11개
- **이미지 리소스**: 100개 이상
- **의존성**: 4개 (Vue, Firebase, Ethers, Vue Router)
- **개발 의존성**: 3개

---

## 🎯 주요 특징 요약

1. **NFT 게임**: 고양이 NFT 수집 및 거래 게임
2. **Web3 통합**: MetaMask 지갑 연결 지원
3. **Firebase 백엔드**: 인증 및 데이터 저장
4. **다양한 게임 모드**: 채굴, 사냥, 탐험, 생산
5. **경제 시스템**: 포인트, 코인, 파편 등 복잡한 경제 구조
6. **반응형 디자인**: 모바일 우선 설계

---

## 📝 다음 단계 제안

1. **TypeScript 전환**: 타입 안정성 향상
2. **테스트 코드 작성**: 단위 테스트 및 통합 테스트
3. **성능 최적화**: 이미지 최적화, 코드 스플리팅
4. **에러 처리 강화**: 전역 에러 핸들러 추가
5. **문서화 개선**: API 문서, 컴포넌트 문서 작성
6. **CI/CD 파이프라인**: 자동 배포 설정

---

**분석 일자**: 2024년  
**프로젝트 버전**: 0.0.0 (프로토타입)

