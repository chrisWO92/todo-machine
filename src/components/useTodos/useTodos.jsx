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
  const [editMode, setEditMode] = useState(false);
  const [newTextTodo, setNewTextTodo] = useState("");
  

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

  const onDelete = (id) => {
    let index = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  };

  const onEdit = () => {
    setShowModal((prevState) => !prevState);
  }

  const onAdd = (text) => {
    
    if (text !== "") {
      
      const id = newTodoId(todos);
      console.log('id: ', id)
      const newTodos = [...todos];
      console.log('newTodos anterior: ', newTodos)
      console.log('todos anterior: ', todos)
      newTodos.push({
        text: text,
        completed: false,
        id
      });
      console.log('newTodos posterior: ', newTodos)
      console.log('todos posterior: ', todos)
      saveTodos(newTodos);
    }
    //setShowModal((prevState) => !prevState);
    setNewTextTodo("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(newTextTodo);
    navigate('/')
  };

  const taskTextHandler = (e) => {
    setNewTextTodo(e.target.value);
  };

  const onCancel = () => {
    //setShowModal((prevState) => !prevState);
    setNewTextTodo("");
    navigate('/')
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
  }

  const actualizadores = {
    onSearchValueChange,    
    onComplete,
    onDelete,
    onEdit,    
    onCancel,
    taskTextHandler,
    onSubmit,
    createButtonHandler,
    sincronize,
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
