import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import HomePage from './home/HomePage'
import NewTodoPage from './new/NewTodoPage'
import EditTodoPage from './edit/EditTodoPage'
import Modal from '../ui/Modal/Modal'
import TodoForm from '../ui/TodoForm/TodoForm'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewTodoPage />} />
        <Route path="/edit/:id" element={<EditTodoPage />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </HashRouter>
  )
}

export default App