<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { hashPassword } from '@/utils/passwordUtils'
import { processInviteCode } from '@/utils/referralUtils'

const router = useRouter()
const route = useRoute()

// Form data
const formData = ref({
  name: '',
  email: '',
  password: ''
})

// Invitation code (from URL parameter)
const inviteCode = ref(null)

onMounted(() => {
  // Get invitation code from URL parameter (support both 'invite' and 'ref' for compatibility)
  if (route.query.invite) {
    inviteCode.value = route.query.invite
  } else if (route.query.ref) {
    inviteCode.value = route.query.ref
  }
})

// Password visibility toggle state
const showPassword = ref(false)

// Go back
const goBack = () => {
  router.go(-1)
}

// Handle signup
const handleSignup = async (event) => {
  event.preventDefault()
  
  // Validate required fields
  if (!formData.value.name.trim() || 
      !formData.value.email.trim() || !formData.value.password.trim()) {
    alert('Please fill in all fields.')
    return
  }
  
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.value.email)) {
    alert('Please enter a valid email address.')
    return
  }
  
  // Validate password length
  if (formData.value.password.length < 6) {
    alert('Password must be at least 6 characters long.')
    return
  }
  
  // Check existing user (email duplicate check)
  const existingUsers = JSON.parse(localStorage.getItem('users') || '[]')
  const emailExists = existingUsers.some(user => user.email === formData.value.email)
  
  if (emailExists) {
    alert('This email is already registered.')
    return
  }
  
  // Hash password
  let hashedPassword
  try {
    hashedPassword = await hashPassword(formData.value.password)
  } catch (error) {
    console.error('Password hashing error:', error)
    alert('An error occurred during signup. Please try again.')
    return
  }
  
  // Create new user data
  const newUser = {
    id: Date.now(), // Simple ID generation
    name: formData.value.name,
    email: formData.value.email,
    password: hashedPassword, // Store hashed password
    createdAt: new Date().toISOString(),
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
  }
  
  // Add to user list
  existingUsers.push(newUser)
  
  // Save to localStorage
  localStorage.setItem('users', JSON.stringify(existingUsers))
  
  // Process invitation code
  if (inviteCode.value) {
    try {
      const result = await processInviteCode(newUser.id, inviteCode.value)
      if (result.success) {
        alert(`Signup completed successfully!\nYou have signed up with an invitation from ${result.inviter}!\nInvitation reward: You received ${result.newUserReward} points!`)
      } else {
        alert(`Signup completed successfully!\n${result.error}`)
      }
    } catch (error) {
      console.error('Invitation code processing error:', error)
      alert('Signup completed successfully!')
    }
  } else {
    alert('Signup completed successfully!')
  }
  
  // Navigate to login screen
  router.push('/login')
}

// Toggle password visibility
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}
</script>

<template>
  <div class="signup-screen">
    <!-- Back button -->
    <button class="back-button" @click="goBack">
      &lt; Back
    </button>

    <!-- Signup form -->
    <form @submit="handleSignup" class="signup-form">
      <!-- Name -->
      <div class="input-group">
        <div class="input-container">
          <span class="input-text-label">Name</span>
          <input 
            type="text" 
            v-model="formData.name"
            class="input-field"
            placeholder="Enter your name"
            required
          >
        </div>
      </div>

      <!-- Password -->
      <div class="input-group">
        <div class="input-container">
          <span class="input-text-label">Password</span>
          <input 
            :type="showPassword ? 'text' : 'password'"
            v-model="formData.password"
            class="input-field"
            placeholder="Enter your password"
            required
          >
          <button 
            v-if="false"
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

      <!-- Email -->
      <div class="input-group">
        <div class="input-container">
          <span class="input-text-label">Email</span>
          <input 
            type="email" 
            v-model="formData.email"
            class="input-field"
            placeholder="Enter your email"
            required
          >
        </div>
      </div>

      <!-- Signup button -->
      <button type="submit" class="signup-button">
        Create an account
      </button>
    </form>
  </div>
</template>

<style scoped>
.signup-screen {
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

.signup-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
  background-image: url('@/assets/img/signupBg.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  backdrop-filter: blur(10px);
}

.input-text-label {
  position: absolute;
  top: 1px;
  left: 1em;
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
  margin-left: 5px;
        margin-top: 5px;
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
  background-image: url('@/assets/img/loginBtn.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  color: white;
  border: none;
  border-radius: 12px;        padding: .5em 0 1em;
  width: 80%;
  font-size: 1.4em;
  font-weight: 600;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 1rem auto;
}

.signup-button:hover:not(:disabled) {
  transform: translateY(-2px);
}

.signup-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Responsive */
@media (max-width: 480px) {
  .signup-screen {
    padding: 1.2rem;
  }
  
  .signup-form {
    gap: 1.5rem;
    margin-top: 10rem;
  }
  
  .input-field {
    font-size: 1em;
  }
  
  .input-text-label {
    font-size: 1em;
  }
  
  
}
</style>
