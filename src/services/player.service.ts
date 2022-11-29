import axios from 'axios'
import { AUTHOR_ID } from '../utils/constants/author'
import { Player } from '../utils/interfaces/player'

const API_URL = 'https://api-exercise-q3.herokuapp.com'

export class PlayersService {
  static async getPlayers() {
    const headers = {
      author: AUTHOR_ID!
    }
    try {
      const response = await axios.get<Player[]>(`${API_URL}/player`, { headers })
      return response.data
    } catch (error) {}
  }
}
