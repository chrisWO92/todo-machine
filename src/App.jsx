import React from "react";
import "./App.css";
import AppUI from "./AppUI";
import { TodoProvider } from "./components/TodoContext/TodoContext";

/* const defaultTodos = [
  { text: "hacer aseo", completed: false },
  { text: "hacer comida", completed: false },
  { text: "cuidar plantas", completed: false },
  { text: "cuentas", completed: false },
]; */

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>    
  );
}

export default App;
