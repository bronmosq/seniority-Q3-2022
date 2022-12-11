import { render, screen } from '@testing-library/react'
import { debug } from 'console'
import Spinner from './spinner'

describe('Spinner Component', () => {
  it('Shoul render a spinner', () => {
    const { container } = render(<Spinner />)
    const spinner = container.getElementsByClassName('spinner')
    expect(spinner).toHaveLength(1)
  })
})
