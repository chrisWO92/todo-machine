import React from 'react'
import './todoHeader.css'

const TodoHeader = ({children, loading}) => {
  
  return (
    <header>
      {React.Children
        .toArray(children)
        .map(child => React.cloneElement(child, { loading }))}
    </header>
  )
}

export default TodoHeader
