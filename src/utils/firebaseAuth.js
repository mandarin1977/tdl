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
import { onAuthStateChanged } from 'firebase/auth'

// Firebase 사용자 데이터를 앱 형식으로 변환
export const convertFirebaseUserToAppUser = (firebaseUser, gameData) => {
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
      miningCats: [null, null, null, null],
      huntingCats: [null, null, null, null],
      explorationCats: [null, null, null, null],
      productionCats: [null, null, null, null],
      inventory: []
    }
  }
}

// Google 소셜 로그인
export const loginWithGoogle = async () => {
  try {
    const result = await signInWithGoogle()
    
    // 리다이렉트 방식이므로 페이지가 이동됨
    // 실제 인증 처리는 리다이렉트 후 handleGoogleRedirect에서 수행
    return result
  } catch (error) {
    console.error('Google 로그인 오류:', error)
    return { success: false, error: error.message }
  }
}

// 리다이렉트 후 결과 처리 (페이지 로드 시 호출)
// 중복 호출 방지를 위한 플래그 및 Promise 캐싱
let googleRedirectHandled = false
let redirectProcessingPromise = null

export const handleGoogleRedirect = async () => {
  // 이미 처리 중이면 기다림
  if (redirectProcessingPromise) {
    return redirectProcessingPromise
  }
  
  // 이미 처리했다면 sessionStorage 확인
  if (googleRedirectHandled) {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser') || 'null')
    if (currentUser && currentUser.id) {
      return { success: true, user: currentUser }
    }
    // 세션 스토리지에 없으면 Firebase 인증 상태 확인
    if (auth.currentUser) {
      try {
        const firebaseUser = auth.currentUser
        const gameData = await getUserGameData(firebaseUser.uid)
        const appUser = convertFirebaseUserToAppUser(firebaseUser, gameData?.gameData)
        sessionStorage.setItem('currentUser', JSON.stringify(appUser))
        return { success: true, user: appUser }
      } catch (error) {
        console.error('세션 복구 오류:', error)
      }
    }
    return { success: false, error: '이미 처리됨' }
  }
  
  // 처리 시작
  redirectProcessingPromise = (async () => {
    try {
      console.log('handleGoogleRedirect 시작')
      
      // 먼저 Firebase 인증 상태 확인 (가장 빠른 방법)
      if (auth.currentUser) {
        console.log('Firebase 인증 상태 발견 (즉시):', auth.currentUser.email)
        googleRedirectHandled = true
        const firebaseUser = auth.currentUser
        const gameData = await getUserGameData(firebaseUser.uid)
        const appUser = convertFirebaseUserToAppUser(firebaseUser, gameData?.gameData)
        sessionStorage.setItem('currentUser', JSON.stringify(appUser))
        console.log('Firebase 인증 상태 확인 - 사용자 저장됨:', appUser.email)
        return { success: true, user: appUser }
      }
      
      // 리다이렉트 결과 확인 시도
      console.log('리다이렉트 결과 확인 시도...')
      const result = await handleRedirectResult()
      console.log('handleRedirectResult 결과:', result.success ? '성공' : '실패', result.user ? result.user.email : '')
      
      if (result && result.success && result.user) {
        googleRedirectHandled = true
        const firebaseUser = result.user
        
        // Firebase User 객체인지 확인
        if (!firebaseUser.uid && firebaseUser.id) {
          // 이미 변환된 사용자 객체인 경우
          const appUser = firebaseUser
          sessionStorage.setItem('currentUser', JSON.stringify(appUser))
          console.log('이미 변환된 사용자 객체 저장:', appUser.email)
          return { success: true, user: appUser }
        }
        
        // Firebase User 객체인 경우 변환 필요
        const gameData = await getUserGameData(firebaseUser.uid)
        const appUser = convertFirebaseUserToAppUser(firebaseUser, gameData?.gameData)
        
        // 세션 스토리지에 저장 (중요!) - 동기적으로 저장
        try {
          sessionStorage.setItem('currentUser', JSON.stringify(appUser))
          // 저장 확인
          const saved = sessionStorage.getItem('currentUser')
          if (!saved) {
            console.error('세션 스토리지 저장 실패!')
          } else {
            const savedUser = JSON.parse(saved)
            console.log('Google 로그인 성공 - 사용자 저장됨:', appUser.email, '저장 확인:', !!saved, '저장된 ID:', savedUser.id)
          }
        } catch (storageError) {
          console.error('세션 스토리지 저장 오류:', storageError)
        }
        
        return { success: true, user: appUser }
      }
      
      // 리다이렉트 결과가 없으면 인증 상태 변경을 기다림
      console.log('리다이렉트 결과 없음, 인증 상태 변경 대기 중...')
      
      // 여러 번 재시도 (리다이렉트가 완료되기를 기다림)
      for (let i = 0; i < 5; i++) {
        await new Promise(resolve => setTimeout(resolve, 300))
        
        // Firebase 인증 상태 확인
        if (auth.currentUser) {
          console.log(`재시도 ${i + 1}회 후 Firebase 인증 상태 발견:`, auth.currentUser.email)
          googleRedirectHandled = true
          const firebaseUser = auth.currentUser
          const gameData = await getUserGameData(firebaseUser.uid)
          const appUser = convertFirebaseUserToAppUser(firebaseUser, gameData?.gameData)
          sessionStorage.setItem('currentUser', JSON.stringify(appUser))
          console.log('재시도 후 Firebase 인증 상태 확인 - 사용자 저장됨:', appUser.email)
          return { success: true, user: appUser }
        }
      }
      
      console.log('재시도 후에도 인증 상태 없음, onAuthStateChanged 대기 중...')
      
      // onAuthStateChanged를 사용하여 인증 상태 변경을 기다림
      return new Promise((resolve) => {
        let resolved = false
        const timeout = setTimeout(() => {
          if (!resolved) {
            resolved = true
            console.log('인증 상태 변경 대기 시간 초과 (5초)')
            // 최종 확인
            if (auth.currentUser) {
              (async () => {
                try {
                  googleRedirectHandled = true
                  const firebaseUser = auth.currentUser
                  const gameData = await getUserGameData(firebaseUser.uid)
                  const appUser = convertFirebaseUserToAppUser(firebaseUser, gameData?.gameData)
                  sessionStorage.setItem('currentUser', JSON.stringify(appUser))
                  console.log('타임아웃 후 Firebase 인증 상태 확인 - 사용자 저장됨:', appUser.email)
                  resolve({ success: true, user: appUser })
                } catch (error) {
                  console.error('타임아웃 후 사용자 데이터 로드 오류:', error)
                  resolve({ success: false, error: '인증 상태 확인 실패' })
                }
              })()
            } else {
              console.log('최종 확인: 인증 상태 없음')
              // 실패하더라도 App.vue의 onAuthStateChanged가 처리할 수 있도록 false 반환
              resolve({ success: false, error: '리다이렉트 결과가 없고 인증 상태도 없습니다. App.vue의 onAuthStateChanged가 처리할 것입니다.' })
            }
          }
        }, 5000) // 5초 대기
        
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
          if (firebaseUser && !resolved) {
            resolved = true
            clearTimeout(timeout)
            unsubscribe()
            
            try {
              console.log('onAuthStateChanged 감지 - 사용자 발견:', firebaseUser.email)
              googleRedirectHandled = true
              const gameData = await getUserGameData(firebaseUser.uid)
              const appUser = convertFirebaseUserToAppUser(firebaseUser, gameData?.gameData)
              sessionStorage.setItem('currentUser', JSON.stringify(appUser))
              console.log('onAuthStateChanged - 사용자 저장됨:', appUser.email)
              resolve({ success: true, user: appUser })
            } catch (error) {
              console.error('인증 상태 변경 처리 오류:', error)
              resolve({ success: false, error: error.message })
            }
          }
        })
      })
    } catch (error) {
      console.error('리다이렉트 처리 오류:', error)
      
      // 오류 발생 시에도 Firebase 인증 상태 확인
      if (auth.currentUser) {
        try {
          console.log('에러 발생했지만 Firebase 인증 상태 있음:', auth.currentUser.email)
          googleRedirectHandled = true
          const firebaseUser = auth.currentUser
          const gameData = await getUserGameData(firebaseUser.uid)
          const appUser = convertFirebaseUserToAppUser(firebaseUser, gameData?.gameData)
          sessionStorage.setItem('currentUser', JSON.stringify(appUser))
          console.log('Fallback 처리 - 사용자 저장됨:', appUser.email)
          return { success: true, user: appUser }
        } catch (fallbackError) {
          console.error('Fallback 처리 오류:', fallbackError)
        }
      }
      
      return { success: false, error: error.message }
    } finally {
      redirectProcessingPromise = null
    }
  })()
  
  return redirectProcessingPromise
}

// 리다이렉트 처리 플래그 리셋 (테스트용)
export const resetGoogleRedirectHandled = () => {
  googleRedirectHandled = false
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

