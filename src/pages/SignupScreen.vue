<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 폼 데이터
const formData = ref({
  name: '',
  phone: '',
  email: '',
  password: ''
})

// 비밀번호 표시/숨김 상태
const showPassword = ref(false)

// 뒤로가기
const goBack = () => {
  router.go(-1)
}

// 회원가입 처리
const handleSignup = async (event) => {
  event.preventDefault()
  
  // 필수 필드 검증
  if (!formData.value.name.trim() || !formData.value.phone.trim() || 
      !formData.value.email.trim() || !formData.value.password.trim()) {
    alert('모든 필드를 입력해주세요.')
    return
  }
  
  // 이메일 형식 검증
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.value.email)) {
    alert('올바른 이메일 형식을 입력해주세요.')
    return
  }
  
  // 비밀번호 길이 검증
  if (formData.value.password.length < 6) {
    alert('비밀번호는 6자 이상이어야 합니다.')
    return
  }
  
  // 기존 사용자 확인 (이메일 중복 체크)
  const existingUsers = JSON.parse(localStorage.getItem('users') || '[]')
  const emailExists = existingUsers.some(user => user.email === formData.value.email)
  
  if (emailExists) {
    alert('이미 가입된 이메일입니다.')
    return
  }
  
  // 새 사용자 데이터 생성
  const newUser = {
    id: Date.now(), // 간단한 ID 생성
    name: formData.value.name,
    phone: formData.value.phone,
    email: formData.value.email,
    password: formData.value.password, // 실제로는 해시화해야 함
    createdAt: new Date().toISOString(),
    gameData: {
      level: 1,
      coins: 0,
      nftCount: 0
    }
  }
  
  // 사용자 목록에 추가
  existingUsers.push(newUser)
  
  // 로컬 스토리지에 저장
  localStorage.setItem('users', JSON.stringify(existingUsers))
  
  console.log('회원가입 완료:', newUser)
  alert('회원가입이 완료되었습니다!')
  
  // 로그인 화면으로 이동
  router.push('/login')
}

// 비밀번호 표시 토글
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}
</script>

<template>
  <div class="signup-screen">
    <!-- 뒤로가기 버튼 -->
    <button class="back-button" @click="goBack">
      <img src="@/assets/img/arrowsLeft.png" alt="back-button" width="20px">
    </button>

    <!-- 타이틀 -->
    <h1 class="signup-title">회원가입</h1>

    <!-- 회원가입 폼 -->
    <form @submit="handleSignup" class="signup-form">
      <!-- 이름 -->
      <div class="input-group">
        <label class="input-label">이름</label>
        <div class="input-container">
          <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <input 
            type="text" 
            v-model="formData.name"
            class="input-field"
            placeholder="이름을 입력하세요"
            required
          >
        </div>
      </div>

      <!-- 전화번호 -->
      <div class="input-group">
        <label class="input-label">전화번호</label>
        <div class="input-container">
          <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <input 
            type="tel" 
            v-model="formData.phone"
            class="input-field"
            placeholder="전화번호를 입력하세요"
            required
          >
        </div>
      </div>

      <!-- 이메일 -->
      <div class="input-group">
        <label class="input-label">이메일</label>
        <div class="input-container">
          <svg class="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <input 
            type="email" 
            v-model="formData.email"
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
            v-model="formData.password"
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

      <!-- 회원가입 버튼 -->
      <button type="submit" class="signup-button">
        회원가입
      </button>
    </form>
  </div>
</template>

<style scoped>
.signup-screen {
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

.signup-title {
  color: white;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: left;
  margin: 2rem 0 2rem 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.signup-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;
  width: 100%;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-label {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.input-container {
  position: relative;
  display: flex;
  align-items: center;
  padding: 1rem;
  backdrop-filter: blur(10px);
}

.input-icon {
  color: rgba(255, 255, 255, 0.6);
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
  padding: 0.5rem 0;
}

.input-field::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.password-toggle {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  padding: 0.25rem;
  margin-left: 0.5rem;
  transition: color 0.3s ease;
}

.password-toggle:hover {
  color: rgba(255, 255, 255, 0.8);
}

.signup-button {
  background: #2BB5BD;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 1.2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  height: 56px;
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
}

.signup-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
}

.signup-button:active {
  transform: translateY(0);
}

/* 반응형 */
@media (max-width: 480px) {
  .signup-screen {
    padding: 1.2rem;
  }
  
  .signup-title {
    font-size: 1.6rem;
    margin: 1.5rem 0 1.5rem 0;
  }
  
  .signup-form {
    gap: 1.5rem;
  }
  
  .input-label {
    font-size: 0.85rem;
  }
  
  .input-field {
    font-size: 0.95rem;
  }
  
  .signup-button {
    font-size: 1rem;
    height: 52px;
    padding: 1rem;
  }
}
</style>
