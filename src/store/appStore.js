import { reactive, ref } from 'vue'

// 전역 상태 관리
const state = reactive({
  isLoggedIn: false,
  walletAddress: '',
  userBalance: '0 ETH',
  nftCount: 0,
  gameLevel: 1,
  isLoading: false
})

// 액션들
export const useAppStore = () => {
  const setWalletConnected = (address, balance) => {
    state.isLoggedIn = true
    state.walletAddress = address
    state.userBalance = balance
  }

  const setUserData = (data) => {
    state.nftCount = data.nftCount || 0
    state.gameLevel = data.gameLevel || 1
  }

  const setLoading = (loading) => {
    state.isLoading = loading
  }

  const logout = () => {
    state.isLoggedIn = false
    state.walletAddress = ''
    state.userBalance = '0 ETH'
    state.nftCount = 0
    state.gameLevel = 1
  }

  return {
    state: readonly(state),
    setWalletConnected,
    setUserData,
    setLoading,
    logout
  }
}

// 읽기 전용 상태 반환
const readonly = (obj) => {
  return new Proxy(obj, {
    get(target, prop) {
      return target[prop]
    },
    set() {
      console.warn('직접 상태 수정은 금지됩니다. 액션을 사용하세요.')
      return false
    }
  })
}
