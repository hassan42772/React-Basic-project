import { use } from "react"
import { MyContextwithuse } from "."




function Services() {
const {services} = use(MyContextwithuse)
    return (
    <div>
      <p>service page</p>
      <p>{services.service}</p>
      
    </div>
  )
}

export default Services
