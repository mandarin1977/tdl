// 테스트 계정 생성 유틸리티
import { hashPassword } from './passwordUtils'

/**
 * 테스트 계정 생성 함수
 * @param {Object} options - 계정 옵션
 * @param {string} options.email - 이메일 (기본값: 'test@test.com')
 * @param {string} options.password - 비밀번호 (기본값: 'test123')
 * @param {string} options.name - 이름 (기본값: 'Test User')
 * @param {string} options.phone - 전화번호 (기본값: '010-0000-0000')
 * @returns {Promise<Object>} 생성된 사용자 정보
 */
export const createTestAccount = async (options = {}) => {
  const {
    email = 'test@test.com',
    password = 'test123',
    name = 'Test User',
    phone = '010-0000-0000'
  } = options

  // 기존 사용자 확인
  const existingUsers = JSON.parse(localStorage.getItem('users') || '[]')
  const emailExists = existingUsers.some(user => user.email === email)

  if (emailExists) {
    console.warn(`이미 존재하는 이메일입니다: ${email}`)
    return {
      success: false,
      error: '이미 존재하는 이메일입니다.',
      user: existingUsers.find(user => user.email === email)
    }
  }

  // 비밀번호 해시화
  let hashedPassword
  try {
    hashedPassword = await hashPassword(password)
  } catch (error) {
    console.error('비밀번호 해시화 오류:', error)
    return {
      success: false,
      error: '비밀번호 해시화 중 오류가 발생했습니다.'
    }
  }

  // 새 사용자 데이터 생성
  const newUser = {
    id: Date.now(),
    name: name,
    phone: phone,
    email: email,
    password: hashedPassword,
    createdAt: new Date().toISOString(),
    gameData: {
      level: 1,
      coins: 10000, // 테스트용으로 코인 많이 주기
      totalCoin: 5000,
      catFragments: 100, // 테스트용으로 파편 많이 주기
      nftCount: 0,
      miningLevel: 1,
      huntingLevel: 1,
      explorationLevel: 1,
      productionLevel: 1,
      miningCats: [null, null, null, null],
      huntingCats: [null, null, null, null],
      explorationCats: [null, null, null, null],
      productionCats: [null, null, null, null],
      inventory: []
    }
  }

  // 사용자 목록에 추가
  existingUsers.push(newUser)

  // 로컬 스토리지에 저장
  localStorage.setItem('users', JSON.stringify(existingUsers))

  console.log('테스트 계정이 생성되었습니다:', {
    email: newUser.email,
    password: password,
    name: newUser.name
  })

  return {
    success: true,
    user: {
      ...newUser,
      password: password // 원본 비밀번호도 반환 (테스트용)
    }
  }
}

/**
 * 여러 테스트 계정을 한 번에 생성
 * @param {number} count - 생성할 계정 수 (기본값: 1)
 * @returns {Promise<Array>} 생성된 계정 목록
 */
export const createMultipleTestAccounts = async (count = 1) => {
  const accounts = []
  
  for (let i = 1; i <= count; i++) {
    const account = await createTestAccount({
      email: `test${i}@test.com`,
      password: 'test123',
      name: `Test User ${i}`,
      phone: `010-0000-${String(i).padStart(4, '0')}`
    })
    accounts.push(account)
  }
  
  return accounts
}

// 브라우저 콘솔에서 사용할 수 있도록 전역 함수로 등록 (개발 모드에서만)
if (import.meta.env.DEV && typeof window !== 'undefined') {
  window.createTestAccount = createTestAccount
  window.createMultipleTestAccounts = createMultipleTestAccounts
  
  // 계정 확인 함수
  window.checkTestAccount = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const testUser = users.find(u => u.email === 'test@test.com')
    if (testUser) {
      console.log('✅ 테스트 계정이 존재합니다:', {
        email: testUser.email,
        name: testUser.name,
        id: testUser.id,
        passwordLength: testUser.password?.length || 0
      })
      return testUser
    } else {
      console.log('❌ 테스트 계정이 없습니다. createTestAccount()를 실행하세요.')
      return null
    }
  }
  
  // 테스트 계정 재생성 함수 (기존 계정 삭제 후 새로 생성)
  window.recreateTestAccount = async () => {
    // 기존 계정 삭제
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const filteredUsers = users.filter(u => u.email !== 'test@test.com')
    localStorage.setItem('users', JSON.stringify(filteredUsers))
    console.log('기존 테스트 계정 삭제 완료')
    
    // 새 계정 생성
    const result = await createTestAccount()
    if (result.success) {
      console.log('✅ 테스트 계정이 재생성되었습니다!')
      console.log('이메일: test@test.com')
      console.log('비밀번호: test123')
    }
    return result
  }
  
  // 모든 계정 확인 함수
  window.listAllAccounts = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    console.log(`총 ${users.length}개의 계정이 있습니다:`)
    users.forEach((user, index) => {
      console.log(`${index + 1}. ${user.email} - ${user.name}`)
    })
    return users
  }
  
  console.log('✅ 테스트 계정 생성 함수가 등록되었습니다.')
  console.log('사용법:')
  console.log('  1. createTestAccount() // 기본 테스트 계정 생성')
  console.log('  2. createTestAccount({ email: "custom@test.com", password: "custom123" }) // 커스텀 계정 생성')
  console.log('  3. createMultipleTestAccounts(5) // 5개의 테스트 계정 생성')
  console.log('  4. checkTestAccount() // 테스트 계정 확인')
  console.log('  5. listAllAccounts() // 모든 계정 목록 확인')
  console.log('  6. recreateTestAccount() // 테스트 계정 삭제 후 재생성 (로그인 문제 해결용)')
}

