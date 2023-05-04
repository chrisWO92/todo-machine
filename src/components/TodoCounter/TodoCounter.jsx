import React, { useContext } from "react";
import "./todoCounter.css";
import { TodoContext } from "../TodoContext/TodoContext";

const TodoCounter = () => {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <>
      <h2 className="todocounter">
        Has completado {completedTodos} de {totalTodos} tareas
      </h2>
    </>
  );
};

export default TodoCounter;
