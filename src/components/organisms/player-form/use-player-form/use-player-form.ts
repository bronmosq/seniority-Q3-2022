import { useState, useMemo } from 'react'
import { Player } from '../../../../utils/interfaces/player'
import { PlayerFormProps } from '../player-form'
import { EMPTY_PLAYER } from '../../../../utils/constants/player'

const usePlayerForm = ({ initialValues, onSubmit }: PlayerFormProps) => {
  const [player, setPlayer] = useState<Player>(initialValues || EMPTY_PLAYER)

  const isButtonEnabled = () => {
    const { firstName, lastName, image, idPosition } = player
    return firstName && lastName && image && idPosition
  }

  const handleChangeInput = (value: string | number, key?: keyof Player) => {
    setPlayer({
      ...player,
      [key!]: value
    })
  }

  const managePlayer = () => {
    onSubmit(player)
  }

  return {
    player,
    isButtonEnabled,
    handleChangeInput,
    managePlayer
  }
}

export default usePlayerForm
