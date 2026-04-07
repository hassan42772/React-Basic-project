import React, { useRef } from 'react'

function Ref() {
    const username = useRef()
    const password = useRef()
    const HandleFormSubmit = (e) =>{
        e.preventDefault();
        console.log(username.current.value , password.current.value)
        username.current.value = "";
        password.current.value = "";

    }
  return (
    <>
     <form onSubmit={HandleFormSubmit}>
        <input type="text" name="Username" id="#1" placeholder='Enter the username' ref={username} /> 
        <input type="password" name="Password" id="#2" placeholder='Enter the Password' ref={password}/> 
        <button>Login</button>
     </form>
    </>
  )
}

export default Ref
