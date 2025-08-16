import React from 'react'
import '../index.css'
import Item from './Item';


const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];


const PackingList = ({ items }) => {
  return (
    <div className='list'>
      <ul>
      {
        items.map(item => <Item item={item} key={item.id} />)
      } 
      </ul>
    </div>
  )
}

export default PackingList