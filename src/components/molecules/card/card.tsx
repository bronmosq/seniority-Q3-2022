import { FC } from 'react'
import './card.scss'
import CardHeader from '../../atoms/card-header/card-header'
import CardBody from '../../atoms/card-body/card-body'

export interface CardProps {
  firstName: string
  lastName: string
  image: string
  attack: number
  defense: number
  skills: number
}

export const Card: FC<CardProps> = ({ firstName, lastName, image, attack, defense, skills }) => {
  return (
    <div className="card">
      <CardHeader img={image} firstName={firstName} lastName={lastName} />
      <CardBody attack={attack} defense={defense} skills={skills} />
    </div>
  )
}
