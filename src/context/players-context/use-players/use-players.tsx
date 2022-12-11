import { useEffect, useState } from 'react'
import { Player, PlayerPosition } from '../../../utils/interfaces/player'
import {
  fetchPlayers,
  addPlayer as addPlayerService,
  updatePlayer as updatePlayerService,
  deletePlayer as deletePlayerService,
  getPositions as getPositionsService
} from '../../../services/user.service'
import { DEFAULT_POSITIONS } from '../../../utils/constants/player'

const usePlayers = () => {
  const [activeModal, setActiveModal] = useState(false)
  const [playersList, setPlayersList] = useState<Player[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [positions, setPositions] = useState<PlayerPosition[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [activePlayer, setActivePlayer] = useState<Player | undefined>(undefined)
  const [showLoadingOverlay, setShowLoadingOverlay] = useState(false)

  const handleChangeModal = () => {
    if (isEditing) {
      setActivePlayer(undefined)
      setIsEditing(false)
    }
    setActiveModal(!activeModal)
  }

  const handleChangeEditing = () => {
    setIsEditing(!isEditing)
  }

  const getPlayers = () => {
    setShowLoadingOverlay(true)
    fetchPlayers()
      .then((res) => {
        setPlayersList(res)
        setShowLoadingOverlay(false)
      })
      .catch(() => {
        setShowLoadingOverlay(false)
      })
  }

  const getPositions = async () => {
    await getPositionsService()
      .then((res) => setPositions(res))
      .catch(() => setPositions(DEFAULT_POSITIONS))
  }

  useEffect(() => {
    getPlayers()
    getPositions()
  }, [])

  const addPlayer = (player: Player) => {
    setShowLoadingOverlay(true)
    addPlayerService(player)
      .then(() => {
        getPlayers()
      })
      .catch(() => {
        delete player.id
        const newPlayer = { id: Math.floor(Math.random() * 200), ...player }
        setPlayersList([...playersList, newPlayer])
      })
    handleChangeModal()
  }

  const addActivePlayer = (id: number) => {
    const player = playersList.find(({ id: playerId }) => playerId === id)
    handleChangeEditing()
    setActivePlayer(player)
    handleChangeModal()
  }

  const deletePlayer = async (id: number) => {
    setShowLoadingOverlay(true)
    deletePlayerService(id)
      .then(() => {
        getPlayers()
      })
      .catch(() => {
        const newList = playersList.filter((player) => player.id !== id)
        setPlayersList(newList)
        setShowLoadingOverlay(false)
      })
  }

  const updatePlayer = async (editedPlayer: Player) => {
    updatePlayerService(editedPlayer!)
      .then(() => {
        handleChangeModal()
        getPlayers()
      })
      .catch(() => {
        handleChangeModal()
        const newList = playersList.map((player) => {
          if (player.id === editedPlayer.id) {
            return editedPlayer
          }
          return player
        })
        setPlayersList(newList)
      })
  }

  return {
    playersList,
    positions,
    searchTerm,
    isEditing,
    activeModal,
    activePlayer,
    showLoadingOverlay,
    addPlayer,
    handleChangeModal,
    addActivePlayer,
    updatePlayer,
    deletePlayer
  }
}

export default usePlayers
