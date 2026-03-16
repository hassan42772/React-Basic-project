import { useState } from "react"
//! method 1 // just for testing data 
const Userdata = [{
    username :"Hassan",
    age:20
},
{
    username :"Ali",
    age:24
},
{
    username :"Hussain",
    age:29
},
{
    username :"Ahmad",
    age:25
}]


function StateChallange() {
    //? method 2 using usestate 
    const[users , setUser] = useState([{
    username :"Hassan",
    age:20
},
{
    username :"Ali",
    age:24
},
{
    username :"Hussain",
    age:29
},
{
    username :"Ahmad",
    age:25
}]);

setUser; //? this is use for remove the error from the computer. 
  return (
    <section>
      <h1>Admin Pannel</h1>
      <ul>
        {users.map((data , index)=>{
            return(
            
            <li key={index} >Name is :{data.username} Age is :{data.age}</li>
          
            )
            
        })}
        </ul>
    </section>
  )
}

export default StateChallange
