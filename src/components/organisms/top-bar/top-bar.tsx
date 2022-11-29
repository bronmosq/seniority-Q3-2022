import { useState } from 'react'
import { Button } from '../../atoms/button/button'
import { Input } from '../../atoms/input/input'
import Modal from '../modal/modal'
import './top-bar.scss'
import { InfoText } from '../../../utils/enums/info-text'
import RegisterForm from '../../molecules/register-form/register-form'
import { usePlayersContext } from '../../../context/players-context/players-context'

const TopBar = () => {
  const { activeModal, handleChangeModal } = usePlayersContext()

  return (
    <>
      <div className="top-bar">
        <Input placeholder="Buscar por nombre" name="search" />
        <Button onClick={handleChangeModal}>Agregar</Button>
      </div>
      <Modal
        title={InfoText.REGISTER_TITLE}
        showModal={activeModal}
        handleShowModal={() => handleChangeModal()}
      >
        <RegisterForm />
      </Modal>
    </>
  )
}

export default TopBar
