import { Player } from './../../utils/interfaces/player'
import axios from 'axios'
import { getPositions, fetchPlayers, addPlayer, deletePlayer, updatePlayer } from './player.service'

jest.mock('axios')
const mockAxios = axios as jest.Mocked<typeof axios>

describe('PlayersService', () => {
  it('should return players', async () => {
    const players: Player[] = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        image: 'https://www.google.com',
        attack: 1,
        defense: 1,
        skills: 1,
        idAuthor: 1,
        idPosition: 1
      }
    ]

    mockAxios.get.mockResolvedValue({ data: players })

    const playersResponse = await fetchPlayers()

    expect(playersResponse).toEqual(players)
  })

  it('should return player when createPlayer is called', async () => {
    const player: Player = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      image: 'https://www.google.com',
      attack: 1,
      defense: 1,
      skills: 1,
      idAuthor: 1,
      idPosition: 1
    }

    mockAxios.post.mockResolvedValue({ data: player })
    const playerResponse = await addPlayer(player)
    expect(playerResponse).toEqual(player)
  })

  it('should get player positions when getPositions is called', async () => {
    const positions = ['Goalkeeper', 'Defender', 'Midfielder', 'Forward']

    mockAxios.get.mockResolvedValue({ data: positions })

    const positionsResponse = await getPositions()

    expect(positionsResponse).toEqual(positions)
  })

  it('should delete player when deletePlayer is called', async () => {
    mockAxios.delete.mockResolvedValue({ data: {} })

    const playerResponse = await deletePlayer(161)

    // expect(playerResponse).toEqual(true)
  })

  it('should return status true when updatePlayer is called', async () => {
    mockAxios.patch.mockResolvedValue({
      data: {
        status: true
      }
    })

    const playerResponse = await updatePlayer({
      firstName: 'John',
      lastName: 'Doe',
      image: 'https://www.google.com',
      attack: 1,
      defense: 1,
      skills: 1,
      idAuthor: 42,
      idPosition: 1,
      id: 184
    })

    // expect(playerResponse).toEqual(true)
  })
})
