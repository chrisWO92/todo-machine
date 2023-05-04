import React, { useContext } from "react";
import "./createTodoButton.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TodoContext } from "../TodoContext/TodoContext";

const CreateTodoButton = () => {
  const {setShowModal, createButtonHandler} = useContext(TodoContext)
  return (
    <>
      <button id="create-task-button" onClick={createButtonHandler}>
        <AiOutlinePlusCircle />
      </button>
    </>
  );
};

export default CreateTodoButton;
