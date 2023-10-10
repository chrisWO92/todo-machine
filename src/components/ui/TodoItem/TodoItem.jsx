import React from "react";
import "./todoItem.css";
import { Link } from 'react-router-dom'
import { AiOutlineCheck } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { AiFillEdit } from "react-icons/ai"

const TodoItem = ({ text, id, complete, onComplete, onDelete, onEdit }) => {
  return (
    <>
      <li className="task">
        <AiOutlineCheck
          className={complete ? `check-icon check-icon-green` : `check-icon`}
          onClick={() => onComplete(id, complete)}
        />
        <p className={complete ? `task-text task-text-completed` : `task-text`}>
          {text}
        </p>
        {/* <AiFillEdit className="edit-icon"><Link to='/new' /></AiFillEdit> */}
        <Link to={'/edit/:' +  id} className="edit-link"><AiFillEdit className="edit-icon"/></Link>
        <GiCancel className="delete-icon" onClick={() => onDelete(id)} />
      </li>
    </>
  );
};

export default TodoItem;
