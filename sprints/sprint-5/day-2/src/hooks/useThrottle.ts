import { useState, useEffect, useRef } from 'react';

export function useThrottle<T>(value: T, delay: number): T {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    const timeRemaining = delay - (Date.now() - lastExecuted.current);

    if (timeRemaining <= 0) {
      setThrottledValue(value);
      lastExecuted.current = Date.now();
    } else {
      const timeout = setTimeout(() => {
        setThrottledValue(value);
        lastExecuted.current = Date.now();
      }, timeRemaining);

      return () => clearTimeout(timeout);
    }
  }, [value, delay]);

  return throttledValue;
}
