import { reactive, ref, computed } from 'vue'
import { getCurrentUser, createWalletUser, getUserByWalletAddress } from '@/utils/userUtils'
import { updateUserGameData } from '@/utils/userUtils'
import { connectWallet, getWalletAddress, getWalletBalance, checkWalletConnection, onAccountsChanged, onChainChanged } from '@/utils/wallet'
import { formatNumber } from '@/utils/formatUtils'

// 전역 상태 관리
const state = reactive({
  // 인증 상태
  isLoggedIn: false,
  loginType: null,  // 'email' | 'wallet' | null
  walletAddress: '',
  userBalance: '0 ETH',
  isWalletConnected: false,
  walletProvider: null,
  isLoading: false,
  
  // 현재 사용자 정보 (전체)
  currentUser: null,
  
  // 게임 데이터 (자주 사용되는 것들만 별도로 관리)
  coins: 0,           // 포인트 (P)
  totalCoin: 0,       // 코인 (C)
  catFragments: 50,   // 고양이 파편
  level: 1,           // 사용자 레벨
  nftCount: 0,        // NFT 개수
  
  // 게임 모드별 레벨
  miningLevel: 1,
  huntingLevel: 1,
  explorationLevel: 1,
  productionLevel: 1,
  
  // 고양이 슬롯 (4개로 제한)
  miningCats: [null, null, null, null],
  huntingCats: [null, null, null, null],
  explorationCats: [null, null, null, null],
  productionCats: [null, null, null, null],
  
  // 인벤토리
  inventory: []
})

// 액션들
export const useAppStore = () => {
  // 현재 사용자 로드
  const loadCurrentUser = () => {
    const user = getCurrentUser()
    if (user) {
      state.currentUser = user
      state.isLoggedIn = true
      
      // 게임 데이터 동기화
      syncGameData(user.gameData || {})
    } else {
      state.currentUser = null
      state.isLoggedIn = false
    }
  }

  // 게임 데이터 동기화 (currentUser.gameData -> state)
  const syncGameData = (gameData) => {
    state.coins = gameData.coins || 0
    state.totalCoin = gameData.totalCoin || 0
    state.catFragments = gameData.catFragments || 50
    state.level = gameData.level || 1
    state.nftCount = gameData.nftCount || 0
    
    state.miningLevel = gameData.miningLevel || 1
    state.huntingLevel = gameData.huntingLevel || 1
    state.explorationLevel = gameData.explorationLevel || 1
    state.productionLevel = gameData.productionLevel || 1
    
    // 4개 슬롯으로 제한하는 헬퍼 함수
    const ensure4Slots = (arr) => {
      const sliced = (arr || []).slice(0, 4)
      return sliced.length === 4 ? sliced : [...sliced, ...Array(4 - sliced.length).fill(null)]
    }
    
    state.miningCats = ensure4Slots(gameData.miningCats)
    state.huntingCats = ensure4Slots(gameData.huntingCats)
    state.explorationCats = ensure4Slots(gameData.explorationCats)
    state.productionCats = ensure4Slots(gameData.productionCats)
    
    state.inventory = gameData.inventory || []
  }

  // 게임 데이터 업데이트 (Firebase/localStorage + state 동기화)
  const updateGameData = async (gameData) => {
    if (!state.currentUser) {
      console.warn('사용자가 로그인하지 않았습니다.')
      return false
    }

    try {
      // Firebase/localStorage에 저장
      const success = await updateUserGameData(state.currentUser.id, gameData)
      
      if (success) {
        // state 업데이트
        syncGameData({ ...state.currentUser.gameData, ...gameData })
        
        // currentUser도 업데이트
        if (state.currentUser) {
          state.currentUser.gameData = { ...state.currentUser.gameData, ...gameData }
          localStorage.setItem('currentUser', JSON.stringify(state.currentUser))
          sessionStorage.setItem('currentUser', JSON.stringify(state.currentUser))
        }
        
        // 다른 컴포넌트에 알림 (이벤트 발생)
        window.dispatchEvent(new CustomEvent('userDataUpdated'))
        
        return true
      }
      return false
    } catch (error) {
      console.error('게임 데이터 업데이트 실패:', error)
      return false
    }
  }

  // 코인 업데이트 (간편 함수)
  const updateCoins = async (coins) => {
    return await updateGameData({ coins })
  }

  // 토탈 코인 업데이트 (간편 함수)
  const updateTotalCoin = async (totalCoin) => {
    return await updateGameData({ totalCoin })
  }

  // 고양이 파편 업데이트 (간편 함수)
  const updateCatFragments = async (catFragments) => {
    return await updateGameData({ catFragments })
  }

  // 레벨 업데이트 (간편 함수)
  const updateLevel = async (level) => {
    return await updateGameData({ level })
  }

  // 여러 값 동시 업데이트
  const updateMultiple = async (updates) => {
    return await updateGameData(updates)
  }

  // 지갑 연결
  const connectWalletToApp = async () => {
    try {
      state.isLoading = true
      const result = await connectWallet()
      
      if (result.success) {
        state.isWalletConnected = true
        state.walletAddress = result.address
        state.userBalance = `${parseFloat(result.balance).toFixed(4)} ETH`
        state.walletProvider = result.provider
        state.loginType = 'wallet'
        
        // 사용자 데이터 로드 또는 생성
        await loadOrCreateWalletUser(result.address, result.balance)
        
        return {
          success: true,
          address: result.address,
          balance: result.balance
        }
      }
      
      return result
    } catch (error) {
      console.error('지갑 연결 오류:', error)
      return {
        success: false,
        error: error.message || '지갑 연결 중 오류가 발생했습니다.'
      }
    } finally {
      state.isLoading = false
    }
  }

  // 지갑 사용자 데이터 로드 또는 생성
  const loadOrCreateWalletUser = async (address, balance) => {
    // 지갑 주소로 사용자 찾기 또는 생성
    let user = getUserByWalletAddress(address)
    
    if (!user) {
      // 새 사용자 생성
      user = createWalletUser(address)
    }
    
    // localStorage와 sessionStorage에 저장
    localStorage.setItem('currentUser', JSON.stringify(user))
    sessionStorage.setItem('currentUser', JSON.stringify(user))
    
    // 스토어 상태 업데이트
    state.currentUser = user
    state.isLoggedIn = true
    state.loginType = 'wallet'
    syncGameData(user.gameData || {})
  }

  // 지갑 연결 해제
  const disconnectWalletFromApp = () => {
    state.isWalletConnected = false
    state.walletAddress = ''
    state.userBalance = '0 ETH'
    state.walletProvider = null
    state.loginType = null
    
    // localStorage와 sessionStorage에서도 제거 (자동 재연결 방지)
    const currentUser = getCurrentUser()
    if (currentUser && currentUser.loginType === 'wallet') {
      localStorage.removeItem('currentUser')
      sessionStorage.removeItem('currentUser')
    }
    
    logout()
  }

  // 지갑 잔액 업데이트
  const updateWalletBalance = async () => {
    if (!state.walletAddress) return
    
    try {
      const balance = await getWalletBalance(state.walletAddress)
      state.userBalance = `${parseFloat(balance).toFixed(4)} ETH`
    } catch (error) {
      console.error('지갑 잔액 업데이트 오류:', error)
    }
  }

  // 지갑 연결 상태 확인 (이미 연결된 경우에만)
  const checkWalletStatus = async () => {
    try {
      // 세션에 지갑 사용자가 있는 경우에만 확인
      const currentUser = getCurrentUser()
      if (!currentUser || currentUser.loginType !== 'wallet') {
        return { connected: false }
      }
      
      const status = await checkWalletConnection()
      if (status.connected && status.address === currentUser.walletAddress) {
        state.isWalletConnected = true
        state.walletAddress = status.address
        state.userBalance = `${parseFloat(status.balance).toFixed(4)} ETH`
        
        // 사용자 데이터 로드
        await loadOrCreateWalletUser(status.address, status.balance)
      } else {
        // 지갑이 변경되었거나 연결이 끊어진 경우
        disconnectWalletFromApp()
      }
      return status
    } catch (error) {
      console.error('지갑 상태 확인 오류:', error)
      return { connected: false }
    }
  }

  // 지갑 이벤트 리스너 설정
  const setupWalletListeners = () => {
    // 계정 변경 감지
    const unsubscribeAccounts = onAccountsChanged((accounts) => {
      if (accounts && accounts.length > 0) {
        // 계정이 변경되면 새 계정으로 로그인
        loadOrCreateWalletUser(accounts[0], '0')
      } else {
        // 모든 계정이 연결 해제되면 로그아웃
        disconnectWalletFromApp()
      }
    })

    // 네트워크 변경 감지
    const unsubscribeChain = onChainChanged(() => {
      // 네트워크가 변경되면 페이지 새로고침 (선택적)
      // window.location.reload()
    })

    // 리스너 정리 함수 반환
    return () => {
      if (unsubscribeAccounts) unsubscribeAccounts()
      if (unsubscribeChain) unsubscribeChain()
    }
  }

  // 로그인 설정 (기존 함수 - 호환성 유지)
  const setWalletConnected = (address, balance) => {
    state.isLoggedIn = true
    state.walletAddress = address
    state.userBalance = balance
    state.loginType = address.startsWith('0x') ? 'wallet' : 'email'
    loadCurrentUser() // 사용자 데이터 로드
  }

  // 로딩 상태 설정
  const setLoading = (loading) => {
    state.isLoading = loading
  }

  // 로그아웃
  const logout = () => {
    state.isLoggedIn = false
    state.loginType = null
    state.walletAddress = ''
    state.userBalance = '0 ETH'
    state.isWalletConnected = false
    state.walletProvider = null
    state.currentUser = null
    state.coins = 0
    state.totalCoin = 0
    state.catFragments = 50
    state.level = 1
    state.nftCount = 0
    localStorage.removeItem('currentUser')
    sessionStorage.removeItem('currentUser')
  }

  // Computed 값들
  const formattedCoins = computed(() => {
    return formatNumber(state.coins)
  })

  const formattedTotalCoin = computed(() => {
    return formatNumber(state.totalCoin)
  })

  return {
    // 상태 (읽기 전용)
    state: readonly(state),
    
    // Computed
    formattedCoins,
    formattedTotalCoin,
    
    // 액션
    loadCurrentUser,
    syncGameData,
    updateGameData,
    updateCoins,
    updateTotalCoin,
    updateCatFragments,
    updateLevel,
    updateMultiple,
    setWalletConnected,
    connectWalletToApp,
    disconnectWalletFromApp,
    updateWalletBalance,
    checkWalletStatus,
    setupWalletListeners,
    setUserData: (data) => {
      state.nftCount = data.nftCount || 0
      state.gameLevel = data.gameLevel || 1
    },
    setLoading,
    logout,
    formatNumber
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
