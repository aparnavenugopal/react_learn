import React from 'react';
import './index.css';

const Header = () => {
  const style = { color: "red", fontSize: "48px", textTransform: "uppercase"};
  return (
    <div className='header'>
          <h1 style={style} >Fast React Pizza Co.</h1>
    </div>

  )
}

export default Header