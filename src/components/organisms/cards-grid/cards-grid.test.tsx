import { render, screen } from '@testing-library/react'
import { DEFAULT_IMAGE, EMPTY_PLAYER } from '../../../utils/constants/player'
import { Player } from '../../../utils/interfaces/player'
import CardsGrid from './cards-grid'

describe('Cards Grid Component', () => {
  const playersList: Player[] = [
    {
      id: 0,
      firstName: 'Cristiano',
      lastName: 'Ronaldo',
      image: DEFAULT_IMAGE,
      attack: 55,
      defense: 55,
      skills: 50,
      idAuthor: 1,
      idPosition: 1
    },
    {
      id: 1,
      firstName: 'Cristiano',
      lastName: 'Ronaldo',
      image: DEFAULT_IMAGE,
      attack: 55,
      defense: 55,
      skills: 50,
      idAuthor: 1,
      idPosition: 1
    }
  ]
  it('should display the empty players message', () => {
    render(
      <CardsGrid
        searchTerm=""
        playersList={[]}
        deletePlayer={() => {}}
        setActivePlayer={() => {}}
      />
    )
    const message = screen.getByText(/no existen jugadores registrados/i)
    expect(message).toBeInTheDocument()
  })

  it('should display a list of two players', () => {
    render(
      <CardsGrid
        searchTerm=""
        playersList={playersList}
        deletePlayer={() => {}}
        setActivePlayer={() => {}}
      />
    )
    const cards = screen.getAllByAltText(/cristiano ronaldo/i)
    expect(cards).toHaveLength(2)
  })
})
