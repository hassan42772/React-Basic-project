import { memo, useRef } from "react"

function MemoCom() {
    const rerander = useRef(0);

  return (
    <>
     <p>{rerander.current++} time(s)</p> 
    </>
  )
}

export default memo(MemoCom)
