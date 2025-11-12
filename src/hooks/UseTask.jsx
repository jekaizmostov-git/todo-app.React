import {useState} from "react";
import useDebounceEffect from "./useDebounceEffect";

export default function useTask(){
  const [tasks, setTasks] = useState(() => {
      const saved = localStorage.getItem('tasks');
      return saved ? JSON.parse(saved) : [];
    });
  
    useDebounceEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks], 500)
  
    function addTask(title){ 
      setTasks((tasks) => [...tasks, {id:crypto.randomUUID(), title:title, completed:false}]);
      //setStateFilter('all');
    }
  
    function deleteTask(id){
      setTasks((tasks) => tasks.filter(task => task.id !== id ));
      //setStateFilter('all');
    }
  
    function toggleTask(id){
      setTasks((tasks) => tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
    }
  
    function editTask(id, newTitle){
      setTasks((tasks) =>tasks.map(task => task.id === id ? {...task, title:newTitle} : task) );
    }

    return {tasks, addTask, deleteTask, toggleTask, editTask };
}