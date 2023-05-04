import React, { useContext } from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./todoList.css";
import { TodoContext } from "../TodoContext/TodoContext";

const TodoList = () => {
  const {
    todos,
    searchedTodos,
    saveTodos,
    loading,
    error,
    onComplete,
    onDelete,
    totalTodos
  } = useContext(TodoContext);

  return (
    <>
      <ul id="task-list">
        {loading && <p className="msg">Cargando...</p>}
        {error && <p className="msg error">Error</p>}
        {!loading && !searchedTodos.length && (totalTodos !== 0) && <p className="msg">Sin coincidencias!</p>}
        {!loading && (totalTodos === 0) && <p className="msg">Agrega la primera tarea!</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            todos={todos}
            key={todo.text}
            text={todo.text}
            complete={todo.completed}
            saveTodos={saveTodos}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
