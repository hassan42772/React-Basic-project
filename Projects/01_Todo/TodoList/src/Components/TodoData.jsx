import { useState } from 'react';
import styles from './Todo.module.css'

function TodoData() {

const[dateTime , SetDateTime] = useState(new Date().toLocaleString());

setInterval(() => {
        SetDateTime(new Date().toLocaleString());
}, 1000);

  return (
    <>
      <h2 className={styles.TodoDate}>{dateTime}</h2>
    </>
  )
}

export default TodoData
