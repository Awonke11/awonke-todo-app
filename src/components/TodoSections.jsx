import React from 'react';
import TodoComponent from './TodoComponent';

const TodoSections = ({title, cssName, number}) => {
  return (
    <div className="todo-sections">
      <div className={`todo-sections-heading ${cssName}`}>
        <h2 className="todo-sections-heading-title">{title}</h2>
        <div className="todo-sections-heading-todos-number">{number}</div>
      </div>
      <div className='todo-sections-display'>
        <TodoComponent />
        <TodoComponent />
      </div>
    </div>
  )
}

export default TodoSections;
