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
// Derived state is a concept in React that refers to the state that can be derived or calculated from other state values. It is not stored directly in the component's state but can be computed based on the existing state. Derived state is useful when you want to avoid redundant state and keep your component's state minimal. It allows you to compute values on the fly based on the current state, which can help improve performance and reduce the chances of bugs caused by inconsistent state. In React, you can use functions or hooks like useMemo to create derived state that updates automatically when the underlying state changes.