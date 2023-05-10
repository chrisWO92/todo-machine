import React from "react";
import "./createTodoButton.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

const CreateTodoButton = ({createButtonHandler}) => {
  return (
    <>
      <button id="create-task-button" onClick={createButtonHandler}>
        <AiOutlinePlusCircle />
      </button>
    </>
  );
};

export default CreateTodoButton;
