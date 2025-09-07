import { useState, useEffect } from 'react';
import './App.css';

function App() { 
  const seqObj = {
       "red": 10000,
       "yellow": 5000,
       "green": 15000
   }

  const keys = Object.keys(seqObj);
  const [active, setActive] = useState(keys[0]);
  const [index, setIndex] = useState(0);
  const [manual, setManual] = useState(false);
  const [timers, setTimers] = useState(seqObj);

  useEffect(() => {
    if(manual) return;
    const timer = setTimeout(() => { 
      let nextIndex = index+1;
      if(nextIndex === keys.length){
        nextIndex=0;
      }
      setIndex(nextIndex);
      setActive(keys[nextIndex])
    }, timers[keys[index]] );
    return () => clearTimeout(timer);
  },[index,keys,timers, manual]);

  const handleActivate = (index) => {
       setManual(true);
       setIndex(index);
       setActive(keys[index]);
  }

  const handleResume = () => {
    setManual(false);
  }

  const handleColorIncrease = (color) => {
    const newTimers = {...timers};
    newTimers[color] = newTimers[color] + 5000;
    setTimers(newTimers);
  }

  return (
    <div>
      <h1 className='heading'>Traffic Light System</h1>
       <div className='traffic-light'>
          <div className={`light red ${active === 'red'? "active" : ""}`}></div>
          <div className={`light yellow ${active === 'yellow'? "active": ""}`}></div>
          <div className={`light green ${active === 'green'? "active": ""}`}></div>
       </div>
       <div className="activate">
         <button className="button" onClick= {() => handleActivate(0)}>Activate Red</button>
         <button className="button" onClick={() => handleActivate(1)}>Activate Yellow</button>
         <button className="button" onClick={() => handleActivate(2)}>Activate Green</button>
         <button className="button" onClick={handleResume}>Resume to automatic</button>
       </div>
       <h2 className="heading">Adjust Timer</h2>
       <div className="activate">
         <button className="button" onClick={() => handleColorIncrease('red')}>Increase Red Timer by 5s</button>
         <button className="button" onClickCapture={() => handleColorIncrease('yellow')}>Increase Yellow Timer by 5s</button>
         <button className="button" onClick={() => handleColorIncrease('green')}>Increase Green Timer by 5s</button>
       </div>
       <div>
          <p className="render">
            <span>Red Timer: 10s</span>
            <span>Yellow Timer: 5s</span>
            <span>Green Timer: 15s</span>
          </p>
       </div>
    </div>
  );
}

export default App;
