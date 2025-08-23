import React from 'react'
import '../index.css'

const Stats = ({ items }) => {
  if(!items.length) return <p className= "footer">
    <em>
      Start adding some items in your packing list
    </em>
  </p>
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked/ numItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100 ? 'You got everything ! ready to go': 
      ` you have ${numItems} items on your list, and you already packed ${numPacked} ${percentage}
    ` }
     </footer>
  )
}

export default Stats