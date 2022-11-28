import { FC } from 'react'
import './modal.scss'
import CloseIcon from '../../../assets/close-icon.svg'

export interface ModalProps {
  title: string
  showModal: boolean
  handleShowModal: () => void
}

const Modal: FC<ModalProps> = ({ title = '', showModal, handleShowModal }) => {
  return (
    <div className={`modal ${!showModal ? 'modal--hidden' : ''}`}>
      <div className="modal__outside" onClick={handleShowModal}></div>
      <div className="modal__body">
        <div className="modal__top-content">
          <h2>{title}</h2>
          <img onClick={handleShowModal} className="modal__close-icon" src={CloseIcon} />
        </div>
      </div>
    </div>
  )
}

export default Modal
