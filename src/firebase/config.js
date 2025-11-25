// Firebase 설정 파일
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, signOut, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

// Firebase 설정
// 환경 변수에서 가져오기 (기본값 제거 - 보안)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
}

// Firebase 설정 유효성 검사
const validateFirebaseConfig = (config) => {
  const requiredFields = ['apiKey', 'authDomain', 'projectId', 'storageBucket', 'messagingSenderId', 'appId']
  const missingFields = requiredFields.filter(field => !config[field])
  
  if (missingFields.length > 0) {
    console.error('Firebase 설정에 필수 필드가 누락되었습니다:', missingFields)
    console.error('환경 변수가 설정되지 않았습니다. .env 파일을 확인해주세요.')
    console.error('자세한 내용은 .env.example 파일을 참고하세요.')
    return false
  }
  return true
}

// Firebase 초기화 (중복 초기화 방지)
let app = null

// 설정 유효성 검사
if (!validateFirebaseConfig(firebaseConfig)) {
  console.error('Firebase 설정이 유효하지 않습니다.')
}

// Firebase 앱 초기화 (가장 안전한 방식)
try {
  // 이미 초기화된 앱이 있는지 확인
  const existingApps = getApps()
  if (existingApps.length > 0) {
    // 기존 앱 사용
    app = getApp()
  } else {
    // 새로 초기화
    app = initializeApp(firebaseConfig)
  }
} catch (error) {
  // 에러 처리
  console.error('Firebase 초기화 중 오류 발생:', error)
  
  // 중복 초기화 에러인 경우
  if (error.code === 'app/duplicate-app' || error.message?.includes('duplicate')) {
    try {
      app = getApp()
    } catch (getAppError) {
      console.error('기존 앱을 가져올 수 없습니다:', getAppError)
      // 최후의 수단: 기존 앱 목록에서 첫 번째 앱 사용
      const apps = getApps()
      if (apps.length > 0) {
        app = apps[0]
      } else {
        throw new Error('Firebase 앱을 초기화할 수 없습니다.')
      }
    }
  } else {
    // 다른 에러인 경우
    throw error
  }
}

// Auth 및 Firestore 인스턴스 (app이 null이 아닌 경우에만)
if (!app) {
  throw new Error('Firebase 앱이 초기화되지 않았습니다.')
}

export const auth = getAuth(app)
export const db = getFirestore(app)

// Analytics 초기화 (브라우저 환경에서만, 중복 초기화 방지)
let analytics = null
if (typeof window !== 'undefined') {
  try {
    analytics = getAnalytics(app)
  } catch (error) {
    // Analytics가 이미 초기화된 경우 무시
    if (error.code === 'analytics/already-initialized' || error.message?.includes('already')) {
      console.log('Analytics는 이미 초기화되었습니다.')
    } else {
      // 다른 오류인 경우에만 경고 (에러를 던지지 않음)
      console.warn('Analytics 초기화 실패:', error.message || error)
    }
  }
}
export { analytics }

// Google 로그인 제공자
export const googleProvider = new GoogleAuthProvider()

// 사용자 데이터를 Firestore에 저장하는 공통 함수
const saveUserToFirestore = async (user) => {
  const userRef = doc(db, 'users', user.uid)
  const userSnap = await getDoc(userRef)
  
  if (!userSnap.exists()) {
    // 새 사용자인 경우 기본 게임 데이터 생성
    await setDoc(userRef, {
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      createdAt: new Date().toISOString(),
      gameData: {
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
    })
  }
}

// Google 로그인 함수 (리다이렉트 방식)
export const signInWithGoogle = async () => {
  try {
    await signInWithRedirect(auth, googleProvider)
    return { success: true, redirect: true }
  } catch (error) {
    console.error('Google 로그인 오류:', error)
    return { success: false, error: error.message }
  }
}

// 리다이렉트 결과 처리 함수 (리다이렉트 후 호출)
// 한 번만 호출되도록 플래그 사용
let redirectResultChecked = false

export const handleRedirectResult = async () => {
  // 이미 확인했다면 다시 확인하지 않음
  if (redirectResultChecked) {
    // 하지만 Firebase 인증 상태가 있으면 반환
    if (auth.currentUser) {
      return { success: true, user: auth.currentUser }
    }
    return { success: false, error: '이미 확인됨' }
  }
  
  try {
    console.log('handleRedirectResult 호출 - getRedirectResult 실행 중...')
    const result = await getRedirectResult(auth)
    console.log('getRedirectResult 결과:', result ? '사용자 있음' : 'null')
    
    redirectResultChecked = true
    
    if (result && result.user) {
      const user = result.user
      console.log('리다이렉트 결과 - 사용자 발견:', user.email, user.uid)
      
      // Firestore에 사용자 데이터 저장
      await saveUserToFirestore(user)
      console.log('Firestore 저장 완료')
      
      return { success: true, user }
    }
    
    // 리다이렉트 결과가 없지만 Firebase 인증 상태가 있을 수 있음
    if (auth.currentUser) {
      console.log('리다이렉트 결과는 없지만 Firebase 인증 상태 있음:', auth.currentUser.email)
      return { success: true, user: auth.currentUser }
    }
    
    console.log('리다이렉트 결과 없음')
    return { success: false, error: '리다이렉트 결과가 없습니다.' }
  } catch (error) {
    redirectResultChecked = true
    console.error('리다이렉트 결과 처리 오류:', error)
    
    // 에러 발생 시에도 Firebase 인증 상태 확인
    if (auth.currentUser) {
      console.log('에러 발생했지만 Firebase 인증 상태 있음:', auth.currentUser.email)
      return { success: true, user: auth.currentUser }
    }
    
    return { success: false, error: error.message }
  }
}

// 리다이렉트 결과 확인 플래그 리셋 (테스트용)
export const resetRedirectResultCheck = () => {
  redirectResultChecked = false
}

// 로그아웃 함수
export const signOutUser = async () => {
  try {
    await signOut(auth)
    return { success: true }
  } catch (error) {
    console.error('로그아웃 오류:', error)
    return { success: false, error: error.message }
  }
}

// 인증 상태 변경 감지
export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, callback)
}

// Firestore에서 사용자 게임 데이터 가져오기
export const getUserGameData = async (userId) => {
  try {
    const userRef = doc(db, 'users', userId)
    const userSnap = await getDoc(userRef)
    
    if (userSnap.exists()) {
      return userSnap.data()
    }
    return null
  } catch (error) {
    console.error('사용자 데이터 가져오기 오류:', error)
    return null
  }
}

// Firestore에 사용자 게임 데이터 업데이트
export const updateUserGameDataInFirestore = async (userId, gameData) => {
  try {
    const userRef = doc(db, 'users', userId)
    const userSnap = await getDoc(userRef)
    
    if (userSnap.exists()) {
      // 기존 데이터 가져오기
      const existingData = userSnap.data()
      // 게임 데이터만 업데이트 (병합)
      await setDoc(userRef, {
        ...existingData,
        gameData: { ...existingData.gameData, ...gameData }
      }, { merge: true })
    } else {
      // 사용자가 없으면 새로 생성
      await setDoc(userRef, {
        gameData: gameData
      })
    }
    
    return { success: true }
  } catch (error) {
    console.error('게임 데이터 업데이트 오류:', error)
    return { success: false, error: error.message }
  }
}

