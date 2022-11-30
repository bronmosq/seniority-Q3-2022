import { useState, useMemo } from 'react'
import { Player } from '../../../../utils/interfaces/player'
import { AUTHOR_ID } from '../../../../utils/constants/author'
import { usePlayersContext } from '../../../../context/players-context/players-context'

const emptyPlayer: Player = {
  id: 0,
  attack: 55,
  defense: 55,
  firstName: '',
  idAuthor: AUTHOR_ID!,
  idPosition: 0,
  image: '',
  lastName: '',
  skills: 55
}

const usePlayerForm = () => {
  const [player, setPlayer] = useState<Player>(emptyPlayer)
  const { positions, addPlayer } = usePlayersContext()

  const isButtonEnabled = useMemo(() => {
    const { firstName, lastName, image, idPosition } = player
    return firstName && lastName && image && idPosition
  }, [player])

  const handleChangeInput = (value: string | number, key?: keyof Player) => {
    if (key) {
      setPlayer({
        ...player,
        [key]: value
      })
    }
  }

  const registerPlayer = () => {
    addPlayer(player)
  }

  return {
    player,
    isButtonEnabled,
    positions,
    handleChangeInput,
    registerPlayer
  }
}

export default usePlayerForm
