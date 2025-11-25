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
  
  if (lastEnergyDate !== today) {
    // 하루가 지나면 에너지를 4000개로 리셋
    currentEnergy.value = maxEnergy.value
    localStorage.setItem('energyLastDate', today)
    localStorage.setItem('currentEnergy', maxEnergy.value.toString())
  } else if (savedEnergy) {
    // 오늘 날짜면 저장된 에너지 로드 (최소 0, 최대 4000개)
    const saved = parseInt(savedEnergy) || 0
    currentEnergy.value = Math.max(0, Math.min(saved, maxEnergy.value))
  } else {
    // 저장된 에너지가 없으면 (새 사용자) 최대 에너지로 설정
    currentEnergy.value = maxEnergy.value
    localStorage.setItem('energyLastDate', today)
    localStorage.setItem('currentEnergy', maxEnergy.value.toString())
  }
}

export { MAX_ENERGY }

