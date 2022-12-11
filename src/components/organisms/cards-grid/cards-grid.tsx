import './cards-grid.scss'
import { Player } from '../../../utils/interfaces/player'
import Card from '../../molecules/card/card'
import { FC } from 'react'
import useFilterPlayers from './use-filter-players/use-filter-players'
interface DeckListProps {
  playersList: Player[]
  deletePlayer: (id: number) => void
  setActivePlayer: (id: number) => void
  searchTerm: string
}
const CardsGrid: FC<DeckListProps> = (props) => {
  const { filteredPlayerList } = useFilterPlayers(props.playersList, props.searchTerm)
  if (filteredPlayerList.length === 0) return <h2>No existen jugadores registrados...</h2>

  return (
    <div className="cards-grid">
      {filteredPlayerList.map((player, index) => (
        <div key={`card-item-${index}`} className="cards-grid__item">
          <Card
            player={player}
            deletePlayer={props.deletePlayer}
            setActivePlayer={props.setActivePlayer}
            key={`player-card-${index}`}
          />
        </div>
      ))}
    </div>
  )
}

export default CardsGrid
