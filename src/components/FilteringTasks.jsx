import '../styles/FilteringTasks.css';

export default function FilteringTasks({onFilterTasks}){
  return (
    <div className="filter">
      <button className="all-tasks-btn" onClick={() => onFilterTasks('all')}>Все задачи</button>
      <button className="ready-tasks-btn" onClick={() => onFilterTasks('completed')}>Выполненные </button>
      <button className="pending-tasks-btn" onClick={() => onFilterTasks('pending')}>В работе!</button>
    </div>
  )
}