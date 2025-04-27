import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/styles/header.css'
import '/src/styles/fonctionnalite.css'
import '/src/styles/utilisateur.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
