import { useState } from 'react';

export function useLocalStorage<T extends string | boolean | number | object>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] {
  const storedValue = localStorage.getItem(key);
  const parsedStoredValue = storedValue ? (JSON.parse(storedValue) as T) : initialValue;

  const [value, setInternalValue] = useState(parsedStoredValue);

  const setValue = (v: T) => {
    localStorage.setItem(key, JSON.stringify(v));
    setInternalValue(v);
  };

  return [value, setValue];
}
