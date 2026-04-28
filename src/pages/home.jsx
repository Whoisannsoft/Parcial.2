import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalProvider } from '../context/AppContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
)

