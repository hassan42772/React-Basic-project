import { useEffect , useState } from "react"; 


function Effect() {
    const[data , SetData] = useState(0);
    useEffect(()=>{
        setInterval(() => {
            const newdata = new Date()
            SetData(newdata.toLocaleTimeString())
        }, 1000);
    },[])
  return (
    <>
     <h1>Use Effect Hook </h1>
     <p>Data : {data}</p> 
    </>
  )
}

export default Effect
