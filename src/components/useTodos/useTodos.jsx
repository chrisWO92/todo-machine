import { useEffect, useState } from "react";
import { useLocalStorage } from "../useLocalStorage/useLocalStorage";
import { useNavigate } from "react-router-dom";

const useTodos = () => {

  const navigate = useNavigate()

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    sincronize
  } = useLocalStorage("TODOS_V2", []);

  const [completedTodos, setCompletedTodos] = useState(0);
  const [totalTodos, setTotalTodos] = useState(0);
  const [valueSearch, setValueSearch] = useState("");

  useEffect(() => {
    setCompletedTodos(todos.filter((todo) => !!todo.completed).length);
    setTotalTodos(todos.length);
  }, [todos]);

  const onSearchValueChange = (e) => {
    setValueSearch(e.target.value);
    console.log(valueSearch)
  };

  const filter = (text) => {
    console.log(text)
    let filteredTodos
    if (text.length === 0 || text === null) {
      filteredTodos = todos 
      return filteredTodos
    } else {
      filteredTodos = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = text.toLowerCase();
        return todoText.includes(searchText);
      });
    }
    console.log('filteredTodos: ', filteredTodos)
    return filteredTodos;  
    
  }

/*   if (valueSearch.length === 0) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = valueSearch.toLowerCase();
      return todoText.includes(searchText);
    });
  } */
  

  const onComplete = (id, complete) => {
    complete = !complete;
    let index = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];    
    newTodos[index].completed = !newTodos[index].completed;
    saveTodos(newTodos);
  };

  const getTodo = (id) => {
    let index = todos.findIndex((todo) => todo.id === id);
    return todos[index]
  }

  const onDelete = (id) => {
    let index = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  };

  const onEdit = (id, text) => {
    let index = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[index].text = text
    saveTodos(newTodos);
  }

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

  return {
    estados,
    actualizadores
  };
};

const newTodoId = (todoList) => {
  if (!todoList.length){
    return 1;
  }
  const idList = todoList.map(todo => todo.id)
  const idMax = Math.max(...idList)
  return idMax + 1
}

export { useTodos }
