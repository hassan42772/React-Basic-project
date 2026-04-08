import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StateChallange from './components/StateChallange.jsx'
import DerivedState from './components/DerivedState.jsx'
import LiftingStateUp from './components/LiftingStateUp.jsx'
import StateChallange2 from './components/StateChallange2.jsx'
import Effect from './components/hooks/UseEffectHook/Effect.jsx'
import Ref from './components/hooks/UseRefHook/Ref.jsx'
import UseIdHook from './components/hooks/UseIdHook/UseIdHook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <StateChallange/> */}
    {/* <DerivedState/> */}
    {/* <LiftingStateUp/> */}
    {/* <StateChallange2/> */}
    {/* <Effect/> */}
    {/* <Ref/> */}
    <UseIdHook/>
  </StrictMode>,
)
