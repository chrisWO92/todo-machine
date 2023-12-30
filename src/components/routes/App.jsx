import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import HomePage from './home/HomePage'
import NewTodoPage from './new/NewTodoPage'
import EditTodoPage from './edit/EditTodoPage'

/* 
En el componente App se encierran las rutas que se querrán mostrar dentro de un
HashRouter.
*/
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