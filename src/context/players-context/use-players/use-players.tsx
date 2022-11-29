import { useState, useEffect } from 'react'
import { PlayersService } from '../../../services/player.service'
import { Player } from '../../../utils/interfaces/player'
import { PlayersStateContext } from '../players-context'

const usePlayers = (initalValue?: Partial<PlayersStateContext>) => {
  const [activeModal, setActiveModal] = useState(initalValue?.activeModal ?? false)
  const [playersList, setPlayersList] = useState<Player[]>(initalValue?.playersList || [])

  const handleChangeModal = () => {
    setActiveModal(!activeModal)
  }

  const getPlayers = async () => {
    const playersResponse = (await PlayersService.getPlayers()) || []
    setPlayersList(playersResponse)
  }

  useEffect(() => {
    getPlayers()
  })

  return {
    playersList,
    activeModal,
    handleChangeModal
  }
}

export default usePlayers
