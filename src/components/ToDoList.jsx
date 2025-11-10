//Список всех задач
import '../styles/ToDoList.css';

import ToDoItem from './ToDoItem';

export default function ToDoList({tasks, onDeleteTask, onToggleCompleteId, onChangeTaskTitle}){
  let tasksIsEmpty = false;
  if (tasks.length === 0){
    tasksIsEmpty = true;
  }
  return (
    <ul className='todo-list'>
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