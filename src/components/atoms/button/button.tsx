import React, { FC } from 'react'
import './button.scss'

export interface ButtonProps {
  onClick?: () => void
  children?: React.ReactNode
  size?: 'small' | 'large'
}

export const Button: FC<ButtonProps> = ({ onClick = () => {}, children, size }) => {
  return (
    <button className={`button ${size === 'small' && ' button--small'}`} onClick={() => onClick()}>
      {children}
    </button>
  )
}
