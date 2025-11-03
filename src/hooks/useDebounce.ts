import {useCallback, useEffect, useRef} from 'react';

type DebouncedFunction<T extends (...args: any[]) => void> = (
  ...args: Parameters<T>
) => void;

export function useDebounce<T extends (...args: any[]) => void>(
  callback: T,
  delayMs: number,
) : DebouncedFunction<T> {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const latestCallbackRef = useRef<T>(callback);

  useEffect(() => {
    latestCallbackRef.current = callback;
  }, [callback]);

  const cancel = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const debounced = useCallback(
    (...args: Parameters<T>) => {
      cancel();
      timeoutRef.current = setTimeout(() => {
        latestCallbackRef.current(...args);
        timeoutRef.current = null;
      }, delayMs);
    },
    [cancel, delayMs],
  );

  useEffect(() => {
    return () => cancel();
  }, [cancel]);

  return debounced;
}

export default useDebounce;


