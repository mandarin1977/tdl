// Web3 지갑 연결 유틸리티
import { ethers } from 'ethers'

// MetaMask Provider 가져오기
const getProvider = () => {
  if (typeof window !== 'undefined' && window.ethereum) {
    return new ethers.BrowserProvider(window.ethereum)
  }
  return null
}

// MetaMask 설치 여부 확인
export const isMetaMaskInstalled = () => {
  return typeof window !== 'undefined' && typeof window.ethereum !== 'undefined'
}

// 지갑 연결
export const connectWallet = async () => {
  try {
    // MetaMask 설치 확인
    if (!isMetaMaskInstalled()) {
      return {
        success: false,
        error: 'MetaMask가 설치되어 있지 않습니다. MetaMask를 설치해주세요.',
        needInstall: true
      }
    }

    const provider = getProvider()
    if (!provider) {
      return {
        success: false,
        error: '지갑 Provider를 가져올 수 없습니다.'
      }
    }

    // 계정 요청
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    })

    if (accounts && accounts.length > 0) {
      const address = accounts[0]
      
      // 지갑 잔액 조회
      const balance = await provider.getBalance(address)
      const balanceInEth = ethers.formatEther(balance)

      return {
        success: true,
        address: address,
        balance: balanceInEth,
        provider: provider
      }
    }

    return {
      success: false,
      error: '지갑 연결이 취소되었습니다.'
    }
  } catch (error) {
    console.error('지갑 연결 오류:', error)
    
    // 사용자가 연결을 거부한 경우
    if (error.code === 4001) {
      return {
        success: false,
        error: '지갑 연결이 거부되었습니다.'
      }
    }

    return {
      success: false,
      error: error.message || '지갑 연결 중 오류가 발생했습니다.'
    }
  }
}

// 현재 연결된 지갑 주소 가져오기
export const getWalletAddress = async () => {
  try {
    if (!isMetaMaskInstalled()) {
      return null
    }

    const provider = getProvider()
    if (!provider) {
      return null
    }

    const accounts = await window.ethereum.request({
      method: 'eth_accounts'
    })

    if (accounts && accounts.length > 0) {
      return accounts[0]
    }

    return null
  } catch (error) {
    console.error('지갑 주소 가져오기 오류:', error)
    return null
  }
}

// 지갑 잔액 조회
export const getWalletBalance = async (address) => {
  try {
    const provider = getProvider()
    if (!provider) {
      return '0'
    }

    const balance = await provider.getBalance(address)
    return ethers.formatEther(balance)
  } catch (error) {
    console.error('지갑 잔액 조회 오류:', error)
    return '0'
  }
}

// 지갑 연결 해제
export const disconnectWallet = () => {
  // MetaMask는 실제로 연결 해제 기능이 없지만
  // 로컬 상태만 초기화
  return {
    success: true
  }
}

// 네트워크 정보 가져오기
export const getNetworkInfo = async () => {
  try {
    const provider = getProvider()
    if (!provider) {
      return null
    }

    const network = await provider.getNetwork()
    return {
      chainId: Number(network.chainId),
      name: network.name
    }
  } catch (error) {
    console.error('네트워크 정보 가져오기 오류:', error)
    return null
  }
}

// 네트워크 전환 (예: Ethereum Mainnet)
export const switchNetwork = async (chainId) => {
  try {
    if (!isMetaMaskInstalled()) {
      return {
        success: false,
        error: 'MetaMask가 설치되어 있지 않습니다.'
      }
    }

    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: `0x${chainId.toString(16)}` }]
    })

    return {
      success: true
    }
  } catch (error) {
    console.error('네트워크 전환 오류:', error)
    
    // 네트워크가 추가되지 않은 경우
    if (error.code === 4902) {
      return {
        success: false,
        error: '네트워크를 추가해야 합니다.',
        needAddNetwork: true
      }
    }

    return {
      success: false,
      error: error.message || '네트워크 전환 중 오류가 발생했습니다.'
    }
  }
}

// 지갑 주소 포맷팅 (짧은 형식)
export const formatAddress = (address) => {
  if (!address) return ''
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

// 지갑 연결 상태 확인 (eth_accounts만 사용 - 팝업 없음)
export const checkWalletConnection = async () => {
  try {
    const address = await getWalletAddress()
    if (!address) {
      return {
        connected: false,
        address: null
      }
    }

    const balance = await getWalletBalance(address)
    return {
      connected: true,
      address: address,
      balance: balance
    }
  } catch (error) {
    console.error('지갑 연결 상태 확인 오류:', error)
    return {
      connected: false,
      address: null
    }
  }
}

// 지갑 변경 이벤트 리스너 등록
export const onAccountsChanged = (callback) => {
  if (!isMetaMaskInstalled()) {
    return null
  }

  window.ethereum.on('accountsChanged', callback)
  
  // 리스너 제거 함수 반환
  return () => {
    if (window.ethereum.removeListener) {
      window.ethereum.removeListener('accountsChanged', callback)
    }
  }
}

// 네트워크 변경 이벤트 리스너 등록
export const onChainChanged = (callback) => {
  if (!isMetaMaskInstalled()) {
    return null
  }

  window.ethereum.on('chainChanged', callback)
  
  // 리스너 제거 함수 반환
  return () => {
    if (window.ethereum.removeListener) {
      window.ethereum.removeListener('chainChanged', callback)
    }
  }
}

