
import useDebounceEffect from './useDebounceEffect';
import useLocalStorage from './useLocalStorage';

export default function useTheme(){
  const [theme,setTheme] = useLocalStorage('theme', 'light');
    function changeTheme(){
      (theme === 'dark')?setTheme('light'):setTheme('dark');
    }
    
    
    //document.body.dataset.theme = theme;
  
    useDebounceEffect(()=> {
      localStorage.setItem('theme', theme);
    },[theme], 500);

    return {theme, changeTheme};
}