import './app.scss'
import LoadingOverlay from './components/molecules/loading-overlay/loading-overlay'
import usePlayerForm from './components/organisms/player-form/use-player-form/use-player-form'
import Team from './components/pages/team/team'
import ModalPlayerForm from './components/templates/modal-player-form/modal-player-form'
import { PlayersProvider, usePlayersContext } from './context/players-context/players-context'

function App() {
  return (
    <div className="app">
      <PlayersProvider>
        <Team />
        <ModalPlayerForm />
      </PlayersProvider>
    </div>
  )
}

export default App
