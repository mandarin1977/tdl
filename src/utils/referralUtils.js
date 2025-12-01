// 친구 초대 (Referral) 유틸리티

import { getCurrentUser, getAllUsers, updateUserGameData } from './userUtils'
import { useAppStore } from '@/store/appStore'

/**
 * 고유한 초대 코드 생성
 * @param {string} userId - 사용자 ID
 * @returns {string} 초대 코드
 */
export const generateInviteCode = (userId) => {
  // User ID를 기반으로 간단한 코드 생성 (6자리)
  // 예: userId가 "123456789"면 "ABC123" 형태로 변환
  const hash = userId.toString().split('').reduce((acc, char) => {
    return ((acc << 5) - acc) + char.charCodeAt(0)
  }, 0)
  
  // 알파벳과 숫자 조합으로 6자리 코드 생성
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789' // 0, O, I 제외 (혼동 방지)
  let code = ''
  let num = Math.abs(hash)
  
  for (let i = 0; i < 6; i++) {
    code += chars[num % chars.length]
    num = Math.floor(num / chars.length)
  }
  
  return code
}

/**
 * 사용자의 초대 코드 가져오기 또는 생성
 * @param {string} userId - 사용자 ID
 * @returns {string} 초대 코드
 */
export const getOrCreateInviteCode = (userId) => {
  const users = getAllUsers()
  const user = users.find(u => u.id === userId)
  
  if (!user) {
    return generateInviteCode(userId)
  }
  
  // 이미 초대 코드가 있으면 반환
  if (user.inviteCode) {
    return user.inviteCode
  }
  
  // 초대 코드 생성 및 저장
  const inviteCode = generateInviteCode(userId)
  user.inviteCode = inviteCode
  localStorage.setItem('users', JSON.stringify(users))
  
  return inviteCode
}

/**
 * 초대 코드로 사용자 찾기
 * @param {string} inviteCode - 초대 코드
 * @returns {Object|null} 초대한 사용자 정보
 */
export const getUserByInviteCode = (inviteCode) => {
  const users = getAllUsers()
  return users.find(u => u.inviteCode === inviteCode) || null
}

/**
 * 초대 코드 처리 (가입 시)
 * @param {string} newUserId - 새로 가입한 사용자 ID
 * @param {string} inviteCode - 초대 코드
 * @returns {Object} 처리 결과
 */
export const processInviteCode = async (newUserId, inviteCode) => {
  if (!inviteCode) {
    return { success: false, error: '초대 코드가 없습니다.' }
  }
  
  const inviter = getUserByInviteCode(inviteCode)
  
  if (!inviter) {
    return { success: false, error: '유효하지 않은 초대 코드입니다.' }
  }
  
  // 자기 자신을 초대한 경우
  if (inviter.id === newUserId) {
    return { success: false, error: '자기 자신을 초대할 수 없습니다.' }
  }
  
  // 이미 초대받은 사용자인지 확인
  const users = getAllUsers()
  const newUser = users.find(u => u.id === newUserId)
  
  if (newUser && newUser.referredBy) {
    return { success: false, error: '이미 초대받은 사용자입니다.' }
  }
  
  // 초대받은 사용자 정보 업데이트
  if (newUser) {
    newUser.referredBy = inviter.id
    newUser.referredAt = new Date().toISOString()
    localStorage.setItem('users', JSON.stringify(users))
  }
  
  // 초대한 사용자의 초대 목록에 추가
  if (!inviter.referrals) {
    inviter.referrals = []
  }
  if (!inviter.referrals.includes(newUserId)) {
    inviter.referrals.push(newUserId)
  }
  
  // 초대 통계 업데이트
  if (!inviter.referralStats) {
    inviter.referralStats = {
      totalReferrals: 0,
      rewardsReceived: 0
    }
  }
  inviter.referralStats.totalReferrals = inviter.referrals.length
  
  localStorage.setItem('users', JSON.stringify(users))
  
  // 보상 지급
  const store = useAppStore()
  
  // 초대한 사람에게 보상 (예: 100 포인트)
  const inviterReward = 100
  const inviterCoins = (inviter.gameData?.coins || 0) + inviterReward
  await updateUserGameData(inviter.id, {
    coins: inviterCoins
  })
  
  // 초대받은 사람에게 보상 (예: 50 포인트)
  const newUserReward = 50
  if (newUser) {
    const newUserCoins = (newUser.gameData?.coins || 0) + newUserReward
    await updateUserGameData(newUserId, {
      coins: newUserCoins
    })
    
    // appStore도 업데이트
    if (store.state.currentUser?.id === newUserId) {
      await store.updateCoins(newUserCoins)
    }
  }
  
  // 초대한 사람의 appStore도 업데이트
  if (store.state.currentUser?.id === inviter.id) {
    await store.updateCoins(inviterCoins)
  }
  
  // 이벤트 발생
  window.dispatchEvent(new CustomEvent('userDataUpdated'))
  
  return {
    success: true,
    inviter: inviter.name || inviter.email,
    inviterReward,
    newUserReward
  }
}

/**
 * 초대 통계 가져오기
 * @param {string} userId - 사용자 ID
 * @returns {Object} 초대 통계
 */
export const getReferralStats = (userId) => {
  const users = getAllUsers()
  const user = users.find(u => u.id === userId)
  
  if (!user) {
    return {
      inviteCode: null,
      totalReferrals: 0,
      referrals: []
    }
  }
  
  return {
    inviteCode: user.inviteCode || getOrCreateInviteCode(userId),
    totalReferrals: user.referrals?.length || 0,
    referrals: user.referrals || [],
    referralStats: user.referralStats || {
      totalReferrals: 0,
      rewardsReceived: 0
    }
  }
}

