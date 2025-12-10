// 친구 초대 (Referral) 유틸리티

import { getCurrentUser, getAllUsers, updateUserGameData } from './userUtils'
import { useAppStore } from '@/store/appStore'
import { db } from '@/firebase/config'
import { doc, getDoc, setDoc, updateDoc, collection, query, where, getDocs } from 'firebase/firestore'

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
 * 사용자의 초대 코드 가져오기 또는 생성 (Firestore 기반)
 * @param {string} userId - 사용자 ID (Firebase UID)
 * @returns {Promise<string>} 초대 코드
 */
export const getOrCreateInviteCode = async (userId) => {
  if (!userId) {
    return generateInviteCode(userId || 'default')
  }
  
  // localStorage에서 먼저 확인 (기존 사용자 호환성)
  const users = getAllUsers()
  const localUser = users.find(u => u.id === userId)
  if (localUser && localUser.inviteCode) {
    return localUser.inviteCode
  }
  
  // Firebase가 있으면 Firestore에서 확인
  if (db) {
    try {
      const userRef = doc(db, 'users', userId)
      const userSnap = await getDoc(userRef)
      
      if (userSnap.exists()) {
        const userData = userSnap.data()
        if (userData.inviteCode) {
          return userData.inviteCode
        }
        
        // 초대 코드가 없으면 생성하고 Firestore에 저장
        const inviteCode = generateInviteCode(userId)
        await updateDoc(userRef, {
          inviteCode: inviteCode
        })
        return inviteCode
      }
    } catch (error) {
      console.error('getOrCreateInviteCode Firestore 오류:', error)
    }
  }
  
  // Firebase가 없거나 오류 발생 시 localStorage에서 처리
  if (localUser) {
    const inviteCode = generateInviteCode(userId)
    localUser.inviteCode = inviteCode
    localStorage.setItem('users', JSON.stringify(users))
    return inviteCode
  }
  
  // 사용자가 없으면 코드만 생성 (저장하지 않음)
  return generateInviteCode(userId)
}

/**
 * 초대 코드로 사용자 찾기 (Firestore 기반)
 * @param {string} inviteCode - 초대 코드
 * @returns {Promise<Object|null>} 초대한 사용자 정보
 */
export const getUserByInviteCode = async (inviteCode) => {
  if (!inviteCode) {
    return null
  }
  
  // localStorage에서 먼저 확인 (기존 사용자 호환성)
  const users = getAllUsers()
  const localUser = users.find(u => u.inviteCode === inviteCode)
  if (localUser) {
    return localUser
  }
  
  // Firebase가 없으면 null 반환
  if (!db) {
    return null
  }
  
  try {
    // Firestore에서 inviteCode로 사용자 찾기
    const usersRef = collection(db, 'users')
    const q = query(usersRef, where('inviteCode', '==', inviteCode))
    const querySnapshot = await getDocs(q)
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0]
      const userData = doc.data()
      return {
        id: doc.id,
        ...userData
      }
    }
    
    return null
  } catch (error) {
    console.error('getUserByInviteCode Firestore 오류:', error)
    // 오류 발생 시 null 반환
    return null
  }
}

/**
 * 초대 코드 처리 (가입 시) - Firestore 기반
 * @param {string} newUserId - 새로 가입한 사용자 ID (Firebase UID)
 * @param {string} inviteCode - 초대 코드
 * @returns {Promise<Object>} 처리 결과
 */
export const processInviteCode = async (newUserId, inviteCode) => {
  if (!inviteCode) {
    return { success: false, error: '초대 코드가 없습니다.' }
  }
  
  if (!newUserId) {
    return { success: false, error: '사용자 ID가 없습니다.' }
  }
  
  // 초대한 사용자 찾기 (Firestore 또는 localStorage)
  const inviter = await getUserByInviteCode(inviteCode)
  
  if (!inviter) {
    return { success: false, error: '유효하지 않은 초대 코드입니다.' }
  }
  
  // 자기 자신을 초대한 경우
  if (inviter.id === newUserId) {
    return { success: false, error: '자기 자신을 초대할 수 없습니다.' }
  }
  
  // 이미 초대받은 사용자인지 확인
  let newUser = null
  if (db) {
    try {
      const newUserRef = doc(db, 'users', newUserId)
      const newUserSnap = await getDoc(newUserRef)
      if (newUserSnap.exists()) {
        newUser = { id: newUserSnap.id, ...newUserSnap.data() }
        if (newUser.referredBy) {
          return { success: false, error: '이미 초대받은 사용자입니다.' }
        }
      }
    } catch (error) {
      console.error('processInviteCode: 새 사용자 확인 오류:', error)
    }
  }
  
  // localStorage에서도 확인 (하위 호환성)
  if (!newUser) {
    const users = getAllUsers()
    newUser = users.find(u => u.id === newUserId)
    if (newUser && newUser.referredBy) {
      return { success: false, error: '이미 초대받은 사용자입니다.' }
    }
  }
  
  // Firestore 업데이트
  if (db) {
    try {
      // 새 사용자 정보 업데이트
      if (newUser) {
        const newUserRef = doc(db, 'users', newUserId)
        await updateDoc(newUserRef, {
          referredBy: inviter.id,
          referredAt: new Date().toISOString()
        })
      }
      
      // 초대한 사용자 정보 업데이트
      const inviterRef = doc(db, 'users', inviter.id)
      const inviterSnap = await getDoc(inviterRef)
      
      if (inviterSnap.exists()) {
        const inviterData = inviterSnap.data()
        const referrals = inviterData.referrals || []
        if (!referrals.includes(newUserId)) {
          referrals.push(newUserId)
        }
        
        await updateDoc(inviterRef, {
          referrals: referrals,
          referralStats: {
            totalReferrals: referrals.length,
            rewardsReceived: inviterData.referralStats?.rewardsReceived || 0
          }
        })
      }
    } catch (error) {
      console.error('processInviteCode: Firestore 업데이트 오류:', error)
      // Firestore 오류가 발생해도 localStorage로 폴백
    }
  }
  
  // localStorage 업데이트 (하위 호환성)
  const users = getAllUsers()
  const localNewUser = users.find(u => u.id === newUserId)
  if (localNewUser) {
    localNewUser.referredBy = inviter.id
    localNewUser.referredAt = new Date().toISOString()
    localStorage.setItem('users', JSON.stringify(users))
  }
  
  const localInviter = users.find(u => u.id === inviter.id)
  if (localInviter) {
    if (!localInviter.referrals) {
      localInviter.referrals = []
    }
    if (!localInviter.referrals.includes(newUserId)) {
      localInviter.referrals.push(newUserId)
    }
    localInviter.referralStats = {
      totalReferrals: localInviter.referrals.length,
      rewardsReceived: localInviter.referralStats?.rewardsReceived || 0
    }
    localStorage.setItem('users', JSON.stringify(users))
  }
  
  // 보상 지급
  const store = useAppStore()
  
  // 초대한 사람에게 보상 (100 포인트)
  const inviterReward = 100
  const inviterCoins = (inviter.gameData?.coins || 0) + inviterReward
  await updateUserGameData(inviter.id, {
    coins: inviterCoins
  })
  
  // 초대받은 사람에게 보상 (50 포인트)
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
    inviter: inviter.displayName || inviter.name || inviter.email,
    inviterReward,
    newUserReward
  }
}

/**
 * 초대 통계 가져오기 (Firestore 기반)
 * @param {string} userId - 사용자 ID (Firebase UID)
 * @returns {Promise<Object>} 초대 통계
 */
export const getReferralStats = async (userId) => {
  if (!userId) {
    return {
      inviteCode: null,
      totalReferrals: 0,
      referrals: [],
      referralStats: {
        totalReferrals: 0,
        rewardsReceived: 0
      }
    }
  }
  
  // Firestore에서 먼저 확인
  if (db) {
    try {
      const userRef = doc(db, 'users', userId)
      const userSnap = await getDoc(userRef)
      
      if (userSnap.exists()) {
        const userData = userSnap.data()
        return {
          inviteCode: userData.inviteCode || await getOrCreateInviteCode(userId),
          totalReferrals: userData.referrals?.length || 0,
          referrals: userData.referrals || [],
          referralStats: userData.referralStats || {
            totalReferrals: 0,
            rewardsReceived: 0
          }
        }
      }
    } catch (error) {
      console.error('getReferralStats Firestore 오류:', error)
    }
  }
  
  // localStorage에서 확인 (하위 호환성)
  const users = getAllUsers()
  const user = users.find(u => u.id === userId)
  
  if (!user) {
    return {
      inviteCode: await getOrCreateInviteCode(userId),
      totalReferrals: 0,
      referrals: [],
      referralStats: {
        totalReferrals: 0,
        rewardsReceived: 0
      }
    }
  }
  
  return {
    inviteCode: user.inviteCode || await getOrCreateInviteCode(userId),
    totalReferrals: user.referrals?.length || 0,
    referrals: user.referrals || [],
    referralStats: user.referralStats || {
      totalReferrals: 0,
      rewardsReceived: 0
    }
  }
}

