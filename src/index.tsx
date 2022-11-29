import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import reportWebVitals from './reportWebVitals'

import './index.scss'
import { PlayersProvider } from './context/players-context/players-context'
import Alert from './components/molecules/alert/alert'

ReactDOM.render(
  <React.StrictMode>
    <PlayersProvider>
      <App />
    </PlayersProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
