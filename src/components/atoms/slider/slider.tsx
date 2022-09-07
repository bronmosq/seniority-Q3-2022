import { FC, useEffect, useState } from 'react'
import './slider.scss'

const MAX_RANGE = 100
const MIN_RANGE = 0
export interface SliderProps {
  label?: string
  value?: number
  onChange?: (value: number) => void
}

const Slider: FC<SliderProps> = ({ label, value, onChange }) => {
  const [currentValue, setCurrentValue] = useState(55)

  useEffect(() => {
    setCurrentValue(value ?? 55)
  }, [value])

  const handleCurrentValue = (valueTarget: string) => {
    const valueSlider = Number(valueTarget)

    if (onChange) onChange(valueSlider)

    setCurrentValue(valueSlider)
  }

  return (
    <div className="slider">
      <div className="slider__input-container">
        {label && (
          <label className="slider__label" htmlFor={label}>
            {label}
          </label>
        )}
        <div className="slider__input-container-value">
          <input
            className={`slider__input`}
            type="range"
            id={label}
            name={label}
            value={currentValue}
            min={MIN_RANGE}
            max={MAX_RANGE}
            onChange={(e) => handleCurrentValue(e.target.value)}
          />

          <span className="slider__value">{currentValue}</span>
        </div>
      </div>
    </div>
  )
}

export default Slider
