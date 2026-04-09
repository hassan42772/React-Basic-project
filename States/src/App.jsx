import { MyProvider } from './components/hooks/UseContextApi/CreateUseContext'
import './App.css'
import Home from './components/hooks/UseContextApi/home'
function App() {

  return (
   <>
     <MyProvider>
       <Home/>
     </MyProvider>
   </>
  )
}

export default App
