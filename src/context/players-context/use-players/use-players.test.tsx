import { renderHook, act } from '@testing-library/react-hooks'
import { DEFAULT_POSITIONS } from '../../../utils/constants/player'
import { Player } from '../../../utils/interfaces/player'
import { PlayersStateContext } from '../players-context'
import axios from 'axios'
import { fetchPlayers } from '../../../services/player/player.service'
import usePlayers from './use-players'

describe('usePlayersTest', () => {
  const mockAxios = axios as jest.Mocked<typeof axios>

  const initialValues: Partial<PlayersStateContext> = {
    playersList: [
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
      }
    ],
    searchTerm: '',
    positions: DEFAULT_POSITIONS,
    activeModal: false,
    showLoadingOverlay: false,
    activePlayer: undefined,
    isEditing: false
  }

  it('should toggleModal when calling handleChangeModal', () => {
    const { result } = renderHook(() => usePlayers(initialValues))
    expect(result.current.activeModal).toBe(false)
    act(() => {
      result.current.handleChangeModal()
    })
    expect(result.current.activeModal).toBe(true)
  })
})
