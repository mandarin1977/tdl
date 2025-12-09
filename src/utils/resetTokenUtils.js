/**
 * 비밀번호 재설정 토큰 유틸리티
 */

/**
 * 비밀번호 재설정 토큰 생성
 * @param {string} email - 사용자 이메일
 * @returns {string} 생성된 토큰
 */
export function generateResetToken(email) {
  // 이메일과 타임스탬프를 조합하여 토큰 생성
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 15)
  const token = btoa(`${email}:${timestamp}:${random}`).replace(/[+/=]/g, '')
  return token
}

/**
 * 비밀번호 재설정 토큰 저장
 * @param {string} email - 사용자 이메일
 * @param {string} token - 생성된 토큰
 * @returns {void}
 */
export function saveResetToken(email, token) {
  const resetTokens = JSON.parse(localStorage.getItem('resetTokens') || '{}')
  resetTokens[token] = {
    email,
    createdAt: Date.now(),
    expiresAt: Date.now() + (24 * 60 * 60 * 1000) // 24시간 후 만료
  }
  localStorage.setItem('resetTokens', JSON.stringify(resetTokens))
}

/**
 * 비밀번호 재설정 토큰 검증
 * @param {string} token - 검증할 토큰
 * @returns {Object|null} 토큰 정보 또는 null
 */
export function verifyResetToken(token) {
  const resetTokens = JSON.parse(localStorage.getItem('resetTokens') || '{}')
  const tokenData = resetTokens[token]
  
  if (!tokenData) {
    return null
  }
  
  // 만료 시간 확인
  if (Date.now() > tokenData.expiresAt) {
    // 만료된 토큰 삭제
    delete resetTokens[token]
    localStorage.setItem('resetTokens', JSON.stringify(resetTokens))
    return null
  }
  
  return tokenData
}

/**
 * 비밀번호 재설정 토큰 삭제
 * @param {string} token - 삭제할 토큰
 * @returns {void}
 */
export function deleteResetToken(token) {
  const resetTokens = JSON.parse(localStorage.getItem('resetTokens') || '{}')
  delete resetTokens[token]
  localStorage.setItem('resetTokens', JSON.stringify(resetTokens))
}

/**
 * 재설정 링크 생성
 * @param {string} token - 토큰
 * @returns {string} 재설정 링크
 */
export function generateResetLink(token) {
  const baseUrl = window.location.origin + window.location.pathname
  return `${baseUrl}#/reset-password?token=${token}`
}
