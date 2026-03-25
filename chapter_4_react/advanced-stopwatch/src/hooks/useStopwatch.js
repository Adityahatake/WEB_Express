import { useState, useEffect, useRef, useCallback } from 'react';

export const useStopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  
  const timerRef = useRef(null);
  const startTimeRef = useRef(0);
  const pausedTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - pausedTimeRef.current;
      timerRef.current = setInterval(() => {
        setTime(Date.now() - startTimeRef.current);
      }, 10);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const handleStartPause = useCallback(() => {
    if (isRunning) {
      pausedTimeRef.current = time;
    }
    setIsRunning(!isRunning);
  }, [isRunning, time]);

  const handleReset = useCallback(() => {
    setIsRunning(false);
    setTime(0);
    pausedTimeRef.current = 0;
    setLaps([]);
  }, []);

  const handleLap = useCallback(() => {
    if (isRunning) {
      setLaps((prevLaps) => [
        {
          id: Date.now(),
          time: time,
          lapDuration: prevLaps.length > 0 ? time - prevLaps[0].time : time,
        },
        ...prevLaps,
      ]);
    }
  }, [isRunning, time]);

  return { time, isRunning, laps, handleStartPause, handleReset, handleLap };
};
