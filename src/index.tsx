import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GridState } from './Contexts/GridContext'
import { SquareValueProvider } from './Contexts/SquareValueContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GridState>
      <SquareValueProvider>
        <App />
      </SquareValueProvider>
    </GridState>
  </React.StrictMode>
)
