import { useState, useEffect } from 'react'
import { fetchPlayers, deletePlayer as deletePlayerService } from '../../../services/player.service'
import { Player } from '../../../utils/interfaces/player'
import { PlayersStateContext } from '../players-context'

const usePlayers = (initalValue?: Partial<PlayersStateContext>) => {
  const [activeModal, setActiveModal] = useState(initalValue?.activeModal ?? false)
  const [playersList, setPlayersList] = useState<Player[]>(initalValue?.playersList || [])
  const [activeAlert, setActiveAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

  const handleChangeModal = () => {
    setActiveModal(!activeModal)
  }

  const handleCloseAlert = () => {
    setActiveModal(false)
  }

  const getPlayers = async () => {
    setAlertMessage('Cargando...')
    setActiveAlert(true)
    await fetchPlayers()
      .then((res) => {
        setTimeout(() => {
          setPlayersList(res!)
          setActiveAlert(false)
        }, 1500)
      })
      .catch(() => setPlayersList([]))
  }

  useEffect(() => {
    getPlayers()
  }, [])

  const deletePlayer = async (id: number) => {
    await deletePlayerService(id)
    getPlayers()
  }

  return {
    playersList,
    activeModal,
    activeAlert,
    alertMessage,
    handleChangeModal,
    deletePlayer,
    handleCloseAlert
  }
}

export default usePlayers
