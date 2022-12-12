import { useEffect } from 'react'
import { usePlayersContext } from './../../../../context/players-context/players-context'

const useDeck = () => {
  const {
    handleChangeModal,
    playersList,
    addActivePlayer,
    showLoadingOverlay,
    deletePlayer,
    handleSearchTerm,
    searchTerm,
    getPlayers,
    getPositions
  } = usePlayersContext()

  const fetchData = () => {
    getPlayers()
    getPositions()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    handleChangeModal,
    playersList,
    addActivePlayer,
    showLoadingOverlay,
    deletePlayer,
    handleSearchTerm,
    searchTerm,
    fetchData
  }
}

export default useDeck
