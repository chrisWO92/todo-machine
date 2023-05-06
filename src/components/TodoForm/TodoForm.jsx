import React, { useContext } from "react";
import "./todoForm.css";
import { TodoContext } from "../TodoContext/TodoContext";

const TodoForm = () => {
  const { onSubmit, onCancel, taskTextHandler } =
    useContext(TodoContext);

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
