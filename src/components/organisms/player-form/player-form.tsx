import './player-form.scss'
import { FC } from 'react'
import { DEFAULT_IMAGE } from '../../../utils/constants/player'
import { InfoText } from '../../../utils/enums/info-text'

import { Input } from '../../atoms/input/input'
import Slider from '../../atoms/slider/slider'
import Select from '../../atoms/select/select'
import usePlayerForm from './use-player-form/use-player-form'
import { Button } from '../../atoms/button/button'
import { Player, PlayerPosition } from '../../../utils/interfaces/player'

export interface PlayerFormProps {
  initialValues?: Player
  onSubmit: (player: Player) => void
  positions: PlayerPosition[]
  isEditng: boolean
}

const PlayerForm: FC<PlayerFormProps> = (props) => {
  const { handleChangeInput, player, isButtonEnabled, managePlayer } = usePlayerForm(props)

  return (
    <div className="player-form">
      <div className="player-form__image-column">
        <img className="player-form__image" src={player.image ? player.image : DEFAULT_IMAGE} />
      </div>
      <div className="player-form__content-column">
        <div className="player-form__wrapper">
          <div className="player-form__inputs-wrapper">
            <div className="player-form__input">
              <Input
                label="Nombre"
                placeholder="Nombre"
                onChange={handleChangeInput}
                value={player.firstName}
                variant={player.firstName ? 'normal' : 'error'}
                errorMessage={player.firstName ? '' : InfoText.FIRST_NAME_ERROR}
                name="firstName"
              />
            </div>
            <div className="player-form__input">
              <Input
                label="Apellido"
                placeholder="Apellido"
                onChange={handleChangeInput}
                value={player.lastName}
                variant={player.lastName ? 'normal' : 'error'}
                errorMessage={player.lastName ? '' : InfoText.LAST_NAME_ERROR}
                name="lastName"
              />
            </div>
            <div className="player-form__input">
              <Input
                label="Imagen"
                placeholder="Imagen"
                onChange={handleChangeInput}
                value={player.image}
                variant={player.image ? 'normal' : 'error'}
                errorMessage={player.image ? '' : InfoText.IMAGE_ERROR}
                name="image"
              />
            </div>
            <div className="player-form__input">
              <Select
                options={props.positions}
                label="Posición"
                name="idPosition"
                onChange={handleChangeInput}
                selectedValue={player.idPosition}
              />
            </div>
          </div>
          <Slider
            label="Ataque"
            defaultValue={player.attack}
            onChange={handleChangeInput}
            name="attack"
          />
          <Slider
            label="Defensa"
            defaultValue={player.defense}
            onChange={handleChangeInput}
            name="defense"
          />
          <Slider
            label="Skills"
            defaultValue={player.skills}
            onChange={handleChangeInput}
            name="skills"
          />
          <div className="player-form__button-wrapper">
            <Button disabled={!isButtonEnabled} onClick={managePlayer}>
              {props.isEditng
                ? InfoText.EDIT_PLAYER_MODAL_BUTTON
                : InfoText.ADD_PLAYER_MODAL_BUTTON}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerForm
