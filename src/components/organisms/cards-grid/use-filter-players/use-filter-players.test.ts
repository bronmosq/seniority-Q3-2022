import { renderHook } from '@testing-library/react-hooks'
import { Player } from '../../../../utils/interfaces/player'
import useFilterPlayers from './use-filter-players'

describe('useFilterPlayers Hook', () => {
  const players: Player[] = [
    {
      id: 1,
      firstName: 'Cristiano',
      lastName: 'Ronaldo',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/640px-Lionel_Messi_20180626.jpg',
      attack: 29,
      defense: 55,
      skills: 50,
      idAuthor: 54,
      idPosition: 3
    },
    {
      id: 2,
      firstName: 'Lionel',
      lastName: 'Messi',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/640px-Lionel_Messi_20180626.jpg',
      attack: 29,
      defense: 55,
      skills: 50,
      idAuthor: 54,
      idPosition: 3
    }
  ]

  it('should have all players when search term is empty', () => {
    const { result } = renderHook(() => useFilterPlayers(players, ''))
    expect(result.current.filteredPlayerList).toHaveLength(2)
  })

  it('should have 1 player when search term is correct', () => {
    const { result } = renderHook(() => useFilterPlayers(players, 'Lionel'))
    expect(result.current.filteredPlayerList).toHaveLength(1)
  })

  it('shouldn`t have players when search term is incorrect', () => {
    const { result } = renderHook(() => useFilterPlayers(players, 'Enner'))
    expect(result.current.filteredPlayerList).toHaveLength(0)
  })
})
