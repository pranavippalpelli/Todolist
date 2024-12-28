
import React from 'react';
// we can also props instead of {todo}
export default function Todoitem({ todo , ondelete }) {      
  return (
    <div className='border my-2 p-3'> 
      <h4 className='my-2 '>{todo.title}</h4>
      <p>{todo.desc}</p> {/* Ensure lowercase 'desc' matches the array */}
      <button className='btn btn-danger btn-sm' onClick={() =>{ondelete(todo)}}>Delete</button>
    </div>
  );
}
