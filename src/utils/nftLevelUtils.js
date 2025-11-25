/**
 * NFT 레벨업 시스템 유틸리티
 */

/**
 * 레벨업 필요 경험치 계산
 * @param {number} level - 현재 레벨
 * @returns {number} 레벨업에 필요한 경험치
 */
export function calculateMaxExp(level) {
  return (level + 1) * 100
}

/**
 * 레벨업 가능 여부 확인
 * @param {object} nft - NFT 객체
 * @returns {boolean} 레벨업 가능 여부
 */
export function canLevelUp(nft) {
  if (!nft) return false
  const currentExp = nft.exp || 0
  const maxExp = nft.maxExp || calculateMaxExp(nft.level || 1)
  return currentExp >= maxExp
}

/**
 * 레벨업 비용 계산
 * @param {number} level - 현재 레벨
 * @returns {number} 레벨업에 필요한 코인
 */
export function getLevelUpCost(level) {
  return level * 50 // 레벨 2: 100코인, 레벨 3: 150코인...
}

/**
 * 레벨업 시 스탯 증가량 계산
 * @param {object} nft - NFT 객체
 * @returns {number} 스탯 증가량 (%)
 */
export function calculateStatIncrease(nft) {
  if (!nft || !nft.rarity) return 5 // 기본 5% 증가
  
  // 레어리티에 따라 증가량 다름
  const rarityMultiplier = {
    common: 1.0,    // +5%
    rare: 1.1,      // +5.5%
    epic: 1.2,      // +6%
    legendary: 1.3  // +6.5%
  }
  
  const baseIncrease = 5 // 기본 5% 증가
  const multiplier = rarityMultiplier[nft.rarity] || 1.0
  
  return Math.floor(baseIncrease * multiplier)
}

/**
 * NFT에 경험치 초기화 (기존 NFT 호환성)
 * @param {object} nft - NFT 객체
 * @returns {object} 경험치가 초기화된 NFT 객체
 */
export function initializeNFTExp(nft) {
  if (!nft) return nft
  
  return {
    ...nft,
    exp: nft.exp !== undefined ? nft.exp : 0,
    maxExp: nft.maxExp !== undefined ? nft.maxExp : calculateMaxExp(nft.level || 1)
  }
}

