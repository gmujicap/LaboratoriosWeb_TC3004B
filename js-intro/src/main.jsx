import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {MyApp} from './MyApp.jsx'
import {Hello} from './Hello.jsx'
import {Importacion} from './Importacion.jsx'
import {Variables} from './Variables.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
    <Hello />
    <Importacion />
    <Variables />
  </StrictMode>,
)
