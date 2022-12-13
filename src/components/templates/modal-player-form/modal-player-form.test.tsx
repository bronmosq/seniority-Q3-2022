import { render, screen } from '@testing-library/react'
import { PlayersProvider } from '../../../context/players-context/players-context'
import { InfoText } from '../../../utils/enums/info-text'
import ModalPlayerForm from './modal-player-form'

describe('Modal Player Form Component', () => {
  it('should display edit player title', () => {
    render(
      <PlayersProvider initialValue={{ isEditing: true }}>
        <ModalPlayerForm />
      </PlayersProvider>
    )
    const title = screen.getByText(InfoText.EDIT_PLAYER_MODAL_TITLE)
    expect(title).toBeInTheDocument()
  })

  it('should display add player title', () => {
    render(
      <PlayersProvider initialValue={{ isEditing: false }}>
        <ModalPlayerForm />
      </PlayersProvider>
    )
    const title = screen.getByText(InfoText.ADD_PLAYER_MODAL_TITLE)
    expect(title).toBeInTheDocument()
  })
})
