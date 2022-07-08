import React from 'react';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import Theme from '../components/Theme';
import "../styles/css/todo.css";
import {FaPlusCircle} from 'react-icons/fa'
import TodoSections from '../components/TodoSections';

const Todo = () => {
  return (
    <div className='container' id='light'>
      
      <div className="container-side-navigation">
        <div className="container-side-navigation-nested">
          <Navigation />
          <Theme />
        </div>
      </div>
  
      <div className='container-main-container'>
        <SearchBar />
        <main className='container-main-content'>
          <div className='container-main-content-heading'>
            <h2 className='container-main-content-heading-title'>My Todos</h2>
            <div className='container-main-content-heading-add-todo'>
              <h2 className='container-main-content-heading-add-todo-title'>Add todo</h2>
              <FaPlusCircle className='icon'/>
            </div>
          </div>
          <div className='container-main-content-todos'>
            <TodoSections />
            <TodoSections />
            <TodoSections />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Todo
