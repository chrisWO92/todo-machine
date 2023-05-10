import React, { useContext } from "react";
import "./todoSearch.css";
import { TodoContext } from "../TodoContext/TodoContext";

const TodoSearch = ({ valueSearch, onSearchValueChange }) => {
  return (
    <>
      <div id="search-wrapper">
        <input
          type="text"
          placeholder="Enter key search"
          id="search"
          value={valueSearch}
          onChange={onSearchValueChange}
        />
      </div>
    </>
  );
};

export default TodoSearch;
