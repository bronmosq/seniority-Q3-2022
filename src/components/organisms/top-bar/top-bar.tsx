import { useState } from 'react'
import { Button } from '../../atoms/button/button'
import { Input } from '../../atoms/input/input'
import Modal from '../modal/modal'
import './top-bar.scss'
import { InfoText } from '../../../utils/enums/info-text'
import RegisterForm from '../../molecules/register-form/register-form'

const TopBar = () => {
  const [showModal, setShowModal] = useState(false)
  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <div className="top-bar">
        <Input placeholder="Buscar por nombre" name="search" />
        <Button onClick={handleShowModal}>Agregar</Button>
      </div>
      <Modal
        title={InfoText.REGISTER_TITLE}
        showModal={showModal}
        handleShowModal={handleShowModal}
      >
        <RegisterForm />
      </Modal>
    </>
  )
}

export default TopBar
