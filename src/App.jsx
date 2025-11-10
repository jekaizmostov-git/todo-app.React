import './styles/App.css';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
import { useState } from 'react';
import FilteringTasks from './components/FilteringTasks';

import UseDebounceEffect from './hooks/useDebounceEffect';


function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  UseDebounceEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks], 300)

  function onAddTask(title){ 
    setTasks((tasks) => [...tasks, {id:crypto.randomUUID(), title:title, completed:false}]);
    setStateFilter('all');
  }

  function onDeleteTask(id){
    setTasks((tasks) => tasks.filter(task => task.id !== id ));
    setStateFilter('all');
  }

  function onToggleCompleteId(id){
    setTasks((tasks) => tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
  }

  function onChangeTaskTitle(id, newTitle){
    setTasks((tasks) =>tasks.map(task => task.id === id ? {...task, title:newTitle} : task) );
  }

  const [stateFilter,setStateFilter] = useState('all');
  function onFilterTasks(state){
    switch (state){
      case "all":
        setStateFilter('all');
        break;
      case "pending":
        setStateFilter('pending');
        break;
      case "completed":
        setStateFilter('completed');
        break;
    }
  }

  return (
    <div className='app'>
      <h1>ToDo List</h1>
      <ToDoInput onAddTask={onAddTask} />
      <ToDoList 
        tasks={
          stateFilter === 'all'?tasks:((stateFilter === 'pending')?tasks.filter(t => !t.completed):tasks.filter(t =>t.completed))
        } 
        onDeleteTask={onDeleteTask} 
        onToggleCompleteId={onToggleCompleteId}
        onChangeTaskTitle={onChangeTaskTitle}
      />
      <FilteringTasks onFilterTasks={onFilterTasks}/>
    </div>
  )
}

export default App
