import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Second from './Second.jsx'
import Primer from './Primer.jsx'
import Tercer from './Tercer.jsx'
import {Septimo} from './Septimo.jsx'
import Api from './Api.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Primer />
    <Second />
    <Tercer />
    <Api />
    <Septimo title = "Titulo1" subtitle="Subtitulo"></Septimo>
  </StrictMode>,
)
