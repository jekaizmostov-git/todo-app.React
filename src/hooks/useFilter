import {useState} from 'react';

export default function useFilter(){
  const [filter,setFilter] = useState('all');
  function changeFilter(state){
    switch (state){
      case "all":
        setFilter('all');
        break;
        case "pending":
          setFilter('pending');
          break;
          case "completed":
            setFilter('completed');
            break;
          }
  }

  return {filter, setFilter, changeFilter}
}