import React from "react";
import "./todoCounter.css";

const TodoCounter = ({ completedTodos, totalTodos }) => {
  return (
    <>
      <h2 className="todocounter">
        You have completed {completedTodos} of {totalTodos} tasks
      </h2>
    </>
  );
};

export default TodoCounter;
