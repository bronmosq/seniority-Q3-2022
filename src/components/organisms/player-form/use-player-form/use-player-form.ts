import { useState, useMemo } from 'react'
import { Player } from '../../../../utils/interfaces/player'
import { usePlayersContext } from '../../../../context/players-context/players-context'

const usePlayerForm = () => {
  const { positions, addPlayer, activePlayer, updatePlayer, addActivePlayer } = usePlayersContext()
  const [player, setPlayer] = useState<Player>(activePlayer)

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
      addActivePlayer(player)
    }
  }

  const managePlayer = () => {
    if (player.id === 0) {
      addPlayer(player)
    } else {
      updatePlayer(player.id)
    }
  }

  return {
    player,
    isButtonEnabled,
    positions,
    handleChangeInput,
    managePlayer
  }
}

export default usePlayerForm
