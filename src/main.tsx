import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import './scss/index.scss'

import { BrowserRouter } from 'react-router-dom'
import Routes from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  </React.StrictMode>
)
