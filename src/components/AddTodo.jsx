import React, {useState} from 'react';

const AddTodo = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    console.log("Check out")

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
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />
                </div>
                <div className="add-todo-form-input">
                    <label for='description' className="add-todo-form-input-title">Description</label>
                    <textarea 
                        type='text' 
                        name='description'
                        placeholder='Type description...' 
                        className="add-todo-form-input-field text-area"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
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