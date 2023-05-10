import React, { useContext } from "react";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import TodoCounter from "./components/TodoCounter/TodoCounter";
import TodoSearch from "./components/TodoSearch/TodoSearch";
import TodoList from "./components/TodoList/TodoList";
import TodoLoading from "./components/TodoLoading/TodoLoading";
import TodoItem from "./components/TodoItem/TodoItem";
import CreateTodoButton from "./components/CreateTodoButton/CreateTodoButton";
import Modal from "./components/Modal/Modal";
import TodoForm from "./components/TodoForm/TodoForm";
import { TodoContext } from "./components/TodoContext/TodoContext";

const AppUI = () => {
  const {
    showModal,
    loading,
    error,
    searchedTodos,
    totalTodos,
    completedTodos,
    onComplete,
    onDelete,
    valueSearch,
    onSearchValueChange,
    onSubmit,
    onCancel,
    taskTextHandler,
    createButtonHandler
  } = useContext(TodoContext);
  return (
    <>
      <TodoHeader>
        <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          valueSearch={valueSearch}
          onSearchValueChange={onSearchValueChange}
        />
      </TodoHeader>
      

      <TodoList>
        <ul id="task-list">
          {loading && (
            <>
              <TodoLoading />
              <TodoLoading />
              <TodoLoading />
            </>
          )}
          {error && <p className="msg error">Error</p>}
          {!loading && !searchedTodos.length && totalTodos !== 0 && (
            <p className="msg">Sin coincidencias!</p>
          )}
          {!loading && totalTodos === 0 && (
            <p className="msg">Agrega la primera tarea!</p>
          )}
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              complete={todo.completed}
              onComplete={onComplete}
              onDelete={onDelete}
            />
          ))}
        </ul>
      </TodoList>

      {showModal && (
        <Modal>
          <TodoForm 
            onSubmit={onSubmit}
            onCancel={onCancel}
            taskTextHandler={taskTextHandler}
          />
        </Modal>
      )}

      <CreateTodoButton 
        createButtonHandler={createButtonHandler}
      />
    </>
  );
};

export default AppUI;
