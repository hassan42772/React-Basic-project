import { use } from "react";
import { MyContextwithuse } from ".";



function About() {
const {about} = use(MyContextwithuse);
    return (
    <div>
        <p>About Us</p>
      <p>Name: {about.about}</p>
      
    </div>
  )
}

export default About
