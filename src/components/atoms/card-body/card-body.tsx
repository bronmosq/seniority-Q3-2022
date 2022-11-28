import { FC } from 'react'
import { Button } from '../button/button'
import DeleteIcon from '../../../assets/delete-icon.svg'
import EditIcon from '../../../assets/edit-icon.svg'
import './card-body.scss'

export interface CardBodyProps {
  attack: number
  defense: number
  skills: number
}

const CardBody: FC<CardBodyProps> = ({ attack, defense, skills }) => {
  return (
    <div className="card-body">
      <div className="card-body__bottom-info">
        <div className="card-body__info-wrapper">
          <div className="card-body__info-container">
            <span>Ataque</span>
            <span>{attack}</span>
          </div>
          <div className="card-body__info-container">
            <span>Defensa</span>
            <span>{defense}</span>
          </div>
          <div className="card-body__info-container">
            <span>Skills</span>
            <span>{skills}</span>
          </div>
        </div>
        <div className="card-body__buttons-wrapper">
          <Button size="small">
            <img className="card-body__icon" src={EditIcon} alt="delete-icon" />
          </Button>
          <Button size="small">
            <img className="card-body__icon" src={DeleteIcon} alt="delete-icon" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CardBody
