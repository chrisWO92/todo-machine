import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useTodos } from '../../useTodos/useTodos';
import Modal from '../../ui/Modal/Modal';
import TodoForm from '../../ui/TodoForm/TodoForm';

const EditTodoPage = () => {
  const params = useParams()
  let id = Number(params.id)
  const location = useLocation()
  console.log(location)
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
    getTodo,
  } = estados

  const {
    onSearchValueChange,
    onComplete,
    onDelete,
    onEdit,
    createButtonHandler,
    sincronize,
  } = actualizadores

  let todoText

  if (location.state?.todo) {
    todoText = location.state.todo.text
  } else {
    if (loading) {
      return <p>Cargando</p>
    } else {
      todoText = getTodo(id).text
    }
  }

  return (
    <Modal>
      <TodoForm
        id={id}
        defaultText={todoText}
        label='Edite la tarea'
        buttonLabel='Editar'
        loading={loading}
        submitEvent={(text) => onEdit(id, text)}
      />
    </Modal>
  )
/* 
  if (loading) {
    return <p>Cargando</p>
  } else {
    let todoText = getTodo(id).text
    return (
      <Modal>
        <TodoForm
          id={id}
          value={todoText}
          label='Edite la tarea'
          buttonLabel='Editar'
          onSubmit={onSubmit}
          onCancel={onCancel}
          taskTextHandler={taskTextHandler}
        />
      </Modal>
    )
  } */
}


export default EditTodoPage