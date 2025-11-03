import {useCallback, useEffect, useRef, useState} from 'react';

type UsePressAndHoldReturn = {
  onPressIn: () => void;
  onPressOut: () => void;
  isHeld: boolean;
};

export function usePressAndHold(
  onHoldReached: () => void,
  delayMs: number = 1000,
): UsePressAndHoldReturn {
  const [isHeld, setIsHeld] = useState<boolean>(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const latestCallbackRef = useRef(onHoldReached);

  useEffect(() => {
    latestCallbackRef.current = onHoldReached;
  }, [onHoldReached]);

  const clear = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const onPressIn = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setIsHeld(true);
      latestCallbackRef.current();
    }, delayMs);
  }, [delayMs]);

  const onPressOut = useCallback(() => {
    clear();
    setIsHeld(false);
  }, [clear]);

  useEffect(() => {
    return () => clear();
  }, [clear]);

  return {onPressIn, onPressOut, isHeld};
}

export default usePressAndHold;


