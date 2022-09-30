import { render, screen } from '@testing-library/react'
import { Button } from './button'
import userEvent from '@testing-library/user-event'

describe('Button', () => {
  it('should display inner text', async () => {
    render(<Button>Test Text</Button>)
    const buttonFound = await screen.findByText('Test Text')
    expect(buttonFound).toHaveTextContent('Test Text')
  })

  it('should have a small class', async () => {
    render(<Button>Test Text</Button>)
    const buttonFound = await screen.findByText('Test Text')

    expect(buttonFound).toHaveTextContent('Test Text')
  })

  it('should trigger the click', async () => {
    const onClick = jest.fn()
    render(<Button onClick={() => onClick()}>Test Text</Button>)
    const buttonFound = await screen.findByText('Test Text')
    expect(buttonFound).toHaveTextContent('Test Text')
    userEvent.click(buttonFound)
    expect(onClick.mock.calls.length).toEqual(1)
  })
})
