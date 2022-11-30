import { useState, useEffect } from 'react'
import {
  fetchPlayers,
  deletePlayer as deletePlayerService,
  getPositions as getPositionsService,
  addPlayer as addPlayerService
} from '../../../services/player.service'
import { Player, PlayerPosition } from '../../../utils/interfaces/player'

const usePlayers = () => {
  const [activeModal, setActiveModal] = useState(false)
  const [playersList, setPlayersList] = useState<Player[]>([])
  const [positions, setPositions] = useState<PlayerPosition[]>([])
  const [activeAlert, setActiveAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [showLoadingOverlay, setShowLoadingOverlay] = useState(false)

  const handleChangeModal = () => {
    setActiveModal(!activeModal)
  }

  const handleCloseAlert = () => {
    setActiveAlert(false)
  }

  const getPlayers = async () => {
    setShowLoadingOverlay(true)
    await fetchPlayers()
      .then((res) => {
        setTimeout(() => {
          setPlayersList(res)
          setShowLoadingOverlay(false)
        }, 1500)
      })
      .catch(() => setPlayersList([]))
  }

  const getPositions = async () => {
    await getPositionsService().then((res) => setPositions(res))
  }

  useEffect(() => {
    getPlayers()
    getPositions()
  }, [])

  const showAlert = (message: string) => {
    setTimeout(() => {
      setActiveAlert(true)
      setAlertMessage(message)
    }, 1500)
  }

  const deletePlayer = async (id: number) => {
    showAlert('Se elimino al jugador')
    await deletePlayerService(id)
    getPlayers()
  }

  const addPlayer = async (player: Player) => {
    showAlert('Se agrego al jugador')
    await addPlayerService(player)
    getPlayers()
    handleChangeModal()
  }

  return {
    playersList,
    activeModal,
    activeAlert,
    alertMessage,
    positions,
    showLoadingOverlay,
    handleChangeModal,
    deletePlayer,
    handleCloseAlert,
    addPlayer
  }
}

export default usePlayers
