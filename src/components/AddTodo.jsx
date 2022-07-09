import React from 'react';

const AddTodo = () => {
  return (
    <div className="add-todo-container">
        <div className="add-todo"> 
            <div className="add-todo-form">
                <div className="add-todo-form-input">
                    <label for='title' className="add-todo-form-input-title">Title</label>
                    <input 
                        type='text' 
                        name='title'
                        placeholder='Type title...' 
                        className="add-todo-form-input-field"
                    />
                </div>
                <div className="add-todo-form-input">
                    <label for='description' className="add-todo-form-input-title">Description</label>
                    <textarea 
                        type='text' 
                        name='description'
                        placeholder='Type description...' 
                        className="add-todo-form-input-field text-area"
                    />
                </div>
            </div>
            <div className="add-todo-buttons">
                <button className="add-todo-buttons-button add-todo-button">Add</button>
                <button className="add-todo-buttons-button cancel-button">Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default AddTodo;