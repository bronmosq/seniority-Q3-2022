import { renderHook, act } from '@testing-library/react-hooks'
import { DEFAULT_POSITIONS, EMPTY_PLAYER } from '../../../../utils/constants/player'
import { Player } from '../../../../utils/interfaces/player'
import { PlayerFormProps } from '../player-form'
import usePlayerForm from './use-player-form'

describe('usePlayerForm Hook', () => {
  const onSubmitMock = jest.fn()
  const addPlayerProps: PlayerFormProps = {
    onSubmit: () => {},
    positions: DEFAULT_POSITIONS,
    isEditng: false
  }

  const editPlayerProps: PlayerFormProps = {
    onSubmit: () => {},
    positions: DEFAULT_POSITIONS,
    isEditng: false,
    initialValues: {
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
  }

  it('should have empty player', () => {
    const { result } = renderHook(() => usePlayerForm(addPlayerProps))
    expect(result.current.player).toBe(EMPTY_PLAYER)
  })

  it('should have an active player', () => {
    const { result } = renderHook(() => usePlayerForm(editPlayerProps))
    expect(result.current.player).toStrictEqual({
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
    })
  })

  it('should enable button when user is editing a player', () => {
    const { result } = renderHook(() => usePlayerForm(editPlayerProps))
    const buttonEnabled = result.current.isButtonEnabled()
    expect(buttonEnabled).toBeTruthy()
  })

  it('should not enable button when user is adding a player', () => {
    const { result } = renderHook(() => usePlayerForm(addPlayerProps))
    const buttonEnabled = result.current.isButtonEnabled()
    expect(buttonEnabled).toBeFalsy()
  })

  it('should enable button when all inputs are valid', async () => {
    const { result } = renderHook(() => usePlayerForm(addPlayerProps))
    act(() => {
      result.current.handleChangeInput('C', 'firstName')
    })

    act(() => {
      result.current.handleChangeInput('R', 'lastName')
    })

    act(() => {
      result.current.handleChangeInput(1, 'idPosition')
    })

    act(() => {
      result.current.handleChangeInput('test', 'image')
    })

    const buttonEnabled = result.current.isButtonEnabled()
    expect(buttonEnabled).toBeTruthy()
  })

  it('shouldn`t enable button when almost one input is invalid', () => {
    const { result } = renderHook(() => usePlayerForm(addPlayerProps))
    act(() => {
      result.current.handleChangeInput('C', 'firstName')
    })

    act(() => {
      result.current.handleChangeInput('R', 'lastName')
    })

    act(() => {
      result.current.handleChangeInput(1, 'idPosition')
    })

    const buttonEnabled = result.current.isButtonEnabled()
    expect(buttonEnabled).toBeFalsy()
  })

  it('should call onSubmit function', () => {
    const onSubmitMock = jest.fn()
    const addPlayerProps: PlayerFormProps = {
      onSubmit: onSubmitMock,
      positions: DEFAULT_POSITIONS,
      isEditng: false
    }
    const { result } = renderHook(() => usePlayerForm(addPlayerProps))
    act(() => {
      result.current.managePlayer()
    })
    expect(onSubmitMock).toBeCalledTimes(1)
  })
})
