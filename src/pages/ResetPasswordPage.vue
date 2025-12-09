<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { verifyResetToken, deleteResetToken } from '@/utils/resetTokenUtils'
import { hashPassword } from '@/utils/passwordUtils'

const router = useRouter()
const route = useRoute()

// 폼 데이터
const newPassword = ref('')
const confirmPassword = ref('')
const isResettingPassword = ref(false)
const token = ref('')
const isValidToken = ref(false)
const tokenEmail = ref('')

onMounted(() => {
  // URL에서 토큰 가져오기
  token.value = route.query.token || ''
  
  if (!token.value) {
    alert('Invalid reset link. Please request a new password reset.')
    router.push('/forgot-password')
    return
  }
  
  // 토큰 검증
  const tokenData = verifyResetToken(token.value)
  
  if (!tokenData) {
    alert('Reset link has expired or is invalid. Please request a new password reset.')
    router.push('/forgot-password')
    return
  }
  
  isValidToken.value = true
  tokenEmail.value = tokenData.email
})

// 뒤로가기
const goBack = () => {
  router.push('/login')
}

// 비밀번호 재설정 처리
const handleResetPassword = async (event) => {
  event.preventDefault()
  
  if (!newPassword.value.trim() || !confirmPassword.value.trim()) {
    alert('Please enter new password and confirm it.')
    return
  }
  
  if (newPassword.value !== confirmPassword.value) {
    alert('Passwords do not match.')
    return
  }
  
  if (newPassword.value.length < 6) {
    alert('Password must be at least 6 characters long.')
    return
  }
  
  isResettingPassword.value = true
  
  try {
    // 토큰 재검증
    const tokenData = verifyResetToken(token.value)
    
    if (!tokenData) {
      alert('Reset link has expired. Please request a new password reset.')
      router.push('/forgot-password')
      return
    }
    
    // localStorage에서 사용자 찾기
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const userIndex = users.findIndex(u => u.email === tokenData.email)
    
    if (userIndex === -1) {
      alert('User not found.')
      isResettingPassword.value = false
      return
    }
    
    // 비밀번호 해싱
    const hashedPassword = await hashPassword(newPassword.value)
    
    // 비밀번호 업데이트
    users[userIndex].password = hashedPassword
    localStorage.setItem('users', JSON.stringify(users))
    
    // 토큰 삭제
    deleteResetToken(token.value)
    
    alert('Password has been reset successfully. Please login with your new password.')
    router.push('/login')
  } catch (error) {
    console.error('Password reset error:', error)
    alert('An error occurred while resetting password. Please try again.')
  } finally {
    isResettingPassword.value = false
  }
}
</script>

<template>
  <div class="reset-password-screen">
    <!-- 뒤로가기 버튼 -->
    <button class="back-button" @click="goBack">
      <img src="@/assets/img/arrowsLeft.png" alt="back-button" width="20px">
    </button>

    <!-- 타이틀 -->
    <h1 class="reset-password-title">Reset Password</h1>

    <!-- 비밀번호 재설정 폼 -->
    <form v-if="isValidToken" @submit="handleResetPassword" class="reset-password-form">
      <p class="email-info">Reset password for: {{ tokenEmail }}</p>
      
      <!-- 새 비밀번호 -->
      <div class="input-group">
        <div class="input-container">
          <span class="input-text-label">password</span>
          <input 
            type="password" 
            v-model="newPassword"
            class="input-field"
            placeholder="Enter new password"
            required
            :disabled="isResettingPassword"
          >
        </div>
      </div>
      
      <!-- 비밀번호 확인 -->
      <div class="input-group">
        <div class="input-container">
          <span class="input-text-label">password</span>
          <input 
            type="password" 
            v-model="confirmPassword"
            class="input-field"
            placeholder="Confirm new password"
            required
            :disabled="isResettingPassword"
          >
        </div>
      </div>
      
      <!-- 재설정 버튼 -->
      <button 
        type="submit" 
        class="reset-button"
        :disabled="isResettingPassword"
      >
        {{ isResettingPassword ? 'Resetting...' : 'Reset Password' }}
      </button>
    </form>
    
    <div v-else class="loading-container">
      <p>Validating reset link...</p>
    </div>
  </div>
</template>

<style scoped>
.reset-password-screen {
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

.reset-password-title {
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: left;
  margin: 2rem 0 2rem 0;
  position: relative;
  z-index: 1;
}

.reset-password-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 1;
}

.email-info {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 0.5rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-container {
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 12px;
  padding: 1rem;
  background-color: #000000;
  backdrop-filter: blur(10px);
}

.input-text-label {
  color: white;
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

.input-field:disabled {
  opacity: 0.6;
}

.reset-button {
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
  margin-top: 1rem;
  width: 100%;
}

.reset-button:hover:not(:disabled) {
  transform: translateY(-2px);
}

.reset-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.loading-container {
  text-align: center;
  color: white;
  margin-top: 2rem;
}

/* 반응형 */
@media (max-width: 480px) {
  .reset-password-screen {
    padding: 1.2rem;
  }
  
  .reset-password-title {
    font-size: 1.6rem;
    margin: 1.5rem 0 1.5rem 0;
  }
  
  .reset-password-form {
    gap: 1.5rem;
  }
  
  .input-field {
    font-size: 1em;
  }
  
  .input-text-label {
    font-size: 1em;
  }
  
  .reset-button {
    font-size: 1em;
    height: 52px;
    padding: 1rem;
  }
  
  .back-button {
    width: 40px;
    height: 40px;
    top: 1rem;
    left: 1rem;
  }
}
</style>
