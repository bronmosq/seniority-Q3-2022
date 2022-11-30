import { FC } from 'react'
import './input.scss'
import { Player } from '../../../utils/interfaces/player'

export interface InputProps {
  placeholder?: string
  type?: 'text' | 'password'
  label?: string
  errorMessage?: string
  variant?: 'error' | 'normal'
  value?: string
  name?: keyof Player
  onChange: (value: string, name?: keyof Player) => void
}

export const Input: FC<InputProps> = ({
  placeholder,
  label = '',
  type,
  errorMessage,
  variant,
  onChange,
  value,
  name
}) => {
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        onChange={onChange ? (e) => onChange(e.target.value, name) : undefined}
        className={`input__field ${variant === 'error' ? 'input__field--error' : ''}`}
        value={value}
        type={type}
        placeholder={placeholder}
      />
      <span className="input__error-message">{errorMessage}</span>
    </div>
  )
}
