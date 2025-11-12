<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/store/appStore'
import { loginWithGoogle, handleGoogleRedirect } from '@/utils/firebaseAuth'

const router = useRouter()
const { setWalletConnected, setLoading } = useAppStore()
const isConnecting = ref(false)
const walletConnected = ref(false)
const isGoogleLoading = ref(false)

// 비밀번호 표시/숨김 상태
const showPassword = ref(false)


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
    alert('ID와 비밀번호를 모두 입력해주세요.')
    return
  }
  
  isConnecting.value = true
  setLoading(true)
  
  // 로컬 스토리지에서 사용자 데이터 가져오기
  const users = JSON.parse(localStorage.getItem('users') || '[]')
  const user = users.find(u => u.email === loginId.value && u.password === loginPw.value)
  
  // 실제로는 여기서 서버에 로그인 요청을 보내고 응답을 받음
  // 지금은 시뮬레이션으로 2초 후 로그인 완료
  setTimeout(() => {
    isConnecting.value = false
    
    if (user) {
      // 로그인 성공
      walletConnected.value = true
      
      // 현재 로그인한 사용자 정보를 세션 스토리지에 저장
      sessionStorage.setItem('currentUser', JSON.stringify(user))
      
      // 상태 저장 (실제로는 서버에서 받은 사용자 정보를 저장)
      setWalletConnected(user.email, `${user.gameData.coins} 코인`)
      setLoading(false)
      
      // 로그인 완료 후 메인 화면으로 이동
      setTimeout(() => {
        router.push('/main')
      }, 1000)
    } else {
      // 로그인 실패
      setLoading(false)
      alert('이메일 또는 비밀번호가 올바르지 않습니다.')
    }
  }, 2000)
}

// 비밀번호 표시 토글
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

// 카카오톡 WebView 감지 함수
const isKakaoTalkWebView = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera
  return /KAKAOTALK/i.test(userAgent) || /KakaoTalk/i.test(userAgent)
}

// Google 소셜 로그인
const handleGoogleLogin = async () => {
  // 카카오톡 WebView에서 접속한 경우 안내
  if (isKakaoTalkWebView()) {
    const useExternalBrowser = confirm(
      '카카오톡 인앱 브라우저에서는 Google 로그인이 제한됩니다.\n\n' +
      '외부 브라우저(Chrome, Safari 등)에서 열어주세요.\n\n' +
      '외부 브라우저로 열까요?'
    )
    
    if (useExternalBrowser) {
      // 현재 URL을 외부 브라우저로 열기
      const currentUrl = window.location.href
      window.open(currentUrl, '_blank')
      return
    } else {
      return
    }
  }
  
  isGoogleLoading.value = true
  setLoading(true)
  
  try {
    const result = await loginWithGoogle()
    
    // 리다이렉트 방식인 경우 (모바일)
    if (result.redirect) {
      // 리다이렉트는 페이지를 이동시키므로 여기서는 아무것도 하지 않음
      // 실제 처리는 페이지가 다시 로드될 때 onMounted에서 수행됨
      return
    }
    
    if (result.success && result.user) {
      walletConnected.value = true
      setWalletConnected(result.user.email, `${result.user.gameData?.coins || 0} 코인`)
      setLoading(false)
      
      // 로그인 완료 후 메인 화면으로 이동
      setTimeout(() => {
        router.push('/main')
      }, 1000)
    } else {
      setLoading(false)
      alert(`로그인 실패: ${result.error}`)
    }
  } catch (error) {
    setLoading(false)
    alert(`로그인 오류: ${error.message}`)
  } finally {
    isGoogleLoading.value = false
  }
}

onMounted(async () => {
  // 카카오톡 WebView 감지 및 안내
  if (isKakaoTalkWebView()) {
    setTimeout(() => {
      alert(
        '⚠️ 카카오톡 인앱 브라우저에서는 Google 로그인이 제한됩니다.\n\n' +
        'Google의 보안 정책상 카카오톡 WebView에서는 로그인이 차단됩니다.\n\n' +
        '✅ 해결 방법:\n' +
        '1. 카카오톡에서 "외부 브라우저로 열기" 선택\n' +
        '2. 또는 Chrome, Safari 등 외부 브라우저에서 직접 접속\n\n' +
        '현재 페이지를 외부 브라우저로 열어주세요.'
      )
    }, 500)
  }
  
  // 리다이렉트 결과 처리 (Google 로그인 후 돌아온 경우)
  try {
    const redirectResult = await handleGoogleRedirect()
    if (redirectResult.success && redirectResult.user) {
      // 리다이렉트 로그인 성공
      walletConnected.value = true
      setWalletConnected(redirectResult.user.email, `${redirectResult.user.gameData?.coins || 0} 코인`)
      setLoading(false)
      
      // 로그인 완료 후 메인 화면으로 이동
      setTimeout(() => {
        router.push('/main')
      }, 500)
      return
    }
  } catch (error) {
    // 리다이렉트 결과가 없거나 오류인 경우 무시 (정상적인 로그인 페이지 접근)
    console.log('리다이렉트 결과 없음:', error.message)
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
    <h1 class="login-title">로그인</h1>

    <!-- 로그인 폼 -->
    <form @submit="handleLogin" class="login-form">
      <!-- 아이디(이메일계정) -->
      <div class="input-group">
        <label class="input-label">아이디(이메일계정)</label>
        <div class="input-container">
          <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <input 
            type="email" 
            v-model="loginId"
            class="input-field"
            placeholder="이메일을 입력하세요"
            required
          >
        </div>
      </div>

      <!-- 비밀번호 -->
      <div class="input-group">
        <label class="input-label">비밀번호</label>
        <div class="input-container">
          <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <circle cx="12" cy="16" r="1"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          <input 
            :type="showPassword ? 'text' : 'password'"
            v-model="loginPw"
            class="input-field"
            placeholder="비밀번호를 입력하세요"
            required
          >
          <button 
            type="button" 
            class="password-toggle"
            @click="togglePasswordVisibility"
          >
            <svg v-if="!showPassword" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
              <line x1="1" y1="1" x2="23" y2="23"/>
            </svg>
          </button>
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
        <div v-if="!isConnecting && !walletConnected" class="btn-content">
          로그인
        </div>
        
        <div v-if="isConnecting" class="btn-content">
          <div class="spinner-small"></div>
          로그인 중...
        </div>
        
        <div v-if="walletConnected" class="btn-content">
          <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
          성공!
        </div>
      </button>
    </form>

    <!-- 소셜 로그인 구분선 -->
    <div class="divider-section">
      <div class="divider-line"></div>
      <span class="divider-text">또는</span>
      <div class="divider-line"></div>
    </div>

    <!-- Google 소셜 로그인 버튼 -->
    <button 
      @click="handleGoogleLogin"
      :disabled="isGoogleLoading || isConnecting || walletConnected"
      class="google-login-button"
      :class="{ 'loading': isGoogleLoading }"
    >
      <svg v-if="!isGoogleLoading" class="google-icon" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
      <div v-if="isGoogleLoading" class="spinner-small"></div>
      <span>{{ isGoogleLoading ? '로그인 중...' : 'Google로 로그인' }}</span>
    </button>

    <!-- 회원가입 링크 -->
    <div class="signup-link">
      <button @click="goToSignup" class="signup-btn">
        회원 가입하기
      </button>
    </div>
  </div>
</template>

<style scoped>
.login-screen {
  width: 100%;
  min-height: 100vh;
  background-image: url('@/assets/img/backgroundImg.png');
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
  margin: 2rem 0 2rem 0;
  position: relative;
  z-index: 1;
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
  display: flex;
  flex-direction: column;
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
  align-items: center;
  border-radius: 12px;
  padding: 1rem;
  backdrop-filter: blur(10px);
}

.input-icon {
  color: white;
  margin-right: 0.75rem;
  flex-shrink: 0;
}

.input-field {
  flex: 1;
  background: transparent;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.01em;
  outline: none;
  padding: 0.5rem 0;
}

.input-field::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.password-toggle {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.25rem;
  margin-left: 0.5rem;
  transition: color 0.3s ease;
  flex-shrink: 0;
}

.password-toggle:hover {
  color: rgba(255, 255, 255, 0.8);
}

.login-button {
  background: #2BB5BD;
  color: white;
  border: none;
  border-radius: 12px;
  height: 56px;
  padding: 1.2rem;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
  width: 100%;
}

.login-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
}

.login-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
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

/* 소셜 로그인 구분선 */
.divider-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
  width: 100%;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
}

.divider-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  white-space: nowrap;
  font-weight: 500;
}

/* Google 로그인 버튼 */
.google-login-button {
  width: 100%;
  background: white;
  color: #333;
  border: none;
  border-radius: 5px;
  height: 56px;
  padding: 1.2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
}

.google-login-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  background: #f8f8f8;
}

.google-login-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.google-login-button.loading {
  background: #f0f0f0;
}

.google-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.signup-link {
  text-align: center;
  margin-top: 2rem;
  position: relative;
  z-index: 1;
}

.signup-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 0.5rem;
}

.signup-btn:hover {
  color: rgba(255, 255, 255, 0.8);
}

/* 반응형 */
@media (max-width: 480px) {
  .login-screen {
    padding: 1.2rem;
  }
  
  .login-title {
    font-size: 1.6rem;
    margin: 1.5rem 0 1.5rem 0;
  }
  
  .login-form {
    gap: 1.5rem;
  }
  
  .input-label {
    font-size: 0.85rem;
  }
  
  .input-field {
    font-size: 0.95rem;
  }
  
  .login-button,
  .google-login-button {
    font-size: 1rem;
    height: 52px;
    padding: 1rem;
  }
  
  .signup-btn {
    font-size: 0.9rem;
  }
  
  .back-button {
    width: 40px;
    height: 40px;
    top: 1rem;
    left: 1rem;
  }
}
</style>
