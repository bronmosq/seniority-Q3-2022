import { FC } from 'react'
import { Button } from '../../atoms/button/button'
import { Input } from '../../atoms/input/input'
import './top-bar.scss'
// import { usePlayersContext } from '../../../context/players-context/players-context'
// import useSearchPlayers from '../../../hooks/use-search-player/use-search-player'

interface TopBarProps {
  handleChangeModal: () => void
}

const TopBar: FC<TopBarProps> = (props) => {
  // const { handleChangeModal, playersList } = usePlayersContext()
  // const { filterPlayers } = useSearchPlayers()
  return (
    <>
      <div className="top-bar">
        <Input
          // disabled={playersList.length === 0}
          placeholder="Buscar por nombre"
          onChange={() => {}}
        />
        <Button onClick={props.handleChangeModal}>Agregar</Button>
      </div>
    </>
  )
}

export default TopBar
