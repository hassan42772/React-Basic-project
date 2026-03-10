import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StateChallange from './components/StateChallange.jsx'
import DerivedState from './components/DerivedState.jsx'
import LiftingStateUp from './components/LiftingStateUp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <StateChallange/> */}
    {/* <DerivedState/> */}
    <LiftingStateUp/>
  </StrictMode>,
)
