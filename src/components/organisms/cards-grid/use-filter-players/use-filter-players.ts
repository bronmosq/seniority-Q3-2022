import { useMemo } from 'react'
import { Player } from '../../../../utils/interfaces/player'

const useFilterPlayers = (players: Player[], searchTerm: string) => {
  const filteredPlayerList = useMemo(() => {
    return players.filter((player) =>
      `${player.firstName.toLowerCase()} ${player.lastName.toLowerCase()}`.includes(
        searchTerm.toLowerCase()
      )
    )
  }, [searchTerm, players])

  return {
    filteredPlayerList
  }
}

export default useFilterPlayers
