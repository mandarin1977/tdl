/**
 * 숫자 포맷팅 유틸리티
 * 큰 숫자를 K, M, B 형식으로 변환
 * @param {number} num - 포맷팅할 숫자
 * @returns {string} - 포맷팅된 문자열
 */
export const formatNumber = (num) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B'
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
  } else if (num >= 10000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
  }
  return num.toLocaleString()
}

