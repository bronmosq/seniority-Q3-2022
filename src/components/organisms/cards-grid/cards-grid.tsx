import './cards-grid.scss'
import { Player } from '../../../utils/interfaces/player'
import Card from '../../molecules/card/card'
import { FC } from 'react'
interface DeckListProps {
  playersList: Player[]
  deletePlayer: (id: number) => void
  setActivePlayer: (id: number) => void
}
const CardsGrid: FC<DeckListProps> = (props) => {
  if (props.playersList.length === 0) return <h2>No existen jugadores registrados...</h2>

  return (
    <div className="cards-grid">
      {props.playersList.map((player, index) => (
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
