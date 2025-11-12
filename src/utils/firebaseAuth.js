// Firebase 인증 유틸리티 함수
import { 
  signInWithGoogle, 
  handleRedirectResult,
  signOutUser, 
  onAuthChange,
  getUserGameData,
  updateUserGameDataInFirestore,
  auth
} from '@/firebase/config'

// Firebase 사용자 데이터를 앱 형식으로 변환
const convertFirebaseUserToAppUser = (firebaseUser, gameData) => {
  return {
    id: firebaseUser.uid,
    email: firebaseUser.email,
    name: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || '사용자',
    photoURL: firebaseUser.photoURL,
    gameData: gameData || {
      level: 1,
      coins: 0,
      totalCoin: 0,
      catFragments: 50,
      nftCount: 0,
      miningCats: [null, null, null, null, null, null],
      huntingCats: [null, null, null, null, null, null],
      explorationCats: [null, null, null, null, null, null],
      productionCats: [null, null, null, null, null, null],
      inventory: []
    }
  }
}

// Google 소셜 로그인
export const loginWithGoogle = async () => {
  try {
    const result = await signInWithGoogle()
    
    // 리다이렉트 방식인 경우 (모바일)
    if (result.redirect) {
      // 리다이렉트는 페이지를 이동시키므로 여기서는 성공만 반환
      // 실제 인증 처리는 리다이렉트 후 handleGoogleRedirect에서 수행
      return { success: true, redirect: true }
    }
    
    if (result.success && result.user) {
      const firebaseUser = result.user
      const gameData = await getUserGameData(firebaseUser.uid)
      
      const appUser = convertFirebaseUserToAppUser(firebaseUser, gameData?.gameData)
      
      // 세션 스토리지에 저장 (기존 시스템과 호환)
      sessionStorage.setItem('currentUser', JSON.stringify(appUser))
      
      return { success: true, user: appUser }
    } else {
      return { success: false, error: result.error }
    }
  } catch (error) {
    console.error('Google 로그인 오류:', error)
    return { success: false, error: error.message }
  }
}

// 리다이렉트 후 결과 처리 (페이지 로드 시 호출)
export const handleGoogleRedirect = async () => {
  try {
    const result = await handleRedirectResult()
    
    if (result.success && result.user) {
      const firebaseUser = result.user
      const gameData = await getUserGameData(firebaseUser.uid)
      
      const appUser = convertFirebaseUserToAppUser(firebaseUser, gameData?.gameData)
      
      // 세션 스토리지에 저장 (기존 시스템과 호환)
      sessionStorage.setItem('currentUser', JSON.stringify(appUser))
      
      return { success: true, user: appUser }
    }
    
    return { success: false, error: result.error || '리다이렉트 결과가 없습니다.' }
  } catch (error) {
    console.error('리다이렉트 처리 오류:', error)
    return { success: false, error: error.message }
  }
}

// 로그아웃
export const logout = async () => {
  try {
    await signOutUser()
    sessionStorage.removeItem('currentUser')
    return { success: true }
  } catch (error) {
    console.error('로그아웃 오류:', error)
    return { success: false, error: error.message }
  }
}

// 현재 Firebase 사용자 가져오기
export const getCurrentFirebaseUser = () => {
  return auth.currentUser
}

// 인증 상태 변경 리스너 등록
export const onAuthStateChange = (callback) => {
  return onAuthChange(async (firebaseUser) => {
    if (firebaseUser) {
      const gameData = await getUserGameData(firebaseUser.uid)
      const appUser = convertFirebaseUserToAppUser(firebaseUser, gameData?.gameData)
      callback(appUser)
    } else {
      callback(null)
    }
  })
}

// 게임 데이터 업데이트 (Firestore)
export const updateGameData = async (userId, gameData) => {
  try {
    const result = await updateUserGameDataInFirestore(userId, gameData)
    
    if (result.success) {
      // 세션 스토리지의 현재 사용자 데이터도 업데이트
      const currentUser = JSON.parse(sessionStorage.getItem('currentUser') || '{}')
      if (currentUser.id === userId) {
        currentUser.gameData = { ...currentUser.gameData, ...gameData }
        sessionStorage.setItem('currentUser', JSON.stringify(currentUser))
      }
    }
    
    return result
  } catch (error) {
    console.error('게임 데이터 업데이트 오류:', error)
    return { success: false, error: error.message }
  }
}

