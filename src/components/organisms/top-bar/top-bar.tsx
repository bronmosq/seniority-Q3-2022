import React from 'react'
import { Button } from '../../atoms/button/button'
import { Input } from '../../atoms/input/input'
import './top-bar.scss'

const TopBar = () => {
  return (
    <div className="top-bar">
      <Input placeholder="Buscar por nombre" name="search" />
      <Button>Agregar</Button>
    </div>
  )
}

export default TopBar
