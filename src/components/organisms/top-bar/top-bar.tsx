import { FC } from 'react'
import { usePlayersContext } from '../../../context/players-context/players-context'
import { Player } from '../../../utils/interfaces/player'
import { Button } from '../../atoms/button/button'
import { Input } from '../../atoms/input/input'
import './top-bar.scss'
// import { usePlayersContext } from '../../../context/players-context/players-context'
// import useSearchPlayers from '../../../hooks/use-search-player/use-search-player'

interface TopBarProps {
  handleChangeModal: () => void
  playersList: Player[]
  filterPlayers: (term: string) => void
}

const TopBar: FC<TopBarProps> = (props) => {
  return (
    <>
      <div className="top-bar">
        <Input
          disabled={props.playersList.length === 0}
          placeholder="Buscar por nombre"
          onChange={props.filterPlayers}
        />
        <Button onClick={props.handleChangeModal}>Agregar</Button>
      </div>
    </>
  )
}

export default TopBar
