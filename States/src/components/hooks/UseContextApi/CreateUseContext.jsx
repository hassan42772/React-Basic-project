import { createContext } from "react";


export const MyContext = createContext();


export const MyProvider = ({ children }) => {
     
    const name = "hassan maqbool";
    const age = 20;
    const data = {
        address : "model town lahore",
        phone: "34567895456"
    }
    let arr = [1,2,3,4,5]

    return  <MyContext.Provider value={{name, age, data, arr}}>
            {children}
        </MyContext.Provider>
    
}