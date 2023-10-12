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
  const [showModal, setShowModal] = useState(false);
  //const [editMode, setEditMode] = useState(false);

  

  let searchedTodos = [];

  useEffect(() => {
    setCompletedTodos(todos.filter((todo) => !!todo.completed).length);
    setTotalTodos(todos.length);
    //console.log(todos)
  }, [todos]);

  const onSearchValueChange = (e) => {
    setValueSearch(e.target.value);
  };

  if (valueSearch.length === 0) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = valueSearch.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  

  const onComplete = (id, complete) => {
    console.log(id)
    complete = !complete;
    let index = todos.findIndex((todo) => todo.id === id);
    console.log('index: ', index)
    const newTodos = [...todos];
    console.log('newTodos: ', newTodos)
    console.log('todos: ', todos)     
    newTodos[index].completed = !newTodos[index].completed;
    saveTodos(newTodos);
  };

  const getTodo = (id) => {
    let index = todos.findIndex((todo) => todo.id === id);
    //console.log(index)
    return todos[index]
  }

  const onDelete = (id) => {
    let index = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  };

  const onEdit = (id, text) => {
    console.log('id: ', id)
    console.log('text: ', text)
    let index = todos.findIndex((todo) => todo.id === id);
    console.log('todos: ', todos)
    console.log('index: ', index)
    const newTodos = [...todos];
    newTodos[index].text = text
    saveTodos(newTodos);
  }

  const onAdd = (text) => {  
    console.log(todos)  
    console.log(text)
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
    //setNewTextTodo("");
  };



  const createButtonHandler = () => {
    setValueSearch("");
    navigate('/new')
    //setShowModal((prevState) => !prevState);
  };

  const estados =  {
    searchedTodos,
    completedTodos,
    totalTodos,
    valueSearch,
    loading,
    error,
    showModal,
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
    onAdd
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

export { useTodos };
