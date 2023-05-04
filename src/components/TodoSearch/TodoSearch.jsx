import React, { useContext } from "react";
import "./todoSearch.css";
import { TodoContext } from "../TodoContext/TodoContext";

const TodoSearch = () => {
  const { valueSearch, onSearchValueChange } = useContext(TodoContext);

  return (
    <>
      <div id="search-wrapper">
        <input
          type="text"
          placeholder="Enter key search hola"
          id="search"
          value={valueSearch}
          onChange={onSearchValueChange}
        />
      </div>
    </>
  );
};

export default TodoSearch;
