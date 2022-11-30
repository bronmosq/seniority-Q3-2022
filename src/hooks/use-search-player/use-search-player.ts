import { usePlayersContext } from '../../context/players-context/players-context'

const useSearchPlayers = () => {
  const { playersList, addFilteredPlayerList, filteredList } = usePlayersContext()
  const filterPlayers = (value: string) => {
    addFilteredPlayerList(
      playersList.filter((player) =>
        `${player.firstName.toLowerCase()} ${player.lastName.toLowerCase()}`.includes(
          value.toLowerCase()
        )
      )
    )
  }
  return {
    filteredList,
    filterPlayers
  }
}

export default useSearchPlayers
