# 소셜 로그인 관련 미사용 코드 정리

## 발견된 미사용 코드

### 1. `src/firebase/config.js`
- ❌ `GoogleAuthProvider` import (사용 안됨)
- ❌ `signInWithPopup` import (사용 안됨)  
- ❌ `signInWithRedirect` import (사용 안됨)
- ❌ `getRedirectResult` import (사용 안됨)
- ❌ `googleProvider` 변수 (사용 안됨)
- ❌ `signInWithGoogle()` 함수 (사용 안됨)
- ❌ `handleRedirectResult()` 함수 (사용 안됨)
- ❌ `resetRedirectResultCheck()` 함수 (사용 안됨)
- ❌ `saveUserToFirestore()` 함수 (signInWithGoogle에서만 호출되므로 사용 안됨)

### 2. `src/utils/firebaseAuth.js`
- ❌ `signInWithGoogle` import (사용 안됨)
- ❌ `handleRedirectResult` import (사용 안됨)
- ❌ `loginWithGoogle()` 함수 (사용 안됨)
- ❌ `handleGoogleRedirect()` 함수 (사용 안됨)

### 3. 주석
- `src/components/Header.vue` 41번 줄: "소셜 로그인" 주석
- `src/pages/MainScreen.vue` 949번 줄: "소셜 로그인" 주석

## 사용 중인 Firebase 코드 (유지 필요)
- ✅ `auth` - Firebase 인증 인스턴스
- ✅ `db` - Firestore 인스턴스
- ✅ `signOutUser()` - 로그아웃 (UserProfilePage에서 사용)
- ✅ `onAuthChange()` - 인증 상태 변경 감지
- ✅ `getUserGameData()` - 게임 데이터 가져오기
- ✅ `updateUserGameDataInFirestore()` - 게임 데이터 업데이트
- ✅ `logout()` (firebaseAuth.js) - UserProfilePage에서 사용
- ✅ `updateGameData()` (firebaseAuth.js) - userUtils.js에서 사용

## 정리 방법
소셜 로그인 관련 코드만 제거하고, Firebase 인증/DB 기능은 유지합니다.

