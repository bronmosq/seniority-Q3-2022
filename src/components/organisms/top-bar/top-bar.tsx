import { Button } from '../../atoms/button/button'
import { Input } from '../../atoms/input/input'
import './top-bar.scss'
import { usePlayersContext } from '../../../context/players-context/players-context'
import useSearchPlayers from '../../../hooks/use-search-player/use-search-player'

const TopBar = () => {
  const { handleChangeModal, playersList } = usePlayersContext()
  const { filterPlayers } = useSearchPlayers()
  return (
    <>
      <div className="top-bar">
        <Input
          disabled={playersList.length === 0}
          placeholder="Buscar por nombre"
          onChange={filterPlayers}
        />
        <Button onClick={handleChangeModal}>Agregar</Button>
      </div>
    </>
  )
}

export default TopBar
