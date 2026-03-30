import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PokemonCard from './components/hooks/useEffects/PokemonCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PokemonCard />
  </StrictMode>,
)
