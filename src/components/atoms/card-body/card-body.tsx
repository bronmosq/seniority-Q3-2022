import { FC } from 'react'
import { Button } from '../button/button'
import DeleteIcon from '../../../assets/delete-icon.svg'
import EditIcon from '../../../assets/edit-icon.svg'
import './card-body.scss'
import { usePlayersContext } from '../../../context/players-context/players-context'

export interface CardBodyProps {
  attack: number
  defense: number
  skills: number
  id: number
}

const CardBody: FC<CardBodyProps> = ({ attack, defense, skills, id }) => {
  const { deletePlayer, updatePlayer } = usePlayersContext()

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
          <Button size="small" onClick={() => updatePlayer(id)}>
            <img className="card-body__icon" src={EditIcon} alt="delete-icon" />
          </Button>
          <Button size="small" onClick={() => deletePlayer(id)}>
            <img className="card-body__icon" src={DeleteIcon} alt="delete-icon" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CardBody
