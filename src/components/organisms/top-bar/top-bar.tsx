import { useState } from 'react'
import { Button } from '../../atoms/button/button'
import { Input } from '../../atoms/input/input'
import Modal from '../../molecules/modal/modal'
import './top-bar.scss'
import { InfoText } from '../../../utils/enums/info-text'
import { usePlayersContext } from '../../../context/players-context/players-context'
import PlayerForm from '../player-form/player-form'

const TopBar = () => {
  const { handleChangeModal } = usePlayersContext()

  return (
    <>
      <div className="top-bar">
        <Input placeholder="Buscar por nombre" onChange={() => {}} />
        <Button onClick={handleChangeModal}>Agregar</Button>
      </div>
    </>
  )
}

export default TopBar
