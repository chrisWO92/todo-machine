import React from "react";
import "./todoSearch.css";

/* 
Este componente no es más que un textarea cuyo campo debe irse actualizando
en la medida que se vva tipeando el valor de búsqueda.
*/
const TodoSearch = ({ valueSearch, onSearchValueChange, loading, setSearchParams }) => {
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
