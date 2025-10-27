<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/store/appStore'

const router = useRouter()
const { setWalletConnected, setLoading } = useAppStore()
const isConnecting = ref(false)
const walletConnected = ref(false)

// 비밀번호 표시/숨김 상태
const showPassword = ref(false)

// 뒤로가기
const goBack = () => {
  router.go(-1)
}

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

onMounted(() => {
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
    <!-- 뒤로가기 버튼 -->
    <button class="back-button" @click="goBack">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
    </button>

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
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  position: relative;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

.back-button {
  position: absolute;
  top: 2rem;
  left: 2rem;
  width: 40px;
  height: 40px;
  background: rgba(52, 152, 219, 0.8);
  border: none;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-button:hover {
  background: rgba(52, 152, 219, 1);
  transform: scale(1.05);
}

.login-title {
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin: 4rem 0 3rem 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 400px;
  margin: 0 auto;
  width: 100%;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-label {
  color: white;
  font-size: 1rem;
  font-weight: 500;
}

.input-container {
  position: relative;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
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
  outline: none;
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
}

.password-toggle:hover {
  color: rgba(255, 255, 255, 0.8);
}

.login-button {
  background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 1.2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
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

.signup-link {
  text-align: center;
  margin-top: 2rem;
}

.signup-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.signup-btn:hover {
  color: rgba(255, 255, 255, 0.8);
}

/* 반응형 */
@media (max-width: 480px) {
  .login-screen {
    padding: 1rem;
  }
  
  .login-title {
    font-size: 2rem;
    margin: 3rem 0 2rem 0;
  }
  
  .login-form {
    gap: 1.5rem;
  }
}
</style>
