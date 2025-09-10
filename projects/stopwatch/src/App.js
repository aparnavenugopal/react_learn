import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [hault, setHault] = useState(true);
  const [resume, setResume] = useState(false);

  useEffect(() => {
    let watch;
    if (!hault) {
      watch = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(watch);
  }, [hault]);

  const handleReset = () => {
    setTime(0);
    setHault(true); 
  }

  const handlePause = () => {
    setHault(true);
  }

  const handleStart = () => {
    setTime(0);
    setHault(false);
  }

  const handleResume = () => {
    setResume(true);
    if(resume){
      setHault(false); 
    }
  }

  return (
    <div className="container">
      <h1>Stopwatch</h1>
      <div>
        <h2 className="time">{time} S</h2>
      </div>
      <div className="buttons">
        <button className="but" onClick={handleStart}>Start</button>
        <button className="but" onClick={handlePause}>Pause</button>
        <button className="but" onClick={handleReset}>Reset</button>
        <button className="but" onClick={handleResume}>Resume</button>
      </div>
    </div>
  );
}

export default App;
