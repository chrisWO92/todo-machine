import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useTodos } from '../../useTodos/useTodos';
import Modal from '../../ui/Modal/Modal';
import TodoForm from '../../ui/TodoForm/TodoForm';

const EditTodoPage = () => {

  const params = useParams()
  let id = Number(params.id)
  
  const location = useLocation()
    
  const {
    estados, actualizadores
  } = useTodos();

  const {
    loading,
    getTodo
  } = estados

  const {
    onEdit
  } = actualizadores

  let todoText

  if (location.state?.todo) {
    todoText = location.state.todo.text
  } else {
    if (loading) {
      return <p>Cargando...</p>
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
}


export default EditTodoPage