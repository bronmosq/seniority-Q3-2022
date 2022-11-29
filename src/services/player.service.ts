import axios from 'axios'
import { AUTHOR_ID } from '../utils/constants/author'
import { Player } from '../utils/interfaces/player'

const API_URL = 'https://api-exercise-q3.herokuapp.com'

export const fetchPlayers = async () => {
  const headers = {
    author: AUTHOR_ID!
  }
  const response = await axios.get<Player[]>(`${API_URL}/player`, { headers })
  return response.data
}

export const deletePlayer = async (id: number) => {
  try {
    await axios.delete(`${API_URL}/player/${id}`)
    return true
  } catch (error) {
    return false
  }
}
