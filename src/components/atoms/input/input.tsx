import { FC } from 'react'
import './input.scss'

export interface InputProps {
  placeholder?: string
  type?: 'text' | 'password'
  label?: string
  errorMessage?: string
  variant?: string
  value?: string
  name?: string
  onChange?: (value: string, name?: string) => void
}

export const Input: FC<InputProps> = ({
  placeholder,
  label,
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
      <div
        className={`input__field-wrapper ${variant === 'error' && 'input__field-wrapper--error'}`}
      >
        <input
          name={name}
          id={name}
          onChange={onChange ? (e) => onChange(e.target.value, e.target.name) : undefined}
          className="input__field"
          value={value}
          type={type}
          placeholder={placeholder}
        />
      </div>
      <span className="input__error-message">{errorMessage}</span>
    </div>
  )
}
