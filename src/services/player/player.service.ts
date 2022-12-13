import { Player, PlayerPosition } from '../../utils/interfaces/player'
import axios from 'axios'
import { AUTHOR_ID } from '../../utils/constants/author'

const API_URL = 'https://api-q3.onrender.com'

axios.defaults.timeout = 2000

export const fetchPlayers = async () => {
  const headers = {
    author: AUTHOR_ID!
  }
  const response = await axios.get<Player[]>(`${API_URL}/player`, { headers })
  return response.data
}

export const deletePlayer = async (id: number) => {
  await axios.delete(`${API_URL}/player/${id}`)
  return true
}

export const getPositions = async () => {
  const response = await axios.get<PlayerPosition[]>(`${API_URL}/position`)
  return response.data
}

export const addPlayer = async (player: Player) => {
  const response = await axios.post<Player>(`${API_URL}/player`, player)
  return response.data
}

export const updatePlayer = async (player: Player) => {
  await axios.patch(`${API_URL}/player/${player.id}`, player)
  return true
}
