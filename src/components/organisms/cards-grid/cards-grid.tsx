import { Card } from '../../molecules/card/card'
import './cards-grid.scss'
import { usePlayersContext } from '../../../context/players-context/players-context'

export const CardsGrid = () => {
  const { playersList } = usePlayersContext()

  return (
    <div className="cards-grid">
      {playersList.map((player, index) => (
        <div key={`card-item-${index}`} className="cards-grid__item">
          <Card key={`player-card-${index}`} {...player} />
        </div>
      ))}
    </div>
  )
}
