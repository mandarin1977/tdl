/**
 * 에너지 관리 유틸리티
 * 에너지는 하루에 최대 4000개까지 사용 가능하며, 하루가 지나면 4000개로 회복됩니다.
 */

const MAX_ENERGY = 4000

/**
 * 에너지 체크 및 리셋
 * 하루가 지나면 에너지를 4000개로 리셋하고, 오늘 날짜면 저장된 에너지를 로드합니다.
 * @param {import('vue').Ref<number>} currentEnergy - 현재 에너지 ref
 * @param {import('vue').Ref<number>} maxEnergy - 최대 에너지 ref (기본값: 4000)
 */
export const checkAndResetEnergy = (currentEnergy, maxEnergy = { value: MAX_ENERGY }) => {
  const today = new Date().toDateString()
  const lastEnergyDate = localStorage.getItem('energyLastDate')
  const savedEnergy = localStorage.getItem('currentEnergy')
  
  // maxEnergy.value를 숫자로 보장
  const maxEnergyValue = typeof maxEnergy.value === 'number' ? maxEnergy.value : parseInt(maxEnergy.value, 10) || MAX_ENERGY
  
  if (lastEnergyDate !== today) {
    // 하루가 지나면 에너지를 4000개로 리셋
    currentEnergy.value = maxEnergyValue
    localStorage.setItem('energyLastDate', today)
    localStorage.setItem('currentEnergy', maxEnergyValue.toString())
  } else if (savedEnergy) {
    // 오늘 날짜면 저장된 에너지 로드 (최소 0, 최대 4000개)
    const saved = parseInt(savedEnergy, 10) || 0
    currentEnergy.value = Math.max(0, Math.min(saved, maxEnergyValue))
  } else {
    // 저장된 에너지가 없으면 (새 사용자) 최대 에너지로 설정
    currentEnergy.value = maxEnergyValue
    localStorage.setItem('energyLastDate', today)
    localStorage.setItem('currentEnergy', maxEnergyValue.toString())
  }
  
  // 최종적으로 숫자 타입 보장
  if (typeof currentEnergy.value !== 'number') {
    currentEnergy.value = parseInt(currentEnergy.value, 10) || 0
  }
}

export { MAX_ENERGY }

