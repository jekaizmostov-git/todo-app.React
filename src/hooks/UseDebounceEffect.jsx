import { useEffect } from "react";

export default function UseDebounceEffect(callback, deps, delay){
  useEffect(() => {
    const handler = setTimeout(() => callback(), delay);
    return () => clearTimeout(handler);
  }, [...deps, delay]);
}