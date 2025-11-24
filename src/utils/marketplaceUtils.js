// NFT 마켓플레이스 유틸리티

// 마켓플레이스 데이터 로드
export const getMarketplace = () => {
  const marketplace = localStorage.getItem('marketplace')
  return marketplace ? JSON.parse(marketplace) : []
}

// 마켓플레이스 데이터 저장
export const saveMarketplace = (marketplace) => {
  localStorage.setItem('marketplace', JSON.stringify(marketplace))
}

// NFT 판매 등록
export const listNFT = (nft, price, sellerAddress) => {
  const marketplace = getMarketplace()
  
  // 새 항목 추가
  const listing = {
    id: `market_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    sellerAddress: sellerAddress,
    nftId: nft.id,
    nftData: { ...nft },
    price: price,
    priceType: 'COIN', // 'COIN' 또는 'ETH'
    listedAt: Date.now(),
    status: 'listed' // 'listed' | 'sold' | 'cancelled'
  }
  
  marketplace.push(listing)
  saveMarketplace(marketplace)
  
  return listing
}

// NFT 구매
export const buyNFT = (listingId, buyerAddress) => {
  const marketplace = getMarketplace()
  const listingIndex = marketplace.findIndex(item => item.id === listingId && item.status === 'listed')
  
  if (listingIndex === -1) {
    return { success: false, error: '판매 중인 NFT가 아닙니다.' }
  }
  
  const listing = marketplace[listingIndex]
  
  // 판매자와 구매자가 같은 경우 체크
  if (listing.sellerAddress === buyerAddress) {
    return { success: false, error: '자신의 NFT는 구매할 수 없습니다.' }
  }
  
  // 상태 변경
  marketplace[listingIndex].status = 'sold'
  marketplace[listingIndex].soldAt = Date.now()
  marketplace[listingIndex].buyerAddress = buyerAddress
  
  saveMarketplace(marketplace)
  
  return {
    success: true,
    listing: listing,
    nftData: listing.nftData
  }
}

// 판매 취소
export const cancelListing = (listingId, sellerAddress) => {
  const marketplace = getMarketplace()
  const listingIndex = marketplace.findIndex(
    item => item.id === listingId && 
    item.sellerAddress === sellerAddress && 
    item.status === 'listed'
  )
  
  if (listingIndex === -1) {
    return { success: false, error: '판매 중인 NFT가 아닙니다.' }
  }
  
  marketplace[listingIndex].status = 'cancelled'
  marketplace[listingIndex].cancelledAt = Date.now()
  
  saveMarketplace(marketplace)
  
  return {
    success: true,
    listing: marketplace[listingIndex]
  }
}

// 내 판매 목록 가져오기
export const getMyListings = (sellerAddress) => {
  const marketplace = getMarketplace()
  return marketplace.filter(
    item => item.sellerAddress === sellerAddress && item.status === 'listed'
  )
}

// 판매 중인 NFT 목록 가져오기
export const getActiveListings = () => {
  const marketplace = getMarketplace()
  return marketplace.filter(item => item.status === 'listed')
}

// 특정 NFT가 판매 중인지 확인
export const isNFTListed = (nftId) => {
  const marketplace = getMarketplace()
  return marketplace.some(
    item => item.nftId === nftId && item.status === 'listed'
  )
}

// 마켓플레이스에서 NFT 제거 (판매 완료 후)
export const removeFromMarketplace = (listingId) => {
  const marketplace = getMarketplace()
  const filtered = marketplace.filter(item => item.id !== listingId)
  saveMarketplace(filtered)
}

// 마켓플레이스 통계
export const getMarketplaceStats = () => {
  const marketplace = getMarketplace()
  const activeListings = marketplace.filter(item => item.status === 'listed')
  const soldListings = marketplace.filter(item => item.status === 'sold')
  
  return {
    totalListings: marketplace.length,
    activeListings: activeListings.length,
    soldListings: soldListings.length,
    totalVolume: soldListings.reduce((sum, item) => sum + (item.price || 0), 0)
  }
}

