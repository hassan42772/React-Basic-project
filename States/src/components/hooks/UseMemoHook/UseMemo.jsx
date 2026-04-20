import { useMemo, useState } from "react";
import Child from "./Child";


function UseMemo() {
    const [count, setCount] = useState(0);
        // const bioData = {
        //     name: "John Doe",
        //     age: 30,
        //     city: "New York"
        // }
    const bioData = useMemo(() => {
        return {
            name: "John Doe",
            age: 30,
            city: "New York"
        }
    }, []);
     //? The empty array means that the memoized value will only be recalculated if the dependencies (in this case, there are none) change. Since there are no dependencies, the memoized value will be calculated once and reused on subsequent renders, preventing unnecessary re-renders of the Child component when the count state changes.
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <Child bioData={bioData} />
    </div>
  )
}

export default UseMemo
