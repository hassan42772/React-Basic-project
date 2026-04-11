import { createContext } from "react"


export const MyContextwithuse = createContext();



export const MyProviderwithuse = ({children}) => {

     let home ={
        username : "hassan",
        age : 23
     }
     let about = {
        about : "IOT and Web developer"
     }
     let services = {
        service : "make website and design UI"
     }
   
    return <MyContextwithuse.Provider value={{ home , about , services}}>
        {children}
    </MyContextwithuse.Provider>
}
    
