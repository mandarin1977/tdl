<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { generateResetToken, saveResetToken, generateResetLink } from '@/utils/resetTokenUtils'
import cat9 from '@/assets/img/cat9.png'

const router = useRouter()

// 폼 데이터
const forgotPasswordEmail = ref('')
const isSending = ref(false)
const resetLink = ref('')
const showLink = ref(false)
const linkCopied = ref(false)

// 뒤로가기
const goBack = () => {
  router.go(-1)
}

// 비밀번호 재설정 링크 전송 처리
const handleSendResetLink = async (event) => {
  event.preventDefault()
  
  if (!forgotPasswordEmail.value.trim()) {
    alert('Please enter your email address.')
    return
  }
  
  // 이메일 형식 검증
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(forgotPasswordEmail.value)) {
    alert('Please enter a valid email address.')
    return
  }
  
  isSending.value = true
  
  try {
    // localStorage에서 사용자 찾기
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const user = users.find(u => u.email === forgotPasswordEmail.value)
    
    if (!user) {
      alert('Email address not found.')
      isSending.value = false
      return
    }
    
    // 재설정 토큰 생성 및 저장
    const token = generateResetToken(forgotPasswordEmail.value)
    saveResetToken(forgotPasswordEmail.value, token)
    
    // 재설정 링크 생성
    const link = generateResetLink(token)
    resetLink.value = link
    
    // 개발 환경에서는 링크를 보여주고, 실제 프로덕션에서는 이메일로 전송
    if (import.meta.env.DEV) {
      showLink.value = true
    } else {
      // 실제 프로덕션에서는 여기서 이메일 서비스를 호출해야 함
      // 예: sendEmail(forgotPasswordEmail.value, link)
      alert('Password reset link has been sent to your email address.')
      router.push('/login')
    }
  } catch (error) {
    console.error('Password reset link generation error:', error)
    alert('An error occurred while generating reset link. Please try again.')
  } finally {
    isSending.value = false
  }
}

// 링크 복사 기능
const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(resetLink.value)
    linkCopied.value = true
    setTimeout(() => {
      linkCopied.value = false
    }, 2000)
  } catch (error) {
    console.error('Failed to copy link:', error)
    // 폴백: 텍스트 영역 생성하여 복사
    const textArea = document.createElement('textarea')
    textArea.value = resetLink.value
    textArea.style.position = 'fixed'
    textArea.style.opacity = '0'
    document.body.appendChild(textArea)
    textArea.select()
    try {
      document.execCommand('copy')
      linkCopied.value = true
      setTimeout(() => {
        linkCopied.value = false
      }, 2000)
    } catch (err) {
      console.error('Fallback copy failed:', err)
    }
    document.body.removeChild(textArea)
  }
}
</script>

<template>
  <div class="forgot-password-screen">
    <!-- 뒤로가기 버튼 -->
    <button class="back-button" @click="goBack">
      &lt; Back
    </button>

    <!-- 타이틀 -->
    <h1 class="forgot-password-title">Reset password</h1>
    
    <!-- 고양이 캐릭터 이미지 -->
    <div class="cat-character-container">
      <img :src="cat9" alt="Cat Character" class="cat-character-image" />
    </div>

    <!-- 비밀번호 재설정 폼 -->
    <form @submit="handleSendResetLink" class="forgot-password-form">
      <!-- 이메일 -->
      <div class="input-group">
        <div class="input-container">
          <span class="input-text-label">Email</span>
          <input 
            type="email" 
            v-model="forgotPasswordEmail"
            class="input-field"
            placeholder="Enter your email"
            required
            :disabled="isSending"
          >
        </div>
      </div>
      
      <!-- 재설정 버튼 -->
      <button 
        type="submit" 
        class="reset-button"
        :disabled="isSending"
      >
        {{ isSending ? 'Sending...' : 'Reset password' }}
      </button>
      
      <!-- 개발 모드에서 링크 표시 -->
      <div v-if="showLink && resetLink" class="reset-link-container">
        <div class="reset-link-header">
          <svg class="link-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
          </svg>
          <p class="reset-link-label">Reset link (development mode)</p>
        </div>
        <div class="reset-link-content">
          <div class="reset-link-wrapper">
            <a :href="resetLink" class="reset-link" target="_blank">{{ resetLink }}</a>
          </div>
          <button @click="copyLink" class="copy-button" :class="{ copied: linkCopied }">
            <svg v-if="!linkCopied" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
            <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span>{{ linkCopied ? 'Copied!' : 'Copy' }}</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.forgot-password-screen {
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
  position: static;
  top: 2rem;
  left: 2rem;
  background: transparent;
  border: none;
  color: white;
  font-size: 2em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.back-button:hover {
  opacity: 0.8;
  transform: translateX(-2px);
}

.forgot-password-title {
  color: white;
  font-size: 2em;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: left;
  margin: 2rem 0 1rem 0;
  position: relative;
  z-index: 1;
  text-align: center;
}

.cat-character-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 2rem 0;
  position: relative;
  z-index: 1;
}

.cat-character-image {
  max-width: 200px;
  height: auto;
  object-fit: contain;
}

.forgot-password-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 0 auto;
  margin-top: 6rem;
  width: 100%;
  position: relative;
  z-index: 1;
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
  width: 70%;
  margin:1.5rem auto;
}

.reset-button:hover:not(:disabled) {
  transform: translateY(-2px);
}

.reset-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.reset-link-container {
  margin-top: 1.5rem;
  padding: 1.25rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 12px;
  border: 1px solid rgba(43, 181, 189, 0.3);
  backdrop-filter: blur(10px);
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.reset-link-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.link-icon {
  color: #2BB5BD;
  flex-shrink: 0;
}

.reset-link-label {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0;
}

.reset-link-content {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.reset-link-wrapper {
  flex: 1;
  min-width: 0;
  padding: 0.75rem 1rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.reset-link {
  color: #2BB5BD;
  font-size: 0.85rem;
  word-break: break-all;
  text-decoration: none;
  display: block;
  transition: color 0.3s ease;
  line-height: 1.4;
}

.reset-link:hover {
  color: #1E1E2D;
  text-decoration: underline;
}

.copy-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: linear-gradient(135deg, #2BB5BD 0%, #1E1E2D 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  flex-shrink: 0;
}

.copy-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(43, 181, 189, 0.4);
}

.copy-button:active {
  transform: translateY(0);
}

.copy-button.copied {
  background: linear-gradient(135deg, #4caf50 0%, #2e7d32 100%);
}

.copy-button svg {
  flex-shrink: 0;
}

/* 반응형 */
@media (max-width: 480px) {
  .forgot-password-screen {
    padding: 1.2rem;
  }
  
  .forgot-password-title {
    margin: 1.5rem 0 1rem 0;
  }
  
  .cat-character-container {
    margin: 0 0 1.5rem 0;
  }
  
  .cat-character-image {
    max-width: 180px;
  }
  
  .forgot-password-form {
    gap: 1.5rem;
    margin-top: 5rem;
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
  
  .reset-link-container {
    padding: 1rem;
  }
  
  .reset-link-content {
    flex-direction: column;
    align-items: stretch;
  }
  
  .copy-button {
    width: 100%;
    justify-content: center;
  }
  

}
</style>
