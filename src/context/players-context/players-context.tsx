import { createContext, FC, useContext } from 'react'
import { DEFAULT_IMAGE } from '../../utils/constants/player'
import { Player, PlayerPosition } from '../../utils/interfaces/player'
import usePlayers from './use-players/use-players'
import { addPlayer } from '../../services/player.service'

export interface PlayersStateContext {
  playersList: Player[]
  positions: PlayerPosition[]
  activeModal: boolean
  activeAlert: boolean
  alertMessage: string
  showLoadingOverlay: boolean
  activePlayer: Player
  handleChangeModal?: () => void
  handleCloseAlert?: () => void
  deletePlayer: (id: number) => void
  addPlayer: (player: Player) => void
  updatePlayer: (id: number) => void
  addActivePlayer: (player: Player) => void
}

export interface PlayersProviderProps {
  children: React.ReactNode
  initialValue?: PlayersStateContext
}

export const PlayersContext = createContext<PlayersStateContext>(
  {} as unknown as PlayersStateContext
)

export const usePlayersContext = () => useContext(PlayersContext)

export const PlayersProvider: FC<PlayersProviderProps> = ({ children }) => {
  const values = usePlayers()
  return <PlayersContext.Provider value={values}>{children}</PlayersContext.Provider>
}
