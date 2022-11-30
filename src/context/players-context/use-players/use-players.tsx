import { useState, useEffect } from 'react'
import {
  fetchPlayers,
  deletePlayer as deletePlayerService,
  getPositions as getPositionsService,
  addPlayer as addPlayerService,
  updatePlayer as updatePlayerService
} from '../../../services/player/player.service'
import { Player, PlayerPosition } from '../../../utils/interfaces/player'
import { EMPTY_PLAYER } from '../../../utils/constants/player'

const usePlayers = () => {
  const [activeModal, setActiveModal] = useState(false)
  const [playersList, setPlayersList] = useState<Player[]>([])
  const [positions, setPositions] = useState<PlayerPosition[]>([])
  const [activeAlert, setActiveAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [showLoadingOverlay, setShowLoadingOverlay] = useState(false)
  const [activePlayer, setActivePlayer] = useState<Player>(EMPTY_PLAYER)
  const [isEditing, setIsEditing] = useState(false)
  const [filteredList, setFilteredList] = useState<Player[]>([])

  const handleChangeModal = () => {
    if (activeModal) {
      setActivePlayer(EMPTY_PLAYER)
      setIsEditing(false)
    }
    setActiveModal(!activeModal)
  }

  const handleCloseAlert = () => {
    setActiveAlert(false)
  }

  const getPlayers = async (showOverlay = true) => {
    if (showOverlay) setShowLoadingOverlay(true)
    await fetchPlayers()
      .then((res) => {
        setTimeout(() => {
          setPlayersList(res)
          setFilteredList(res)
          setShowLoadingOverlay(false)
        }, 1500)
      })
      .catch(() => setPlayersList([]))
  }

  const addFilteredPlayerList = (players: Player[]) => {
    setFilteredList(players)
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
      setTimeout(() => {
        setActiveAlert(false)
      }, 5000)
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

  const addActivePlayer = (id: number) => {
    const player = playersList.find(({ id: playerId }) => playerId === id)
    setIsEditing(true)
    setActivePlayer(player!)
    handleChangeModal()
  }

  const updatePlayer = async (editedPlayer: Player) => {
    await updatePlayerService(editedPlayer!).then(() => {
      handleChangeModal()
      showAlert('Se modifico al jugador')
      getPlayers()
    })
  }

  return {
    playersList,
    activeModal,
    activeAlert,
    alertMessage,
    positions,
    showLoadingOverlay,
    activePlayer,
    isEditing,
    filteredList,
    handleChangeModal,
    deletePlayer,
    handleCloseAlert,
    addPlayer,
    updatePlayer,
    addActivePlayer,
    addFilteredPlayerList
  }
}

export default usePlayers
