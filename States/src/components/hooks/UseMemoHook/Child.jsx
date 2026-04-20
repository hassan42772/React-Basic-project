import { memo, useRef } from "react"

function Child({bioData}) {
    const Counter = useRef(0);
    
  return (
    <div>
        <h1>Child Component</h1>
        <p>{Counter.current++} time's</p>
        <p>Name: {bioData.name}</p>
        <p>Age: {bioData.age}</p>
        <p>City: {bioData.city}</p>
    </div>
  )
}

export default memo(Child);
