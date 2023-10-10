import React from 'react'
import { useParams } from 'react-router-dom'
import { useTodos } from '../../useTodos/useTodos';
import Modal from '../../ui/Modal/Modal';
import TodoForm from '../../ui/TodoForm/TodoForm';

const EditTodoPage = () => {
  const params = useParams()
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
          label='Edite la tarea'
          buttonLabel='Editar'
          onSubmit={onSubmit}
          onCancel={onCancel}
          taskTextHandler={taskTextHandler}
        />
      </Modal>
    )
  }
}


export default EditTodoPage