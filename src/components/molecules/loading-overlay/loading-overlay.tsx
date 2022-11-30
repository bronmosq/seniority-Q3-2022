import { FC } from 'react'
import { createPortal } from 'react-dom'
import Spinner from '../../atoms/spinner/spinner'
import './loading-overlay.scss'

export interface LoadingOverlayProps {
  showOverlay: boolean
}

const LoadingOverlay: FC<LoadingOverlayProps> = ({ showOverlay }) => {
  return createPortal(
    <div className={`loading-overlay${!showOverlay ? ' loading-overlay--hidden' : ''}`}>
      <Spinner />
    </div>,
    document.body
  )
}

export default LoadingOverlay
