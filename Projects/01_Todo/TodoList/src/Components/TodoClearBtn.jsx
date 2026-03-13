import styles from "./Todo.module.css"

function TodoClearBtn({HandleClearTasks}) {
  return (
   
      <button className={styles.TaskBtn} onClick={HandleClearTasks}>Clear All</button>
        
  )
}

export default TodoClearBtn
