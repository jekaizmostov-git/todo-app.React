import { useEffect } from "react";

/**
 * Функция wrapper, которая вызывает callback, только после delay, если еще раз вызвать callback, до окончания delay таймер обнулится и функция не вызовется
 * @param {*} callback - переданная функция
 * @param {*} deps - зависимости
 * @param {*} delay - задержка
 */

export default function UseDebounceEffect(callback, deps, delay) {
  useEffect(() => {
    const handler = setTimeout(() => callback(), delay);
    return () => clearTimeout(handler);
  }, [...deps, delay]);
}
