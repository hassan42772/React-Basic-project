import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Togglebutton from './Components/Togglebutton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Togglebutton />
  </StrictMode>,
)
