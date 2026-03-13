import { useState } from "react"
import styles from "./Todo.module.css"

import TodoData from "./TodoData";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoClearBtn from "./TodoClearBtn";
import GetLocalStorageData, { SetLocalStorageData } from "./LocalStorageData";



function Todo() {
   
    const[divs , SetDivs] = useState(GetLocalStorageData());
    const HandleClick = (inputValue) => {
    const {id , content , checked} = inputValue;
    const isduplicate = divs.find((item) => item.content === content);
    if(isduplicate){
        alert("This Task is already exists");
        return;
    }
    SetDivs([...divs , {id:id , content:content , checked:checked}]);
    }
    const HandleRemoveTask = (content) =>{
        const filteredTasks = divs.filter((item) => item.content !== content);
        SetDivs(filteredTasks);
        
    }
    SetLocalStorageData(divs);
    const HandleCheckTask = (content) =>{
        const updatedTasks = divs.map((item) => {
            if(item.content === content){
                return {...item , checked: !item.checked};
            }
            return item;
        });
        SetDivs(updatedTasks);

    }
    
    
    const HandleClearTasks = () =>{
        SetDivs([]);
        
    }
  return (
    <>
     <section className={styles.MainContainer}>
     <h1 className={styles.TodoHeading}>Todo List</h1>
     <TodoData/>
     <TodoForm OnAddForm={HandleClick}/>
     <ol>
     {divs.map((value)=>{
        return(
         <TodoList key={value.id} value={value.content} checked={value.checked} HandleRemoveTask={HandleRemoveTask}
         HandleCheckTask={HandleCheckTask}
         />   
        )
     })}
     </ol>
     <section>
     <TodoClearBtn HandleClearTasks={HandleClearTasks}/>
    </section>
     </section>
    </>
  )
}

export default Todo
