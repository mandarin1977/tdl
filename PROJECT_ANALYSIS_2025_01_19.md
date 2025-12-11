# TDL 프로젝트 전체 분석 보고서 (2025-01-19)

## 📋 프로젝트 개요

**프로젝트명**: TDL (Tuldung)  
**타입**: Vue 3 기반 NFT 클리커 게임 웹 애플리케이션  
**배포**: GitHub Pages (`https://mandarin1977.github.io/tdl`)  
**빌드 도구**: Vite 7.1.7  
**프레임워크**: Vue 3.5.22 + Vue Router 4.6.0  
**상태 관리**: Pinia 없이 reactive 기반 커스텀 스토어 (`appStore.js`)

---

## 🏗️ 기술 스택

### 프론트엔드
- **Vue 3.5.22** (Composition API, `<script setup>`)
- **Vue Router 4.6.0** (Hash 모드)
- **Vite 7.1.7** (빌드 도구)
- **Ethers.js 6.15.0** (블록체인 지갑 연동)

### 백엔드/인프라
- **Firebase 12.5.0**
  - Authentication (Google 소셜 로그인, 이메일/비밀번호)
  - Firestore (사용자 데이터, 게임 데이터 저장)
  - Analytics

### 스타일링
- CSS 파일 기반 (`common.css`, `layout.css`, `main.css`)
- 인라인 스타일 사용

---

## 📁 프로젝트 구조

```
tdl/
├── src/
│   ├── pages/              # 페이지 컴포넌트 (18개)
│   │   ├── LoadingScreen.vue
│   │   ├── LoginScreen.vue
│   │   ├── SignupScreen.vue
│   │   ├── MainScreen.vue          # 메인 게임 화면 (4가지 모드 통합)
│   │   ├── MiningPage.vue
│   │   ├── HuntingPage.vue
│   │   ├── ExplorationPage.vue
│   │   ├── ProductionPage.vue
│   │   ├── ExchangePage.vue        # 포인트 ↔ 코인 교환
│   │   ├── QuestPage.vue           # 일일/주간/월간 퀘스트
│   │   ├── InventoryPage.vue       # NFT 인벤토리
│   │   ├── FactoryPage.vue        # NFT 제작
│   │   ├── NFTPage.vue            # NFT 마켓플레이스 (더미)
│   │   ├── ShopPage.vue           # 상점
│   │   ├── SettingsPage.vue        # 설정 (1477줄, 가장 큰 파일)
│   │   ├── UserProfilePage.vue
│   │   ├── AttendancePage.vue     # 출석체크
│   │   ├── NotificationPage.vue
│   │   ├── HomePage.vue
│   │   ├── ForgotPasswordPage.vue
│   │   └── ResetPasswordPage.vue
│   ├── components/
│   │   ├── Header.vue              # 공통 헤더
│   │   └── Footer.vue              # 공통 푸터
│   ├── firebase/
│   │   └── config.js               # Firebase 설정 및 인증 함수
│   ├── store/
│   │   └── appStore.js             # 전역 상태 관리 (reactive 기반)
│   ├── utils/                      # 유틸리티 함수들
│   │   ├── userUtils.js           # 사용자 데이터 관리
│   │   ├── wallet.js              # 지갑 연결 (MetaMask)
│   │   ├── firebaseAuth.js        # Firebase 인증 헬퍼
│   │   ├── energyUtils.js         # 에너지 관리
│   │   ├── formatUtils.js         # 숫자 포맷팅
│   │   ├── nftLevelUtils.js       # NFT 레벨 시스템
│   │   ├── rarityUtils.js         # NFT 레어리티
│   │   ├── questUtils.js          # 퀘스트 시스템
│   │   ├── referralUtils.js      # 친구 초대 시스템
│   │   ├── marketplaceUtils.js    # 마켓플레이스 유틸
│   │   ├── passwordUtils.js      # 비밀번호 유틸
│   │   ├── resetTokenUtils.js    # 비밀번호 리셋 토큰
│   │   ├── kakaoUtils.js         # 카카오 로그인 (미사용?)
│   │   └── createTestAccount.js  # 테스트 계정 생성
│   ├── styles/
│   │   ├── common.css
│   │   ├── layout.css
│   │   └── main.css
│   ├── assets/
│   │   ├── audio/
│   │   │   └── clickbgm.mp3
│   │   └── img/                   # 163개 PNG 이미지
│   ├── App.vue                    # 루트 컴포넌트 (BGM 관리)
│   └── main.js                    # 앱 진입점 (라우터 설정)
├── dist/                          # 빌드 결과물
├── public/
│   └── favicon.ico
├── package.json
├── vite.config.js
└── [22개의 분석 문서들]
```

---

## 🎮 게임 시스템 분석

### 1. 게임 모드 (4가지)

모든 모드는 **클릭 기반**이며, **10번 클릭**으로 완료됩니다.

#### 채굴 (Mining)
- 목적: 포인트와 고양이 파편 획득
- NFT 슬롯: 4개 (miningCats)
- 속성: `miningEfficiency` (채굴 효율 증가)
- 독립 레벨 시스템

#### 사냥 (Hunting)
- 목적: 포인트와 고양이 파편 획득
- NFT 슬롯: 4개 (huntingCats)
- 속성: `huntingDamage` (사냥 데미지 증가)
- 독립 레벨 시스템

#### 탐험 (Exploration)
- 목적: 포인트와 고양이 파편 획득
- NFT 슬롯: 4개 (explorationCats)
- 속성: `explorationReward` (탐험 보상 증가)
- 독립 레벨 시스템

#### 생산 (Production)
- 목적: 포인트와 고양이 파편 획득
- NFT 슬롯: 4개 (productionCats)
- 속성: `productionSpeed` (생산 속도 증가)
- 독립 레벨 시스템

### 2. 게임 리소스

#### 포인트 (P/Coins)
- 기본 게임 통화
- 게임 액션 완료 시 획득
- 교환소에서 코인으로 교환 가능
- `store.state.coins`로 관리

#### 코인 (C/TotalCoin)
- 고급 게임 통화
- 교환소에서 포인트로 구매
- NFT 제작에 필요
- `store.state.totalCoin`로 관리

#### 고양이 파편 (Cat Fragments)
- NFT 제작 재료
- 게임 액션 완료 시 랜덤 1-5개 획득
- 제작소(FactoryPage)에서 NFT 제작에 사용
- 기본값: 50개
- `store.state.catFragments`로 관리

#### 에너지
- 일일 최대 4,000개
- 매일 자정 자동 리셋 (`energyUtils.js`)
- 게임 액션마다 소모
- 상점에서 구매 가능

### 3. 레벨 시스템

#### 전체 레벨 (Level)
- 사용자 전체 레벨
- 모든 게임 모드의 경험치 합산
- 레벨업 시 전체 보상 증가
- `store.state.level`로 관리

#### 모드별 레벨
- 각 게임 모드의 독립적인 레벨
- 모드별 총 클릭 수로 레벨업
- 레벨에 따른 포인트 배수 증가 (2의 제곱)
  - 레벨 1: 1배
  - 레벨 2: 2배
  - 레벨 3: 4배
  - 레벨 4: 8배
  - ...
- `store.state.miningLevel`, `huntingLevel`, `explorationLevel`, `productionLevel`로 관리

### 4. NFT 시스템

#### NFT 종류
- **30종류의 고양이 NFT**
- 각 고양이는 고유한 이미지와 이름

#### NFT 속성 (현재)
- `stars`: 2-4개 (별 등급)
- `level`: NFT 레벨 (경험치로 레벨업)
- `exp`: 현재 경험치
- `maxExp`: 최대 경험치 (레벨에 따라 증가)

#### NFT 슬롯
- 각 게임 모드마다 4개 슬롯
- 슬롯에 NFT 배치 가능
- **현재 문제**: 슬롯에 배치해도 실제 게임 효과가 적용되지 않음

#### NFT 제작 (FactoryPage)
- 고양이 파편과 코인으로 NFT 제작
- 랜덤 고양이 생성
- 인벤토리에 자동 추가

#### NFT 인벤토리 (InventoryPage)
- 필터링: 별 등급, 레벨
- 정렬: 최신순, 오래된순, 레벨, 별 등급, 이름순
- 검색 기능
- NFT 상세 정보 모달

---

## 🔐 인증 시스템

### 지원하는 로그인 방식

1. **Google 소셜 로그인**
   - Firebase Authentication 사용
   - 리다이렉트 방식 (`signInWithRedirect`)
   - 자동 로그인 유지 (localStorage)

2. **이메일/비밀번호**
   - Firebase Authentication 사용
   - 회원가입/로그인 지원
   - 비밀번호 리셋 기능

3. **지갑 연결 (MetaMask)**
   - Ethers.js 사용
   - 지갑 주소 기반 인증
   - 지갑 이벤트 리스너 (계정 변경, 네트워크 변경)

4. **게스트 모드**
   - 로컬 스토리지 기반
   - 제한된 기능

### 인증 상태 관리

- **localStorage**: 영구 저장 (브라우저 재시작 후에도 유지)
- **sessionStorage**: 임시 저장
- **Firebase Auth**: 서버 인증 상태
- **라우터 가드**: 보호된 페이지 접근 제어

---

## 💾 데이터 저장

### Firebase Firestore
- 사용자 프로필 데이터
- 게임 데이터 (레벨, 코인, 포인트, NFT 등)
- 초대 코드 및 추천인 시스템

### LocalStorage
- 현재 사용자 정보 (`currentUser`)
- 모든 사용자 목록 (`users`)
- 게임 설정 (언어, 소리 설정 등)
- 출석체크 기록
- 초대 코드 및 추천인 데이터

### SessionStorage
- 현재 사용자 정보 백업 (`currentUser`)

---

## 🎯 주요 기능

### ✅ 완료된 기능

1. **인증 시스템**
   - Google 소셜 로그인
   - 이메일/비밀번호 로그인
   - 지갑 연결 (MetaMask)
   - 비밀번호 리셋

2. **게임 메커니즘**
   - 4가지 게임 모드 (채굴, 사냥, 탐험, 생산)
   - 클릭 기반 게임플레이
   - 레벨 시스템
   - 리소스 관리 (포인트, 코인, 고양이 파편)

3. **NFT 시스템**
   - NFT 제작 (FactoryPage)
   - NFT 인벤토리 (InventoryPage)
   - NFT 슬롯 배치 (4개 모드 × 4개 슬롯)
   - NFT 레벨 시스템

4. **퀘스트 시스템**
   - 일일/주간/월간 퀘스트
   - 보상 지급 시스템
   - 자동 리셋

5. **기타 기능**
   - 출석체크
   - 친구 초대 시스템
   - 교환소 (포인트 ↔ 코인)
   - 상점
   - 다국어 지원 (English, 한국어)
   - BGM 재생

### ⚠️ 부족한 기능

1. **NFT 속성/레어리티 시스템**
   - 현재: 별(2-4개)만 있음
   - 필요: Common, Rare, Epic, Legendary 등급
   - 필요: 레어리티별 시각적 차별화
   - 필요: 레어리티별 스탯 범위

2. **NFT 게임 효과 적용**
   - 현재: 슬롯에 배치해도 효과 없음
   - 필요: NFT 속성에 따른 실제 게임 보상 증가
   - 필요: NFT 레벨에 따른 보너스

3. **블록체인 NFT 민팅**
   - 현재: 로컬 데이터만 저장
   - 필요: ERC-721 또는 ERC-1155 스마트 컨트랙트
   - 필요: 실제 블록체인에 NFT 민팅

4. **NFT 마켓플레이스**
   - 현재: NFTPage에 더미 데이터만 있음
   - 필요: 판매/구매 기능
   - 필요: 가격 설정 및 거래 내역

5. **NFT 조합 시스템**
   - 필요: 여러 NFT를 조합하여 더 강한 NFT 제작

---

## 📊 상태 관리 (appStore.js)

### 상태 구조

```javascript
state = {
  // 인증 상태
  isLoggedIn: false,
  loginType: null,  // 'email' | 'wallet' | null
  walletAddress: '',
  userBalance: '0 ETH',
  isWalletConnected: false,
  
  // 현재 사용자 정보
  currentUser: null,
  
  // 게임 데이터
  coins: 0,           // 포인트 (P)
  totalCoin: 0,       // 코인 (C)
  catFragments: 50,   // 고양이 파편
  level: 1,           // 사용자 레벨
  nftCount: 0,        // NFT 개수
  
  // 게임 모드별 레벨
  miningLevel: 1,
  huntingLevel: 1,
  explorationLevel: 1,
  productionLevel: 1,
  
  // 고양이 슬롯 (4개로 제한)
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
- `syncGameData(gameData)`: 게임 데이터 동기화
- `updateGameData(gameData)`: 게임 데이터 업데이트 (Firebase + localStorage)
- `updateCoins(coins)`: 코인 업데이트
- `updateTotalCoin(totalCoin)`: 토탈 코인 업데이트
- `updateCatFragments(fragments)`: 고양이 파편 업데이트
- `connectWalletToApp()`: 지갑 연결
- `disconnectWalletFromApp()`: 지갑 연결 해제
- `checkWalletStatus()`: 지갑 연결 상태 확인
- `setupWalletListeners()`: 지갑 이벤트 리스너 설정

---

## 🛣️ 라우팅 구조

### 공개 페이지 (로그인 없이 접근 가능)
- `/loading`: 로딩 화면
- `/login`: 로그인 화면
- `/signup`: 회원가입 화면
- `/forgot-password`: 비밀번호 찾기
- `/reset-password`: 비밀번호 리셋
- `/home`: 홈 화면
- `/main`: 메인 게임 화면

### 보호된 페이지 (로그인 필요)
- `/mining`: 채굴 페이지
- `/hunting`: 사냥 페이지
- `/exploration`: 탐험 페이지
- `/production`: 생산 페이지
- `/exchange`: 교환소
- `/quest`: 퀘스트
- `/inventory`: 인벤토리
- `/factory`: NFT 제작소
- `/nft`: NFT 마켓플레이스
- `/shop`: 상점
- `/settings`: 설정
- `/profile`: 프로필
- `/attendance`: 출석체크
- `/notification`: 알림

---

## 🔧 주요 유틸리티 함수

### userUtils.js
- `getCurrentUser()`: 현재 사용자 가져오기
- `getAllUsers()`: 모든 사용자 가져오기
- `createWalletUser(walletAddress)`: 지갑 사용자 생성
- `updateUserGameData(userId, gameData)`: 게임 데이터 업데이트
- `getI18nTexts()`: 다국어 텍스트 가져오기

### wallet.js
- `connectWallet()`: MetaMask 연결
- `getWalletAddress()`: 지갑 주소 가져오기
- `getWalletBalance(address)`: 지갑 잔액 조회
- `checkWalletConnection()`: 지갑 연결 상태 확인
- `onAccountsChanged(callback)`: 계정 변경 감지
- `onChainChanged(callback)`: 네트워크 변경 감지

### energyUtils.js
- `checkAndResetEnergy()`: 에너지 일일 리셋 확인

### nftLevelUtils.js
- `calculateMaxExp(level)`: 레벨별 최대 경험치 계산
- `initializeNFTExp(nft)`: NFT 경험치 초기화

### questUtils.js
- 퀘스트 시스템 관련 함수들

### referralUtils.js
- `getOrCreateInviteCode(userId)`: 초대 코드 가져오기 또는 생성
- `getReferralStats(userId)`: 추천인 통계 가져오기

---

## 🎨 UI/UX 특징

1. **반응형 디자인**: 모바일/데스크톱 지원
2. **다국어 지원**: English, 한국어
3. **BGM 재생**: 클릭 BGM 지원
4. **애니메이션**: 클릭 시 말풍선, 고양이 이모지, 포인트 획득 애니메이션
5. **로딩 상태**: 로딩 화면 및 로딩 상태 관리

---

## 🐛 알려진 문제점

1. **NFT 효과 미적용**
   - 슬롯에 NFT를 배치해도 실제 게임 보상에 영향 없음
   - NFT 속성(`miningEfficiency` 등)이 계산에 사용되지 않음

2. **블록체인 연동 부재**
   - NFT가 로컬 데이터로만 저장됨
   - 실제 블록체인에 민팅되지 않음

3. **마켓플레이스 미구현**
   - NFTPage에 더미 데이터만 있음
   - 실제 판매/구매 기능 없음

4. **레어리티 시스템 부재**
   - NFT에 별 등급만 있고 레어리티 등급 없음
   - 레어리티별 차별화 없음

---

## 📈 개선 권장사항

### 우선순위 높음 (High Priority)

1. **NFT 속성/레어리티 시스템 구현**
   - Common, Rare, Epic, Legendary 등급 추가
   - 레어리티별 시각적 차별화
   - 레어리티별 스탯 범위 설정

2. **NFT 게임 효과 적용**
   - 슬롯에 배치된 NFT의 속성을 게임 보상 계산에 반영
   - NFT 레벨에 따른 보너스 적용

3. **NFT 레벨업 시스템 개선**
   - 게임 플레이 시 NFT 경험치 획득
   - 레벨업 시 스탯 증가

### 우선순위 중간 (Medium Priority)

4. **블록체인 NFT 민팅**
   - ERC-721 또는 ERC-1155 스마트 컨트랙트 작성
   - 민팅 기능 구현

5. **NFT 마켓플레이스 구현**
   - 판매/구매 기능
   - 가격 설정 및 거래 내역

6. **NFT 조합 시스템**
   - 여러 NFT를 조합하여 더 강한 NFT 제작

### 우선순위 낮음 (Low Priority)

7. **리더보드 시스템**
8. **이벤트/시즌 시스템**
9. **토큰 이코노미 개선**
10. **자동화 기능**

---

## 📝 코드 품질

### 강점
- Vue 3 Composition API 적극 활용
- 모듈화된 유틸리티 함수들
- Firebase 연동 잘 구현됨
- 지갑 연결 기능 구현됨

### 개선 필요
- **SettingsPage.vue가 1477줄로 너무 큼** → 컴포넌트 분리 필요
- 일부 파일에 인코딩 문제 (주석에 깨진 문자)
- 타입 안정성 부족 (TypeScript 미사용)
- 테스트 코드 부재

---

## 🚀 배포 정보

- **배포 플랫폼**: GitHub Pages
- **배포 URL**: `https://mandarin1977.github.io/tdl`
- **빌드 명령어**: `npm run build`
- **배포 명령어**: `npm run deploy` (gh-pages 사용)

---

## 📚 참고 문서

프로젝트 루트에 22개의 분석 문서가 있습니다:
- `COMPLETE_PROJECT_ANALYSIS.md`
- `CURRENT_STATUS_ANALYSIS.md`
- `NFT_GAME_FEATURES_RECOMMENDATION.md`
- `PROJECT_ANALYSIS.md`
- 등등...

---

## 🎯 결론

**현재 상태**:
- 기본 게임 메커니즘 ✅
- 인증 시스템 ✅
- NFT 제작/인벤토리 시스템 ✅
- 지갑 연결 ✅
- **하지만 NFT가 게임에서 실제로 사용되지 않음** ❌

**가장 우선적으로 필요한 것**:
1. NFT 속성/레어리티 시스템 구현
2. NFT를 게임에서 실제 사용 (효과 적용)
3. NFT 레벨업 시스템 개선

이 프로젝트는 잘 구조화된 Vue 3 기반 NFT 클리커 게임이며, 블록체인 연동과 NFT 게임 효과 적용만 완료하면 완성도 높은 게임이 될 것입니다.

---

**분석 일자**: 2025-01-19  
**분석자**: AI Assistant

