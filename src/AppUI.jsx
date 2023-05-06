import React, { useContext } from "react";
import TodoCounter from "./components/TodoCounter/TodoCounter";
import TodoSearch from "./components/TodoSearch/TodoSearch";
import TodoList from "./components/TodoList/TodoList";
import CreateTodoButton from "./components/CreateTodoButton/CreateTodoButton";
import Modal from "./components/Modal/Modal";
import { TodoContext } from "./components/TodoContext/TodoContext";

const AppUI = () => {
  const { showModal } = useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList />
      {
        showModal && <Modal />
      }             
      <CreateTodoButton />
    </>
  );
};

export default AppUI;
