import { useEffect, useState } from 'react'
import { Player } from '../../../../utils/interfaces/player'
import { usePlayersContext } from '../../../../context/players-context/players-context'

const useSearchPlayers = (players: Player[]) => {
  const [filteredPlayersList, setFilteredPlayersList] = useState<Player[]>(players)

  const filterPlayers = (value: string) => {
    setFilteredPlayersList(
      players.filter((player) =>
        `${player.firstName.toLowerCase()} ${player.lastName.toLowerCase()}`.includes(
          value.toLowerCase()
        )
      )
    )
  }
  return {
    filteredPlayersList,
    filterPlayers
  }
}

export default useSearchPlayers
