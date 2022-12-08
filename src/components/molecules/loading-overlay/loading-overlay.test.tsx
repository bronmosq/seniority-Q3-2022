import { render } from '@testing-library/react'
import LoadingOverlay from './loading-overlay'

describe('Loading Overlay Component', () => {
  it('Should show loading overlay', () => {
    const { container } = render(<LoadingOverlay showOverlay={true} />, {
      container: document.body
    })
    const overlay = container.getElementsByClassName('loading-overlay')
    expect(overlay).toHaveLength(1)
  })

  it('Should hide loading overlay', () => {
    const { container } = render(<LoadingOverlay showOverlay={false} />, {
      container: document.body
    })
    const overlay = container.getElementsByClassName('loading-overlay--hidden')
    expect(overlay).toHaveLength(1)
  })
})
