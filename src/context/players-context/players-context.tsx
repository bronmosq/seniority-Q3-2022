import { createContext, FC, useContext } from 'react'
import { DEFAULT_IMAGE } from '../../utils/constants/player'
import { Player } from '../../utils/interfaces/player'
import usePlayers from './use-players/use-players'
import { PlayersService } from '../../services/player.service'

export interface PlayersStateContext {
  playersList: Player[]
  activeModal: boolean
  handleChangeModal: () => void
  // deletePlayer: (id: number) => void
  // updatePlayer: (id: number) => void
}

export interface PlayersProviderProps {
  children: React.ReactNode
  initialValue?: PlayersStateContext
}

export const PlayersContext = createContext<PlayersStateContext>(
  {} as unknown as PlayersStateContext
)

const INITIAL_PROPS: PlayersStateContext = {
  playersList: [],
  activeModal: false,
  handleChangeModal: () => {}
}

export const usePlayersContext = () => useContext(PlayersContext)

export const PlayersProvider: FC<PlayersProviderProps> = ({
  children,
  initialValue = INITIAL_PROPS
}) => {
  const values = usePlayers(initialValue as any)
  return <PlayersContext.Provider value={values}>{children}</PlayersContext.Provider>
}
