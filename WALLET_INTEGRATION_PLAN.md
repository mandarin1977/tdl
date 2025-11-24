# NFT 게임 지갑 연결 통합 계획서

## 📋 개요

현재 TDL 게임은 이메일/비밀번호 기반 로그인을 사용하고 있습니다. NFT 게임의 특성상 Web3 지갑 연결 기능을 추가하여 블록체인과의 상호작용을 가능하게 해야 합니다.

---

## 🎯 목표

1. **MetaMask 등 Web3 지갑 연결 기능 추가**
2. **지갑 주소를 사용자 식별자로 사용**
3. **블록체인 기반 NFT 민팅/전송 기능**
4. **기존 이메일 로그인과의 호환성 유지** (선택적)

---

## 🏗️ 아키텍처 설계

### 1. 기술 스택

#### 필수 라이브러리
```json
{
  "ethers": "^6.x.x",  // 또는 "web3": "^4.x.x"
  "@metamask/detect-provider": "^2.x.x"  // 선택사항
}
```

#### 추천: ethers.js
- 최신 버전 (v6) 사용
- TypeScript 지원 우수
- MetaMask와 호환성 좋음
- 가벼움

---

### 2. 데이터 구조 변경

#### 사용자 데이터 구조
```javascript
// 기존
{
  id: "email@example.com",
  email: "email@example.com",
  password: "hashed",
  gameData: { ... }
}

// 지갑 연결 후
{
  id: "0x1234...5678",  // 지갑 주소
  walletAddress: "0x1234...5678",
  email: "email@example.com",  // 선택적 (기존 사용자)
  gameData: { ... },
  // NFT 관련
  nfts: [
    {
      tokenId: 1,
      contractAddress: "0x...",
      metadata: { ... },
      gameData: { catType: 1, level: 5, ... }
    }
  ]
}
```

#### localStorage 키 구조
```
users: [{ id: "0x...", ... }]  // 지갑 주소를 키로 사용
wallet_0x1234...5678: { gameData: {...} }  // 지갑별 게임 데이터
```

---

### 3. 파일 구조

```
src/
├── utils/
│   ├── wallet.js          # 지갑 연결 유틸리티 (NEW)
│   ├── web3.js            # Web3 관련 함수 (NEW)
│   └── userUtils.js       # 수정 (지갑 주소 지원)
├── store/
│   └── appStore.js        # 수정 (지갑 상태 추가)
├── pages/
│   ├── LoginScreen.vue    # 수정 (지갑 연결 옵션 추가)
│   ├── NFTPage.vue        # 수정 (실제 지갑 연결)
│   └── WalletConnect.vue  # NEW (지갑 연결 컴포넌트)
└── components/
    └── WalletButton.vue   # NEW (지갑 연결 버튼)
```

---

## 🔄 구현 단계

### Phase 1: 기본 지갑 연결 (필수)

#### 1.1 라이브러리 설치
```bash
npm install ethers
```

#### 1.2 지갑 연결 유틸리티 생성 (`src/utils/wallet.js`)
```javascript
// 주요 기능:
- connectWallet()           // MetaMask 연결
- disconnectWallet()        // 연결 해제
- getWalletAddress()        // 현재 연결된 지갑 주소
- getWalletBalance()        // 지갑 잔액 조회
- switchNetwork()           // 네트워크 전환 (Ethereum, Polygon 등)
- signMessage()             // 메시지 서명 (인증용)
```

#### 1.3 로그인 화면 수정
- "지갑 연결" 버튼 추가
- MetaMask 설치 안내
- 지갑 연결 후 자동 로그인

#### 1.4 사용자 데이터 저장 방식 변경
- 지갑 주소를 사용자 ID로 사용
- localStorage에 지갑 주소별로 데이터 저장

---

### Phase 2: NFT 기능 통합 (중요)

#### 2.1 NFT 컨트랙트 연동
```javascript
// 스마트 컨트랙트 인터페이스
- mintNFT(catType, metadata)    // NFT 민팅
- transferNFT(to, tokenId)      // NFT 전송
- getOwnedNFTs(address)         // 소유 NFT 조회
- getNFTMetadata(tokenId)        // NFT 메타데이터 조회
```

#### 2.2 게임 내 NFT 시스템
- 고양이 NFT 민팅 (FactoryPage에서)
- NFT를 게임 내 아이템으로 사용
- NFT 전송/거래 기능

#### 2.3 NFT 데이터 동기화
- 블록체인에서 NFT 소유권 확인
- 게임 데이터와 NFT 메타데이터 동기화

---

### Phase 3: 고급 기능 (선택)

#### 3.1 다중 지갑 지원
- MetaMask 외 다른 지갑 지원 (WalletConnect, Coinbase Wallet 등)

#### 3.2 네트워크 선택
- Ethereum Mainnet
- Polygon (가스비 절감)
- 테스트넷 (개발용)

#### 3.3 트랜잭션 관리
- 트랜잭션 상태 추적
- 가스비 추정
- 트랜잭션 히스토리

---

## 🔐 인증 플로우

### 현재 플로우 (이메일/비밀번호)
```
1. 사용자가 이메일/비밀번호 입력
2. localStorage에서 사용자 확인
3. sessionStorage에 저장
4. 게임 시작
```

### 새로운 플로우 (지갑 연결)
```
1. 사용자가 "지갑 연결" 클릭
2. MetaMask 팝업 표시
3. 사용자가 지갑 연결 승인
4. 지갑 주소 획득
5. 지갑 주소로 사용자 데이터 조회/생성
6. sessionStorage에 저장
7. 게임 시작
```

### 하이브리드 플로우 (기존 사용자)
```
1. 기존 이메일 로그인 사용자
2. 지갑 연결 옵션 제공
3. 지갑 주소를 기존 계정에 연결
4. 이후 지갑 주소로 로그인 가능
```

---

## 📊 상태 관리 업데이트

### appStore.js 수정
```javascript
const state = reactive({
  // 인증 상태
  isLoggedIn: false,
  loginType: null,  // 'email' | 'wallet'
  walletAddress: '',  // 지갑 주소
  walletBalance: '0 ETH',  // 지갑 잔액
  walletProvider: null,  // Web3 Provider
  isWalletConnected: false,
  
  // 기존 필드들...
})
```

### 새로운 함수
```javascript
- connectWallet()           // 지갑 연결
- disconnectWallet()        // 지갑 연결 해제
- updateWalletBalance()     // 잔액 업데이트
- checkWalletConnection()   // 연결 상태 확인
```

---

## 🎮 게임 플레이 통합

### 1. NFT 민팅 시나리오
```
1. 사용자가 FactoryPage에서 고양이 제작
2. 고양이 파편 소모
3. "NFT로 민팅" 버튼 클릭
4. MetaMask 트랜잭션 승인
5. 스마트 컨트랙트 호출 (mintNFT)
6. 트랜잭션 완료 대기
7. NFT 소유권 확인
8. 게임 내 NFT 목록 업데이트
```

### 2. NFT 사용 시나리오
```
1. 사용자가 게임 모드 선택 (채굴/사냥 등)
2. 인벤토리에서 NFT 선택
3. NFT를 슬롯에 배치
4. NFT의 게임 속성 적용 (효율 증가 등)
```

---

## 🔧 기술적 고려사항

### 1. 에러 처리
- MetaMask 미설치 시 안내
- 네트워크 오류 처리
- 트랜잭션 실패 처리
- 가스비 부족 처리

### 2. 보안
- 지갑 주소 검증
- 메시지 서명을 통한 인증
- 프라이빗 키는 절대 저장하지 않음

### 3. 성능
- 블록체인 조회 최소화 (캐싱)
- 비동기 처리
- 로딩 상태 표시

### 4. 사용자 경험
- 지갑 연결 상태 표시
- 트랜잭션 진행 상황 표시
- 간단한 설명 제공

---

## 📝 구현 체크리스트

### Phase 1: 기본 연결
- [ ] ethers.js 설치
- [ ] `src/utils/wallet.js` 생성
- [ ] MetaMask 연결 함수 구현
- [ ] 지갑 주소 조회 함수 구현
- [ ] 지갑 잔액 조회 함수 구현
- [ ] LoginScreen에 지갑 연결 버튼 추가
- [ ] 사용자 데이터를 지갑 주소 기반으로 변경
- [ ] appStore에 지갑 상태 추가

### Phase 2: NFT 통합
- [ ] 스마트 컨트랙트 ABI 정의
- [ ] NFT 민팅 함수 구현
- [ ] NFT 조회 함수 구현
- [ ] FactoryPage에 NFT 민팅 기능 추가
- [ ] NFTPage에 실제 NFT 표시
- [ ] NFT 전송 기능 구현

### Phase 3: 고급 기능
- [ ] 다중 네트워크 지원
- [ ] 트랜잭션 히스토리
- [ ] 가스비 추정
- [ ] 다른 지갑 지원 (WalletConnect 등)

---

## 🚀 시작하기

### 1단계: 라이브러리 설치
```bash
npm install ethers
```

### 2단계: 기본 지갑 연결 구현
`src/utils/wallet.js` 파일을 생성하고 기본 연결 기능 구현

### 3단계: 로그인 화면 수정
지갑 연결 옵션 추가

### 4단계: 테스트
- MetaMask 설치
- 테스트넷 연결
- 지갑 연결 테스트

---

## ⚠️ 주의사항

1. **스마트 컨트랙트 필요**: NFT 민팅을 위해서는 스마트 컨트랙트가 필요합니다.
2. **가스비**: 모든 트랜잭션은 가스비가 필요합니다 (테스트넷 사용 권장).
3. **네트워크 선택**: 어떤 블록체인을 사용할지 결정 필요 (Ethereum, Polygon 등).
4. **기존 사용자**: 기존 이메일 로그인 사용자와의 호환성 고려 필요.

---

## 📚 참고 자료

- [ethers.js 공식 문서](https://docs.ethers.org/)
- [MetaMask 개발자 문서](https://docs.metamask.io/)
- [Web3.js 공식 문서](https://web3js.readthedocs.io/)

---

## 💡 다음 단계

1. **스마트 컨트랙트 개발** (Solidity)
   - ERC-721 또는 ERC-1155 표준 사용
   - 민팅 함수 구현
   - 메타데이터 관리

2. **백엔드 API** (선택적)
   - NFT 메타데이터 서버
   - 게임 데이터 동기화
   - 트랜잭션 모니터링

3. **프론트엔드 통합**
   - 지갑 연결 UI/UX
   - 트랜잭션 상태 표시
   - 에러 처리

---

이 계획서를 기반으로 단계별로 구현하면 됩니다. 먼저 Phase 1부터 시작하는 것을 권장합니다!

