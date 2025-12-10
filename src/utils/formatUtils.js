/**
 * 숫자 포맷팅 유틸리티
 * 큰 숫자를 K, M, B 형식으로 변환
 * @param {number|string} num - 포맷팅할 숫자
 * @returns {string} - 포맷팅된 문자열
 */
export const formatNumber = (num) => {
  // 숫자로 변환 (문자열인 경우 정수로 변환)
  let number
  if (typeof num === 'string') {
    number = parseInt(num, 10)
  } else if (typeof num === 'number') {
    number = num
  } else {
    number = parseInt(num, 10)
  }
  
  if (isNaN(number) || number === null || number === undefined) {
    return '0'
  }
  
  // 정수로 보장
  number = Math.floor(number)
  
  if (number >= 1000000000) {
    return (number / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B'
  } else if (number >= 1000000) {
    return (number / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
  } else if (number >= 10000) {
    return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
  }
  return number.toString()
}

