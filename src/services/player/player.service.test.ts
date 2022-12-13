import axios from 'axios'
import { Player } from '../../utils/interfaces/player'
import { fetchPlayers, addPlayer, getPositions, deletePlayer, updatePlayer } from './player.service'

jest.mock('axios')
const mockAxios = axios as jest.Mocked<typeof axios>

describe('Player Service', () => {
  it('should return user lists', async () => {
    const players: Player[] = [
      {
        id: 1,
        firstName: 'Cristiano',
        lastName: 'Ronaldo',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/640px-Lionel_Messi_20180626.jpg',
        attack: 29,
        defense: 55,
        skills: 50,
        idAuthor: 54,
        idPosition: 3
      }
    ]
    jest.spyOn(axios, 'get').mockResolvedValue({ data: players })
    const playersResponse = await fetchPlayers()
    expect(playersResponse).toEqual(players)
  })

  it('should return player when addPlayer is called', async () => {
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
    jest.spyOn(axios, 'post').mockResolvedValue({ data: player })
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

    const playerResponse = await deletePlayer(1)

    expect(playerResponse).toEqual(true)
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

    expect(playerResponse).toEqual(true)
  })
})
