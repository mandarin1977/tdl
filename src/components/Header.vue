<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { getI18nTexts } from '@/utils/userUtils'
import noticeIcon from '@/assets/img/notice.png'
import settingIcon from '@/assets/img/setting.png'

const language = ref(localStorage.getItem('appLanguage') || '한국어')
const texts = computed(() => getI18nTexts())

const router = useRouter()

const props = defineProps({
  coinCount: {
    type: Number,
    default: 0
  }
})

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const goToSettings = () => {
  router.push('/settings')
}

let interval = null

onMounted(() => {
  // localStorage 변경 감지
  interval = setInterval(() => {
    const currentLang = localStorage.getItem('appLanguage') || '한국어'
    if (currentLang !== language.value) {
      language.value = currentLang
    }
  }, 100)
})

onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
})

// 숫자 포맷팅 함수 (10,000 이상이면 K/M 표시)
const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
  } else if (num >= 10000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
  }
  return num.toLocaleString()
}
</script>

<template>
  <header>
    <div class="headerCont">
      <div class="leftArea">
        <div class="myCoin">
          <img src="@/assets/img/point_ico.png" alt="포인트" class="coin-icon">
          <span><b>{{ formatNumber(coinCount) }}</b></span>
          <span>⊕</span>
        </div>
        
        <div class="myNew">
          <img src="@/assets/img/coin_ico.png" alt="새 항목" class="coin-icon">
          <span><b>0</b></span>
          <span>⊕</span>
        </div>
        
        <div class="myCat">
          <img src="@/assets/img/cat_ico.png" alt="고양이" class="cat-icon">
          <span><b>50</b></span>
          <span>⊕</span>
        </div>
      </div>

      <div class="headerAct">
        <button class="notifi">
          <img src="@/assets/img/notice.png" alt="알림" class="icon-img">
        </button>
        
        <button class="menuBtn" @click="goToSettings">
          <img src="@/assets/img/setting.png" alt="설정" class="icon-img">
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.headerCont {
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.6rem;
}

.leftArea{
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  color: #fff;
}
.myCoin, .myCat, .myNew {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.3);
  padding: 0.3rem 0.6rem;
  border-radius: 20px;
}

.coin-icon, .cat-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.headerAct {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.notifi, .menuBtn {
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(255, 255, 255, .3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* .notifi:hover, .menuBtn:hover {
  background: rgba(102, 126, 234, 0.2);
  transform: scale(1.05);
} */

.icon-img {
  width: 17px;
  height: 17px;
  object-fit: contain;
}



@media (max-width: 400px) {
  .notifi{
    display: none;
  }
  .menuBtn{
    width: 30px;
    height: auto;
    aspect-ratio: 1/1;
  }
}
@media (max-width: 320px) {
  .headerCont{
    padding: 0 1rem;
  }
  .leftArea{gap: 0.5rem;}
  .myCoin img, .myCat img, .myNew img {
    width: 16px;
    height: 16px;
  }
}
</style>
