import React from "react";
import "./todoForm.css";
import { Link } from "react-router-dom";

const TodoForm = ({ label, buttonLabel, onSubmit, onCancel, taskTextHandler }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>{label}</label>
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
          {buttonLabel}
        </button>

      </div>
    </form>
  );
};

export default TodoForm;
