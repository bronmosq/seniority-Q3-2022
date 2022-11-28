import axios from 'axios'
import { Player } from '../utils/interfaces/player'

const API_URL = 'https://api-exercise-q3.herokuapp.com/player/54'

export class PlayerService {
  static async getPlayers() {
    const response = await axios.get<Player[]>(API_URL)
    return response.data
  }
}
