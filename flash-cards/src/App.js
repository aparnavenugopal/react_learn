import { useState } from 'react';
import './index.css';

const cards = [
  "What language is React based on?",
  "What are the building blocks of a React app?",
  "What's the name of the syntax we use to describe a UI in React?",
  "How to pass data from parent to child components?",
  "How to give components memory?",
  "What do we call an input element that is completely synchronized with state?"
];

const answers = [
  "JavaScript",
  "Components",
  "JSX",
  "Props",
  "State",
  "Controlled"
];

function App() {
  const [flipped, setFlipped] = useState(Array(cards.length).fill(false));
  const handleSwitch = (index) => {
     const updated = flipped.map((val,i) =>
        i === index ? !val : val
     );
     setFlipped(updated);
  }
  return (
    <div className="flashcard-container">
      {
        cards.map((question, index) => (
          <div
            key={index}
            className={`flashcard ${flipped[index] ? 'flipped' : ''}`}
            onClick={() => handleSwitch(index)}
           >
            {flipped[index]? answers[index] : question}
          </div>
        ))
          
      }
    </div>
  );
}

export default App;
