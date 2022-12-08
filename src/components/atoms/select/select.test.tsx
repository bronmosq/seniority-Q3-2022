import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Select from './select'

describe('Select tests', () => {
  it('should render select with custom options', () => {
    render(
      <Select
        selectedValue={0}
        options={[
          { id: 1, description: 'test 1' },
          { id: 2, description: 'test 2' },
          { id: 3, description: 'test 3' },
          { id: 4, description: 'test 4' }
        ]}
      />
    )
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByText('test 1')).toBeInTheDocument()
  })

  it('should call onChange', () => {
    const onChange = jest.fn()
    render(
      <Select
        options={[
          { id: 1, description: 'test 1' },
          { id: 2, description: 'test 2' },
          { id: 3, description: 'test 3' },
          { id: 4, description: 'test 4' }
        ]}
        selectedValue={0}
        onChange={onChange}
      />
    )
    const select = screen.getByRole('combobox')
    userEvent.selectOptions(select, 'test 1')
    expect(onChange).toHaveBeenCalled()
    expect(onChange).toHaveBeenCalledWith('1', 'idPosition')
  })

  it('should not call onChange', () => {
    const onChange = jest.fn()
    render(
      <Select
        options={[
          { id: 1, description: 'test 1' },
          { id: 2, description: 'test 2' },
          { id: 3, description: 'test 3' },
          { id: 4, description: 'test 4' }
        ]}
        selectedValue={0}
      />
    )
    const select = screen.getByRole('combobox')
    userEvent.selectOptions(select, 'test 1')
    expect(onChange).not.toHaveBeenCalled()
  })
})
