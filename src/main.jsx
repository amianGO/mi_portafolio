/* Paso 4 Inicio*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/mi_portafolio'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
/* Paso 4 Fin*/

