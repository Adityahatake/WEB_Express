import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Flag, RotateCcw } from 'lucide-react';
import './Stopwatch.css';

const Stopwatch = () => {
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

  const handleStartPause = () => {
    if (isRunning) {
      pausedTimeRef.current = time;
    }
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    pausedTimeRef.current = 0;
    setLaps([]);
  };

  const handleLap = () => {
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
  };

  const formatTime = (ms) => {
    const min = Math.floor(ms / 60000);
    const sec = Math.floor((ms % 60000) / 1000);
    const centi = Math.floor((ms % 1000) / 10);

    return {
      min: min.toString().padStart(2, '0'),
      sec: sec.toString().padStart(2, '0'),
      centi: centi.toString().padStart(2, '0')
    };
  };

  const { min, sec, centi } = formatTime(time);

  return (
    <div className="stopwatch-container">
      <div className="stopwatch-glass">
        <div className={`time-display ${isRunning ? 'active' : ''}`}>
          <div className="time-group">
            <span className="time-value">{min}</span>
            <span className="time-label">MIN</span>
          </div>
          <span className="colon">:</span>
          <div className="time-group">
            <span className="time-value">{sec}</span>
            <span className="time-label">SEC</span>
          </div>
          <span className="colon dot">.</span>
          <div className="time-group centi">
            <span className="time-value accent">{centi}</span>
            <span className="time-label">MS</span>
          </div>
        </div>

        <div className="controls">
          <button 
            className="control-btn reset" 
            onClick={handleReset}
            disabled={time === 0}
            title="Reset"
          >
            <RotateCcw size={24} />
          </button>
          
          <button 
            className={`control-btn main ${isRunning ? 'pause' : 'start'}`} 
            onClick={handleStartPause}
            title={isRunning ? "Pause" : "Start"}
          >
            {isRunning ? <Pause size={32} /> : <Play size={32} className="play-icon" />}
          </button>
          
          <button 
            className="control-btn lap" 
            onClick={handleLap}
            disabled={!isRunning}
            title="Lap"
          >
            <Flag size={24} />
          </button>
        </div>

        {laps.length > 0 && (
          <div className="laps-container">
            <div className="laps-header">
              <span>Lap</span>
              <span>Time</span>
              <span>Total</span>
            </div>
            <ul className="laps-list">
              {laps.map((lap, index) => {
                const lapNum = laps.length - index;
                const bestLap = [...laps].sort((a,b) => a.lapDuration - b.lapDuration)[0].id;
                const worstLap = [...laps].sort((a,b) => b.lapDuration - a.lapDuration)[0].id;
                
                let lapClass = '';
                if (laps.length > 1) {
                   if (lap.id === bestLap) lapClass = 'best';
                   if (lap.id === worstLap) lapClass = 'worst';
                }

                return (
                  <li key={lap.id} className={`lap-item ${lapClass}`}>
                    <span className="lap-num">{String(lapNum).padStart(2, '0')}</span>
                    <span className="lap-duration">
                      {formatTime(lap.lapDuration).min}:{formatTime(lap.lapDuration).sec}.{formatTime(lap.lapDuration).centi}
                    </span>
                    <span className="lap-total">
                      {formatTime(lap.time).min}:{formatTime(lap.time).sec}.{formatTime(lap.time).centi}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stopwatch;
