// Firebase 설정 파일
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from 'firebase/auth'
import { getFirestore, doc, setDoc, getDoc, updateDoc } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

// Firebase 설정
// 환경 변수가 있으면 사용하고, 없으면 기본 설정 사용
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCwvJ8cUWLZPZ26i1deIAXnoLuzToIcB70",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "tuldung.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "tuldung",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "tuldung.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1086524417813",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1086524417813:web:8199da4b7cebcaffc86b1c",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-EGV6XDKG9R"
}

// Firebase 설정 유효성 검사
const validateFirebaseConfig = (config) => {
  const requiredFields = ['apiKey', 'authDomain', 'projectId', 'storageBucket', 'messagingSenderId', 'appId']
  const missingFields = requiredFields.filter(field => !config[field])
  
  // 디버깅: 환경 변수 확인
  if (import.meta.env.DEV) {
    console.log('=== Firebase 환경 변수 확인 ===')
    console.log('VITE_FIREBASE_API_KEY:', import.meta.env.VITE_FIREBASE_API_KEY ? '✓ 설정됨' : '✗ 없음')
    console.log('VITE_FIREBASE_AUTH_DOMAIN:', import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ? '✓ 설정됨' : '✗ 없음')
    console.log('VITE_FIREBASE_PROJECT_ID:', import.meta.env.VITE_FIREBASE_PROJECT_ID ? '✓ 설정됨' : '✗ 없음')
    console.log('VITE_FIREBASE_STORAGE_BUCKET:', import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ? '✓ 설정됨' : '✗ 없음')
    console.log('VITE_FIREBASE_MESSAGING_SENDER_ID:', import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ? '✓ 설정됨' : '✗ 없음')
    console.log('VITE_FIREBASE_APP_ID:', import.meta.env.VITE_FIREBASE_APP_ID ? '✓ 설정됨' : '✗ 없음')
    console.log('전체 firebaseConfig:', config)
  }
  
  if (missingFields.length > 0) {
    console.error('=== Firebase 설정 오류 ===')
    console.error('누락된 필드:', missingFields)
    console.error('환경 변수가 설정되지 않았습니다. .env 파일을 확인해주세요.')
    console.error('⚠️ 중요: 개발 서버를 재시작했는지 확인하세요! (npm run dev)')
    return false
  }
  
  if (import.meta.env.DEV) {
    console.log('✓ Firebase 설정 유효성 검사 통과')
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
  // 환경 변수 확인 (필수 필드가 모두 있는지)
  const hasRequiredConfig = firebaseConfig.apiKey && 
                            firebaseConfig.authDomain && 
                            firebaseConfig.projectId
  
  if (!hasRequiredConfig) {
    console.warn('⚠️ Firebase 환경 변수가 설정되지 않았습니다. Firebase 기능을 사용할 수 없습니다.')
    console.warn('⚠️ .env 파일에 Firebase 설정을 추가하고 개발 서버를 재시작하세요.')
    app = null
  } else {
    // 이미 초기화된 앱이 있는지 확인
    const existingApps = getApps()
    if (existingApps.length > 0) {
      // 기존 앱 사용
      app = getApp()
    } else {
      // 새로 초기화
      app = initializeApp(firebaseConfig)
    }
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
        console.error('Firebase 앱을 초기화할 수 없습니다.')
        app = null
      }
    }
  } else {
    // 다른 에러인 경우 (앱 크래시 방지)
    console.error('Firebase 초기화 실패:', error.message)
    app = null
  }
}

// Auth 및 Firestore 인스턴스 (app이 null이 아닌 경우에만)
let auth = null
let db = null

if (app) {
  try {
    auth = getAuth(app)
    db = getFirestore(app)
    
    // Firebase Auth 영속성 설정: localStorage에 저장하여 브라우저를 닫아도 로그인 상태 유지
    if (auth) {
      setPersistence(auth, browserLocalPersistence).then(() => {
        if (import.meta.env.DEV) {
          console.log('✓ Firebase Auth 영속성 설정 완료 (localStorage)')
        }
      }).catch((error) => {
        console.error('Firebase Auth 영속성 설정 오류:', error)
      })
    }
    
    if (import.meta.env.DEV) {
      console.log('✓ Firebase Auth 및 Firestore 초기화 완료')
      console.log('Auth 인스턴스:', auth ? '생성됨' : 'null')
      console.log('DB 인스턴스:', db ? '생성됨' : 'null')
      console.log('ℹ️ 참고: __/firebase/init.json 404 에러는 로컬 개발 환경에서 정상입니다. 무시해도 됩니다.')
    }
  } catch (error) {
    console.error('✗ Firebase Auth/Firestore 초기화 실패:', error)
  }
} else {
  console.error('✗ Firebase 앱이 초기화되지 않았습니다. auth와 db를 사용할 수 없습니다.')
}

// 개발 환경에서 init.json 404 에러를 무시하도록 설정
if (import.meta.env.DEV && typeof window !== 'undefined') {
  // 네트워크 에러 필터링 (선택사항)
  const originalError = console.error
  console.error = function(...args) {
    const message = args.join(' ')
    // init.json 404 에러는 무시
    if (message.includes('__/firebase/init.json') || message.includes('404')) {
      // 개발 환경에서는 조용히 무시
      return
    }
    originalError.apply(console, args)
  }
}

export { auth, db }

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
export const saveUserToFirestore = async (user, additionalData = {}) => {
  const userRef = doc(db, 'users', user.uid)
  const userSnap = await getDoc(userRef)
  
  if (!userSnap.exists()) {
    // 초대 코드 생성 함수 (userId 기반)
    const generateInviteCode = (userId) => {
      const hash = userId.toString().split('').reduce((acc, char) => {
        return ((acc << 5) - acc) + char.charCodeAt(0)
      }, 0)
      const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
      let code = ''
      let num = Math.abs(hash)
      for (let i = 0; i < 6; i++) {
        code += chars[num % chars.length]
        num = Math.floor(num / chars.length)
      }
      return code
    }
    
    // 새 사용자인 경우 기본 게임 데이터 생성
    await setDoc(userRef, {
      email: user.email,
      displayName: user.displayName || additionalData.name || user.email?.split('@')[0],
      photoURL: user.photoURL,
      phone: additionalData.phone || '',
      createdAt: new Date().toISOString(),
      inviteCode: additionalData.inviteCode || generateInviteCode(user.uid), // 초대 코드 추가
      referrals: additionalData.referrals || [], // 초대한 사용자 목록
      referredBy: additionalData.referredBy || null, // 초대받은 사용자 ID
      referredAt: additionalData.referredAt || null, // 초대받은 날짜
      referralStats: additionalData.referralStats || { // 초대 통계
        totalReferrals: 0,
        rewardsReceived: 0
      },
      ...additionalData,
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
        miningCats: [null, null, null, null],
        huntingCats: [null, null, null, null],
        explorationCats: [null, null, null, null],
        productionCats: [null, null, null, null],
        inventory: []
      }
    })
  }
}

// Google 로그인 함수 (리다이렉트 방식)
export const signInWithGoogle = async () => {
  if (!auth) {
    console.error('signInWithGoogle: Firebase Auth가 초기화되지 않았습니다.')
    return { success: false, error: 'Firebase가 설정되지 않았습니다.' }
  }
  
  try {
    console.log('signInWithGoogle: signInWithRedirect 호출 중...')
    console.log('signInWithGoogle: 현재 URL:', window.location.href)
    console.log('signInWithGoogle: authDomain:', firebaseConfig.authDomain)
    
    await signInWithRedirect(auth, googleProvider)
    console.log('signInWithGoogle: signInWithRedirect 완료, 리다이렉트 발생 예정')
    // signInWithRedirect는 페이지를 리다이렉트하므로 이 코드는 실행되지 않을 수 있음
    return { success: true, redirect: true }
  } catch (error) {
    console.error('signInWithGoogle: Google 로그인 오류:', error)
    console.error('signInWithGoogle: 에러 코드:', error.code)
    console.error('signInWithGoogle: 에러 메시지:', error.message)
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

// 이메일/비밀번호로 회원가입
export const signUpWithEmail = async (email, password, userData = {}) => {
  if (!auth) {
    console.error('Firebase Auth가 초기화되지 않았습니다.')
    console.error('환경 변수 확인:', {
      apiKey: !!import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: !!import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: !!import.meta.env.VITE_FIREBASE_PROJECT_ID
    })
    return { 
      success: false, 
      error: 'Firebase가 설정되지 않았습니다.\n.env 파일에 Firebase 설정을 추가하고 개발 서버를 재시작해주세요.' 
    }
  }
  
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user
    
    // Firestore에 사용자 데이터 저장
    if (db) {
      await saveUserToFirestore(user, {
        name: userData.name,
        phone: userData.phone
      })
    }
    
    return { success: true, user }
  } catch (error) {
    console.error('회원가입 오류:', error)
    let errorMessage = '회원가입 중 오류가 발생했습니다.'
    
    if (error.code === 'auth/email-already-in-use') {
      errorMessage = '이미 사용 중인 이메일입니다.'
    } else if (error.code === 'auth/invalid-email') {
      errorMessage = '올바른 이메일 형식이 아닙니다.'
    } else if (error.code === 'auth/weak-password') {
      errorMessage = '비밀번호가 너무 약합니다. (6자 이상)'
    } else if (error.code === 'auth/operation-not-allowed') {
      errorMessage = '이메일/비밀번호 인증이 활성화되지 않았습니다.\n\nFirebase Console에서 활성화 방법:\n1. https://console.firebase.google.com 접속\n2. 프로젝트 선택 (tuldung)\n3. Authentication > Sign-in method\n4. "이메일/비밀번호" 클릭\n5. "사용 설정" 토글 활성화\n6. 저장'
    } else if (error.code === 'auth/network-request-failed') {
      errorMessage = '네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.'
    } else if (error.message) {
      errorMessage = error.message
    }
    
    return { success: false, error: errorMessage }
  }
}

// 이메일/비밀번호로 로그인
export const signInWithEmail = async (email, password) => {
  if (!auth) {
    console.error('Firebase Auth가 초기화되지 않았습니다.')
    console.error('환경 변수 확인:', {
      apiKey: !!import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: !!import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: !!import.meta.env.VITE_FIREBASE_PROJECT_ID
    })
    return { 
      success: false, 
      error: 'Firebase가 설정되지 않았습니다.\n.env 파일에 Firebase 설정을 추가하고 개발 서버를 재시작해주세요.' 
    }
  }
  
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user
    
    // Firestore에 사용자 데이터가 없으면 생성
    if (db) {
      await saveUserToFirestore(user)
    }
    
    return { success: true, user }
  } catch (error) {
    console.error('로그인 오류:', error)
    let errorMessage = '로그인 중 오류가 발생했습니다.'
    
    if (error.code === 'auth/user-not-found') {
      errorMessage = '등록되지 않은 이메일입니다.'
    } else if (error.code === 'auth/wrong-password') {
      errorMessage = '비밀번호가 올바르지 않습니다.'
    } else if (error.code === 'auth/invalid-email') {
      errorMessage = '올바른 이메일 형식이 아닙니다.'
    } else if (error.code === 'auth/too-many-requests') {
      errorMessage = '너무 많은 로그인 시도가 있었습니다. 나중에 다시 시도해주세요.'
    } else if (error.code === 'auth/operation-not-allowed') {
      errorMessage = '이메일/비밀번호 인증이 활성화되지 않았습니다.\n\nFirebase Console에서 활성화 방법:\n1. https://console.firebase.google.com 접속\n2. 프로젝트 선택 (tuldung)\n3. Authentication > Sign-in method\n4. "이메일/비밀번호" 클릭\n5. "사용 설정" 토글 활성화\n6. 저장'
    } else if (error.code === 'auth/network-request-failed') {
      errorMessage = '네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.'
    } else if (error.code === 'auth/invalid-credential') {
      errorMessage = '이메일 또는 비밀번호가 올바르지 않습니다.'
    } else if (error.message) {
      errorMessage = error.message
    }
    
    return { success: false, error: errorMessage }
  }
}

