import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { Player, PlayerService } from './player.service'

const axiosMock = new MockAdapter(axios)

describe('User Service', () => {
  it('should get navigation properties', async () => {
    axiosMock.onGet().reply(200, [
      {
        id: 54,
        firstName: 'Cristiano',
        lastName: 'Ronaldo',
        image:
          'https://phantom-marca.unidadeditorial.es/500be06c4056e00a9f691d6c5800f216/resize/1320/f/jpg/assets/multimedia/imagenes/2022/09/30/16644896975046.jpg',
        attack: 99,
        defense: 99,
        skills: 99,
        idAuthor: 54,
        idPosition: 1
      }
    ] as Player[])
    const players = await PlayerService.getPlayers()
    expect(players).toBeDefined()
    expect(players).toBeInstanceOf(Array)
  })
})
