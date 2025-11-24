/**
 * NFT 레어리티 시스템 유틸리티
 */

// 레어리티 등급 정의
export const RARITY_TIERS = {
  COMMON: 'common',
  RARE: 'rare',
  EPIC: 'epic',
  LEGENDARY: 'legendary'
}

// 레어리티 확률 (누적)
const RARITY_PROBABILITIES = {
  [RARITY_TIERS.COMMON]: 0.70,      // 70%
  [RARITY_TIERS.RARE]: 0.90,        // 20% (70% + 20%)
  [RARITY_TIERS.EPIC]: 0.98,        // 8% (90% + 8%)
  [RARITY_TIERS.LEGENDARY]: 1.00    // 2% (98% + 2%)
}

// 레어리티별 별 개수 범위
const RARITY_STARS = {
  [RARITY_TIERS.COMMON]: { min: 2, max: 3 },
  [RARITY_TIERS.RARE]: { min: 3, max: 4 },
  [RARITY_TIERS.EPIC]: { min: 4, max: 5 },
  [RARITY_TIERS.LEGENDARY]: { min: 5, max: 5 }
}

// 레어리티별 속성 범위 (퍼센트 증가)
const RARITY_STATS = {
  [RARITY_TIERS.COMMON]: {
    miningEfficiency: { min: 5, max: 15 },      // 5-15%
    huntingDamage: { min: 5, max: 15 },
    explorationReward: { min: 5, max: 15 },
    productionSpeed: { min: 5, max: 15 }
  },
  [RARITY_TIERS.RARE]: {
    miningEfficiency: { min: 15, max: 30 },    // 15-30%
    huntingDamage: { min: 15, max: 30 },
    explorationReward: { min: 15, max: 30 },
    productionSpeed: { min: 15, max: 30 }
  },
  [RARITY_TIERS.EPIC]: {
    miningEfficiency: { min: 30, max: 60 },    // 30-60%
    huntingDamage: { min: 30, max: 60 },
    explorationReward: { min: 30, max: 60 },
    productionSpeed: { min: 30, max: 60 }
  },
  [RARITY_TIERS.LEGENDARY]: {
    miningEfficiency: { min: 60, max: 100 },  // 60-100%
    huntingDamage: { min: 60, max: 100 },
    explorationReward: { min: 60, max: 100 },
    productionSpeed: { min: 60, max: 100 }
  }
}

// 레어리티별 색상
export const RARITY_COLORS = {
  [RARITY_TIERS.COMMON]: {
    primary: '#9E9E9E',      // 회색
    secondary: '#BDBDBD',
    border: '#757575',
    glow: 'rgba(158, 158, 158, 0.3)'
  },
  [RARITY_TIERS.RARE]: {
    primary: '#2196F3',       // 파란색
    secondary: '#64B5F6',
    border: '#1976D2',
    glow: 'rgba(33, 150, 243, 0.3)'
  },
  [RARITY_TIERS.EPIC]: {
    primary: '#9C27B0',       // 보라색
    secondary: '#BA68C8',
    border: '#7B1FA2',
    glow: 'rgba(156, 39, 176, 0.3)'
  },
  [RARITY_TIERS.LEGENDARY]: {
    primary: '#FF9800',       // 주황색/금색
    secondary: '#FFB74D',
    border: '#F57C00',
    glow: 'rgba(255, 152, 0, 0.4)'
  }
}

// 레어리티별 한글 이름
export const RARITY_NAMES = {
  [RARITY_TIERS.COMMON]: '일반',
  [RARITY_TIERS.RARE]: '레어',
  [RARITY_TIERS.EPIC]: '에픽',
  [RARITY_TIERS.LEGENDARY]: '레전더리'
}

// 레어리티별 영문 이름
export const RARITY_NAMES_EN = {
  [RARITY_TIERS.COMMON]: 'Common',
  [RARITY_TIERS.RARE]: 'Rare',
  [RARITY_TIERS.EPIC]: 'Epic',
  [RARITY_TIERS.LEGENDARY]: 'Legendary'
}

/**
 * 랜덤 레어리티 계산
 * @returns {string} 레어리티 등급
 */
export function calculateRarity() {
  const random = Math.random()
  
  if (random < RARITY_PROBABILITIES[RARITY_TIERS.COMMON]) {
    return RARITY_TIERS.COMMON
  } else if (random < RARITY_PROBABILITIES[RARITY_TIERS.RARE]) {
    return RARITY_TIERS.RARE
  } else if (random < RARITY_PROBABILITIES[RARITY_TIERS.EPIC]) {
    return RARITY_TIERS.EPIC
  } else {
    return RARITY_TIERS.LEGENDARY
  }
}

/**
 * 레어리티에 따른 별 개수 생성
 * @param {string} rarity - 레어리티 등급
 * @returns {number} 별 개수 (2-5)
 */
export function getStarsByRarity(rarity) {
  const range = RARITY_STARS[rarity] || RARITY_STARS[RARITY_TIERS.COMMON]
  return Math.floor(Math.random() * (range.max - range.min + 1)) + range.min
}

/**
 * 레어리티에 따른 게임 속성 생성
 * @param {string} rarity - 레어리티 등급
 * @returns {object} 게임 속성 객체
 */
export function generateStatsByRarity(rarity) {
  const statsRange = RARITY_STATS[rarity] || RARITY_STATS[RARITY_TIERS.COMMON]
  
  const getRandomStat = (range) => {
    return Math.floor(Math.random() * (range.max - range.min + 1)) + range.min
  }
  
  return {
    miningEfficiency: getRandomStat(statsRange.miningEfficiency),
    huntingDamage: getRandomStat(statsRange.huntingDamage),
    explorationReward: getRandomStat(statsRange.explorationReward),
    productionSpeed: getRandomStat(statsRange.productionSpeed)
  }
}

/**
 * NFT 객체에 레어리티 정보 추가
 * @param {object} nft - NFT 객체
 * @returns {object} 레어리티 정보가 추가된 NFT 객체
 */
export function addRarityToNFT(nft) {
  // 이미 레어리티가 있으면 그대로 사용
  if (nft.rarity) {
    return nft
  }
  
  // 레어리티 계산
  const rarity = calculateRarity()
  
  // 별 개수 설정 (레어리티에 따라)
  const stars = nft.stars || getStarsByRarity(rarity)
  
  // 게임 속성 생성
  const gameStats = generateStatsByRarity(rarity)
  
  return {
    ...nft,
    rarity,
    stars,
    ...gameStats
  }
}

/**
 * 레어리티별 CSS 클래스 가져오기
 * @param {string} rarity - 레어리티 등급
 * @returns {string} CSS 클래스명
 */
export function getRarityClass(rarity) {
  return `rarity-${rarity}`
}

/**
 * 레어리티별 스타일 객체 가져오기
 * @param {string} rarity - 레어리티 등급
 * @returns {object} 스타일 객체
 */
export function getRarityStyle(rarity) {
  if (!rarity) return {}
  const colors = RARITY_COLORS[rarity] || RARITY_COLORS[RARITY_TIERS.COMMON]
  return {
    '--rarity-color': colors.primary,
    '--rarity-secondary': colors.secondary,
    '--rarity-border': colors.border,
    '--rarity-glow': colors.glow
  }
}

/**
 * 레어리티 이름 가져오기 (한글)
 * @param {string} rarity - 레어리티 등급
 * @returns {string} 한글 이름
 */
export function getRarityName(rarity) {
  return RARITY_NAMES[rarity] || RARITY_NAMES[RARITY_TIERS.COMMON]
}

/**
 * 레어리티 이름 가져오기 (영문)
 * @param {string} rarity - 레어리티 등급
 * @returns {string} 영문 이름
 */
export function getRarityNameEn(rarity) {
  return RARITY_NAMES_EN[rarity] || RARITY_NAMES_EN[RARITY_TIERS.COMMON]
}

/**
 * 레어리티 색상 가져오기
 * @param {string} rarity - 레어리티 등급
 * @returns {object} 색상 객체
 */
export function getRarityColors(rarity) {
  return RARITY_COLORS[rarity] || RARITY_COLORS[RARITY_TIERS.COMMON]
}

