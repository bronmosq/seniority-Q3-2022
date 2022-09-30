import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Player } from '../../../interfaces/index'
import { PlayerService } from '../../../services/player.service'

export interface PlayersState {
  players: []
}

const getPlayers = async () => {
  const players: Player[] = await PlayerService.getPlayers()
  console.log('desde el redux', players)
  return players
}

export const playersInitialState: PlayersState = {
  //   players: PlayerService.getPlayers().then((response) => response)
  players: getPlayers() as any
}

export const playerSlice = createSlice({
  initialState: playersInitialState,
  name: 'players',
  reducers: {
    registerUser: (state) => {
      console.log('state')
    }
  }
})

export default playerSlice.reducer
