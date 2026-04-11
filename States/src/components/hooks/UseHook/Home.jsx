import { use } from "react"
import { MyContextwithuse } from "."




function Home() {
    const {home} = use(MyContextwithuse)
  return (
    <div>
    <p>Home Page</p>
      <p>{home.username}</p>
      <p>{home.age}</p>
    </div>
  )
}

export default Home
