import { useState } from "react";
import styles from "./Form.module.css";
function Form() {
const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: ""
});
const HandleChange = (e)=>{
 const {name , value} = e.target
 setUser(() => ({...user , [name]: value}))
}
const [style , setStyle] = useState(false)
const HandleSubmit = (e) => {
    e.preventDefault()
     setStyle(!style)
    console.log(user)
    setTimeout(() => {
        setUser({
           firstName: "",
            lastName: "",
            email: "",
            password: "",
            phone: "" 
        })
        setStyle(false)
    }, 2000);

}
  return (
    <>
     
      <form className={styles.form} onSubmit={HandleSubmit}>
        <div className={!style ? styles.disabled : styles.visible}>Username is <span>{user.firstName} {user.lastName}</span>  Email is <span>{user.email}</span> Phone number is <span>{user.phone}</span> </div>
        <label htmlFor="firstName">FirstName</label>
        <input 
        type="text" 
        id="firstName"
        name="firstName" 
        value={user.firstName}
        onChange={HandleChange}
        />
        <label htmlFor="lastName">LastName</label>
        <input type="text" id="lastName" name="lastName"
        value={user.lastName}
        onChange={HandleChange} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email"
        value={user.email}
        onChange={HandleChange} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password"
        value={user.password}
        onChange={HandleChange} />
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone"
        value={user.phone}
        onChange={HandleChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
