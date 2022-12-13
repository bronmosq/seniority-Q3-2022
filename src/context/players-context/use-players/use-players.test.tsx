import { renderHook, act } from '@testing-library/react-hooks'
import { DEFAULT_POSITIONS } from '../../../utils/constants/player'
import { Player } from '../../../utils/interfaces/player'
import { PlayersStateContext } from '../players-context'
import axios from 'axios'
import usePlayers from './use-players'

describe('usePlayersTest', () => {
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

  it('should fetch players', async () => {
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
    const mockGet = jest.spyOn(axios, 'get').mockResolvedValue({ data: players })
    const { result, waitForNextUpdate } = renderHook(() => usePlayers())
    act(() => {
      result.current.getPlayers()
    })
    await waitForNextUpdate()
    expect(result.current.playersList).toEqual(players)
    expect(result.current.showLoadingOverlay).toBeFalsy()
    expect(mockGet).toBeCalled()
  })

  it('should fetch positions', async () => {
    const mockGet = jest.spyOn(axios, 'get').mockResolvedValue({ data: DEFAULT_POSITIONS })
    const { result, waitForNextUpdate } = renderHook(() => usePlayers())
    act(() => {
      result.current.getPositions()
    })
    await waitForNextUpdate()
    expect(result.current.positions).toEqual(DEFAULT_POSITIONS)
    expect(mockGet).toBeCalled()
  })

  it('should add player when addPlayer function is called', async () => {
    const player: Player = {
      id: 2,
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
    const mockPost = jest.spyOn(axios, 'post').mockResolvedValue({ data: player })
    const mockGet = jest.spyOn(axios, 'get').mockResolvedValue({ data: [player] })

    const { result, waitForNextUpdate } = renderHook(() => usePlayers())
    act(() => {
      result.current.addPlayer(player)
    })
    await waitForNextUpdate()
    expect(result.current.playersList).toHaveLength(1)
    expect(result.current.searchTerm).toBe('')
    expect(result.current.showLoadingOverlay).toBeFalsy()
    expect(mockPost).toBeCalled()
    expect(mockGet).toBeCalled()
  })

  it('should delete player when deletePlayer function is called', async () => {
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

    const mockDelete = jest.spyOn(axios, 'delete').mockResolvedValue({ data: true })
    const mockGet = jest.spyOn(axios, 'get').mockResolvedValue({ data: [] })

    const { result, waitForNextUpdate } = renderHook(() => usePlayers(initialValues))
    act(() => {
      result.current.deletePlayer(1)
    })
    await waitForNextUpdate()
    expect(result.current.playersList).toHaveLength(0)
    expect(result.current.searchTerm).toBe('')
    expect(result.current.showLoadingOverlay).toBeFalsy()
    expect(mockDelete).toBeCalled()
    expect(mockGet).toBeCalled()
  })

  it('should update player when updatePlayer function is called', async () => {
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

    const newPlayer: Player = {
      id: 1,
      firstName: 'Juan',
      lastName: 'Ronaldo',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/640px-Lionel_Messi_20180626.jpg',
      attack: 29,
      defense: 55,
      skills: 50,
      idAuthor: 54,
      idPosition: 3
    }

    const mockPatch = jest.spyOn(axios, 'patch').mockResolvedValue({ data: newPlayer })
    const mockGet = jest.spyOn(axios, 'get').mockResolvedValue({
      data: [
        {
          id: 1,
          firstName: 'Juan',
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
    })

    const { result, waitForNextUpdate } = renderHook(() => usePlayers(initialValues))
    act(() => {
      result.current.updatePlayer(newPlayer)
    })
    await waitForNextUpdate()
    expect(result.current.playersList).toHaveLength(1)
    expect(result.current.searchTerm).toBe('')
    expect(result.current.showLoadingOverlay).toBeFalsy()
    expect(result.current.activeModal).toBeFalsy()
    expect(mockPatch).toBeCalled()
    expect(mockGet).toBeCalled()
  })

  it('should add active player', async () => {
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
    expect(result.current.activeModal).toBeTruthy()
    expect(result.current.activePlayer).toEqual(initialValues.playersList![0])
  })
})
