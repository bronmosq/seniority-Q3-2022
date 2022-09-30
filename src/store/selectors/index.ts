import { RootState } from '../store'

export const selectPlayers = (store: RootState) => store.players.players
