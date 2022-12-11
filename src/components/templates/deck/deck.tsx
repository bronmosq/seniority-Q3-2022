import { usePlayersContext } from '../../../context/players-context/players-context'
import LoadingOverlay from '../../molecules/loading-overlay/loading-overlay'
import CardsGrid from '../../organisms/cards-grid/cards-grid'
import TopBar from '../../organisms/top-bar/top-bar'
import useSearchPlayers from './use-search/use-search-players'

const Deck = () => {
  const {
    handleChangeModal,
    playersList,
    addActivePlayer,
    showLoadingOverlay,
    deletePlayer,
    searchTerm
  } = usePlayersContext()
  const { filteredPlayersList, filterPlayers } = useSearchPlayers(playersList)
  // const { filteredList, deletePlayer, addActivePlayer } = usePlayersContext()
  return (
    <div className="deck">
      <h1 className="deck__title">MI EQUIPO</h1>
      <TopBar
        filterPlayers={filterPlayers}
        playersList={playersList}
        handleChangeModal={handleChangeModal!}
      />
      <CardsGrid
        playersList={playersList}
        deletePlayer={deletePlayer!}
        setActivePlayer={addActivePlayer!}
      />
      <LoadingOverlay showOverlay={showLoadingOverlay} />
    </div>
  )
}

export default Deck
