import './register-form.scss'
import { FC } from 'react'
import { AUTHOR_ID } from '../../../utils/constants/author'
import { DEFAULT_IMAGE } from '../../../utils/constants/player'
import { Input } from '../../atoms/input/input'
import Slider from '../../atoms/slider/slider'

const RegisterForm: FC = () => {
  console.log(AUTHOR_ID)
  return (
    <div className="register-form">
      <div className="register-form__image-column">
        <img className="register-form__image" src={DEFAULT_IMAGE} />
      </div>
      <div className="register-form__content-column">
        <form>
          <div className="register-form__inputs-wrapper">
            <div className="register-form__input">
              <Input label="Nombre" placeholder="Nombre" />
            </div>
            <div className="register-form__input">
              <Input label="Apellido" placeholder="Apellido" />
            </div>
            <div className="register-form__input">
              <Input label="Imagen" placeholder="Imagen" />
            </div>
            <div className="register-form__input">
              <Input label="Posición" placeholder="Posición" />
            </div>
          </div>
          <Slider label="Ataque" />
          <Slider label="Defensa" />
          <Slider label="Skills" />
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
