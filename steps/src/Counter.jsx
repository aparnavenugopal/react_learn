import React, { useState } from 'react'

const Counter = () => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  let now = new Date();
  let futureDate = new Date(now);
  futureDate.setDate(now.getDate() + count);

  const handleStepMinus = () => {
    if(step >0){
        setStep(step-1);
    }
  }

  const handleCountMinus = () => {
    if(count > 0){
        setCount(Math.abs(count-step));
    }
  }

  return (
    <>
      <div>
        <button onClick={handleStepMinus}>-</button>
        Step : {step}
        <button onClick={() => setStep(step +1)}>+</button>
      </div>
      <div>
        <button onClick={handleCountMinus}>-</button>
        Count : {count}
        <button onClick={() => setCount(count + step)}>+</button>
      </div>
      <p>
  {count === 0 
    ? `Today is ${now.toDateString()}`
    : count > 0 
      ? `${count} days after ${now.toDateString()} will be ${futureDate.toDateString()}`
      : `${Math.abs(count)} days before ${now.toDateString()} was ${futureDate.toDateString()}`
  }
</p>
    </>
  )
}

export default Counter;