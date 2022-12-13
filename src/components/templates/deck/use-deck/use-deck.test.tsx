import { renderHook, act } from '@testing-library/react-hooks'
import { PlayersProvider } from '../../../../context/players-context/players-context'
import { EMPTY_PLAYER } from '../../../../utils/constants/player'
import useDeck from './use-deck'

describe('useDeck Hock', () => {
  it('should execute fetchData function', () => {
    const mockGetPlayers = jest.fn()
    const mockGetPositions = jest.fn()
    const { result } = renderHook(() => useDeck(), {
      wrapper: ({ children }) => (
        <PlayersProvider
          initialValue={{
            isEditing: true,
            getPlayers: mockGetPlayers,
            getPositions: mockGetPositions
          }}
        >
          {children}
        </PlayersProvider>
      )
    })
    act(() => {
      result.current.fetchData()
    })
    expect(mockGetPlayers).toBeCalledTimes(2)
    expect(mockGetPositions).toBeCalledTimes(2)
  })
})
