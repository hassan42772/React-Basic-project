import { use } from "react";
import { ThemeContext } from "./LightDarkTheme";
import styles from "./Theme.module.css";




export const Another = () => {
    const {Theme , HanbleToggleTheme} = use(ThemeContext);
    return( 
         <div className={styles.container + " " + (Theme === "dark" ? styles.dark : styles.light)}>
        <h1>Light Dark Theme Website</h1>
        <p>Content 2</p>
        <button onClick={HanbleToggleTheme}>{Theme === "dark" ? "Light Theme" : "Dark Theme"}</button>
        </div>
        )
}