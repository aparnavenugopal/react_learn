import React, { useState } from 'react'
import Button from './Button'

const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  const id = crypto.randomUUID();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name) return;
    const newFriend = {
        name,
        image:`${image}?=${id}`,
        balance: 0,
        id: id,
    }
    onAddFriend(newFriend);
    console.log(onAddFriend);
    setName('');
    setImage('https://i.pravatar.cc/48');
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Friend Name 🥷🏻 </label>
      <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
      />

      <label>Image Url 🧖🏻‍♀️ </label>
      <input
         type="text"
         value={image}
         onChange={(e) => setImage(e.target.value)}
      />

      <Button>
        Add
      </Button> 
    </form>
  )
}

export default FormAddFriend