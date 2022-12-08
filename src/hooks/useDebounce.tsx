import { useEffect, useState } from "react";

interface props {
  value: string;
  delay: number;
}

export function useDebounce({ value, delay }: props) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}
