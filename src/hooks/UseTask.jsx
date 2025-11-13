import useLocalStorage from "./useLocalStorage";

export default function useTask(){
  const [tasks, setTasks] = useLocalStorage('tasks', []);

    function addTask(title){ 
      setTasks((tasks) => [...tasks, {id:crypto.randomUUID(), title:title, completed:false}]);
    }
  
    function deleteTask(id){
      setTasks((tasks) => tasks.filter(task => task.id !== id ));
    }
  
    function toggleTask(id){
      setTasks((tasks) => tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
    }
  
    function editTask(id, newTitle){
      setTasks((tasks) =>tasks.map(task => task.id === id ? {...task, title:newTitle} : task) );
    }

    return {tasks, addTask, deleteTask, toggleTask, editTask };
}