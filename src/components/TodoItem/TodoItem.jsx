import React, { useContext } from "react";
import "./todoItem.css";
import { AiOutlineCheck } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { TodoContext } from "../TodoContext/TodoContext";

const TodoItem = ({ text, complete }) => {
  const { onComplete, onDelete } = useContext(TodoContext);

  return (
    <>
      <li className="task">
        <AiOutlineCheck
          className={complete ? `check-icon check-icon-green` : `check-icon`}
          onClick={() => onComplete(text, complete)}
        />
        <p className={complete ? `task-text task-text-completed` : `task-text`}>
          {text}
        </p>
        <GiCancel className="delete-icon" onClick={() => onDelete(text)} />
      </li>
    </>
  );
};

export default TodoItem;
