import { FC } from 'react'
import './slider.scss'
import useSlider from './use-slider/use-slider'
import { Player } from '../../../utils/interfaces/player'

export interface SliderProps {
  label?: string
  value?: number
  defaultValue?: number
  onChange?: (value: number, name: keyof Player) => void
  name?: keyof Player
}

const MAX_RANGE = 100
const MIN_RANGE = 0

const Slider: FC<SliderProps> = ({ label, name, value, defaultValue, onChange }) => {
  const { currentValue, handleCurrentValue } = useSlider({
    defaultValue,
    onChange,
    value
  })

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
            className="slider__input"
            type="range"
            id={label}
            name={name}
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
