import './app.scss'
import Team from './components/pages/team'
import Alert from './components/molecules/alert/alert'
import { usePlayersContext } from './context/players-context/players-context'

function App() {
  const { activeAlert, alertMessage } = usePlayersContext()

  return (
    <div className="app">
      <Team />
      <Alert message={alertMessage} showAlert={activeAlert} />
    </div>
  )
}

export default App
