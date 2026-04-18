import { useState } from "react";


export default function UseState() {
    const [Count, setCount] = useState(0);
  return (
    <div>
      <p>{Count}</p>
      <button onClick={() => setCount(Count + 1)}>Increament</button>
    </div>
  )
}


//? UseState is a React hook that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update that state. You can use the useState hook to manage any type of state, such as numbers, strings, objects, or arrays. When you call the state update function, it triggers a re-render of the component with the new state value. This makes it easy to create interactive and dynamic user interfaces in React.