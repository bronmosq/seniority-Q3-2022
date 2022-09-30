import { render, screen } from '@testing-library/react'
import { Input } from './input'
import userEvent from '@testing-library/user-event'

describe('Input', () => {
  it('should display placeholder text', () => {
    render(<Input placeholder="test" label="test" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('placeholder', 'test')
  })
  it('should display label text', () => {
    render(<Input label="label" />)
    const input = screen.getByText('label')
    expect(input).toHaveTextContent('label')
  })
  it('should have a value', () => {
    render(<Input value="test" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('test')
  })
  it('should have an error color', () => {
    const { container } = render(<Input variant="error" />)
    const inputWrapper = container.getElementsByClassName('input__field-wrapper--error').length
    expect(inputWrapper).toBe(1)
  })

  it('should be execute onChange', () => {
    const mockOnChange = jest.fn()
    render(<Input onChange={mockOnChange} />)
    const input = screen.getByRole('textbox')
    userEvent.type(input, 'test')
    expect(mockOnChange).toBeCalledWith('test', '')
  })
})
