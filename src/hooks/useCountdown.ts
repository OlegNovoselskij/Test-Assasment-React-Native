import {useCallback, useEffect, useRef, useState} from 'react';

type UseCountdownReturn = {
  timeLeft: number;
  isRunning: boolean;
  start: () => void;
  pause: () => void;
  reset: () => void;
};

export function useCountdown(initialSeconds: number): UseCountdownReturn {
  const [timeLeft, setTimeLeft] = useState<number>(initialSeconds);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalIdRef = useRef<ReturnType<typeof setInterval> | null>(
    null,
  );

  const clear = useCallback(() => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }
  }, []);

  const tick = useCallback(() => {
    setTimeLeft(prev => {
      if (prev <= 1) {
        clear();
        setIsRunning(false);
        return 0;
      }
      return prev - 1;
    });
  }, [clear]);

  const start = useCallback(() => {
    if (isRunning || timeLeft <= 0) return;
    setIsRunning(true);
    intervalIdRef.current = setInterval(tick, 1000);
  }, [isRunning, timeLeft, tick]);

  const pause = useCallback(() => {
    setIsRunning(false);
    clear();
  }, [clear]);

  const reset = useCallback(() => {
    setIsRunning(false);
    clear();
    setTimeLeft(initialSeconds);
  }, [clear, initialSeconds]);

  useEffect(() => {
    return () => {
      clear();
    };
  }, [clear]);

  return {timeLeft, isRunning, start, pause, reset};
}

export default useCountdown;


