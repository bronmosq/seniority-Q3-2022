import './app.scss'
import Slider from './components/atoms/slider/slider'
import DeleteIcon from './assets/delete-icon.svg'
import EditIcon from './assets/edit-icon.svg'
import CloseIcon from './assets/close-icon.svg'
import Team from './components/pages/team'

function App() {
  return (
    <div className="app">
      {/* <h1 className="app__title">MI EQUIPO</h1>
      <div>
        <Slider label="Puntaje" value={55} />
      </div>
      <div>
        <img src={DeleteIcon} alt="delete-icon" />
        <img src={EditIcon} alt="edit-icon" />
        <img src={CloseIcon} alt="close-icon" />
      </div> */}
      <Team />
    </div>
  )
}

export default App
