import React from 'react';
import Todoitem from './todoitem';

export default function Todos(props) {
  const mystyle = {
    minHeight: "60vh",
    margin: "10px auto",
  };

  return (
    <div>
      <div className="container" style={mystyle}>
        <h3 className="my-3">Todos List</h3>
        {props.todos.length === 0 ? (
          <p>No todos to display</p>
        ) : (
          props.todos.map((todo) => (
            <Todoitem todo={todo} key={todo.sno} ondelete={props.ondelete} />
          ))
        )}
      </div>
    </div>
  );
}

