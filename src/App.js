
// import './App.css';
// import Header from './mycomponents/header';
// import Todos from './mycomponents/todos';
// import React, { useState, useEffect } from 'react';
// import Footer from './mycomponents/footer';
// import { Addtodo } from './mycomponents/addtodo';
// import { About } from './mycomponents/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


// function App() {
//   // Initialize todos from localStorage or set it to an empty array
//   let inittodo;
//   if (localStorage.getItem("todos") === null) {
//     inittodo = [];
//   } else {
//     inittodo = JSON.parse(localStorage.getItem("todos"));
//   }

//   // State for managing the todo list
//   const [todos, settodos] = useState(inittodo);

//   // Effect to update localStorage whenever the todos array changes
//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   // Function to delete a todo
//   const ondelete = (todo) => {
//     console.log("Deleting todo", todo);
//     settodos(todos.filter((e) => e !== todo));
//   };

//   // Function to add a new todo
//   const addtodo = (title, desc) => {
//     console.log("Adding todo", title, desc);
//     let sno;
//     if (todos.length === 0) {
//       sno = 1; // Start with 1 if no todos exist
//     } else {
//       sno = todos[todos.length - 1].sno + 1;
//     }
//     const mytodo = {
//       sno: sno,
//       title: title,
//       desc: desc,
//     };
//     settodos([...todos, mytodo]);
//   };

//   return (
//     <>
//       <Router>
//       <Header />
//       <Switch>
          
//           <Route exact path="/" render ={()=>{
//             return(
//             <>
//             <Addtodo addtodo={addtodo} />
//             <Todos todos={todos} ondelete={ondelete} />
//             </>)
//           }}>
//           </Route>

//           <Route exact path="/about">
//             <About />
//           </Route>
//       </Switch>

//       <Footer />
//       </Router>
//     </>
//   );
// }

// export default App;

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

