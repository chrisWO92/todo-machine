import React from "react";
import "./todoSearch.css";

const TodoSearch = ({ valueSearch, onSearchValueChange, loading }) => {
  return (
    <>
      <div id="search-wrapper">
        <input
          type="text"
          placeholder="Enter key search"
          id="search"
          value={valueSearch}
          onChange={onSearchValueChange}
          disabled={loading}
        />
      </div>
    </>
  );
};

export default TodoSearch;
