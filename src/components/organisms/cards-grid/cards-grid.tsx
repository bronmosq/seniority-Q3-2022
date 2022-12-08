import { Card } from '../../molecules/card/card'
import './cards-grid.scss'
import { usePlayersContext } from '../../../context/players-context/players-context'

export const CardsGrid = () => {
  const { filteredList, playersList } = usePlayersContext()
  const list = filteredList ?? playersList

  if (filteredList.length === 0) return <p>No existen jugadores</p>

  return (
    <div className="cards-grid">
      {list.map((player, index) => (
        <div key={`card-item-${index}`} className="cards-grid__item">
          <Card key={`player-card-${index}`} {...player} />
        </div>
      ))}
    </div>
  )
}
