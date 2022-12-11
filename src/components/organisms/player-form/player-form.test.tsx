import { render, screen } from '@testing-library/react'
import { DEFAULT_POSITIONS, DEFAULT_IMAGE } from '../../../utils/constants/player'
import PlayerForm from './player-form'

describe('Player Form Test', () => {
  it('should have agregar text in button when user edit mode is dissabled', () => {
    render(<PlayerForm onSubmit={() => {}} positions={DEFAULT_POSITIONS} isEditng={false} />)
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent(/agregar/i)
  })

  it('should have modificar text in button when user edit mode is enabled', () => {
    render(<PlayerForm onSubmit={() => {}} positions={DEFAULT_POSITIONS} isEditng={true} />)
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent(/modificar/i)
  })

  it('should render 3 inputs', () => {
    render(<PlayerForm onSubmit={() => {}} positions={DEFAULT_POSITIONS} isEditng={false} />)
    const inputs = screen.getAllByRole('textbox')
    expect(inputs).toHaveLength(3)
  })

  it('should render 3 sliders', () => {
    render(<PlayerForm onSubmit={() => {}} positions={DEFAULT_POSITIONS} isEditng={false} />)
    const sliders = screen.getAllByRole('slider')
    expect(sliders).toHaveLength(3)
  })

  it('should render 1 select input', () => {
    render(<PlayerForm onSubmit={() => {}} positions={DEFAULT_POSITIONS} isEditng={false} />)
    const select = screen.getByText(/portero/i)
    expect(select).toBeInTheDocument()
  })

  it('should display 3 labels when inputs fields are empty ', () => {
    const { container } = render(
      <PlayerForm onSubmit={() => {}} positions={DEFAULT_POSITIONS} isEditng={false} />
    )
    const errors = container.getElementsByClassName('input__error-message')
    expect(errors).toHaveLength(3)
  })

  it('should display default image when image input is empty', () => {
    render(<PlayerForm onSubmit={() => {}} positions={DEFAULT_POSITIONS} isEditng={false} />)
    const img: HTMLImageElement = screen.getByRole('img')
    expect(img.src).toBe(DEFAULT_IMAGE)
  })
})
