<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/store/appStore'
import { getCurrentUser, getI18nTexts } from '@/utils/userUtils'
import { connectWallet, isMetaMaskInstalled } from '@/utils/wallet'
import { verifyPassword, hashPassword } from '@/utils/passwordUtils'
import { loginWithGoogle } from '@/utils/firebaseAuth'
import { auth } from '@/firebase/config'
import loginBtn from '@/assets/img/loginBtn.png'
import urerTown from '@/assets/img/urerTown.png'

// Firebase 사용 가능 여부 확인
const isFirebaseAvailable = computed(() => {
  return !!auth
})

const router = useRouter()
const store = useAppStore()
const { setWalletConnected, setLoading, loadCurrentUser, connectWalletToApp } = store
const isConnecting = ref(false)
const walletConnected = ref(false)
const isWalletConnecting = ref(false)
const walletError = ref('')

// 랜덤 고양이 이미지 선택
const randomCatImage = ref('')

// 다국어 텍스트
const texts = computed(() => getI18nTexts())


// 회원가입 페이지로 이동
const goToSignup = () => {
  router.push('/signup')
}

// 로그인 폼 데이터
const loginId = ref('')
const loginPw = ref('')

// 로그인 처리
const handleLogin = async (event) => {
  event.preventDefault() // 폼 기본 제출 방지
  
  // ID와 PW가 모두 입력되었는지 확인
  if (!loginId.value.trim() || !loginPw.value.trim()) {
    alert('Please enter both email and password.')
    return
  }
  
  isConnecting.value = true
  setLoading(true)
  
  // 로컬 스토리지에서 사용자 데이터 가져오기
  const users = JSON.parse(localStorage.getItem('users') || '[]')
  const user = users.find(u => u.email === loginId.value)
  
  // 디버깅용 로그
  if (import.meta.env.DEV) {
    console.log('로그인 시도:', { email: loginId.value, userFound: !!user })
    if (user) {
      console.log('사용자 정보:', { 
        email: user.email, 
        passwordLength: user.password?.length || 0,
        passwordType: user.password?.length < 64 ? '평문' : '해시'
      })
    }
  }
  
  // 실제로는 여기서 서버에 로그인 요청을 보내고 응답을 받음
  // 지금은 시뮬레이션으로 2초 후 로그인 완료
  setTimeout(async () => {
    isConnecting.value = false
    
    if (user) {
      // 비밀번호 검증 (해시화된 비밀번호와 비교)
      let passwordMatch = false
      try {
        // 기존 평문 비밀번호와의 호환성 체크 (마이그레이션용)
        if (user.password && user.password.length < 64) {
          // 해시가 아닌 평문 비밀번호인 경우 (기존 사용자)
          passwordMatch = user.password === loginPw.value
          if (import.meta.env.DEV) {
            console.log('평문 비밀번호 검증:', { match: passwordMatch })
          }
          // 다음 로그인 시 해시화된 비밀번호로 업데이트
          if (passwordMatch) {
            const hashedPassword = await hashPassword(loginPw.value)
            user.password = hashedPassword
            const userIndex = users.findIndex(u => u.id === user.id)
            if (userIndex !== -1) {
              users[userIndex] = user
              localStorage.setItem('users', JSON.stringify(users))
            }
          }
        } else {
          // 해시화된 비밀번호인 경우
          passwordMatch = await verifyPassword(loginPw.value, user.password)
          if (import.meta.env.DEV) {
            console.log('해시 비밀번호 검증:', { 
              match: passwordMatch,
              inputHash: await hashPassword(loginPw.value),
              storedHash: user.password
            })
          }
        }
      } catch (error) {
        console.error('Password verification error:', error)
        setLoading(false)
        alert('An error occurred during login. Please try again.')
        return
      }
      
      if (passwordMatch) {
        // 로그인 성공
        walletConnected.value = true
        
        // 현재 로그인한 사용자 정보를 localStorage와 sessionStorage에 저장
        // 비밀번호는 저장하지 않음 (보안)
        const { password, ...userWithoutPassword } = user
        localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword))
        sessionStorage.setItem('currentUser', JSON.stringify(userWithoutPassword))
        
        // 상태 저장 (실제로는 서버에서 받은 사용자 정보를 저장)
        setWalletConnected(user.email, `${user.gameData?.coins || 0} coins`)
        setLoading(false)
        
        // 로그인 완료 후 홈 화면으로 이동
        setTimeout(() => {
          router.push('/home')
        }, 1000)
      } else {
        // 로그인 실패
        setLoading(false)
        alert('Email or password is incorrect.')
      }
    } else {
      // 사용자를 찾을 수 없음
      setLoading(false)
      alert('Email or password is incorrect.')
    }
  }, 2000)
}


// 비밀번호 찾기 페이지로 이동
const goToForgotPassword = () => {
  router.push('/forgot-password')
}

// 지갑 연결 처리
const handleWalletConnect = async () => {
  try {
    isWalletConnecting.value = true
    walletError.value = ''
    setLoading(true)
    
    // MetaMask 설치 확인
    if (!isMetaMaskInstalled()) {
      walletError.value = 'MetaMask is not installed.'
      const install = confirm('Would you like to install MetaMask?')
      if (install) {
        window.open('https://metamask.io/download/', '_blank')
      }
      return
    }
    
    // 지갑 연결
    const result = await connectWalletToApp()
    
    if (result.success) {
      walletConnected.value = true
      
      // 홈 화면으로 이동
      setTimeout(() => {
        router.push('/home')
      }, 1000)
    } else {
      walletError.value = result.error || 'Failed to connect wallet.'
      if (result.needInstall) {
        const install = confirm('Would you like to install MetaMask?')
        if (install) {
          window.open('https://metamask.io/download/', '_blank')
        }
      }
    }
  } catch (error) {
    console.error('Wallet connection error:', error)
    walletError.value = 'An error occurred while connecting wallet.'
  } finally {
    isWalletConnecting.value = false
    setLoading(false)
  }
}

// Google 로그인 처리
const handleGoogleLogin = async () => {
  if (!auth) {
    alert('Firebase가 설정되지 않았습니다. 개발 서버를 재시작해주세요.')
    console.error('Firebase Auth가 초기화되지 않았습니다.')
    return
  }
  
  setLoading(true)
  isConnecting.value = true
  
  try {
    console.log('Google 로그인 시작...')
    const result = await loginWithGoogle()
    
    if (result.success && result.redirect) {
      // Google 로그인 리다이렉트가 발생했으므로, 페이지가 새로 로드될 것임
      // App.vue에서 리다이렉트 결과를 처리할 것임
      console.log('Google 로그인 리다이렉트 시작')
    } else if (result.success) {
      // 리다이렉트 없이 바로 로그인 성공 (거의 발생하지 않음)
      console.log('Google 로그인 성공 (리다이렉트 없음):', result.user?.email)
      router.push('/home')
    } else {
      console.error('Google 로그인 실패:', result.error)
      alert(result.error || 'Google 로그인에 실패했습니다.')
    }
  } catch (error) {
    console.error('Google 로그인 오류:', error)
    alert('Google 로그인 중 오류가 발생했습니다: ' + error.message)
  } finally {
    setLoading(false)
    isConnecting.value = false
  }
}

onMounted(() => {
  // 초기 로딩 상태 설정
  setLoading(false)
  
  // 랜덤 고양이 이미지 선택 (cat1.png ~ cat30.png)
  const randomCatNumber = Math.floor(Math.random() * 30) + 1
  try {
    randomCatImage.value = new URL(`../assets/img/cat${randomCatNumber}.png`, import.meta.url).href
  } catch (error) {
    console.error('고양이 이미지 로드 실패:', error)
    // fallback: 기본 이미지
    try {
      randomCatImage.value = new URL(`../assets/img/cat1.png`, import.meta.url).href
    } catch (fallbackError) {
      console.error('기본 이미지도 로드 실패:', fallbackError)
    }
  }
  
  // 이미 로그인된 상태인지 확인 (게스트 사용자는 제외)
  const currentUser = getCurrentUser()
  const isGuest = currentUser?.loginType === 'guest' || 
                  currentUser?.email?.includes('@guest.com') || 
                  currentUser?.email === 'guest@tdl.com'
  
  if (currentUser && currentUser.id && !isGuest) {
    if (import.meta.env.DEV) {
      console.log('LoginScreen: 이미 로그인된 사용자:', currentUser.email)
    }
    router.push('/home')
    return
  }
  
  // 페이지 진입 시 애니메이션 효과
  const loginCont = document.querySelector('.loginCont')
  if (loginCont) {
    loginCont.style.opacity = '0'
    loginCont.style.transform = 'translateY(30px)'
    
    setTimeout(() => {
      loginCont.style.transition = 'all 0.6s ease'
      loginCont.style.opacity = '1'
      loginCont.style.transform = 'translateY(0)'
    }, 100)
  }
})
</script>

<template>
  <div class="login-screen">
    <!-- 타이틀 -->
    <h1 class="login-title">{{ texts.login }}</h1>
    
    <!-- urerTown 이미지와 고양이 캐릭터 -->
    <div class="urer-town-container">
      <img :src="urerTown" alt="Urer Town" class="urer-town-image" />
      <div class="cat-character-wrapper">
        <img :src="randomCatImage" alt="Cat Character" class="cat-character-image" />
      </div>
    </div>

    <!-- 로그인 폼 -->
    <form @submit="handleLogin" class="login-form">
      <!-- 아이디(이메일계정) -->
      <div class="input-group">
        <div class="input-container">
          <span class="input-text-label">Email</span>
          <input 
            type="email" 
            v-model="loginId"
            class="input-field"
            :placeholder="texts.enterEmail"
            required
          >
        </div>
      </div>

      <!-- 비밀번호 -->
      <div class="input-group">
        <div class="input-container">
          <span class="input-text-label">Password</span>
          <input 
            type="password"
            v-model="loginPw"
            class="input-field"
            :placeholder="texts.enterPassword"
            required
          >
        </div>
      </div>

      <!-- 로그인 버튼 -->
      <button 
        type="submit"
        :disabled="isConnecting || walletConnected"
        class="login-button"
        :class="{ 
          'connecting': isConnecting, 
          'connected': walletConnected 
        }"
      >
        <div v-if="!isConnecting && !walletConnected" class="btn-content loginBt">
          {{ texts.loginButton }}
        </div>
        
        <div v-if="isConnecting" class="btn-content">
          <div class="spinner-small"></div>
          {{ texts.loading }}
        </div>
        
        <div v-if="walletConnected" class="btn-content">
          <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
          {{ texts.success }}!
        </div>
      </button>
    </form>

    <!-- 소셜 로그인 버튼 (일단 숨김 처리) -->
    <!--
    <div class="divider">
      <span class="divider-text">or</span>
    </div>

    <button 
      @click="handleGoogleLogin"
      :disabled="isConnecting || isWalletConnecting"
      class="google-login-button"
    >
      <div class="btn-content">
        <svg v-if="!isConnecting" class="google-icon" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        <div v-if="isConnecting" class="spinner-small"></div>
        <span>{{ isConnecting ? texts.loading : 'Google로 로그인' }}</span>
      </div>
    </button>

    <div class="divider">
      <span class="divider-text">or</span>
    </div>
    -->

    <!-- 지갑 연결 버튼 (일단 숨김) -->
    <button 
      v-if="false"
      @click="handleWalletConnect"
      :disabled="isWalletConnecting || isConnecting"
      class="wallet-connect-button"
    >
      <div class="btn-content">
        <svg v-if="!isWalletConnecting" class="wallet-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
        <div v-if="isWalletConnecting" class="spinner-small"></div>
        <span>{{ isWalletConnecting ? texts.loading : texts.walletConnect }}</span>
      </div>
    </button>

    <!-- 지갑 연결 오류 메시지 (일단 숨김) -->
    <div v-if="false && walletError" class="wallet-error">
      {{ walletError }}
    </div>

    <!-- 회원가입 링크 -->
    <div class="signup-link">
      <button @click="goToSignup" class="signup-btn">
        {{ texts.signupButton }}
      </button>
      <span class="link-separator">|</span>
      <button @click="goToForgotPassword" class="forgot-password-btn">
        Forgot password?
      </button>
    </div>
  </div>
</template>

<style scoped>
.login-screen {
  width: 100%;
  min-height: 100vh;
  background-image: url('@/assets/img/mainBackground01.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

.back-button {
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: 48px;
  height: 48px;
  background: #2BB5BD;
  border: none;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.back-button:hover {
  background: #1E1E2D;
  transform: scale(1.05);
}

.login-title {
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: left;
  margin: 2rem 0 1rem 0;
  position: relative;
  z-index: 1;
}

.urer-town-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 2rem 0;
  position: relative;
  z-index: 1;
  gap: 1rem;
}

.urer-town-image {
  max-width: 160px;
  height: auto;
  object-fit: contain;
  position: absolute;
}

.cat-character-wrapper {
  position: relative;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cat-character-image {
  width: 150%;
  height: 150%;
  margin-top: 50px;
  object-fit: contain;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 1;
}

.input-group {
  gap: 0.5rem;
}

.input-label {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.01em;
  margin-bottom: 0.5rem;
}

.input-container {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  padding: 1rem;
  background-image: url('@/assets/img/logininputBG.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  backdrop-filter: blur(10px);
}

.input-icon {
  color: white;
  margin-right: 0.75rem;
  flex-shrink: 0;
}

.input-text-label {
  color: rgba(255, 255, 255, 0.6);
  font-size: 1em;
  font-weight: 400;
  margin-right: 0.75rem;
  flex-shrink: 0;
}

.input-field {
  flex: 1;
  background: transparent;
  border: none;
  color: white;
  font-size: 1em;
  font-weight: 400;
  letter-spacing: 0.01em;
  outline: none;
  padding: 0.5rem 0;
}

.input-field::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

/* 브라우저 자동완성(autofill) 스타일 오버라이드 */
.input-field:-webkit-autofill,
.input-field:-webkit-autofill:hover,
.input-field:-webkit-autofill:focus,
.input-field:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px #000000 inset !important;
  -webkit-text-fill-color: white !important;
  background-color: transparent !important;
  background-clip: content-box !important;
  transition: background-color 5000s ease-in-out 0s;
}

.input-field:-webkit-autofill::first-line {
  -webkit-text-fill-color: white !important;
  font-size: 1em !important;
}


.login-button {
  background-image: url('@/assets/img/loginBtn.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  color: white;
  border: none;
  border-radius: 12px;
  height: 56px;
  padding: 1.2rem;
  font-size: 1em;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: all 0.3s ease;
  margin:1.5rem auto;
  width: 70%;
  position: relative;
}

.login-button:hover:not(:disabled) {
  transform: translateY(-2px);
}

.login-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.loginBt{
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.btn-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.spinner-small {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.check-icon {
  width: 16px;
  height: 16px;
}

.signup-link {
  text-align: center;
  margin-top: 2rem;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.signup-btn {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.4);
  font-size: 1.2em;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 0.5rem;
}

.signup-btn:hover {
  color: rgba(255, 255, 255, 0.8);
}

.link-separator {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.2em;
}

.forgot-password-btn {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.4);
  font-size: 1.2em;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 0.5rem;
}

.forgot-password-btn:hover {
  color: rgba(255, 255, 255, 0.8);
}

/* 구분선 */
.divider {
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  position: relative;
  z-index: 1;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
}

.divider-text {
  padding: 0 1rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

/* Google 로그인 버튼 */
.google-login-button {
  background: white;
  color: #333;
  border: 1px solid #dadce0;
  border-radius: 12px;
  height: 56px;
  padding: 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.google-login-button:hover:not(:disabled) {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transform: translateY(-1px);
}

.google-login-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.google-icon {
  width: 20px;
  height: 20px;
  margin-right: 0.75rem;
}

/* 지갑 연결 버튼 */
.wallet-connect-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  height: 56px;
  padding: 1.2rem;
  font-size: 1em;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  margin: 1.5rem auto;
}

.wallet-connect-button:hover:not(:disabled) {
  transform: translateY(-2px);
}

.wallet-connect-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.wallet-icon {
  width: 20px;
  height: 20px;
  margin-right: 0.75rem;
}

/* 지갑 연결 오류 메시지 */
.wallet-error {
  color: #ff6b6b;
  font-size: 0.9rem;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: rgba(255, 107, 107, 0.1);
  border-radius: 8px;
}

/* 반응형 */
@media (max-width: 480px) {
  .login-screen {
    padding: 1.2rem;
  }
  
  .login-title {
    font-size: 2em;
    margin: 1.5rem 0 10vw 0;
    text-align: center;
  }
  
  .urer-town-container {
    margin: 0 0 3em 0;
    gap: 0.75rem;
  }
  
  .urer-town-image {
    max-width: 160px;
  }
  
  .cat-character-wrapper {
    width: 130px;
    height: 130px;
    border-width: 6px;
  }
  
  .login-form {
    gap: 1.5rem;
  }
  
  .input-label {
    font-size: 0.85rem;
  }
  
  .input-field {
    font-size: 1em;
  }
  
  .input-text-label {
    font-size: 1em;
  }
  
  .login-button {
    font-size: 1.4em;
    height: 52px;
    padding: 1rem;
    width: 70%;
    margin: auto
  }
  
  .wallet-connect-button {
    font-size: 1em;
  }
  
  .signup-btn {
    font-size: 0.8em;
  }
  
  .forgot-password-btn {
    font-size: 0.8em;
  }
  
  .back-button {
    width: 40px;
    height: 40px;
    top: 1rem;
    left: 1rem;
  }
}
</style>
