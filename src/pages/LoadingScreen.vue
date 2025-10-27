<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  // 3초 후 로그인 화면으로 이동
  setTimeout(() => {
    router.push('/login')
  }, 3000)
})
</script>

<template>
  <div class="loading-screen">
    <div class="loading-container">
      <div class="logo">
        <h1>TDL</h1>
        <p>NFT Web3 Game</p>
      </div>
      
      <div class="loading-spinner">
        <div class="spinner"></div>
        <p>Loading...</p>
      </div>
      
      <div class="loading-progress">
        <div class="progress-bar">
          <div class="progress-fill"></div>
        </div>
        <span class="progress-text">100%</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loading-screen {
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.loading-screen::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="white" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.loading-container {
  text-align: center;
  z-index: 1;
  position: relative;
}

.logo h1 {
  font-size: 4rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 4px 8px rgba(0,0,0,0.3);
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from { text-shadow: 0 4px 8px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.2); }
  to { text-shadow: 0 4px 8px rgba(0,0,0,0.3), 0 0 30px rgba(255,255,255,0.4); }
}

.logo p {
  font-size: 1.2rem;
  color: rgba(255,255,255,0.8);
  margin-bottom: 3rem;
  font-weight: 300;
}

.loading-spinner {
  margin-bottom: 2rem;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255,255,255,0.3);
  border-top: 3px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-spinner p {
  color: rgba(255,255,255,0.8);
  font-size: 1rem;
  margin: 0;
}

.loading-progress {
  width: 200px;
  margin: 0 auto;
}

.progress-bar {
  width: 100%;
  height: 4px;
  background: rgba(255,255,255,0.3);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
  border-radius: 2px;
  animation: progress 3s ease-out forwards;
}

@keyframes progress {
  0% { width: 0%; }
  100% { width: 100%; }
}

.progress-text {
  color: rgba(255,255,255,0.8);
  font-size: 0.9rem;
  font-weight: 500;
}
</style>
