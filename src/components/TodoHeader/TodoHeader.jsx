import React from 'react'
import './todoHeader.css'

const TodoHeader = ({children}) => {
  return (
    <header>
      {children}
    </header>
  )
}

export default TodoHeader
