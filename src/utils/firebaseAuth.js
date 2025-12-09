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
  if (!auth) {
    return { 
      success: false, 
      error: 'Firebase가 설정되지 않았습니다. Firebase 설정을 확인해주세요.' 
    }
  }
  
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

// 리다이렉트 처리 플래그 리셋 함수 (테스트/디버깅용)
export const resetGoogleRedirectHandled = () => {
  googleRedirectHandled = false
  redirectProcessingPromise = null
}

export const handleGoogleRedirect = async () => {
  // Firebase가 설정되지 않았으면 처리하지 않음
  if (!auth) {
    console.error('handleGoogleRedirect: Firebase Auth가 초기화되지 않았습니다.')
    return { success: false, error: 'Firebase가 설정되지 않았습니다.' }
  }
  
  console.log('handleGoogleRedirect: 시작', {
    hasAuth: !!auth,
    currentUser: auth.currentUser ? auth.currentUser.email : 'null',
    googleRedirectHandled,
    hasProcessingPromise: !!redirectProcessingPromise
  })
  
  // 이미 처리 중이면 기다림
  if (redirectProcessingPromise) {
    console.log('handleGoogleRedirect: 이미 처리 중, Promise 대기...')
    return redirectProcessingPromise
  }
  
  // 이미 처리했다면 sessionStorage 확인
  if (googleRedirectHandled) {
    console.log('handleGoogleRedirect: 이미 처리됨, sessionStorage 확인 중...')
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser') || 'null')
    if (currentUser && currentUser.id) {
      console.log('handleGoogleRedirect: sessionStorage에서 사용자 발견:', currentUser.email)
      return { success: true, user: currentUser }
    }
    // 세션 스토리지에 없으면 Firebase 인증 상태 확인
    if (auth && auth.currentUser) {
      try {
        console.log('handleGoogleRedirect: sessionStorage 없지만 Firebase 인증 상태 있음, 복구 시도...')
        const firebaseUser = auth.currentUser
        const gameData = await getUserGameData(firebaseUser.uid)
        const appUser = convertFirebaseUserToAppUser(firebaseUser, gameData?.gameData)
        sessionStorage.setItem('currentUser', JSON.stringify(appUser))
        console.log('handleGoogleRedirect: 세션 복구 완료:', appUser.email)
        return { success: true, user: appUser }
      } catch (error) {
        console.error('handleGoogleRedirect: 세션 복구 오류:', error)
      }
    }
    console.log('handleGoogleRedirect: 이미 처리됨, 하지만 사용자 없음')
    return { success: false, error: '이미 처리됨' }
  }
  
  // 처리 시작
  redirectProcessingPromise = (async () => {
    try {
      console.log('handleGoogleRedirect: 처리 시작')
      
      // 먼저 Firebase 인증 상태 확인 (가장 빠른 방법)
      if (auth && auth.currentUser) {
        console.log('handleGoogleRedirect: Firebase 인증 상태 발견 (즉시):', auth.currentUser.email)
        googleRedirectHandled = true
        const firebaseUser = auth.currentUser
        const gameData = await getUserGameData(firebaseUser.uid)
        const appUser = convertFirebaseUserToAppUser(firebaseUser, gameData?.gameData)
        sessionStorage.setItem('currentUser', JSON.stringify(appUser))
        console.log('handleGoogleRedirect: Firebase 인증 상태 확인 - 사용자 저장됨:', appUser.email)
        return { success: true, user: appUser }
      }
      
      // 리다이렉트 결과 확인 시도
      console.log('handleGoogleRedirect: 리다이렉트 결과 확인 시도...')
      const result = await handleRedirectResult()
      console.log('handleGoogleRedirect: handleRedirectResult 결과:', {
        success: result.success,
        hasUser: !!result.user,
        userEmail: result.user?.email || '없음',
        error: result.error || '없음'
      })
      
      if (result && result.success && result.user) {
        googleRedirectHandled = true
        const firebaseUser = result.user
        
        // Firebase User 객체인지 확인
        if (!firebaseUser.uid && firebaseUser.id) {
          // 이미 변환된 사용자 객체인 경우
          const appUser = firebaseUser
          sessionStorage.setItem('currentUser', JSON.stringify(appUser))
          console.log('handleGoogleRedirect: 이미 변환된 사용자 객체 저장:', appUser.email)
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
            console.error('handleGoogleRedirect: 세션 스토리지 저장 실패!')
          } else {
            const savedUser = JSON.parse(saved)
            console.log('handleGoogleRedirect: Google 로그인 성공 - 사용자 저장됨:', appUser.email, '저장 확인:', !!saved, '저장된 ID:', savedUser.id)
          }
        } catch (storageError) {
          console.error('handleGoogleRedirect: 세션 스토리지 저장 오류:', storageError)
        }
        
        return { success: true, user: appUser }
      }
      
      // 리다이렉트 결과가 없어도 Firebase 인증 상태를 즉시 확인
      console.log('handleGoogleRedirect: 리다이렉트 결과 없음, Firebase 인증 상태 즉시 확인...')
      
      // Firebase 인증 상태를 여러 번 확인 (리다이렉트가 완료되기를 기다림)
      for (let i = 0; i < 10; i++) {
        // Firebase 인증 상태 확인
        if (auth && auth.currentUser) {
          console.log(`handleGoogleRedirect: 재시도 ${i + 1}회 후 Firebase 인증 상태 발견:`, auth.currentUser.email)
          googleRedirectHandled = true
          const firebaseUser = auth.currentUser
          const gameData = await getUserGameData(firebaseUser.uid)
          const appUser = convertFirebaseUserToAppUser(firebaseUser, gameData?.gameData)
          sessionStorage.setItem('currentUser', JSON.stringify(appUser))
          console.log('handleGoogleRedirect: 재시도 후 Firebase 인증 상태 확인 - 사용자 저장됨:', appUser.email)
          return { success: true, user: appUser }
        }
        
        // 다음 재시도 전 대기
        if (i < 9) {
          await new Promise(resolve => setTimeout(resolve, 200))
        }
      }
      
      console.log('handleGoogleRedirect: 재시도 후에도 인증 상태 없음, onAuthStateChanged 대기 중...')
      
      // onAuthStateChanged를 사용하여 인증 상태 변경을 기다림
      return new Promise((resolve) => {
        let resolved = false
        
        if (!auth) {
          console.error('handleGoogleRedirect: Firebase Auth가 없습니다.')
          resolve({ success: false, error: 'Firebase가 설정되지 않았습니다.' })
          return
        }
        
        // 즉시 한 번 더 확인 (타이밍 이슈 대비)
        if (auth.currentUser) {
          (async () => {
            try {
              console.log('handleGoogleRedirect: Promise 내부에서 즉시 Firebase 인증 상태 발견:', auth.currentUser.email)
              googleRedirectHandled = true
              const firebaseUser = auth.currentUser
              const gameData = await getUserGameData(firebaseUser.uid)
              const appUser = convertFirebaseUserToAppUser(firebaseUser, gameData?.gameData)
              sessionStorage.setItem('currentUser', JSON.stringify(appUser))
              console.log('handleGoogleRedirect: Promise 내부에서 사용자 저장됨:', appUser.email)
              if (!resolved) {
                resolved = true
                resolve({ success: true, user: appUser })
              }
            } catch (error) {
              console.error('handleGoogleRedirect: Promise 내부 처리 오류:', error)
            }
          })()
        }
        
        const timeout = setTimeout(() => {
          if (!resolved) {
            resolved = true
            console.log('handleGoogleRedirect: 인증 상태 변경 대기 시간 초과 (10초)')
            // 최종 확인
            if (auth && auth.currentUser) {
              (async () => {
                try {
                  googleRedirectHandled = true
                  const firebaseUser = auth.currentUser
                  const gameData = await getUserGameData(firebaseUser.uid)
                  const appUser = convertFirebaseUserToAppUser(firebaseUser, gameData?.gameData)
                  sessionStorage.setItem('currentUser', JSON.stringify(appUser))
                  console.log('handleGoogleRedirect: 타임아웃 후 Firebase 인증 상태 확인 - 사용자 저장됨:', appUser.email)
                  resolve({ success: true, user: appUser })
                } catch (error) {
                  console.error('handleGoogleRedirect: 타임아웃 후 사용자 데이터 로드 오류:', error)
                  resolve({ success: false, error: '인증 상태 확인 실패' })
                }
              })()
            } else {
              console.log('handleGoogleRedirect: 최종 확인: 인증 상태 없음')
              resolve({ success: false, error: '리다이렉트 결과가 없고 인증 상태도 없습니다. 잠시 후 다시 시도해주세요.' })
            }
          }
        }, 10000) // 10초 대기 (더 긴 대기 시간)
        
        let initialAuthCheck = true // 초기 인증 상태 확인 플래그
        
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
          // 초기 인증 상태 확인은 무시 (null일 수 있음)
          if (initialAuthCheck) {
            initialAuthCheck = false
            if (firebaseUser) {
              console.log('handleGoogleRedirect: onAuthStateChanged 초기 상태 - 사용자 있음:', firebaseUser.email)
            } else {
              console.log('handleGoogleRedirect: onAuthStateChanged 초기 상태 - 사용자 없음 (정상, 리다이렉트 대기 중)')
            }
            // 초기 상태에서는 아무것도 하지 않음
            return
          }
          
          // 이후 인증 상태 변경만 처리
          if (firebaseUser && !resolved) {
            resolved = true
            clearTimeout(timeout)
            unsubscribe()
            
            try {
              console.log('handleGoogleRedirect: onAuthStateChanged 감지 - 사용자 발견:', firebaseUser.email)
              googleRedirectHandled = true
              const gameData = await getUserGameData(firebaseUser.uid)
              const appUser = convertFirebaseUserToAppUser(firebaseUser, gameData?.gameData)
              sessionStorage.setItem('currentUser', JSON.stringify(appUser))
              console.log('handleGoogleRedirect: onAuthStateChanged - 사용자 저장됨:', appUser.email)
              resolve({ success: true, user: appUser })
            } catch (error) {
              console.error('handleGoogleRedirect: 인증 상태 변경 처리 오류:', error)
              resolve({ success: false, error: error.message })
            }
          } else if (!firebaseUser && !resolved) {
            // 로그아웃 상태로 변경된 경우 (일반적으로 발생하지 않음)
            console.log('handleGoogleRedirect: onAuthStateChanged - 사용자 로그아웃됨 (리다이렉트가 발생하지 않았을 수 있음)')
          }
        })
      })
    } catch (error) {
      console.error('리다이렉트 처리 오류:', error)
      
      // 오류 발생 시에도 Firebase 인증 상태 확인
      if (auth && auth.currentUser) {
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

// 리다이렉트 처리 플래그 리셋 (테스트용) - 이미 위에 선언됨

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
  return auth ? auth.currentUser : null
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


