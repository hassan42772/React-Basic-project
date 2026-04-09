import { useContext } from "react";
import { MyContext } from "./CreateUseContext"

function Home() {
  const { name, age, data, arr } = useContext(MyContext);
  return (
    <>
  <h1>Name: {name}</h1>
  <h2>Age: {age}</h2>
  <p>Address: {data.address}</p>
  <p>Phone: {data.phone}</p>
  {
    arr.map((item) => {
      if(item === 3){
        return <p key={item} style={{color:"red"}}>{item}</p>
      }
      if(item === 4){
        return <p key={item} style={{color:"blue"}}>{item}</p>
      }
      return <p key={item}>{item}</p>
    })
  }
      
    </>
  )
}

export default Home
