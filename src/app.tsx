import './app.scss'
import Team from './components/pages/team'
import Alert from './components/molecules/alert/alert'
import { usePlayersContext } from './context/players-context/players-context'
import LoadingOverlay from './components/molecules/loading-overlay/loading-overlay'
import Modal from './components/molecules/modal/modal'
import PlayerForm from './components/organisms/player-form/player-form'
import { InfoText } from './utils/enums/info-text'

function App() {
  const { activeAlert, alertMessage, showLoadingOverlay, isEditing, activeModal } =
    usePlayersContext()

  return (
    <div className="app">
      <Team />
      <Modal
        title={isEditing ? InfoText.EDIT_PLAYER_MODAL_TITLE : InfoText.ADD_PLAYER_MODAL_TITLE}
        showModal={activeModal}
      >
        <PlayerForm />
      </Modal>
      <Alert message={alertMessage} showAlert={activeAlert} />
      <LoadingOverlay showOverlay={showLoadingOverlay} />
    </div>
  )
}

export default App
