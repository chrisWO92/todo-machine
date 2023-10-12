import React, { useState } from "react";
import "./todoForm.css";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useTodos } from "../../useTodos/useTodos";

const TodoForm = ({ loading, todos, label, id, defaultText, buttonLabel, submitEvent }) => {
  const [newTextTodo, setNewTextTodo] = useState(defaultText || "");
  console.log(newTextTodo)
  const taskTextHandler = (e) => {
    setNewTextTodo(e.target.value);
    console.log(newTextTodo)
  };

  const onCancel = () => {
    //setShowModal((prevState) => !prevState);
    setNewTextTodo("");
    navigate('/')
  };
  console.log(todos)
  const navigate = useNavigate()
  const {estados, actualizadores} = useTodos()
  console.log(estados)
  console.log(actualizadores)
  //const {newTextTodo} = estados
  console.log(newTextTodo)
  //console.log(value)

  const onSubmit = (e) => {
    e.preventDefault();
    //console.log(newTextTodo)
    if (newTextTodo !== "") {
      submitEvent(newTextTodo);
      setNewTextTodo("");   
    }
/*     submitEvent(newTextTodo);
      setNewTextTodo("");  */   
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
