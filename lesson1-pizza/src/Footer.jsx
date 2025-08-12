import React from 'react'
import "./index.css"

const Footer = () => {
  const hour = new Date().getHours()
  const openHour = 6;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  if(!isOpen){
    return(
      <p>
        We're happy to welcome you between {openHour}:00 and {closeHour}:00.
      </p>
    )
  }

  return (
    <div className="footer">
        {
          isOpen && (
            <p>
              We're open until {closeHour}:00. come visit us or order online.
            </p>
          )
        }
    <button className='btn'>Order</button>
    </div>
  )
}

export default Footer