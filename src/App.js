
import './App.css';
import Header from './mycomponents/header';
import Todos from './mycomponents/todos';
import React, { useState, useEffect } from 'react';
import Footer from './mycomponents/footer';
import { Addtodo } from './mycomponents/addtodo';
import { About } from './mycomponents/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let inittodo;
  try {
    inittodo = JSON.parse(localStorage.getItem("todos")) || [];
  } catch (e) {
    inittodo = [];
  }

  const [todos, settodos] = useState(inittodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const ondelete = (todo) => {
    settodos(todos.filter((e) => e !== todo));
  };

  const addtodo = (title, desc) => {
    let sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
    const mytodo = { sno, title, desc };
    settodos([...todos, mytodo]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Addtodo addtodo={addtodo} />
              <Todos todos={todos} ondelete={ondelete} />
            </>
          }
        />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

