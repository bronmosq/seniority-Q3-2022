import { createContext, FC, useContext } from 'react'
import { Player, PlayerPosition } from '../../utils/interfaces/player'
import usePlayers from './use-players/use-players'

export interface PlayersStateContext {
  playersList: Player[]
  searchTerm: string
  positions: PlayerPosition[]
  activeModal: boolean
  showLoadingOverlay: boolean
  activePlayer: Player | undefined
  isEditing: boolean
  handleChangeModal: () => void
  deletePlayer: (id: number) => void
  addPlayer: (player: Player) => void
  updatePlayer: (player: Player) => void
  addActivePlayer: (id: number) => void
  handleSearchTerm: (searchTerm: string) => void
  getPlayers: () => void
  getPositions: () => void
}

export interface PlayersProviderProps {
  children: React.ReactNode
  initialValue?: Partial<PlayersStateContext>
}

export const PlayersContext = createContext<PlayersStateContext>(
  {} as unknown as PlayersStateContext
)

export const usePlayersContext = () => useContext(PlayersContext)

export const PlayersProvider: FC<PlayersProviderProps> = ({ children, initialValue }) => {
  const values = usePlayers(initialValue)
  return <PlayersContext.Provider value={values}>{children}</PlayersContext.Provider>
}
