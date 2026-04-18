import { useReducer } from "react"


function Reducer() {

    const Reducer = (state , action) => {
        if(action.type === "Increament"){
            return state + 1
        }
        if(action.type === "Decreament"){
            return state - 1
        }
        if (action.type === "Reset") {
            return (state = 0); 

        }
    }

    const[count , dispatch] = useReducer(Reducer , 0);



  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=> dispatch({type:"Increament"})}>Increament</button>
        <button onClick={()=> dispatch({type:"Decreament"})} disabled={count <= 0}>Decreament</button>
        <button onClick={()=> dispatch({type:"Reset"})} disabled={count === 0}>Reset</button>
    </div>
  )
}

export default Reducer
