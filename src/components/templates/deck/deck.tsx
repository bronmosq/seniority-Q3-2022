import { usePlayersContext } from '../../../context/players-context/players-context'
import LoadingOverlay from '../../molecules/loading-overlay/loading-overlay'
import CardsGrid from '../../organisms/cards-grid/cards-grid'
import TopBar from '../../organisms/top-bar/top-bar'
import useSearchPlayers from '../../organisms/cards-grid/use-filter-players/use-filter-players'
import useDeck from './use-deck/use-deck'
import { InfoText } from '../../../utils/enums/info-text'

const Deck = () => {
  const {
    handleChangeModal,
    playersList,
    addActivePlayer,
    showLoadingOverlay,
    deletePlayer,
    handleSearchTerm,
    searchTerm
  } = useDeck()

  return (
    <div className="deck">
      <h1 className="deck__title">{InfoText.TITLE}</h1>
      <TopBar
        searchTerm={searchTerm}
        handleSearchTerm={handleSearchTerm}
        playersList={playersList}
        handleChangeModal={handleChangeModal!}
      />
      <CardsGrid
        searchTerm={searchTerm}
        playersList={playersList}
        deletePlayer={deletePlayer!}
        setActivePlayer={addActivePlayer!}
      />
      <LoadingOverlay showOverlay={showLoadingOverlay} />
    </div>
  )
}

export default Deck
