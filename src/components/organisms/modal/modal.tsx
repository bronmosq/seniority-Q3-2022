import { FC } from 'react'
import './modal.scss'
import CloseIcon from '../../../assets/close-icon.svg'
import { createPortal } from 'react-dom'

export interface ModalProps {
  title: string
  showModal: boolean
  handleShowModal: () => void
  children: React.ReactNode
}

const Modal: FC<ModalProps> = ({ title = '', showModal, handleShowModal, children }) => {
  if (!showModal) return null
  return createPortal(
    <div className="modal">
      <div className="modal__outside" onClick={handleShowModal}></div>
      <div className="modal__body">
        <div className="modal__top-content">
          <h2>{title}</h2>
          <img onClick={handleShowModal} className="modal__close-icon" src={CloseIcon} />
        </div>
        <div className="modal__content">{children}</div>
      </div>
    </div>,
    document.body
  )
}

export default Modal
