import React from 'react'

const Accordian = ({ title, content, open, onOpen, id, checked, onCheck }) => {
  return (
      <div className='accordion-item' onClick={() => onOpen(id)}> 
      <h3>{title}</h3>
        {open && 
          <div>

         <p>{content}</p>
         <label>
           <input
              type="checkbox"
              checked = {checked}
              onChange = {() => onCheck(id)}
           />
           I agree
         </label>
         </div>
         }  
      </div>

 
  )
}

export default Accordian