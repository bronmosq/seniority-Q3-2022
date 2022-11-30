import { FC } from 'react'
import './modal.scss'
import CloseIcon from '../../../assets/close-icon.svg'
import { createPortal } from 'react-dom'
import { usePlayersContext } from '../../../context/players-context/players-context'

export interface ModalProps {
  title: string
  showModal: boolean
  children: React.ReactNode
}

const Modal: FC<ModalProps> = ({ title = '', showModal, children }) => {
  const { handleChangeModal } = usePlayersContext()

  if (!showModal) return null
  return createPortal(
    <div className="modal">
      <div className="modal__outside" onClick={handleChangeModal}></div>
      <div className="modal__body">
        <div className="modal__top-content">
          <h2>{title}</h2>
          <img onClick={handleChangeModal} className="modal__close-icon" src={CloseIcon} />
        </div>
        <div className="modal__content">{children}</div>
      </div>
    </div>,
    document.body
  )
}

export default Modal
