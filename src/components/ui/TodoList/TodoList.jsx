import React from "react";
import "./todoList.css";

const TodoList = (props) => {
  // Este componente usa una propiedad para renderizar los componentes hijos,
  // por lo que se consulta si tiene hijos definidos o si trae una función 
  // llamada render. Cualquiera de las dos opciones se guarda en renderFunc
  const renderFunc = props.children || props.render
  return (
    <>
      <ul id="task-list">
        {/* Si loading es true, aparece párrafo "Cargando" */}
        {props.loading && props.onLoading()}
        {/* Si error es true, aparece párrafo "Error" */}
        {props.error && props.onError()}
        {/* Si loading es false, hay texto en el campo de búsqueda pero no existen coincidencias, aparece párrafo "No hay coincidencias" */}
        {
          !props.loading &&
          !props.searchedTodos.length && 
          (props.totalTodos !== 0) &&
          props.onEmptySearch()
        }
        {/* Si loading es false y no hay tareas, aparece párrafo "Agregar primera tarea" */}
        {
          !props.loading &&
          (props.totalTodos === 0) &&
          props.onAddFirstTask()
        }
        {/* Acá entra en juego la propiedad render definida en el HomePage */}
        {
          !props.loading && props.searchedTodos.map(renderFunc)
        }
        
      </ul>
    </>
  );
};

export default TodoList;
