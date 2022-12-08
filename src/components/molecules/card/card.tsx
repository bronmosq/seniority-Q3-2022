import { FC } from 'react'
import { Player } from '../../../utils/interfaces/player'
import { Button } from '../../atoms/button/button'
import DeleteIcon from '../../../assets/delete-icon.svg'
import EditIcon from '../../../assets/edit-icon.svg'
import './card.scss'

interface CardProps {
  player: Player
  deletePlayer: (id: number) => void
  setActivePlayer: (id: number) => void
}

const Card: FC<CardProps> = (props) => {
  return (
    <div className="card">
      <div className="card__header">
        <img
          src={props.player.image}
          className="card__image"
          alt={`${props.player.firstName} ${props.player.lastName}`}
        />
        <div className="card__info-wrapper">
          <span className="card__player-name">
            {props.player.firstName + ' ' + props.player.lastName}
          </span>
        </div>
      </div>
      <div className="card__bottom-info">
        <div className="card__stats-wrapper">
          <div className="card__info-container">
            <span>Ataque</span>
            <span>{props.player.attack}</span>
          </div>
          <div className="card__info-container">
            <span>Defensa</span>
            <span>{props.player.defense}</span>
          </div>
          <div className="card__info-container">
            <span>Skills</span>
            <span>{props.player.skills}</span>
          </div>
        </div>
        <div className="card__buttons-wrapper">
          <Button size="small" onClick={() => props.setActivePlayer(props.player.id!)}>
            <img className="card-body__icon" src={EditIcon} alt="delete-icon" />
          </Button>
          <Button size="small" onClick={() => props.deletePlayer(props.player.id!)}>
            <img className="card-body__icon" src={DeleteIcon} alt="delete-icon" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Card
