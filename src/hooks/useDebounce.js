import { useState, useEffect } from 'react';

export function useDebounce(valor, delay) {
  const [valorDebounced, setValorDebounced] = useState(valor);

  useEffect(() => {
    const handler = setTimeout(() => {
      setValorDebounced(valor);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [valor, delay]);

  return valorDebounced;
}