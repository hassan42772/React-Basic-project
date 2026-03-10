//? Lifting state up is the React pattern of moving data from child components to their closest common parent. This allows two or more sibling components to stay in sync by sharing the same "source of truth."
import { useState } from "react"
function LiftingStateUp() {
    const [InputValue , SetInputValue] = useState("");

  return (
    <div>
      <UpperChild InputValue={InputValue} SetInputValue={SetInputValue} />
      <LowerChild InputValue={InputValue}/>
    </div>
  )
}

export default LiftingStateUp

const UpperChild = ({InputValue , SetInputValue}) => {
    return(
        <>
        <input type="text" value={InputValue} onChange={(e) => SetInputValue(e.target.value)} />
        </>
    )
}

const LowerChild = ({InputValue}) => {
    return(
        <h1>Value :{InputValue}</h1>
    )
}