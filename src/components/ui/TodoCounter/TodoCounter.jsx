import React from "react";
import "./todoCounter.css";

const TodoCounter = ({ completedTodos, totalTodos, loading }) => {
  return (
    <>
      <h2 className={`todocounter ${loading ? 'todocounter-loading' : ''}`}>
        You have completed {completedTodos} of {totalTodos} tasks
      </h2>
    </>
  );
};

export default TodoCounter;
