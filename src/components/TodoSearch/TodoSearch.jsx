import React from "react";
import "./todoSearch.css";

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
