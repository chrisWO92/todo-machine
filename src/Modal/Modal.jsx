import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";
import TodoForm from "../TodoForm/TodoForm";

const Modal = () => {
  
  return ReactDOM.createPortal(
    <div className='modalBackground'>
        <TodoForm />
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
