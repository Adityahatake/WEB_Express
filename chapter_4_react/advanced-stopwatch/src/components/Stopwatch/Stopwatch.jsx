import React from 'react';
import { Play, Pause, Flag, RotateCcw } from 'lucide-react';
import { useStopwatch } from '../../hooks/useStopwatch';
import { formatTime } from '../../utils/formatTime';
import './Stopwatch.css';

const Stopwatch = () => {
  const { time, isRunning, laps, handleStartPause, handleReset, handleLap } = useStopwatch();
  
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
