//Список всех задач
import styles from "./ToDoList.module.css";

import ToDoItem from '../ToDoItem/ToDoItem';

export default function ToDoList({tasks, onDeleteTask, onToggleCompleteId, onChangeTaskTitle}){
  let tasksIsEmpty = false;
  if (tasks.length === 0){
    tasksIsEmpty = true;
  }
  return (
    <ul className={styles.todoList}>
      {tasksIsEmpty && <li>Список пуст</li>}
      {tasks.map(task => 
        <ToDoItem task={task} 
        onDeleteTask={() => onDeleteTask(task.id)} 
        key={task.id}
        onToggleCompleteId={() => onToggleCompleteId(task.id)}
        onChangeTaskTitle={onChangeTaskTitle}
        />
      )}
    </ul>
  );
}