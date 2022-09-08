import { useEffect, useState } from 'react'

export interface UseSliderArgs {
  value?: number
  defaultValue?: number
  onChange?: (value: number) => void
}

const DEFAULT_VALUE = 55

function useSlider(args?: UseSliderArgs) {
  const [currentValue, setCurrentValue] = useState(args?.defaultValue ?? DEFAULT_VALUE)

  useEffect(() => {
    setCurrentValue(args?.value || args?.defaultValue || DEFAULT_VALUE)
  }, [args?.value])

  const handleCurrentValue = (valueTarget: string) => {
    const valueSlider = Number(valueTarget)

    if (args?.onChange) args?.onChange(valueSlider)

    setCurrentValue(valueSlider)
  }

  return {
    currentValue,
    handleCurrentValue
  }
}

export default useSlider
