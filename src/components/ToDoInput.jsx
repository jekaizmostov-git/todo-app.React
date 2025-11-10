// Поле ввода, кнопка добавления задач
import { useRef } from 'react';
import '../styles/ToDoInput.css';


export default function ToDoInput({onAddTask}){
  const inputRef = useRef(null);
  return (
    <div className='todo-input'>
      <input type="text" placeholder='Введите задачу...' ref={inputRef} />
      <button onClick={() => {
        const title = inputRef.current.value;
        if (title.trim().length !== 0){
          onAddTask(title);
          inputRef.current.value = '';
          return;
        } else {
          window.alert('Поле для ввода задачи пустое!');
          inputRef.current.focus();
        } 
      }}>Добавить</button>
    </div>
  )
}