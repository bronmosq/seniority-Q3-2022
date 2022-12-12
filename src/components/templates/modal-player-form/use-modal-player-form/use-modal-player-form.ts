import { usePlayersContext } from '../../../../context/players-context/players-context'
import { Player } from '../../../../utils/interfaces/player'

const useModalPlayerForm = () => {
  const {
    isEditing,
    activeModal,
    positions,
    addPlayer,
    updatePlayer,
    activePlayer,
    handleChangeModal
  } = usePlayersContext()

  const onSubmit = (player: Player) => {
    if (isEditing) {
      updatePlayer!(player)
      return
    }
    addPlayer!(player)
  }

  return {
    isEditing,
    activeModal,
    positions,
    onSubmit,
    activePlayer,
    handleChangeModal
  }
}

export default useModalPlayerForm
