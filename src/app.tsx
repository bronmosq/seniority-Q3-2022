import './app.scss'
import Team from './components/pages/team'
import Alert from './components/molecules/alert/alert'
import { usePlayersContext } from './context/players-context/players-context'
import LoadingOverlay from './components/molecules/loading-overlay/loading-overlay'

function App() {
  const { activeAlert, alertMessage, showLoadingOverlay } = usePlayersContext()

  return (
    <div className="app">
      <Team />
      <Alert message={alertMessage} showAlert={activeAlert} />
      <LoadingOverlay showOverlay={showLoadingOverlay} />
    </div>
  )
}

export default App
