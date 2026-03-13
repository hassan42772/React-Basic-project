import styles from "./Todo.module.css"
import { TiTickOutline } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
function TodoList({ value , HandleRemoveTask , HandleCheckTask , checked}) {
  return (
   <li className={styles.TodoTask}>
            <span className={checked ? styles.TodoTaskUnderline : styles.TodoTask}>{value}</span>
            <button  className={styles.TaskBtn} onClick={()=> HandleCheckTask(value)}><TiTickOutline /></button>
            <button  className={styles.TaskBtn}   onClick={() => HandleRemoveTask(value)}><MdDeleteForever /></button>
    </li>
  )
}

export default TodoList
