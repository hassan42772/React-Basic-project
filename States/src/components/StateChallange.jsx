
const users = [{
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
