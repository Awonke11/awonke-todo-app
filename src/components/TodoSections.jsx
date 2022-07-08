import React from 'react';
import TodoComponent from './TodoComponent';

const TodoSections = () => {
  return (
    <div className="todo-sections">
      <div className="todo-sections-heading">
        <h2 className="todo-sections-heading-title">Not Started</h2>
        <div className="todo-sections-heading-todos-number">2</div>
      </div>
      <div className='todo-sections-display'>
        <TodoComponent />
        <TodoComponent />
      </div>
    </div>
  )
}

export default TodoSections;
