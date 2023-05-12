import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";
import TodoForm from "../TodoForm/TodoForm";

const Modal = ({children}) => {
  
  return ReactDOM.createPortal(
    <div className='modalBackground'>
        {children}
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
