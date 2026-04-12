import { Another } from "./Components/Another"
import { ChangerTheme, MyThemeProvider } from "./Components/LightDarkTheme"


function App() {
 

  return (
    
    
   <MyThemeProvider>
    
      <ChangerTheme/> 
      <Another/>
   </MyThemeProvider>
    
  )
}

export default App
