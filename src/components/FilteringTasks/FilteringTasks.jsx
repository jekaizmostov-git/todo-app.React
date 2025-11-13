//import '../styles/FilteringTasks.css';

import styles from "./FilteringTasks.module.css";

export default function FilteringTasks({ onFilterTasks }) {
  return (
    <div className={styles.filter}>
      <button
        className={styles.allTasksBtn}
        onClick={() => onFilterTasks("all")}
      >
        Все задачи
      </button>
      <button
        className={styles.readyTasksBtn}
        onClick={() => onFilterTasks("completed")}
      >
        Выполненные
      </button>
      <button
        className={styles.pendingTasksBtn}
        onClick={() => onFilterTasks("pending")}
      >
        В работе!
      </button>
    </div>
  );
}
