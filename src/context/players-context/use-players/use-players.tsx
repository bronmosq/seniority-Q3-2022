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
import { PlayersStateContext } from '../players-context'

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

  const handleSearchTerm = (term: string) => {
    setSearchTerm(term)
  }

  const getPlayers = () => {
    setShowLoadingOverlay(true)
    fetchPlayers().then((res) => {
      setPlayersList(res)
      setShowLoadingOverlay(false)
      setSearchTerm('')
    })
    setShowLoadingOverlay(false)
    setSearchTerm('')
  }

  const getPositions = () => {
    getPositionsService().then((res) => setPositions(res))
  }

  const addPlayer = (player: Player) => {
    setShowLoadingOverlay(true)
    addPlayerService(player).then(() => {
      getPlayers()
    })
    setSearchTerm('')
    setShowLoadingOverlay(false)
    setActiveModal(false)
  }

  const addActivePlayer = (playerId: number) => {
    const player = playersList.find(({ id }) => id === playerId)
    setIsEditing(true)
    setActivePlayer(player)
    setIsEditing(false)
    setActiveModal(true)
  }

  const deletePlayer = (id: number) => {
    setShowLoadingOverlay(true)
    deletePlayerService(id).then(() => {
      getPlayers()
    })
    setShowLoadingOverlay(false)
    setSearchTerm('')
  }

  const updatePlayer = (editedPlayer: Player) => {
    setShowLoadingOverlay(true)
    updatePlayerService(editedPlayer!).then(() => {
      getPlayers()
    })
    setSearchTerm('')
    setShowLoadingOverlay(false)
    setActiveModal(false)
  }

  return {
    playersList,
    positions,
    searchTerm,
    isEditing,
    activeModal,
    activePlayer,
    showLoadingOverlay,
    addPlayer: initialValues?.addPlayer ?? addPlayer,
    handleChangeModal,
    addActivePlayer,
    updatePlayer: initialValues?.updatePlayer ?? updatePlayer,
    deletePlayer,
    handleSearchTerm,
    getPlayers: initialValues?.getPlayers ?? getPlayers,
    getPositions: initialValues?.getPositions ?? getPositions
  }
}

export default usePlayers
