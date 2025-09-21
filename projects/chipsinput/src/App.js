import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [chips, setChips] = useState([]);
  const handleChange = (e) => {
      setValue(e.target.value)
  }

  const handleEnter = (e) => {
    if(e.key === "Enter"){
      e.preventDefault();
      if (value.trim() === "") return; 
      let newChips = [...chips,value];
      setChips(newChips);
      console.log("value is",newChips);
      setValue('');
    }
  }

  const deleteButton = (index) => {
    setChips(chips.filter((_,i) => i !== index))
  }
  return (
    <div className="container">
      <h1 className="head">Chips Input</h1>
      <input
        placeholder="Type a Chip"
        className="text"
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleEnter}
      />
      <div className="chips-container">
        {chips.map((chip,index) => (
          <span key={index} className='chip'>
             {chip}
             <button className='delete' onClick={() => deleteButton(index)}>
               X
             </button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
