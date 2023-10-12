import React from "react";
import "./todoItem.css";
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineCheck } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { AiFillEdit } from "react-icons/ai"

const TodoItem = ({ todo, text, id, complete, onComplete, onDelete, onEdit, getTodo }) => {
  const navigate = useNavigate()
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
        <AiFillEdit 
          className="edit-icon" 
          onClick={() => {navigate('/edit/' + id, 
            {
              state: {todo}
            }
          )}}
          />
        <GiCancel className="delete-icon" onClick={() => onDelete(id)} />
      </li>
    </>
  );
};

export default TodoItem;
