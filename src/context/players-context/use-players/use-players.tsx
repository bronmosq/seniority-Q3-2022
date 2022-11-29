import { useState } from 'react'
import { Player } from '../../../utils/interfaces/player'
import { PlayersStateContext } from '../players-context'

const usePlayers = (initalValue?: Partial<PlayersStateContext>) => {
  const [activeModal, setActiveModal] = useState(initalValue?.activeModal ?? false)
  const [playersList, setPlayersList] = useState<Player[]>(initalValue?.playersList || [])

  const handleChangeModal = () => {
    setActiveModal(!activeModal)
    // setPlayersList([
    //   ...playersList,
    //   {
    //     id: 2,
    //     firstName: 'as',
    //     lastName: '2',
    //     image: '/',
    //     attack: 0,
    //     defense: 0,
    //     skills: 0,
    //     idAuthor: 54,
    //     idPosition: 1
    //   }
    // ])
  }

  return {
    playersList,
    activeModal,
    handleChangeModal
  }
}

export default usePlayers
