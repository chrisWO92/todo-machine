import React, { useState } from "react";
import "./todoForm.css";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useTodos } from "../../useTodos/useTodos";

const TodoForm = ({ loading, todos, label, id, defaultText, buttonLabel, submitEvent }) => {
  
  const navigate = useNavigate()
  const [newTextTodo, setNewTextTodo] = useState(defaultText || "");
  
  const taskTextHandler = (e) => {
    setNewTextTodo(e.target.value);
    console.log(newTextTodo)
  };

  const onCancel = () => {
    setNewTextTodo("");
    navigate('/')
  };


  const onSubmit = (e) => {
    e.preventDefault();
    if (newTextTodo !== "") {
      submitEvent(newTextTodo);
      setNewTextTodo("");   
    }
    navigate('/')    
  };

  return (
    <form onSubmit={onSubmit}>
      <label>{label}</label>
      <textarea
        disabled={loading}
        id="task-add-textarea"
        cols="25"
        rows="8"
        placeholder="Cortar la cebolla para el almuerzo"        
        onChange={taskTextHandler}
        value={newTextTodo}
      >        
      </textarea>
      <div id="buttons">

        <button id="cancel-button" className="button" onClick={onCancel} type="button">
          Cancelar
        </button>
        <button id="add-button" className="button" type="submit" disabled={loading}>
          {buttonLabel}
        </button>

      </div>
    </form>
  );
};

export default TodoForm;
