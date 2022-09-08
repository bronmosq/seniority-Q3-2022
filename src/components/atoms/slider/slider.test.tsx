import { fireEvent, render, screen } from '@testing-library/react'
import Slider from './slider'

describe('Slider test', () => {
  it('should render a slider with a dafultValue', async () => {
    render(<Slider />)

    const element = screen.getByRole('slider')
    expect(element).toBeInTheDocument()

    const value = screen.getByText('55')
    expect(value).toBeInTheDocument()
  })

  it('should render custom dafultValue', async () => {
    render(<Slider defaultValue={22} />)

    const value = screen.getByText('22')
    expect(value).toBeInTheDocument()
  })

  it('should render a label', async () => {
    render(<Slider label="my-label" />)

    const element = screen.getByLabelText('my-label')

    expect(element).toBeInTheDocument()
  })

  it('should change value', async () => {
    render(<Slider />)
    const element = screen.getByRole('slider')

    fireEvent.change(element, { target: { value: 5 } })

    const value = screen.getByText('5')
    expect(value).toBeInTheDocument()
  })

  it('should execute external function', async () => {
    const mockOnChange = jest.fn()

    render(<Slider onChange={mockOnChange} />)
    const element = screen.getByRole('slider')

    fireEvent.change(element, { target: { value: 5 } })

    expect(mockOnChange).toBeCalled()
  })
})
