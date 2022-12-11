import { useEffect, useState } from 'react'
import { Player } from '../../../../utils/interfaces/player'

export interface UseSliderArgs {
  value?: number
  defaultValue?: number
  onChange?: (value: number, name: keyof Player) => void
  name?: keyof Player
}

const DEFAULT_VALUE = 55

function useSlider(args?: UseSliderArgs) {
  const [currentValue, setCurrentValue] = useState(args?.defaultValue ?? DEFAULT_VALUE)

  useEffect(() => {
    setCurrentValue(args?.value || args?.defaultValue || DEFAULT_VALUE)
  }, [args?.value])

  const handleCurrentValue = (valueTarget: string) => {
    const valueSlider = Number(valueTarget)

    if (args?.onChange) args?.onChange(valueSlider, args?.name || 'attack')

    setCurrentValue(valueSlider)
  }

  return {
    currentValue,
    handleCurrentValue
  }
}

export default useSlider
