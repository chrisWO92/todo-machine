import React from "react";
import "../App.css";
import TodoHeader from "../../ui/TodoHeader/TodoHeader";
import TodoCounter from "../../ui/TodoCounter/TodoCounter";
import TodoSearch from "../../ui/TodoSearch/TodoSearch";
import TodoList from "../../ui/TodoList/TodoList";
import TodoLoading from "../../ui/TodoLoading/TodoLoading";
import TodoItem from "../../ui/TodoItem/TodoItem";
import CreateTodoButton from "../../ui/CreateTodoButton/CreateTodoButton";
import Modal from "../../ui/Modal/Modal";
import TodoForm from "../../ui/TodoForm/TodoForm";
import { useTodos } from "../../useTodos/useTodos";
import TodosLoading from "../../ui/TodosLoading/TodosLoading";
import ChangeStorageWithListener from "../../ui/ChangeStorage/ChangeStorage";
import { Link } from "react-router-dom";

const HomePage = () => {
  const {
    estados, actualizadores
  } = useTodos();

  const {
    searchedTodos,
    completedTodos,
    totalTodos,
    valueSearch,
    loading,
    error,
    showModal,
  } = estados

  const {
    onSearchValueChange,
    onComplete,
    onDelete,
    onEdit,
    onCancel,
    taskTextHandler,
    onSubmit,
    createButtonHandler,
    sincronize,
  } = actualizadores

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          valueSearch={valueSearch}
          onSearchValueChange={onSearchValueChange}
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
            key={todo.id}
            id={todo.id}
            text={todo.text}
            complete={todo.completed}
            onComplete={onComplete}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        )}
      >
      </TodoList>

{/*       <Link to='/new'>
        <CreateTodoButton
          createButtonHandler={createButtonHandler}
        />
      </Link> */}

{/*       {showModal && (
        <Modal>
          <TodoForm
            onSubmit={onSubmit}
            onCancel={onCancel}
            taskTextHandler={taskTextHandler}
          />
        </Modal>
      )} */}

      <CreateTodoButton
        createButtonHandler={createButtonHandler}
      />

      <ChangeStorageWithListener
        sincronize={sincronize}
      />
    </>
  );
};

export default HomePage;