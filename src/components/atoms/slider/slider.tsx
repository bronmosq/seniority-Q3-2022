import { FC } from 'react'
import './slider.styles.css'

export interface SliderProps {
  name?: string
  value?: number
  min?: number
  max?: number
  onChange?: (value: number) => void
}

const Slider: FC<SliderProps> = ({ name, value, onChange, min, max }) => {
  return (
    <div className="slider">
      <div className="slider__input-container">
        <input
          className={`slider__input`}
          type="range"
          id={name}
          name={name}
          value={value}
          min={min}
          max={max}
          onChange={onChange ? (e) => onChange(Number(e.target.value)) : undefined}
        />
      </div>
    </div>
  )
}

export default Slider
