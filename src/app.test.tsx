import { render, screen } from '@testing-library/react'
import App from './app'

describe('App component', () => {
  it('Should render a title', () => {
    render(<App />)
    const title = screen.getByText('MI EQUIPO')
    expect(title).toBeInTheDocument()
  })
})
