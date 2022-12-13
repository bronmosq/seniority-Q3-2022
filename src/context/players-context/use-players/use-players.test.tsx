import { renderHook, act } from '@testing-library/react-hooks'
import { DEFAULT_POSITIONS } from '../../../utils/constants/player'
import { Player } from '../../../utils/interfaces/player'
import { PlayersProvider, PlayersStateContext } from '../players-context'
import axios from 'axios'
import { fetchPlayers } from '../../../services/player/player.service'
import usePlayers from './use-players'

describe('usePlayersTest', () => {
  const mockAxios = axios as jest.Mocked<typeof axios>

  it('should toggleModal when calling handleChangeModal', () => {
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
    const { result } = renderHook(() => usePlayers(initialValues))
    expect(result.current.activeModal).toBe(false)
    act(() => {
      result.current.handleChangeModal()
    })
    expect(result.current.activeModal).toBe(true)
  })

  it('should have a undefined active player when handleChangeModal is executed and isEditing is', () => {
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
    const { result } = renderHook(() => usePlayers(initialValues))
    act(() => {
      result.current.handleChangeModal()
    })
    expect(result.current.activePlayer).toBeUndefined()
  })

  it('should isEditing to be false when handleChangeModal is executed and isEditing is true', () => {
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
      isEditing: true
    }

    const { result } = renderHook(() => usePlayers(initialValues))
    act(() => {
      result.current.handleChangeModal()
    })
    expect(result.current.isEditing).toBeFalsy()
  })

  it('should activeModal to be false when handleChangeModal is executed and activeModal is true', () => {
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
      activeModal: true,
      showLoadingOverlay: false,
      activePlayer: undefined,
      isEditing: true
    }

    const { result } = renderHook(() => usePlayers(initialValues))

    act(() => {
      result.current.handleChangeModal()
    })
    expect(result.current.activeModal).toBeFalsy()
  })

  it('should activeModal to be true when handleChangeModal is executed and activeModal is false', () => {
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
      isEditing: true
    }

    const { result } = renderHook(() => usePlayers(initialValues))

    act(() => {
      result.current.handleChangeModal()
    })
    expect(result.current.activeModal).toBeTruthy()
  })

  it('should search term change when handleSearchTerm is executed', () => {
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
      isEditing: true
    }

    const { result } = renderHook(() => usePlayers(initialValues))

    act(() => {
      result.current.handleSearchTerm('test')
    })

    expect(result.current.searchTerm).toBe('test')
  })

  it('should fetch players from api', () => {
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
      }
    ]
    jest.spyOn(axios, 'get').mockResolvedValue({ data: players })
    const { result } = renderHook(() => usePlayers())
    act(() => {
      result.current.getPlayers()
    })
    // console.log('players', result.current.playersList)
    // expect(result.current.playersList).toEqual(players)
  })

  it('should add active player', () => {
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
      isEditing: true
    }

    const { result } = renderHook(() => usePlayers(initialValues))
    act(() => {
      result.current.addActivePlayer(1)
    })
    // console.log(result.current.activePlayer)
  })
})
