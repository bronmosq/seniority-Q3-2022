import { fireEvent, render, screen } from '@testing-library/react'
import Slider from './slider'

describe('Slider test', () => {
  it('should render a slider', async () => {
    render(<Slider />)

    const element = screen.getByRole('slider')

    expect(element).toBeInTheDocument()
  })

  it('should execute external function', async () => {
    const mockOnChange = jest.fn()

    render(<Slider onChange={mockOnChange} />)
    const element = screen.getByRole('slider')

    fireEvent.change(element, { target: { value: 5 } })

    expect(mockOnChange).toBeCalled()
  })
})
