// Поле ввода, кнопка добавления задач
import { useRef } from "react";
//import '../../styles/ToDoInput.css';
import styles from "./ToDoInput.module.css";

export default function ToDoInput({ onAddTask }) {
  const inputRef = useRef(null);

  function handleAddTask() {
    const title = inputRef.current.value;
    if (title.trim().length !== 0) {
      onAddTask(title);
      inputRef.current.value = "";
      return;
    } else {
      window.alert("Поле для ввода задачи пустое!");
      inputRef.current.focus();
    }
  }

  return (
    <div className={styles.todoInput}>
      <input type="text" placeholder="Введите задачу..." ref={inputRef} />
      <button onClick={handleAddTask}>Добавить</button>
    </div>
  );
}
