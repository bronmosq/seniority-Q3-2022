import { render, screen } from '@testing-library/react'
import { PlayersProvider } from '../../../context/players-context/players-context'
import Deck from './deck'

describe('Deck Test', () => {
  it('should render a title', () => {
    render(
      <PlayersProvider>
        <Deck />
      </PlayersProvider>
    )
    const title = screen.getByText(/mi equipo/i)
    expect(title).toBeInTheDocument()
  })
})
