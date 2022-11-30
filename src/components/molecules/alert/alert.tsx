import { FC } from 'react'
import './alert.scss'
import CloseIcon from '../../../assets/close-icon.svg'
import { usePlayersContext } from '../../../context/players-context/players-context'
import { createPortal } from 'react-dom'

interface AlertProps {
  message: string
  showAlert: boolean
}

const Alert: FC<AlertProps> = ({ message, showAlert }) => {
  const { handleCloseAlert } = usePlayersContext()
  return createPortal(
    <div className={`alert${!showAlert ? ' alert--hidden' : ''}`}>
      <span>{message}</span>
      <img
        role="presentation"
        className="alert__close-icon"
        src={CloseIcon}
        onClick={handleCloseAlert}
      />
    </div>,
    document.body
  )
}

export default Alert
