import { useState, useEffect } from "react";

/** (фига се)
 * useLocalStorage — работает как useState, но синхронизирует данные с localStorage.
 * @param {string} key - ключ для localStorage
 * @param {*} initialValue - начальное значение
 */


export default function useLocalStorage(key, initialValue){

  const [data, setData] = useState(() => {
    try {
      const jsonValue = localStorage.getItem(key);
      return jsonValue != null?JSON.parse(jsonValue):initialValue;
    } catch (error) {
      console.error('Ошибка при чтении из localstorage:', error);  
      return initialValue;
    }
  })

  useEffect(() => {
    try{
      localStorage.setItem(key, JSON.stringify(data)); 
    } catch (error){
      console.error('Ошибка записи в localstorage!', error);
    }
  },[key, data])

  return [data, setData];
}

