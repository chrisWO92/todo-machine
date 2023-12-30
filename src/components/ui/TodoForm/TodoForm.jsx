import React, { useState } from "react";
import "./todoForm.css";
import { useNavigate } from "react-router-dom";

const TodoForm = ({ loading, label, defaultText, buttonLabel, submitEvent }) => {
  
  const navigate = useNavigate()
  const [newTextTodo, setNewTextTodo] = useState(defaultText || "");
  
  // Función para actualizar texto del campo de un textarea
  const taskTextHandler = (e) => {
    setNewTextTodo(e.target.value);
  };

  // Para cancelar edición o creación de un nuevo todo e ir a home
  const onCancel = () => {
    setNewTextTodo("");
    navigate('/')
  };

  // Función para guardar el texto como un todo
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
