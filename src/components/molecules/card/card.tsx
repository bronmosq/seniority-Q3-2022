import { FC } from 'react'
import './card.scss'
import DeleteIcon from '../../../assets/delete-icon.svg'
import EditIcon from '../../../assets/edit-icon.svg'
import { Button } from '../../atoms/button/button'

export interface CardProps {
  firstName: string
  lastName: string
  image: string
  attack: number
  defense: number
  skills: number
}

export const Card: FC<CardProps> = (props) => {
  return (
    <div className="card">
      <img role="img" className="card__image" src={props.image} />
      <div className="card__bottom-info">
        <div className="card__info-wrapper">
          <div className="card__info-container">
            <span>Ataque</span>
            <span>{props.attack}</span>
          </div>
          <div className="card__info-container">
            <span>Defensa</span>
            <span>{props.attack}</span>
          </div>
          <div className="card__info-container">
            <span>Skills</span>
            <span>{props.skills}</span>
          </div>
        </div>
        <div className="card__buttons-wrapper">
          <Button size="small">
            <img className="card__icon" src={EditIcon} alt="delete-icon" />
          </Button>
          <Button size="small">
            <img className="card__icon" src={DeleteIcon} alt="delete-icon" />
          </Button>
        </div>
      </div>
    </div>
  )
}
