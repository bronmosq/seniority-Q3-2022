import { Card } from '../../molecules/card/card'
import './cards-grid.scss'
import { usePlayersContext } from '../../../context/players-context/players-context'

export const CardsGrid = () => {
  const { playersList } = usePlayersContext()

  const imageUrl =
    'https://phantom-marca.unidadeditorial.es/500be06c4056e00a9f691d6c5800f216/resize/1320/f/jpg/assets/multimedia/imagenes/2022/09/30/16644896975046.jpg'
  // const players = [
  //   {
  //     firstName: 'Cristiano',
  //     lastName: 'Ronaldo',
  //     image: imageUrl,
  //     attack: 99,
  //     defense: 99,
  //     skills: 99
  //   },
  //   {
  //     firstName: 'Cristiano',
  //     lastName: 'Ronaldo',
  //     image: imageUrl,
  //     attack: 99,
  //     defense: 99,
  //     skills: 99
  //   },
  //   {
  //     firstName: 'Cristiano',
  //     lastName: 'Ronaldo',
  //     image: imageUrl,
  //     attack: 99,
  //     defense: 99,
  //     skills: 99
  //   },
  //   {
  //     firstName: 'Cristiano',
  //     lastName: 'Ronaldo',
  //     image: imageUrl,
  //     attack: 99,
  //     defense: 99,
  //     skills: 99
  //   }
  // ]

  return (
    <>
      <div className="cards-grid">
        {playersList.map((player, index) => (
          <Card key={`player-card-${index}`} {...player} />
        ))}
      </div>
    </>
  )
}
