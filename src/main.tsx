import 'material-icons/iconfont/round.css' // Icons List: https://marella.me/material-icons/demo/#round
import './scss/index.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import Routes from './router'

import SwitchMode from '@/components/SwitchMode'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <SwitchMode />
      <Routes />
    </BrowserRouter>
  </React.StrictMode>
)
