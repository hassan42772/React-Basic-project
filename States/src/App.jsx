import { MyProvider } from './components/hooks/UseContextApi/CreateUseContext'
import './App.css'
// import Home from './components/hooks/UseContextApi/home'
import { MyProviderwithuse } from './components/hooks/UseHook'
import About from './components/hooks/UseHook/about'
import Home from './components/hooks/UseHook/home'
import Services from './components/hooks/UseHook/Services'
function App() {

  return (
   <>
    <MyProviderwithuse>
       <Home/>
       <About/>
       <Services/>
     </MyProviderwithuse>




     {/* <MyProvider>
       <Home/>
     </MyProvider> */}
   </>
  )
}

export default App
