import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import HomePage from './home/HomePage'
import NewTodoPage from './new/NewTodoPage'
import EditTodoPage from './edit/EditTodoPage'
import Search from './search/Search'

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