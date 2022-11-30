import { useState, useEffect } from 'react'
import {
  fetchPlayers,
  deletePlayer as deletePlayerService,
  getPositions as getPositionsService,
  addPlayer as addPlayerService
} from '../../../services/player.service'
import { Player, PlayerPosition } from '../../../utils/interfaces/player'
import { PlayersStateContext } from '../players-context'

const usePlayers = (initalValue?: Partial<PlayersStateContext>) => {
  const [activeModal, setActiveModal] = useState(false)
  const [playersList, setPlayersList] = useState<Player[]>([])
  const [positions, setPositions] = useState<PlayerPosition[]>([])
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
          setPlayersList(res)
          setActiveAlert(false)
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

  const deletePlayer = async (id: number) => {
    await deletePlayerService(id)
    getPlayers()
  }

  const addPlayer = async (player: Player) => {
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
    handleChangeModal,
    deletePlayer,
    handleCloseAlert,
    addPlayer
  }
}

export default usePlayers
