import React from "react";
import "./todoList.css";

const TodoList = (props) => {
  const renderFunc = props.children || props.render
  return (
    <>
      <ul id="task-list">
        {props.loading && props.onLoading()}
        {props.error && props.onError()}
        {
          !props.loading &&
          !props.searchedTodos.length && 
          (props.totalTodos !== 0) &&
          props.onEmptySearch()
        }
        {
          !props.loading &&
          (props.totalTodos === 0) &&
          props.onAddFirstTask()
        }
        {
          !props.loading && props.searchedTodos.map(renderFunc)
        }
        
      </ul>
    </>
  );
};

export default TodoList;
