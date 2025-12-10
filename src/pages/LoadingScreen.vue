<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getCurrentUser } from '@/utils/userUtils'
import { useAppStore } from '@/store/appStore'

const router = useRouter()
const store = useAppStore()
const progress = ref(0)

onMounted(() => {
  // 진행률 애니메이션
  const duration = 3000 // 3초
  const interval = 16 // 약 60fps
  const increment = 100 / (duration / interval)
  
  const timer = setInterval(() => {
    progress.value += increment
    if (progress.value >= 100) {
      progress.value = 100
      clearInterval(timer)
      // 로딩 완료 후 바로 게임 화면으로 이동
      setTimeout(() => {
        router.push('/main')
      }, 200)
    }
  }, interval)
})
</script>

<template>
  <div class="loading-screen">
    <div class="logo-top">
      <img src="@/assets/img/tdl_splashLogo.png" alt="TDL Logo" class="splash-logo" />
    </div>
    
    <div class="loading-bar-container">
      <div class="loading-bar-track">
        <div class="loading-bar-fill" :style="{ width: progress + '%' }"></div>
      </div>
    </div>
    
    <div class="splash-bg">
      <img src="@/assets/img/tdl_splash_bg.png" alt="Splash Background" class="splash-bg-image" />
    </div>
  </div>
</template>

<style scoped>
.loading-screen {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/img/backgroundImg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.logo-top {
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
}

.splash-logo {
  max-width: 550px;
  width: 100%;
  height: auto;
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.loading-bar-container {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 100%;
  max-width: 500px;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-bar-track {
  width: 100%;
  height: 13px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
}

.loading-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #14b8a6 0%, #06b6d4 100%);
  border-radius: 3px;
  transition: width 0.1s linear;
  box-shadow: 0 0 10px rgba(20, 184, 166, 0.5);
}

.splash-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.splash-bg-image {
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: contain;
  object-position: bottom;
}

/* 모바일 반응형 */
@media (max-width: 480px) {
  .logo-top {
    top: 20%;
    width: 100%;
    max-width: unset;
    padding: 0 1rem;
  }
  
  .splash-logo {
    max-width: 320px;
  }
  
  .loading-bar-container {
    top: 55%;
    max-width: 90%;
    padding: 0 1rem;
  }
  
  .loading-bar-track {
    height: 13px;
  }
}
</style>
