import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/index.scss'

import { BrowserRouter } from 'react-router-dom'
import Routes from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>
)
