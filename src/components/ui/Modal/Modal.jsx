import React from "react";
import "./modal.css";

const Modal = ({children}) => {
  
  return (
    <div className='modalBackground'>
        {children}
    </div>    
  );
};

export default Modal;
