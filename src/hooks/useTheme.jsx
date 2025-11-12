import {useState} from 'react';
import useDebounceEffect from './useDebounceEffect';

export default function useTheme(){
  const [theme, setTheme] = useState(() => {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? savedTheme : "light";
    });
    function changeTheme(){
      (theme === 'dark')?setTheme('light'):setTheme('dark');
    }
    
    
    //document.body.dataset.theme = theme;
  
    useDebounceEffect(()=> {
      localStorage.setItem('theme', theme);
    },[theme], 500);

    return {theme, changeTheme};
}