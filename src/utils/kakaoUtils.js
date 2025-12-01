// 카카오톡 API 유틸리티

/**
 * 카카오 SDK가 로드될 때까지 대기
 */
const waitForKakaoSDK = (maxAttempts = 10, interval = 100) => {
  return new Promise((resolve) => {
    let attempts = 0
    
    const checkSDK = () => {
      attempts++
      if (window.Kakao) {
        console.log('카카오 SDK 로드 완료')
        resolve(true)
      } else if (attempts < maxAttempts) {
        setTimeout(checkSDK, interval)
      } else {
        console.error('카카오 SDK 로드 실패: 최대 시도 횟수 초과')
        resolve(false)
      }
    }
    
    checkSDK()
  })
}

/**
 * 카카오 SDK 초기화
 */
export const initKakao = async () => {
  const kakaoKey = import.meta.env.VITE_KAKAO_APP_KEY
  
  console.log('=== 카카오 SDK 초기화 시작 ===')
  console.log('환경 변수 확인:', {
    hasKey: !!kakaoKey,
    keyLength: kakaoKey?.length,
    keyPreview: kakaoKey ? `${kakaoKey.substring(0, 10)}...` : '없음',
    hasKakaoSDK: !!window.Kakao,
    currentUrl: window.location.href
  })
  
  if (!kakaoKey) {
    const errorMsg = '카카오 앱 키가 설정되지 않았습니다.\n\n.env 파일에 다음을 추가하세요:\nVITE_KAKAO_APP_KEY=your_kakao_javascript_key\n\n그리고 개발 서버를 재시작하세요.'
    console.error(errorMsg)
    alert(errorMsg)
    return false
  }
  
  // SDK가 아직 로드되지 않았다면 대기
  if (!window.Kakao) {
    console.log('카카오 SDK 로드 대기 중... (최대 1초)')
    const loaded = await waitForKakaoSDK(10, 100)
    if (!loaded) {
      const errorMsg = '카카오 SDK가 로드되지 않았습니다.\n\n확인 사항:\n1. 인터넷 연결 확인\n2. 브라우저 콘솔에서 네트워크 오류 확인\n3. 카카오 SDK 스크립트가 index.html에 포함되어 있는지 확인'
      console.error(errorMsg)
      alert(errorMsg)
      return false
    }
  }
  
  // SDK 초기화
  if (!window.Kakao.isInitialized()) {
    try {
      window.Kakao.init(kakaoKey)
      console.log('✅ 카카오 SDK 초기화 완료')
      console.log('초기화 상태:', window.Kakao.isInitialized())
    } catch (error) {
      const errorMsg = `카카오 SDK 초기화 오류:\n${error.message}\n\n확인 사항:\n1. JavaScript 키가 올바른지 확인\n2. 카카오 개발자 콘솔에서 앱 설정 확인`
      console.error('카카오 SDK 초기화 오류:', error)
      alert(errorMsg)
      return false
    }
  } else {
    console.log('✅ 카카오 SDK 이미 초기화됨')
  }
  
  console.log('=== 카카오 SDK 초기화 완료 ===')
  return true
}

/**
 * 카카오톡 링크 공유
 * @param {Object} options - 공유 옵션
 * @param {string} options.title - 공유 제목
 * @param {string} options.description - 공유 설명
 * @param {string} options.imageUrl - 이미지 URL
 * @param {string} options.link - 공유할 링크
 */
export const shareKakaoLink = async (options) => {
  console.log('=== 카카오톡 공유 시작 ===')
  console.log('공유 옵션:', options)
  
  const initialized = await initKakao()
  if (!initialized) {
    // initKakao에서 이미 상세한 에러 메시지를 표시했으므로 여기서는 간단히
    return false
  }

  // Share API 사용 가능 여부 확인
  console.log('Share API 확인:', {
    hasKakao: !!window.Kakao,
    hasShare: !!window.Kakao?.Share,
    hasSendDefault: !!window.Kakao?.Share?.sendDefault
  })
  
  if (!window.Kakao.Share || !window.Kakao.Share.sendDefault) {
    const errorMsg = '카카오톡 링크 API를 사용할 수 없습니다.\n\n확인 사항:\n1. 카카오 개발자 콘솔 접속\n2. 내 애플리케이션 → 제품 설정 → 카카오톡 링크\n3. 카카오톡 링크 활성화 확인\n4. 플랫폼 설정에서 웹 도메인 등록 확인'
    console.error('카카오톡 Share API를 사용할 수 없습니다.')
    console.error('window.Kakao:', window.Kakao)
    alert(errorMsg)
    return false
  }

  try {
    console.log('카카오톡 공유 API 호출 중...')
    await window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: options.title || 'TDL 게임에 초대합니다!',
        description: options.description || '친구를 초대하고 보상을 받아보세요!',
        imageUrl: options.imageUrl || window.location.origin + '/favicon.ico',
        link: {
          mobileWebUrl: options.link,
          webUrl: options.link,
        },
      },
      buttons: [
        {
          title: '게임 시작하기',
          link: {
            mobileWebUrl: options.link,
            webUrl: options.link,
          },
        },
      ],
    })
    console.log('카카오톡 공유 성공')
    return true
  } catch (error) {
    console.error('카카오톡 공유 오류:', error)
    console.error('오류 상세:', {
      code: error.code,
      message: error.message,
      status: error.status
    })
    
    // 에러 메시지 개선
    let errorMessage = '카카오톡 공유에 실패했습니다.'
    if (error.status === 400) {
      errorMessage = '카카오톡 링크 API 설정을 확인해주세요. (도메인 등록 필요)'
    } else if (error.status === 403) {
      errorMessage = '카카오톡 링크 API 권한이 없습니다. 카카오 개발자 콘솔에서 확인해주세요.'
    }
    
    alert(errorMessage + '\n\n콘솔에서 자세한 오류를 확인할 수 있습니다.')
    return false
  }
}

/**
 * 카카오톡 링크 공유 (템플릿 방식)
 * @param {string} inviteCode - 초대 코드
 */
export const shareInviteLink = async (inviteCode) => {
  const baseUrl = window.location.origin + window.location.pathname
  const inviteLink = `${baseUrl}#/signup?ref=${inviteCode}`
  
  return await shareKakaoLink({
    title: 'TDL 게임에 초대합니다! 🎮',
    description: '친구를 초대하고 함께 게임을 즐기세요! 초대하면 보상을 받을 수 있어요!',
    link: inviteLink,
  })
}

/**
 * 초대 링크 복사
 * @param {string} inviteCode - 초대 코드
 */
export const copyInviteLink = async (inviteCode) => {
  const baseUrl = window.location.origin + window.location.pathname
  const inviteLink = `${baseUrl}#/signup?ref=${inviteCode}`
  
  try {
    await navigator.clipboard.writeText(inviteLink)
    return true
  } catch (error) {
    console.error('링크 복사 오류:', error)
    // 폴백: 텍스트 영역 사용
    const textArea = document.createElement('textarea')
    textArea.value = inviteLink
    textArea.style.position = 'fixed'
    textArea.style.opacity = '0'
    document.body.appendChild(textArea)
    textArea.select()
    try {
      document.execCommand('copy')
      document.body.removeChild(textArea)
      return true
    } catch (err) {
      document.body.removeChild(textArea)
      return false
    }
  }
}

/**
 * Web Share API를 사용한 공유 (네이티브 공유)
 * @param {string} inviteCode - 초대 코드
 */
export const shareInviteLinkNative = async (inviteCode) => {
  const baseUrl = window.location.origin + window.location.pathname
  const inviteLink = `${baseUrl}#/signup?ref=${inviteCode}`
  const shareTitle = 'TDL 게임에 초대합니다! 🎮'
  const shareText = '친구를 초대하고 함께 게임을 즐기세요! 초대하면 보상을 받을 수 있어요!'
  
  // Web Share API 지원 확인
  if (navigator.share) {
    try {
      await navigator.share({
        title: shareTitle,
        text: shareText,
        url: inviteLink,
      })
      return { success: true, method: 'native' }
    } catch (error) {
      // 사용자가 공유를 취소한 경우
      if (error.name === 'AbortError') {
        return { success: false, method: 'native', cancelled: true }
      }
      console.error('네이티브 공유 오류:', error)
      // 폴백: 클립보드 복사
      return await copyInviteLink(inviteCode).then(success => ({
        success,
        method: 'fallback'
      }))
    }
  } else {
    // Web Share API를 지원하지 않으면 클립보드 복사
    const success = await copyInviteLink(inviteCode)
    return { success, method: 'clipboard' }
  }
}

