import useLocalStorage from "./useLocalStorage";

export default function useTheme() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  function changeTheme() {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }

  return { theme, changeTheme };
}
