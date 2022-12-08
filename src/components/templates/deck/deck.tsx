import { usePlayersContext } from '../../../context/players-context/players-context'
import CardsGrid from '../../organisms/cards-grid/cards-grid'
import TopBar from '../../organisms/top-bar/top-bar'

const Deck = () => {
  const { filteredList, deletePlayer, addActivePlayer } = usePlayersContext()
  return (
    <div className="deck">
      <h1 className="deck__title">MI EQUIPO</h1>
      <TopBar />
      <CardsGrid
        playersList={filteredList}
        deletePlayer={deletePlayer}
        setActivePlayer={addActivePlayer}
      />
    </div>
  )
}

export default Deck
