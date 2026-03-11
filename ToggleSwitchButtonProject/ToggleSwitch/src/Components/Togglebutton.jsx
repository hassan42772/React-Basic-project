import { useState } from 'react';
import Style from './Togglebutton.module.css';
function Togglebutton() {

    const[toggle, setToggle] = useState(false);
    const HandleClick = () => {
        setToggle(!toggle);
    }
  return (
    <>
      <section className={Style.section} >
        <h1 className={Style.heading}>Toggle Button</h1>
        <button className={`${Style.button} ${
            toggle === true ? Style.on : Style.off
          }`} onClick={HandleClick}>
          
        </button>
      </section>
    </>
  )
}

export default Togglebutton;
