import { useState } from "react"
import MemoCom from "./MemoCom"

function Memo() {
    const [count, setCount] = useState(0)
  return (
    <>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count + 1)}>Increment</button>
        <MemoCom/>
    </>
  )
}

export default Memo
