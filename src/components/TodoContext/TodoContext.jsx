import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../useLocalStorage/useLocalStorage";

const TodoContext = React.createContext();

const TodoProvider = (props) => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [completedTodos, setCompletedTodos] = useState(0);
  const [totalTodos, setTotalTodos] = useState(0);
  const [valueSearch, setValueSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newTextTodo, setNewTextTodo] = useState("");

  let searchedTodos = [];

  useEffect(() => {
    setCompletedTodos(todos.filter((todo) => !!todo.completed).length);
    setTotalTodos(todos.length);
  }, [todos]);

  const onSearchValueChange = (e) => {
    setValueSearch(e.target.value);
  };

  if (valueSearch.length === 0) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = valueSearch.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const onComplete = (text, complete) => {
    complete = !complete;
    let index = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    saveTodos(newTodos);
  };

  const onDelete = (text) => {
    let index = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  };

  const onAdd = (text) => {
    if (text !== "") {
      const newTodos = [...todos];
      newTodos.push({
        text: text,
        completed: false,
      });
      saveTodos(newTodos);
    }
    setShowModal((prevState) => !prevState);
    setNewTextTodo("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(newTextTodo);
  };

  const taskTextHandler = (e) => {
    setNewTextTodo(e.target.value);
  };

  const onCancel = () => {
    setShowModal((prevState) => !prevState);
    setNewTextTodo("");
  };

  const createButtonHandler = () => {
    setValueSearch("")
    setShowModal((prevState) => !prevState);
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        searchedTodos,
        completedTodos,
        totalTodos,
        valueSearch,
        setValueSearch,
        onSearchValueChange,
        saveTodos,
        loading,
        error,
        onComplete,
        onDelete,
        showModal,
        setShowModal,
        onAdd,
        onCancel,
        taskTextHandler,
        onSubmit,
        createButtonHandler
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
