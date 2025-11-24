// 퀘스트 진행도 추적 및 관리 유틸리티

// 퀘스트 진행도 로드
export const getQuestProgress = () => {
  const progress = localStorage.getItem('questProgress')
  return progress ? JSON.parse(progress) : {}
}

// 퀘스트 진행도 저장
export const saveQuestProgress = (progress) => {
  localStorage.setItem('questProgress', JSON.stringify(progress))
}

// 특정 퀘스트 진행도 업데이트
export const updateQuestProgress = (questId, value) => {
  const progress = getQuestProgress()
  progress[questId] = (progress[questId] || 0) + value
  saveQuestProgress(progress)
  return progress[questId]
}

// 퀘스트 진행도 초기화 (일일/주간/월간 리셋용)
export const resetQuestProgress = (questIds) => {
  const progress = getQuestProgress()
  questIds.forEach(id => {
    delete progress[id]
  })
  saveQuestProgress(progress)
}

// 게임 액션에 따른 퀘스트 진행도 업데이트
export const trackGameAction = (actionType, value = 1) => {
  const progress = getQuestProgress()
  
  // 액션 타입별 퀘스트 ID 매핑
  const questMapping = {
    mining: [1, 9, 20], // 일일 채굴, 주간 채굴, 월간 채굴
    hunting: [2, 10, 21], // 일일 사냥, 주간 사냥, 월간 사냥
    exploration: [3, 11, 22], // 일일 탐험, 주간 탐험, 월간 탐험
    production: [4, 12, 23], // 일일 생산, 주간 생산, 월간 생산
    coinEarned: [5, 13, 17], // 일일 코인, 주간 코인, 월간 코인
    levelUp: [6, 14, 18], // 일일 레벨업, 주간 레벨업, 월간 레벨업
    nftCreated: [25, 26, 27], // NFT 관련 퀘스트
    nftOwned: [28, 29, 30] // NFT 소유 관련 퀘스트
  }
  
  const questIds = questMapping[actionType] || []
  questIds.forEach(questId => {
    if (!progress[questId]) {
      progress[questId] = 0
    }
    progress[questId] += value
  })
  
  saveQuestProgress(progress)
  
  // 이벤트 발생하여 QuestPage에서 업데이트
  window.dispatchEvent(new CustomEvent('questProgressUpdated'))
}

// 현재 사용자의 게임 데이터로 퀘스트 진행도 계산
export const calculateQuestProgress = (questId, userGameData) => {
  const progress = getQuestProgress()
  const savedProgress = progress[questId] || 0
  
  // 퀘스트 타입별 진행도 계산
  switch (questId) {
    // 일일/주간/월간 코인 획득
    case 5: // 일일 코인 1,000
    case 13: // 주간 코인 50,000
    case 17: // 월간 코인 200,000
      return Math.max(savedProgress, userGameData?.totalCoin || 0)
    
    // 일일/주간/월간 레벨업
    case 6: // 일일 레벨업 1
    case 14: // 주간 레벨업 5
    case 18: // 월간 레벨업 20
      return userGameData?.level || 1
    
    // NFT 개수
    case 25: // 일일 NFT 1개 제작
    case 26: // 주간 NFT 5개 제작
    case 27: // 월간 NFT 20개 제작
      return savedProgress
    
    // NFT 소유 개수
    case 28: // 레어 NFT 1개 소유
    case 29: // 에픽 NFT 1개 소유
    case 30: // 레전더리 NFT 1개 소유
      const inventory = userGameData?.inventory || []
      if (questId === 28) {
        // 레어 NFT (3성 이상)
        return inventory.filter(nft => nft.stars >= 3).length
      } else if (questId === 29) {
        // 에픽 NFT (4성 이상)
        return inventory.filter(nft => nft.stars >= 4).length
      } else if (questId === 30) {
        // 레전더리 NFT (5성)
        return inventory.filter(nft => nft.stars >= 5).length
      }
      return 0
    
    default:
      return savedProgress
  }
}

// 퀘스트 완료 여부 확인
export const isQuestCompleted = (quest, userGameData) => {
  const progress = calculateQuestProgress(quest.id, userGameData)
  return progress >= quest.total
}

