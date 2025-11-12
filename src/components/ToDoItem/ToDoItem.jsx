// Отдельная задача, с текстом, кнопками: выполнить, удалить.

import styles from './ToDoItem.module.css';
import { useRef, useState, useEffect } from 'react';

export default function ToDoItem({task, onDeleteTask, onToggleCompleteId, onChangeTaskTitle}){
  const [status, setStatus] = useState('read');
  const refTask = useRef(null);
  let taskContent;

  function doubleClickHandler(){
    setStatus('write');
  }
  function blurHandler(e){
    setStatus('read');
    onChangeTaskTitle(task.id, e.target.value);
  }
  function keyDownHandler(e){
    if (e.key === "Enter"){
      e.target.blur();
    }
  }

  useEffect(() => { 
    if (status === "write"){
      refTask.current?.focus();
    }
  },[status]);

  if (status === 'read'){
    taskContent = <span 
        className={task.completed?styles.completed:''} 
        onDoubleClick={doubleClickHandler}
        ref={refTask}
        >
          {task.title}
        </span>;
  } else if (status === 'write'){
    taskContent = <input 
          className={styles.changeTaskTitle}
          type="text" 
          defaultValue={task.title}
          onBlur={blurHandler}
          onKeyDown={keyDownHandler}
          ref={refTask}
        />
  }

  
  return (
    <li className={styles.todoItem} >
        {taskContent}
       <div>
         <button onClick={() => onToggleCompleteId(task.id)}>✅</button>
         <button onClick={() => onDeleteTask(task.id)}>🗑️</button>
       </div>
     </li>
  )
}