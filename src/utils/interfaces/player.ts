export interface Player {
  id?: number
  firstName: string
  lastName: string
  image: string
  attack: number
  defense: number
  skills: number
  idAuthor: number | string
  idPosition: number
}

export interface PlayerPosition {
  id: number
  description: string
}
