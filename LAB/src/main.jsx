import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {AppCounter} from './components/AppCounter.jsx'
import {SimpleForm} from './components/SimpleForm.jsx'
import {Card} from './components/Card.jsx'
import {CustomHook} from './components/CustomHook.jsx'
import {FetchNasa} from './components/FetchNasa.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FetchNasa />
  </StrictMode>,
)
