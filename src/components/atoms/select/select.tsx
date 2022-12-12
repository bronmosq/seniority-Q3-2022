import { FC } from 'react'
import './select.scss'
import { PlayerPosition, Player } from '../../../utils/interfaces/player'

interface SelectProps {
  selectedValue: number
  label?: string
  options?: PlayerPosition[]
  onChange?: (value: string, name: keyof Player) => void
  name?: keyof Player
}

export const Select: FC<SelectProps> = ({ selectedValue, label = '', options, onChange, name }) => {
  return (
    <div className="select">
      <label htmlFor={name}>{label}</label>
      <select
        value={selectedValue}
        name={name}
        className="select__field"
        onChange={(e) => {
          if (onChange) {
            onChange(e.target.value, name || 'idPosition')
          }
        }}
      >
        {options?.map((option) => (
          <option key={option.id} value={option.id}>
            {option.description}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
