import React from 'react'

const Item = ({ title, text, open, onOpen, index }) => { 
  const handleClick = () => {
    onOpen(index);
  }
  return (
    <div className={`item ${open ? "open" : ""}`} onClick={handleClick}>
        <span className="number">{index+1}</span>
        <h3 className="title">{title}</h3>
        <span className="icon">{open ? "-" : "+"}</span>
         {
            open && (
              <div className="content-box">
                <p>{text}</p>
              </div>
            )
         }
    </div>
  )
}

export default Item