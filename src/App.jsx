import styles from './styles/App.module.css';


import ToDoInput from './components/ToDoInput/ToDoInput';
import ToDoList from './components/ToDoList/ToDoList';
//import { useState } from 'react';
import FilteringTasks from './components/FilteringTasks/FilteringTasks';

//import useDebounceEffect from './hooks/useDebounceEffect';
import useTask from './hooks/UseTask';
import useTheme from './hooks/useTheme';
import useFilter from './hooks/useFilter';


function App() {        
  const {tasks, addTask, deleteTask, toggleTask, editTask } = useTask();
  const {filter, setFilter, changeFilter} = useFilter();
  const {theme, changeTheme} = useTheme();   

  function handleAddTask(title){
    addTask(title);
    setFilter('all');
  }

  document.body.dataset.theme = theme;
  return (
    <div className={styles.app}>
      <button className='change-theme-btn' onClick={changeTheme}>THEME</button>
      <h1>ToDo List</h1>
      <ToDoInput onAddTask={handleAddTask}/>
      <ToDoList 
        tasks={
          filter === 'all'?tasks:((filter === 'pending')?tasks.filter(t => !t.completed):tasks.filter(t =>t.completed))
        } 
        onDeleteTask={deleteTask} 
        onToggleCompleteId={toggleTask}
        onChangeTaskTitle={editTask}
      />
      <FilteringTasks onFilterTasks={changeFilter}/>
    </div>
  )
}

export default App
