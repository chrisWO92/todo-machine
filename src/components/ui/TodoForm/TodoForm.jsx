import React from "react";
import "./todoForm.css";
import { Link } from "react-router-dom";

const TodoForm = ({ onSubmit, onCancel, taskTextHandler }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>Agrega una nueva tarea</label>
      <textarea
        id="task-add-textarea"
        cols="25"
        rows="8"
        placeholder="Cortar la cebolla para el almuerzo"
        onChange={taskTextHandler}
      ></textarea>
      <div id="buttons">

        {/* <Link to='/'>
          <button id="cancel-button" className="button" onClick={onCancel} type="button">
            Cancelar
          </button>
        </Link>
        <Link to='/'>
          <button id="add-button" className="button" type="submit">
            Agregar
          </button>
        </Link> */}

        <button id="cancel-button" className="button" onClick={onCancel} type="button">
          Cancelar
        </button>
        <button id="add-button" className="button" type="submit">
          Agregar
        </button>

      </div>
    </form>
  );
};

export default TodoForm;
