import React, { FC } from 'react'
import './button.scss'

export interface ButtonProps {
  onClick?: () => void
  children?: React.ReactNode
  size?: 'small'
  disabled?: boolean
}

export const Button: FC<ButtonProps> = ({ onClick, children, size, disabled = false }) => {
  return (
    <button
      disabled={disabled}
      className={`button ${size === 'small' ? ' button--small' : ''}`}
      onClick={() => onClick!()}
    >
      {children}
    </button>
  )
}
