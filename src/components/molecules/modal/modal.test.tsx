import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Modal from './modal'

describe('Modal Component', () => {
  const handleChangeMock = jest.fn()
  it('should show the modal', () => {
    const { container } = render(
      <Modal title={'Test'} showModal={true} handleChangeModal={handleChangeMock}>
        <h1>children test</h1>
      </Modal>,
      {
        container: document.body
      }
    )
    const modal = container.getElementsByClassName('modal')
    expect(modal).toHaveLength(1)
  })

  it('should hide the modal', () => {
    const { container } = render(
      <Modal title={'Test'} showModal={false} handleChangeModal={handleChangeMock}>
        <h1>children test</h1>
      </Modal>,
      {
        container: document.body
      }
    )
    const modal = container.getElementsByClassName('modal--hidden')
    expect(modal).toHaveLength(1)
  })

  it('should execute handle change function when close icon is clicked', () => {
    render(
      <Modal title={'Test'} showModal={true} handleChangeModal={handleChangeMock}>
        <h1>children test</h1>
      </Modal>,
      {
        container: document.body
      }
    )
    const icon = screen.getByRole('img')
    userEvent.click(icon)
    expect(handleChangeMock.mock.calls).toHaveLength(1)
  })

  it('should execute handle change function when outside of the modal is clicked', () => {
    const { container } = render(
      <Modal title={'Test'} showModal={true} handleChangeModal={handleChangeMock}>
        <h1>children test</h1>
      </Modal>,
      {
        container: document.body
      }
    )
    const modal = container.getElementsByClassName('modal__outside')[0]
    userEvent.click(modal)
    expect(handleChangeMock.mock.calls).toHaveLength(1)
  })

  it('shouldn`t execute handle change function when inside of the modal is clicked', () => {
    const { container } = render(
      <Modal title={'Test'} showModal={true} handleChangeModal={handleChangeMock}>
        <h1>children test</h1>
      </Modal>,
      {
        container: document.body
      }
    )
    const modalBody = container.getElementsByClassName('modal__body')[0]
    userEvent.click(modalBody)
    expect(handleChangeMock.mock.calls).toHaveLength(0)
  })

  it('should display a text inside of the modal body', () => {
    render(
      <Modal
        title={'Test'}
        children={<h1>children test</h1>}
        showModal={true}
        handleChangeModal={handleChangeMock}
      />,
      {
        container: document.body
      }
    )
    const text = screen.getByText(/children test/i)
    expect(text).toBeInTheDocument()
  })
})
