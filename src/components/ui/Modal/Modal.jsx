import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";
import TodoForm from "../TodoForm/TodoForm";

const Modal = ({children}) => {
  
  return (
    <div className='modalBackground'>
        {children}
    </div>    
  );
};

export default Modal;
