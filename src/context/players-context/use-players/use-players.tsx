import { useEffect, useState } from 'react'
import { Player, PlayerPosition } from '../../../utils/interfaces/player'
import {
  fetchPlayers,
  addPlayer as addPlayerService,
  updatePlayer as updatePlayerService,
  deletePlayer as deletePlayerService,
  getPositions as getPositionsService
} from '../../../services/player/player.service'
import { DEFAULT_POSITIONS } from '../../../utils/constants/player'
import { PlayersProviderProps, PlayersStateContext } from '../players-context'

const usePlayers = (initialValues?: Partial<PlayersStateContext>) => {
  const [activeModal, setActiveModal] = useState(initialValues?.activeModal || false)
  const [playersList, setPlayersList] = useState<Player[]>(initialValues?.playersList || [])
  const [searchTerm, setSearchTerm] = useState(initialValues?.searchTerm || '')
  const [positions, setPositions] = useState<PlayerPosition[]>(initialValues?.positions || [])
  const [isEditing, setIsEditing] = useState(initialValues?.isEditing || false)
  const [activePlayer, setActivePlayer] = useState<Player | undefined>(
    initialValues?.activePlayer || undefined
  )
  const [showLoadingOverlay, setShowLoadingOverlay] = useState(
    initialValues?.showLoadingOverlay || false
  )

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

  const handleSearchTerm = (term: string) => {
    setSearchTerm(term)
  }

  const getPlayers = () => {
    setShowLoadingOverlay(true)
    fetchPlayers()
      .then((res) => {
        setPlayersList(res)
        setShowLoadingOverlay(false)
        setSearchTerm('')
      })
      .catch(() => {
        setShowLoadingOverlay(false)
        setSearchTerm('')
      })
  }

  const getPositions = async () => {
    await getPositionsService()
      .then((res) => setPositions(res))
      .catch(() => setPositions(DEFAULT_POSITIONS))
  }

  useEffect(() => {
    getPositions()
    getPlayers()
  }, [])

  const addPlayer = (player: Player) => {
    setShowLoadingOverlay(true)
    addPlayerService(player)
      .then(() => {
        getPlayers()
        setSearchTerm('')
      })
      .catch(() => {
        delete player.id
        const newPlayer = { id: Math.floor(Math.random() * 200), ...player }
        setPlayersList([...playersList, newPlayer])
        setSearchTerm('')
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
        setSearchTerm('')
      })
      .catch(() => {
        const newList = playersList.filter((player) => player.id !== id)
        setPlayersList(newList)
        setShowLoadingOverlay(false)
        setSearchTerm('')
      })
  }

  const updatePlayer = async (editedPlayer: Player) => {
    updatePlayerService(editedPlayer!)
      .then(() => {
        handleChangeModal()
        getPlayers()
        setSearchTerm('')
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
        setSearchTerm('')
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
    deletePlayer,
    handleSearchTerm
  }
}

export default usePlayers
