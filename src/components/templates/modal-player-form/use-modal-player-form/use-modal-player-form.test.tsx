import { renderHook, act } from '@testing-library/react-hooks'
import { PlayersProvider } from '../../../../context/players-context/players-context'
import { EMPTY_PLAYER } from '../../../../utils/constants/player'
import useModalPlayerForm from './use-modal-player-form'

describe('useModalPlayerForm Hook', () => {
  it('should execute updatePlayer function', () => {
    const mockUpdatePlayer = jest.fn()
    const { result } = renderHook(() => useModalPlayerForm(), {
      wrapper: ({ children }) => (
        <PlayersProvider initialValue={{ isEditing: true, updatePlayer: mockUpdatePlayer }}>
          {children}
        </PlayersProvider>
      )
    })
    act(() => {
      result.current.onSubmit(EMPTY_PLAYER)
    })
    expect(mockUpdatePlayer).toBeCalledTimes(1)
  })

  it('should execute addPlayer function', () => {
    const mockAddPlayer = jest.fn()
    const { result } = renderHook(() => useModalPlayerForm(), {
      wrapper: ({ children }) => (
        <PlayersProvider initialValue={{ isEditing: false, addPlayer: mockAddPlayer }}>
          {children}
        </PlayersProvider>
      )
    })
    act(() => {
      result.current.onSubmit(EMPTY_PLAYER)
    })
    expect(mockAddPlayer).toBeCalledTimes(1)
  })
})
