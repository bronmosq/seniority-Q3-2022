import { FC } from 'react'
import './modal.scss'
import CloseIcon from '../../../assets/close-icon.svg'
import { createPortal } from 'react-dom'

export interface ModalProps {
  title: string
  showModal: boolean
  children: React.ReactNode
  handleChangeModal: () => void
}

const Modal: FC<ModalProps> = ({ title, showModal, children, handleChangeModal }) => {
  return createPortal(
    <div className={`modal ${!showModal ? 'modal--hidden' : ''}`}>
      <div className="modal__outside" onClick={handleChangeModal}></div>
      <div className="modal__body">
        <div className="modal__top-content">
          <h2>{title}</h2>
          <img onClick={handleChangeModal} className="modal__close-icon" src={CloseIcon} />
        </div>
        {showModal && <div className="modal__content">{children}</div>}
      </div>
    </div>,
    document.body
  )
}

export default Modal
