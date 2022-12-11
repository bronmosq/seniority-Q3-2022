import Modal from '../../molecules/modal/modal'
import { InfoText } from '../../../utils/enums/info-text'
import PlayerForm from '../../organisms/player-form/player-form'
import useModalPlayerForm from './use-modal-player-form/use-modal-player-form'

const ModalPlayerForm = () => {
  const { isEditing, activeModal, positions, onSubmit, activePlayer, handleChangeModal } =
    useModalPlayerForm()
  return (
    <Modal
      handleChangeModal={handleChangeModal!}
      title={isEditing ? InfoText.EDIT_PLAYER_MODAL_TITLE : InfoText.ADD_PLAYER_MODAL_TITLE}
      showModal={activeModal}
    >
      <PlayerForm
        isEditng={isEditing}
        positions={positions}
        onSubmit={onSubmit}
        initialValues={activePlayer}
      />
    </Modal>
  )
}

export default ModalPlayerForm
