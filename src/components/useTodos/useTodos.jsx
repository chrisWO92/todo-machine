import { useEffect, useState } from "react";
import { useLocalStorage } from "../useLocalStorage/useLocalStorage";
import { useNavigate } from "react-router-dom";

const useTodos = () => {

  // Se invoca useNavigate para hacer enrutamiento
  const navigate = useNavigate()

  // Se invoca el useLocalStorage y se destructuran los datos y funciones que trae
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    sincronize
  } = useLocalStorage("TODOS_V2", []);

  // Se definen estados necesarios para el funcionamiento
  // de la aplicación
  const [completedTodos, setCompletedTodos] = useState(0);
  const [totalTodos, setTotalTodos] = useState(0);
  const [valueSearch, setValueSearch] = useState("");

  useEffect(() => {
    // Se obtiene la cantidad de todos que tienen la propiedad
    // "completed" en true
    setCompletedTodos(todos.filter((todo) => !!todo.completed).length);
    setTotalTodos(todos.length);
  }, [todos]);

  // Función para actualizar contantemente el valor de búsqueda del input text
  const onSearchValueChange = (e) => {
    setValueSearch(e.target.value);
  };

  // Función para filtrar el listado de todos dependiendo de lo que se escriba
  // en el input de búsqueda
  const filter = (text) => {
    let filteredTodos
    // Si no hay nada escrito, muestre todos los "todos"
    if (text.length === 0 || text === null) {
      filteredTodos = todos 
      return filteredTodos
    } else { // Si hay un texto de búsqueda, filtrar
      filteredTodos = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = text.toLowerCase();
        return todoText.includes(searchText);
      });
    }
    return filteredTodos;  
    
  }

  // Marcar como completada una tarea
  // Recibe como parámetros el id de la tarea y la propiedad "complete".
  const onComplete = (id, complete) => {
    complete = !complete;
    // Encuentra el todo
    let index = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    // Cambia true/false el estado de la propiedad "completed"    
    newTodos[index].completed = !newTodos[index].completed;
    // Guarda el nuevo arreglo de todos en el LocalStorage
    saveTodos(newTodos);
  };

  // Obtener el todo a partir del id correspondiente
  const getTodo = (id) => {
    let index = todos.findIndex((todo) => todo.id === id);
    return todos[index]
  }

  // Borrar el todo con el id correspondiente
  const onDelete = (id) => {
    // Encuentra el todo
    let index = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    // Guarda el nuevo arreglo de todos en el LocalStorage
    saveTodos(newTodos);
  };

  // Editar un todo
  const onEdit = (id, text) => {
    // Encuentra el todo
    let index = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    // Le asigna el texto del input al todo
    newTodos[index].text = text
    // Guarda el nuevo arreglo de todos en el LocalStorage
    saveTodos(newTodos);
  }

  // Agregar un nuevo todo
  const onAdd = (text) => {  
    if (text !== "") {      
      const id = newTodoId(todos);
      const newTodos = [...todos];
      newTodos.push({
        text: text,
        completed: false,
        id
      });
      saveTodos(newTodos);
    }
  };

  // Función para enrutar a la página de creación de un
  // nuevo todo
  const createButtonHandler = () => {
    setValueSearch("");
    navigate('/new')
  };

  const estados =  {
    completedTodos,
    totalTodos,
    valueSearch,
    loading,
    error,
    getTodo,
    todos,
  }

  const actualizadores = {
    onSearchValueChange,    
    onComplete,
    onDelete,
    onEdit,    
    createButtonHandler,
    sincronize,
    onAdd,
    filter
  }

  // Se retornan todos los estados, estados derivados y los actualizadores
  return {
    estados,
    actualizadores
  };
};

// Función para asignar un id a un nuevo todo
// Son ids consecutivos
const newTodoId = (todoList) => {
  if (!todoList.length){
    return 1;
  }
  const idList = todoList.map(todo => todo.id)
  const idMax = Math.max(...idList)
  return idMax + 1
}

export { useTodos }
