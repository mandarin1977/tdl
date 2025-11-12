// Firebase 설정 파일
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, signOut, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

// Firebase 설정
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCwvJ8cUWLZPZ26i1deIAXnoLuzToIcB70",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "tuldung.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "tuldung",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "tuldung.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1086524417813",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1086524417813:web:8199da4b7cebcaffc86b1c",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-EGV6XDKG9R"
}

// Firebase 초기화
const app = initializeApp(firebaseConfig)

// Auth 및 Firestore 인스턴스
export const auth = getAuth(app)
export const db = getFirestore(app)

// Analytics 초기화 (브라우저 환경에서만)
let analytics = null
if (typeof window !== 'undefined') {
  try {
    analytics = getAnalytics(app)
  } catch (error) {
    console.warn('Analytics 초기화 실패:', error)
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

// 모바일/WebView 환경 감지 함수
const isMobileOrWebView = () => {
  try {
    if (typeof navigator === 'undefined') return false
    const userAgent = navigator.userAgent || navigator.vendor || ''
    
    // 모바일 기기 감지
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
    
    // WebView 감지 (카카오톡, 네이버, 라인 등)
    const isWebView = /KAKAOTALK|KakaoTalk|NAVER|Line|Daum/i.test(userAgent)
    
    // 화면 크기로도 판단 (작은 화면이면 모바일로 간주)
    const isSmallScreen = window.innerWidth <= 768
    
    return isMobile || isWebView || isSmallScreen
  } catch (error) {
    console.error('환경 감지 오류:', error)
    return false
  }
}

// Google 로그인 함수 (환경에 따라 popup/redirect 선택)
export const signInWithGoogle = async () => {
  try {
    // 모바일/WebView 환경이면 redirect 사용
    if (isMobileOrWebView()) {
      await signInWithRedirect(auth, googleProvider)
      return { success: true, redirect: true }
    } else {
      // 데스크톱 환경이면 popup 사용 (더 나은 UX)
      try {
        const result = await signInWithPopup(auth, googleProvider)
        const user = result.user
        await saveUserToFirestore(user)
        return { success: true, user }
      } catch (popupError) {
        // popup이 차단되거나 실패한 경우 redirect로 폴백
        if (popupError.code === 'auth/popup-blocked' || 
            popupError.code === 'auth/popup-closed-by-user' ||
            popupError.message?.includes('disallowed_useragent')) {
          console.log('Popup 실패, redirect로 전환:', popupError.message)
          await signInWithRedirect(auth, googleProvider)
          return { success: true, redirect: true }
        }
        throw popupError
      }
    }
  } catch (error) {
    console.error('Google 로그인 오류:', error)
    return { success: false, error: error.message }
  }
}

// 리다이렉트 결과 처리 함수 (리다이렉트 후 호출)
export const handleRedirectResult = async () => {
  try {
    console.log('getRedirectResult 호출 중...')
    const result = await getRedirectResult(auth)
    console.log('getRedirectResult 결과:', result)
    
    if (result && result.user) {
      const user = result.user
      console.log('인증된 사용자:', user.email, user.uid)
      await saveUserToFirestore(user)
      console.log('Firestore 저장 완료')
      return { success: true, user }
    }
    
    console.log('리다이렉트 결과 없음 (result가 null이거나 user가 없음)')
    return { success: false, error: '리다이렉트 결과가 없습니다.' }
  } catch (error) {
    console.error('리다이렉트 결과 처리 오류:', error)
    return { success: false, error: error.message }
  }
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

