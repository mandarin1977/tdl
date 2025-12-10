<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/store/appStore'
import { getCurrentUser } from '@/utils/userUtils'
import { auth } from '@/firebase/config'
import '@/styles/common.css'
import '@/styles/layout.css'

const router = useRouter()
const store = useAppStore()

// 사용자 데이터 로드 및 지갑 연결 상태 확인
onMounted(async () => {
  // Google 로그인 리다이렉트 결과 처리 (최우선 처리)
  try {
    const { handleGoogleRedirect } = await import('@/utils/firebaseAuth')
    const googleResult = await handleGoogleRedirect()
    if (googleResult && googleResult.success && googleResult.user) {
      console.log('App.vue: Google 로그인 성공:', googleResult.user.email)
      // 사용자 데이터를 localStorage와 sessionStorage에 저장 (이미 handleGoogleRedirect에서 저장했지만 확실히)
      let currentUser = null
      try {
        const localData = localStorage.getItem('currentUser')
        if (localData) {
          currentUser = JSON.parse(localData)
        }
      } catch (e) {
        // localStorage에 없으면 sessionStorage 확인
        try {
          const sessionData = sessionStorage.getItem('currentUser')
          if (sessionData) {
            currentUser = JSON.parse(sessionData)
          }
        } catch (e2) {
          console.error('사용자 데이터 파싱 오류:', e2)
        }
      }
      
      if (!currentUser || !currentUser.id) {
        // 사용자가 저장되지 않았다면 다시 저장 시도
        localStorage.setItem('currentUser', JSON.stringify(googleResult.user))
        sessionStorage.setItem('currentUser', JSON.stringify(googleResult.user))
        console.log('App.vue: 사용자 재저장 완료')
      }
      // 사용자 데이터 로드
      store.loadCurrentUser()
      // 현재 경로가 로그인 페이지면 홈으로 이동
      if (router.currentRoute.value.path === '/login' || router.currentRoute.value.path === '/signup') {
        console.log('App.vue: 로그인 페이지에서 홈으로 이동')
        router.push('/home')
      }
      return
    }
  } catch (error) {
    // Firebase가 설정되지 않았거나 Google 로그인이 아닌 경우 무시
    if (import.meta.env.DEV) {
      console.log('App.vue: Google 로그인 리다이렉트 없음 또는 Firebase 미설정', error)
    }
  }
  
  // 기존 사용자 데이터 로드
  store.loadCurrentUser()
  
  // Firebase Auth 상태 확인 (브라우저 재시작 후 자동 로그인)
  if (auth && auth.currentUser && !getCurrentUser()) {
    try {
      const { getUserGameData } = await import('@/firebase/config')
      const { convertFirebaseUserToAppUser } = await import('@/utils/firebaseAuth')
      const gameData = await getUserGameData(auth.currentUser.uid)
      const appUser = convertFirebaseUserToAppUser(auth.currentUser, gameData?.gameData)
      localStorage.setItem('currentUser', JSON.stringify(appUser))
      sessionStorage.setItem('currentUser', JSON.stringify(appUser))
      store.loadCurrentUser()
      console.log('App.vue: Firebase Auth 상태로부터 자동 로그인 완료:', appUser.email)
    } catch (error) {
      console.error('App.vue: 자동 로그인 오류:', error)
    }
  }
  
  // 저장소에 지갑 사용자가 있으면 지갑 상태 확인 (명시적으로 연결한 경우만)
  const currentUser = getCurrentUser()
  if (currentUser && currentUser.loginType === 'wallet' && currentUser.walletAddress) {
    // 이미 지갑으로 로그인한 상태면 지갑 상태 확인
    try {
      const walletStatus = await store.checkWalletStatus()
      if (walletStatus.connected) {
        console.log('App.vue: 지갑이 이미 연결되어 있습니다:', walletStatus.address)
      }
      
      // 지갑 이벤트 리스너 설정
      store.setupWalletListeners()
    } catch (error) {
      console.error('App.vue: 지갑 상태 확인 오류:', error)
    }
  }
})

const bgmAudio = ref(null)
const isBgmPlaying = ref(false)

// 소리 설정 상태 확인 함수
const getSoundEnabled = () => {
  const saved = localStorage.getItem('soundEnabled')
  return saved !== null ? saved === 'true' : true // 기본값 true
}

// BGM 제어 함수
const controlBGM = () => {
  if (!bgmAudio.value) return
  
  if (getSoundEnabled()) {
    // 소리 켜져 있으면 재생
    if (!isBgmPlaying.value) {
      bgmAudio.value.play().then(() => {
        isBgmPlaying.value = true
      }).catch(() => {
        // 재생 실패 시 무시
      })
    }
  } else {
    // 소리 꺼져 있으면 일시정지
    bgmAudio.value.pause()
    isBgmPlaying.value = false
  }
}

// BGM 초기화
onMounted(() => {
  // BGM 파일이 있으면 로드
  try {
    bgmAudio.value = new Audio()
    bgmAudio.value.src = new URL('@/assets/audio/bgm.mp3', import.meta.url).href
    bgmAudio.value.loop = true
    bgmAudio.value.volume = 0.5 // 볼륨 50%
    
    // 소리 설정에 따라 BGM 제어
    controlBGM()
    
    // 사용자 상호작용 후 재생 (브라우저 정책)
    const playBgm = () => {
      if (bgmAudio.value && getSoundEnabled() && !isBgmPlaying.value) {
        bgmAudio.value.play().then(() => {
          isBgmPlaying.value = true
        }).catch(() => {
          // 재생 실패 시 무시 (사용자가 아직 상호작용하지 않았을 수 있음)
        })
      }
    }
    
    // 첫 클릭 시 BGM 재생
    document.addEventListener('click', playBgm, { once: true })
    document.addEventListener('touchstart', playBgm, { once: true })
    
    // 소리 설정 변경 이벤트 리스너
    window.addEventListener('soundSettingChanged', controlBGM)
  } catch (error) {
    console.log('BGM 파일을 찾을 수 없습니다.')
  }
})

onUnmounted(() => {
  if (bgmAudio.value) {
    bgmAudio.value.pause()
    bgmAudio.value = null
  }
  // 이벤트 리스너 제거
  window.removeEventListener('soundSettingChanged', controlBGM)
})
</script>

<template>
    <router-view />
</template>

<style scoped></style>
