import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";


function App() {
  const [items, setItems] = useState([]);

   const handleAddItems = (item) => {
     setItems([...items,item])
   }

   const handelDeleteItem = (id) => {
     setItems(items => {
      return items.filter(item => item.id !== id);
    });
   }

   const handleToggleItem = (id) => {
    setItems(items => {
      return items.map(item => item.id === id ? {...item, packed:!item.packed}: !item.packed)
    })
   }

  return (
    <div>
       <Logo/>
       <Form onAddItems={handleAddItems}/>
       <PackingList items={items} onDeleteItem={handelDeleteItem} onToggleItems = {handleToggleItem}/>
       <Stats items={items}/>
    </div>
  );
}

export default App;
