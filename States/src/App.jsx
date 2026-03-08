import { useState } from 'react'
import './App.css'
function App() {
  let [count, setCount] = useState(0)
  let HandleClickIncrement = () => {
   setCount(() => {
    return count + 1
   })
  }
  let HandleClickDecreament = () => {
   setCount(() => {
    return count - 1
   })
  }
  return (
   <>
   <section>
    <h1>{count}</h1>
    <button onClick={HandleClickIncrement}>Increment</button>
    <button onClick={HandleClickDecreament}>decrement</button>
   </section>
   </>
  )
}

export default App
