import { useId } from "react"


function UseIdHook() {
    //? for Small form used this technique
    // const username = useId();
    // const password = useId();
    //? for multiple form used this technique
    const id = useId();
  return (
    <>
{/* //? for short form  */}
      {/* <form action="">
        <div>
            <label htmlFor={username}></label>
            <input type="text" name="username" id={username} />
        </div>
        <div>
            <label htmlFor={password}></label>
            <input type="password" name="password" id={password} />
        </div>
        <button type="submit">LOGIN</button>
      </form> */}
{/*  ?for multiple form  */}
      <form action="">
        <div>
            <label htmlFor={id +"username"}></label>
            <input type="text" name="username" id={id + "username"} />
        </div>
        <div>
            <label htmlFor={id + "password"}></label>
            <input type="password" name="password" id={id + "password"} />
        </div>
        <button type="submit">LOGIN</button>


      </form>
    </>
  )
}

export default UseIdHook
