import React from 'react'
import './todoloading.css'

const TodoLoading = () => {
  return (
    <div className='task-loading'>
      <span className='check-loading'></span>
      <p className='text-loading'></p>
      <span className='delete-loading'></span>
    </div>
  )
}

export default TodoLoading
