import { FC } from 'react'
import './card.scss'
import CardHeader from '../../atoms/card-header/card-header'
import CardBody from '../../atoms/card-body/card-body'
import { Player } from '../../../utils/interfaces/player'

export const Card: FC<Player> = ({
  firstName,
  lastName,
  image,
  attack,
  defense,
  skills,
  id = 0
}) => {
  return (
    <div className="card">
      <CardHeader img={image} firstName={firstName} lastName={lastName} />
      <CardBody attack={attack} defense={defense} skills={skills} id={id} />
    </div>
  )
}
