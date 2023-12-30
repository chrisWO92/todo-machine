import React from 'react'
import Modal from '../../ui/Modal/Modal'
import TodoForm from '../../ui/TodoForm/TodoForm'
import { useTodos } from '../../useTodos/useTodos'
import { useLocation } from 'react-router-dom'

const NewTodoPage = () => {

  const location = useLocation()

  const {
    estados, actualizadores
  } = useTodos();

  const {
    searchedTodos,
    completedTodos,
    totalTodos,
    valueSearch,
    loading,
    error,
    showModal,
    todos, 
    newTextTodo
  } = estados

  const {
    onSearchValueChange,
    onComplete,
    onDelete,
    onEdit,
    onCancel,
    onAdd,
    taskTextHandler,
    onSubmit,
    createButtonHandler,
    sincronize,
  } = actualizadores

    return (
      <Modal>
        <TodoForm
          label='Agregue una nueva tarea'
          buttonLabel='Agregar'
          submitEvent={(text) => onAdd(text)}
          loading={loading}
        />
      </Modal>
    )
}

export default NewTodoPage