import { AUTHOR_ID } from './author'
import { Player } from '../interfaces/player'
export const DEFAULT_IMAGE =
  'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'

export const EMPTY_PLAYER: Player = {
  id: 0,
  firstName: '',
  lastName: '',
  image: '',
  attack: 55,
  defense: 55,
  skills: 50,
  idAuthor: AUTHOR_ID!,
  idPosition: 1
}
