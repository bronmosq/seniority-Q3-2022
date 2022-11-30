import './app.scss'
import Team from './components/pages/team'
import Alert from './components/molecules/alert/alert'
import { usePlayersContext } from './context/players-context/players-context'
import LoadingOverlay from './components/molecules/loading-overlay/loading-overlay'
import ModalPlayerForm from './components/templates/modal-player-form/modal-player-form'

function App() {
  const { activeAlert, alertMessage, showLoadingOverlay } = usePlayersContext()

  return (
    <div className="app">
      <Team />
      <ModalPlayerForm />
      <Alert message={alertMessage} showAlert={activeAlert} />
      <LoadingOverlay showOverlay={showLoadingOverlay} />
    </div>
  )
}

export default App
