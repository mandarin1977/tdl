# NFT 마켓플레이스 구현 방법

## 📊 현재 상태

- 사용자 데이터: `localStorage`에 저장 (각 사용자별로 분리)
- NFT 데이터: 각 사용자의 `inventory` 배열에 저장
- 블록체인 연동: 아직 없음 (로컬 데이터만)

---

## 🎯 구현 방법 (3가지 옵션)

### 방법 1: 중앙화 마켓플레이스 (localStorage 기반) ⭐⭐

**장점**:
- 스마트 컨트랙트 불필요
- 빠르게 구현 가능
- 가스비 없음
- 즉시 테스트 가능

**단점**:
- 완전한 탈중앙화 아님
- 브라우저별로 데이터 분리됨
- 나중에 블록체인 연동 필요

**구현 방법**:

#### 1. 마켓플레이스 데이터 저장
```javascript
// localStorage에 마켓플레이스 데이터 저장
localStorage.setItem('marketplace', JSON.stringify([
  {
    id: 'market_1',
    sellerAddress: '0x1234...',
    nftId: 1234567890,
    nftData: { ... }, // NFT 전체 데이터
    price: 0.01, // ETH 또는 코인
    priceType: 'ETH', // 'ETH' | 'COIN'
    listedAt: Date.now(),
    status: 'listed' // 'listed' | 'sold' | 'cancelled'
  }
]))
```

#### 2. NFT 판매 기능
- 인벤토리에서 NFT 선택
- "판매하기" 버튼 클릭
- 가격 입력 (ETH 또는 코인)
- 마켓플레이스에 등록
- 판매자의 인벤토리에서 제거 (또는 `isListed: true` 플래그)

#### 3. NFT 구매 기능
- 마켓플레이스에서 NFT 목록 표시
- 구매 버튼 클릭
- 구매자 인벤토리에 추가
- 판매자에게 코인/ETH 전송 (게임 내 코인으로)
- 마켓플레이스에서 제거

#### 4. 데이터 구조
```javascript
// 마켓플레이스 항목
{
  id: 'market_1',
  sellerAddress: '0x1234...',
  sellerName: 'User1', // 선택사항
  nftId: 1234567890,
  nftData: {
    id: 1234567890,
    imageId: 5,
    name: 'Cat 5',
    stars: 4,
    level: 10,
    rarity: 'epic',
    stats: [...],
    // ... 기타 NFT 데이터
  },
  price: 0.01,
  priceType: 'ETH', // 또는 'COIN'
  listedAt: Date.now(),
  status: 'listed'
}
```

#### 5. 구현 위치
- `NFTPage.vue` 수정 또는 새 `MarketplacePage.vue` 생성
- `src/utils/marketplaceUtils.js` 생성 (마켓플레이스 로직)

---

### 방법 2: 스마트 컨트랙트 기반 (완전 탈중앙화) ⭐⭐⭐

**장점**:
- 완전한 탈중앙화
- 진정한 NFT 소유권
- OpenSea 등 외부 마켓플레이스와 호환 가능
- 신뢰성 높음

**단점**:
- 스마트 컨트랙트 작성/배포 필요
- 가스비 발생
- 구현 복잡도 높음
- 시간 소요

**구현 방법**:

#### 1. 스마트 컨트랙트 작성
```solidity
// Marketplace.sol
contract NFTMarketplace {
  struct Listing {
    address seller;
    uint256 tokenId;
    uint256 price;
    bool active;
  }
  
  mapping(uint256 => Listing) public listings;
  
  function listNFT(uint256 tokenId, uint256 price) public {
    // NFT 소유권 확인
    // 마켓플레이스에 등록
  }
  
  function buyNFT(uint256 tokenId) public payable {
    // 가격 확인
    // ETH 전송
    // NFT 소유권 이전
  }
  
  function cancelListing(uint256 tokenId) public {
    // 판매 취소
  }
}
```

#### 2. 프론트엔드 연동
- `ethers.js`로 컨트랙트 호출
- 트랜잭션 진행 상황 표시
- 블록체인에서 소유권 확인

#### 3. 구현 위치
- `src/utils/marketplaceContract.js` 생성
- `NFTPage.vue` 수정

---

### 방법 3: 하이브리드 방식 (중앙 서버 + 블록체인) ⭐⭐

**장점**:
- 빠른 조회 (중앙 서버)
- 블록체인으로 소유권 보장
- 유연한 확장성

**단점**:
- 백엔드 서버 필요
- 구현 복잡도 높음

**구현 방법**:
- 중앙 서버에 마켓플레이스 데이터 저장
- 블록체인으로 실제 거래 처리
- 서버는 조회/필터링만 담당

---

## 💡 추천: 단계적 접근

### Phase 1: 중앙화 마켓플레이스 (지금 바로 가능) ⭐⭐

**이유**:
- 빠르게 구현 가능
- 게임플레이 테스트 가능
- 사용자 피드백 수집
- 나중에 블록체인 연동 가능

**구현 내용**:
1. `localStorage`에 마켓플레이스 데이터 저장
2. NFTPage에 "마켓플레이스" 탭 추가
3. 판매/구매 기능 구현
4. 게임 내 코인으로 거래 (ETH는 나중에)

---

### Phase 2: 블록체인 연동 (나중에) ⭐⭐⭐

**이유**:
- 스마트 컨트랙트 작성/배포 필요
- 테스트넷에서 먼저 테스트
- 가스비 최적화 필요

**구현 내용**:
1. 스마트 컨트랙트 작성/배포
2. 프론트엔드 연동
3. 실제 ETH 거래

---

## 🛠️ Phase 1 구현 상세 (중앙화 마켓플레이스)

### 1. 데이터 구조

```javascript
// localStorage에 저장
'marketplace': [
  {
    id: 'market_1',
    sellerAddress: '0x1234...',
    nftId: 1234567890,
    nftData: { ... },
    price: 1000, // 코인
    priceType: 'COIN',
    listedAt: 1234567890,
    status: 'listed'
  }
]
```

### 2. 주요 기능

#### NFT 판매
```javascript
// 인벤토리에서 NFT 선택 → "판매하기" 클릭
function listNFT(nft, price) {
  // 1. 마켓플레이스 데이터 로드
  const marketplace = getMarketplace()
  
  // 2. 새 항목 추가
  marketplace.push({
    id: `market_${Date.now()}`,
    sellerAddress: currentUser.walletAddress,
    nftId: nft.id,
    nftData: nft,
    price: price,
    priceType: 'COIN',
    listedAt: Date.now(),
    status: 'listed'
  })
  
  // 3. 판매자 인벤토리에서 제거 (또는 isListed 플래그)
  removeNFTFromInventory(nft.id)
  
  // 4. 마켓플레이스 저장
  saveMarketplace(marketplace)
}
```

#### NFT 구매
```javascript
function buyNFT(listing) {
  const currentUser = getCurrentUser()
  
  // 1. 구매자 코인 확인
  if (currentUser.gameData.totalCoin < listing.price) {
    alert('코인이 부족합니다!')
    return
  }
  
  // 2. 구매자 인벤토리에 추가
  addNFTToInventory(listing.nftData)
  
  // 3. 구매자 코인 차감
  updateUserGameData(currentUser.id, {
    totalCoin: currentUser.gameData.totalCoin - listing.price
  })
  
  // 4. 판매자 코인 증가
  const seller = getUserByWalletAddress(listing.sellerAddress)
  updateUserGameData(seller.id, {
    totalCoin: (seller.gameData.totalCoin || 0) + listing.price
  })
  
  // 5. 마켓플레이스에서 제거
  removeFromMarketplace(listing.id)
}
```

### 3. UI 구성

#### NFTPage 구조
```
NFTPage
├── 탭 메뉴
│   ├── 내 NFT (현재 인벤토리)
│   └── 마켓플레이스 (새 탭)
│
└── 마켓플레이스 탭
    ├── 필터
    │   ├── 레어리티
    │   ├── 가격대
    │   └── 정렬
    │
    └── NFT 목록
        ├── NFT 카드
        │   ├── 이미지
        │   ├── 정보 (이름, 레어리티, 레벨)
        │   ├── 가격
        │   └── 구매 버튼
        │
        └── 내 NFT 판매하기 버튼
```

### 4. 파일 구조

```
src/
├── pages/
│   └── NFTPage.vue (수정)
│
├── utils/
│   └── marketplaceUtils.js (NEW)
│       ├── getMarketplace()
│       ├── saveMarketplace()
│       ├── listNFT()
│       ├── buyNFT()
│       ├── cancelListing()
│       └── getMyListings()
│
└── components/
    └── NFTMarketplaceCard.vue (NEW, 선택사항)
```

---

## 🔄 거래 흐름

### 판매 흐름
```
1. 인벤토리에서 NFT 선택
2. "판매하기" 버튼 클릭
3. 가격 입력 팝업
4. 확인 → 마켓플레이스에 등록
5. 인벤토리에서 제거 (또는 "판매중" 표시)
```

### 구매 흐름
```
1. 마켓플레이스에서 NFT 확인
2. "구매하기" 버튼 클릭
3. 코인 확인
4. 확인 → 구매 처리
5. 구매자 인벤토리에 추가
6. 판매자에게 코인 전송
7. 마켓플레이스에서 제거
```

---

## ⚠️ 주의사항

### 1. 데이터 동기화
- 여러 브라우저/기기에서 동기화 안됨
- 같은 브라우저에서만 작동
- 나중에 백엔드 서버 필요

### 2. 보안
- 가짜 거래 가능 (localStorage 조작)
- 실제 가치 있는 NFT는 블록체인 필수
- 게임 내 코인 거래는 괜찮음

### 3. 확장성
- 사용자가 많아지면 localStorage 한계
- 나중에 백엔드 서버로 마이그레이션 필요

---

## 🎯 결론

**추천 방법**: **Phase 1 (중앙화 마켓플레이스)** 먼저 구현

**이유**:
1. 빠르게 구현 가능 (1-2일)
2. 게임플레이 테스트 가능
3. 사용자 피드백 수집
4. 나중에 블록체인 연동 가능

**구현 순서**:
1. `marketplaceUtils.js` 생성
2. NFTPage에 마켓플레이스 탭 추가
3. 판매 기능 구현
4. 구매 기능 구현
5. 필터링/정렬 추가

**나중에**:
- 블록체인 연동 (스마트 컨트랙트)
- 실제 ETH 거래
- OpenSea 연동

