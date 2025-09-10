
import { useState } from 'react';
import './App.css';
import Task from './Task';

function App() {
  const [board, setBoard] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('');

  const handleTaskSubmit = () => {
    let newTaskObj = {
       id: crypto.randomUUID(),
       task: taskInput,
       category: categoryInput,
    }
    setBoard([...board,newTaskObj]);
    setTaskInput('');
    setCategoryInput('');
  }
  let categoryMap = {};
  board.forEach((item) => {
    if(!categoryMap[item.category]){
      categoryMap[item.category] = [];
    }
    categoryMap[item.category].push({ id: item.id, task: item.task });
  })

  const categories = Object.keys(categoryMap).map((k) => (
    {
      name: k,
      tasks: categoryMap[k],
    }
  ));

  const handleDelete = (id) => {
    setBoard(board.filter(x => x.id !== id));
  }

  const handleEdit = (id) => {
    
  }

  return (
    <div>
       <h2>Trello-like Task Board</h2>
       <input
          name="task"
          placeholder = "Task name"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
       />
       <input
          name="category"
          placeholder="Task category"
          value={categoryInput}
          onChange={(e) => setCategoryInput(e.target.value)}
       />
       <button onClick={handleTaskSubmit}>
         Add Task
       </button>
       <Task categories={categories} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
