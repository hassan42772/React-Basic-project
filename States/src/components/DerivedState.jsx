import { useState } from "react"


function DerivedState() {
    const [Data , setData] = useState([{
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
}])
setData;

const totalUser = Data.length;
const averageAge = Data.reduce((total, user) => total + user.age, 0) / totalUser;
  return (
    <section>
      <h1 className="heading">Admin Pannel</h1>
      <p>Total Users: {totalUser}</p>
      <p>Average Age: {averageAge.toFixed(2)}</p>
      <ul>
        {Data.map((user, index) => (
          <li key={index}>
            Name: {user.username}, Age: {user.age}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default DerivedState
