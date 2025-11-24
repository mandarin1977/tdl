// 사용자 데이터 관리 유틸리티 함수들

// 모든 사용자 가져오기
export const getAllUsers = () => {
  return JSON.parse(localStorage.getItem('users') || '[]')
}

// 현재 로그인한 사용자 가져오기
export const getCurrentUser = () => {
  const userData = sessionStorage.getItem('currentUser')
  return userData ? JSON.parse(userData) : null
}

// 지갑 주소로 사용자 찾기
export const getUserByWalletAddress = (walletAddress) => {
  const users = getAllUsers()
  return users.find(u => u.id === walletAddress || u.walletAddress === walletAddress)
}

// 지갑 주소로 사용자 생성
export const createWalletUser = (walletAddress) => {
  const users = getAllUsers()
  
  // 이미 존재하는지 확인
  const existingUser = getUserByWalletAddress(walletAddress)
  if (existingUser) {
    return existingUser
  }
  
  // 새 사용자 생성
  const newUser = {
    id: walletAddress,
    walletAddress: walletAddress,
    loginType: 'wallet',
    createdAt: new Date().toISOString(),
    gameData: {
      level: 1,
      coins: 0,
      totalCoin: 0,
      catFragments: 50,
      nftCount: 0,
      miningLevel: 1,
      huntingLevel: 1,
      explorationLevel: 1,
      productionLevel: 1,
      miningCats: [null, null, null, null, null, null],
      huntingCats: [null, null, null, null, null, null],
      explorationCats: [null, null, null, null, null, null],
      productionCats: [null, null, null, null, null, null],
      inventory: []
    }
  }
  
  users.push(newUser)
  localStorage.setItem('users', JSON.stringify(users))
  
  return newUser
}

// 사용자 게임 데이터 업데이트
export const updateUserGameData = async (userId, gameData) => {
  const currentUser = getCurrentUser()
  
  // localStorage 방식
  const users = getAllUsers()
  const userIndex = users.findIndex(user => user.id === userId)
  
  if (userIndex !== -1) {
    users[userIndex].gameData = { ...users[userIndex].gameData, ...gameData }
    localStorage.setItem('users', JSON.stringify(users))
    
    // 현재 사용자 정보도 업데이트
    if (currentUser && currentUser.id === userId) {
      currentUser.gameData = { ...currentUser.gameData, ...gameData }
      sessionStorage.setItem('currentUser', JSON.stringify(currentUser))
    }
    
    return true
  }
  return false
}

// 사용자 코인 업데이트
export const updateUserCoins = (userId, coins) => {
  return updateUserGameData(userId, { coins })
}

// 사용자 토탈 코인 업데이트 (Coin C)
export const updateUserTotalCoin = (userId, totalCoin) => {
  return updateUserGameData(userId, { totalCoin })
}

// 동시에 포인트와 코인 업데이트
export const updateUserPointsAndCoins = (userId, coins, totalCoin) => {
  return updateUserGameData(userId, { coins, totalCoin })
}

// 사용자 레벨 업데이트
export const updateUserLevel = (userId, level) => {
  return updateUserGameData(userId, { level })
}

// 사용자 NFT 개수 업데이트
export const updateUserNFTCount = (userId, nftCount) => {
  return updateUserGameData(userId, { nftCount })
}

// 사용자 로그아웃
export const logoutUser = () => {
  sessionStorage.removeItem('currentUser')
}

// 사용자 데이터 초기화 (개발용)
export const clearAllUserData = () => {
  localStorage.removeItem('users')
  sessionStorage.removeItem('currentUser')
}

// 사용자 통계 가져오기
export const getUserStats = () => {
  const users = getAllUsers()
  return {
    totalUsers: users.length,
    totalCoins: users.reduce((sum, user) => sum + (user.gameData?.coins || 0), 0),
    averageLevel: users.length > 0 ? users.reduce((sum, user) => sum + (user.gameData?.level || 1), 0) / users.length : 0
  }
}

// 현재 언어 가져오기
export const getCurrentLanguage = () => {
  return localStorage.getItem('appLanguage') || '한국어'
}

// 언어별 텍스트 가져오기
export const getI18nTexts = () => {
  const lang = getCurrentLanguage()
  
  return {
    ko: {
      home: '홈',
      exchange: '교환소',
      quest: '퀘스트',
      inventory: '인벤토리',
      factory: '제작소',
      mining: '채굴',
      hunting: '사냥',
      exploration: '탐험',
      production: '생산',
      back: '← 뒤로',
      settings: '설정',
      notification: '알림'
    },
    en: {
      home: 'Home',
      exchange: 'Exchange',
      quest: 'Quest',
      inventory: 'Inventory',
      factory: 'Factory',
      mining: 'Mining',
      hunting: 'Hunting',
      exploration: 'Exploration',
      production: 'Production',
      back: '← Back',
      settings: 'Settings',
      notification: 'Notification'
    }
  }[lang === '한국어' ? 'ko' : 'en']
}