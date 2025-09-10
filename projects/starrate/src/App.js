import { useState } from 'react';
import './App.css';

function App() {
  const [rating, setRating] = useState(0);

  return (
    <div className="container">
      <h1 className="head">Star Rating</h1>
      <p className="para">by Aparnavenugopal</p>
      <div className="stars">
        {Array(5).fill().map((_, index) => {
          const starValue = index + 1;
          return (
            <svg
              key={index}
              className="star"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              onClick={() => setRating(starValue)}
              fill={starValue <= rating ? "gold" : "lightgray"}
            >
              <path d="M12 2l2.9 6.26 6.9.5-5.2 4.74L18.8 21 
                       12 17.27 5.2 21l2.2-7.5-5.2-4.74 6.9-.5L12 2z" />
            </svg>
          );
        })}
      </div>
      <div className="rate">
        Rating : {rating}
      </div>
      <div>
        <button className="but" onClick={() => {setRating(0)}}>Reset Rating</button>
      </div>
    </div>
  );
}

export default App;