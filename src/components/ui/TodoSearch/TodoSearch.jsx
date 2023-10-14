import React from "react";
import "./todoSearch.css";

const TodoSearch = ({ valueSearch, onSearchValueChange, loading, setSearchParams, filter }) => {
  return (
    <>
      <div id="search-wrapper">
        <input
          type="text"
          placeholder="Enter key search"
          id="search"
          value={valueSearch}
          onChange={(e) => {
            setSearchParams({search: e.target.value})
            onSearchValueChange(e)
          }}
          disabled={loading}
        />
      </div>
    </>
  );
};

export default TodoSearch;
