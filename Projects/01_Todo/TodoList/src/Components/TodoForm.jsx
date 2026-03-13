import { useState } from 'react';
import styles from './Todo.module.css'
function TodoForm({ OnAddForm }) {
const[inputValue , SetinputValue] = useState({id:"" , content:"" , checked:false });

const HandleClick = (e) => {
        e.preventDefault();
        OnAddForm(inputValue);
        SetinputValue({ id:"" , content:"" , checked:false });
    }

const HandleInputChange = (value) => {
  SetinputValue({ id:value , content:value , checked:false });
};

  return (
   <form action="#" onSubmit={HandleClick}>
        <input type="text" 
        placeholder="Enter Your Plain"
        required 
        value={inputValue.content}
        onChange={(e) => HandleInputChange(e.target.value)}
        className={styles.TodoInput}
        />
        <button className={styles.TodoButton}>Add Todo</button> 
        </form>
  )
}

export default TodoForm
