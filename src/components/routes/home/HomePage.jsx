import React from "react";
import "../App.css";
import { useSearchParams } from 'react-router-dom'
import TodoHeader from "../../ui/TodoHeader/TodoHeader";
import TodoCounter from "../../ui/TodoCounter/TodoCounter";
import TodoSearch from "../../ui/TodoSearch/TodoSearch";
import TodoList from "../../ui/TodoList/TodoList";
import TodoLoading from "../../ui/TodoLoading/TodoLoading";
import TodoItem from "../../ui/TodoItem/TodoItem";
import CreateTodoButton from "../../ui/CreateTodoButton/CreateTodoButton";
import { useTodos } from "../../useTodos/useTodos";
import TodosLoading from "../../ui/TodosLoading/TodosLoading";
import ChangeStorageWithListener from "../../ui/ChangeStorage/ChangeStorage";

const HomePage = () => {
  const {
    estados, actualizadores
  } = useTodos();

  const {
    completedTodos,
    totalTodos,
    valueSearch,
    loading,
    error,
    getTodo, 
    todos
  } = estados

  const {
    onSearchValueChange,
    onComplete,
    onDelete,
    onEdit,
    createButtonHandler,
    sincronize,
    filter
  } = actualizadores

  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('search')
  const textSearch = search || valueSearch
  let searchedTodos = filter(textSearch)


  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          valueSearch={textSearch}
          setSearchParams={setSearchParams}
          onSearchValueChange={onSearchValueChange}
          filter={filter}
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
            todo={todo}
            key={todo.id}
            id={todo.id}
            text={todo.text}
            complete={todo.completed}
            onComplete={onComplete}
            onDelete={onDelete}
            onEdit={onEdit}
            getTodo={getTodo}
          />
        )}
      >
      </TodoList>

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