import React from 'react'

const Task = ({ categories, onDelete }) => {
  return (
    <div>
       {
        categories.map((category, index) => (
            <div key={index}>
                <h3>{category.name}</h3>
                <div>
                    {
                        category.tasks.map((t) => (
                            <div key={t.id}>
                                {t.task} 
                                <button>edit</button>
                                <button onClick={() => onDelete(t.id)}>delete</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        ))
       }
    </div>
  )
}

export default Task