import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GridState } from './Contexts/GridContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GridState>
      <App />
    </GridState>
  </React.StrictMode>
)
