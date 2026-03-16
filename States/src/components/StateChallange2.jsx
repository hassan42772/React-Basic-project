import { useState } from "react"

function StateChallange2() {
    const [Counter , SetCounter]  = useState(0);
    const [InputValue , SetInputValue]  = useState(0);
    const HandleIncreament = () =>{
        SetCounter(Counter + InputValue)
    }
    const HandleDecreament = () =>{
        SetCounter(Counter - InputValue)

    }
    const HandleReset = () =>{
        SetCounter(0);
        SetInputValue(0);

    }
  return (
    <>
     <h1>State Challange</h1> 
     <section >
        <h2>Counter value:{Counter}</h2>
        <input type="number" value={InputValue} onChange={(e)=> SetInputValue(Number(e.target.value))} />
        <div className="buttonContainer">
        <button className="Increment" onClick={HandleIncreament} disabled= {Counter >= 100}>Increament</button>
        <button className="Decrement" onClick={HandleDecreament} disabled= {Counter <= 0}>Decreament</button>
        <button className="Reset" onClick={HandleReset}>Reset</button>
        </div>
     </section>
    </>
  )
}

export default StateChallange2
