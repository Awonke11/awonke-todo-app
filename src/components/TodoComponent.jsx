import React from 'react';
import { FaRegTrashAlt, FaCircle } from 'react-icons/fa'

const TodoComponent = () => {
  return (
    <div className="todo-component">
      <div className="todo-component-heading">
        <div className='todo-component-heading-navigate'>
          <FaCircle className='icon not-started'/>
          <FaCircle className='icon in-progress'/>
          <FaCircle className='icon completed'/>
        </div>
        <FaRegTrashAlt className='todo-component-heading-delete'/>
      </div>
      <div className='todo-component-content'>
        <h3 className='todo-component-content-title'>Create todo app</h3>
        <p className='todo-component-content-description'>Create this app from scratch and make sure to learn with it</p>
      </div>
    </div>
  )
}

export default TodoComponent;
