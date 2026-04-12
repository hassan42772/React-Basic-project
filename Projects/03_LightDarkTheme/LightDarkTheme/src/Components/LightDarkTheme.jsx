import { createContext, use, useState } from "react";
import styles from "./Theme.module.css";


export const ThemeContext = createContext();


export const MyThemeProvider = ({children}) => {
    const [Theme , SetTheme] = useState("dark");

    const HanbleToggleTheme = () =>{
        SetTheme((prev) => (prev === "dark" ? "light" : "dark"));
        console.log(Theme);
    }


    return <ThemeContext.Provider value={{Theme , HanbleToggleTheme}}>{children}
    </ThemeContext.Provider>
}

export const ChangerTheme = () => {

    const {Theme , HanbleToggleTheme} = use(ThemeContext);
    return(
         <div className={styles.container + " " + (Theme === "dark" ? styles.dark : styles.light)}>
        <h1>Light Dark Theme Website</h1>
        <p>Content 1</p>

        <button onClick={HanbleToggleTheme}>{Theme === "dark" ? "Light Theme" : "Dark Theme"}</button>
        </div>
        )
}