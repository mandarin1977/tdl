/**
 * 비밀번호 해시화 유틸리티
 * Web Crypto API를 사용하여 SHA-256 해시 생성
 */

/**
 * 비밀번호를 SHA-256으로 해시화
 * @param {string} password - 평문 비밀번호
 * @returns {Promise<string>} 해시된 비밀번호 (hex 문자열)
 */
export async function hashPassword(password) {
  // Web Crypto API 사용
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  
  // ArrayBuffer를 hex 문자열로 변환
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  
  return hashHex
}

/**
 * 비밀번호 검증
 * @param {string} password - 입력된 평문 비밀번호
 * @param {string} hashedPassword - 저장된 해시된 비밀번호
 * @returns {Promise<boolean>} 일치 여부
 */
export async function verifyPassword(password, hashedPassword) {
  const hash = await hashPassword(password)
  return hash === hashedPassword
}

/**
 * 동기식 해시 함수 (간단한 대안, 보안 수준은 낮음)
 * Web Crypto API를 사용할 수 없는 환경을 위한 fallback
 * @param {string} password - 평문 비밀번호
 * @returns {string} 해시된 비밀번호
 */
export function simpleHash(password) {
  let hash = 0
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // 32bit 정수로 변환
  }
  // 양수로 변환하고 16진수로
  return Math.abs(hash).toString(16)
}

