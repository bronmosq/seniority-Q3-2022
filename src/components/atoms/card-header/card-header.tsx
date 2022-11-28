import { FC } from 'react'
import './card-header.scss'

interface CardHeaderProps {
  img: string
  firstName: string
  lastName: string
}

const CardHeader: FC<CardHeaderProps> = ({ img, firstName, lastName }) => {
  return (
    <div className="card-header">
      <img role="img" className="card-header__image" src={img} />
      <div className="card-header__info-wrapper">
        <span className="card-header__player-name">{firstName + ' ' + lastName}</span>
      </div>
    </div>
  )
}

export default CardHeader
