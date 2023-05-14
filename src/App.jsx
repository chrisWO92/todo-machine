import React from "react";
import "./App.css";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import TodoCounter from "./components/TodoCounter/TodoCounter";
import TodoSearch from "./components/TodoSearch/TodoSearch";
import TodoList from "./components/TodoList/TodoList";
import TodoLoading from "./components/TodoLoading/TodoLoading";
import TodoItem from "./components/TodoItem/TodoItem";
import CreateTodoButton from "./components/CreateTodoButton/CreateTodoButton";
import Modal from "./components/Modal/Modal";
import TodoForm from "./components/TodoForm/TodoForm";
import { useTodos } from "./components/useTodos/useTodos";
import TodosLoading from "./components/TodosLoading/TodosLoading";
import ChangeStorageWithListener from "./components/ChangeStorage/ChangeStorage";

const App = () => {
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
    createButtonHandler,
    sincronize,
  } = useTodos();
  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter 
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          //loading={loading}
        />
        <TodoSearch
          valueSearch={valueSearch}
          onSearchValueChange={onSearchValueChange}
          //loading={loading}
        />
      </TodoHeader>
      
      <TodoList
        loading={loading}
        searchedTodos={searchedTodos}
        error={error}
        totalTodos={totalTodos}
        onError={() => <p className="msg error">Error</p>}
        onEmptySearch={() => <p className="msg">Sin coincidencias!</p>}
        onAddFirstTask={() => <p className="msg">Agrega la primera tarea!</p>}
        onLoading={() => <TodosLoading />}
        render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            complete={todo.completed}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        )}
      >
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

      <ChangeStorageWithListener 
        sincronize={sincronize}
      />
    </>
  );
};

export default App;
