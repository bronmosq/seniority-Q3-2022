import axios from 'axios'

const API_URL = 'https://api-exercise-q3.herokuapp.com/player/54'

export interface Player {
  id: number
  firstName: string
  lastName: string
  image: string
  attack: number
  defense: number
  skills: number
  idAuthor: number
  idPosition: number
}

export class PlayerService {
  static async getPlayers() {
    const response = await axios.get<Player[]>(API_URL)
    return response.data
  }
}
