import React from 'react'
import Modal from '../../ui/Modal/Modal'
import TodoForm from '../../ui/TodoForm/TodoForm'
import { useTodos } from '../../useTodos/useTodos'

const NewTodoPage = () => {

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
  } = estados

  const {
    onSearchValueChange,
    onComplete,
    onDelete,
    onEdit,
    onCancel,
    taskTextHandler,
    onSubmit,
    createButtonHandler,
    sincronize,
  } = actualizadores

  if (loading) {
    return <p>Cargando</p>
  } else {
    return (
      <Modal>
        <TodoForm
          onSubmit={onSubmit}
          onCancel={onCancel}
          taskTextHandler={taskTextHandler}
        />
      </Modal>
    )
  }

  
}

export default NewTodoPage