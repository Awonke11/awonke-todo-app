import {useContext} from 'react';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import Theme from '../components/Theme';
import "../styles/css/todo.css";
import {FaPlusCircle} from 'react-icons/fa'
import TodoSections from '../components/TodoSections';
import AddTodo from '../components/AddTodo';
import AppContextProvider from '../context/AppContextProvider';
import {Link } from 'react-router-dom';

const Todo = () => {
  const {
    theme, 
    user,
    notStartedNumber,
    inProgressNumber,
    completedNumber
  } = useContext(AppContextProvider)

  return (
      <div className={`container`} id={theme}>
        
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
              {user.login ? 
                <div 
                  className='container-main-content-heading-add-todo' 
                  >
                  <h2 className='container-main-content-heading-add-todo-title'>Add todo</h2>
                  <FaPlusCircle className='icon'/>
                </div>: 
                <Link to='/register' className='container-main-content-heading-add-todo'>
                  <h2 className='container-main-content-heading-add-todo-title'>Add todo</h2>
                  <FaPlusCircle className='icon'/>
                </Link>
              }
            </div>
            <div className='container-main-content-todos'>
              <TodoSections title='Not started' cssName={'not-started'} number={notStartedNumber}/>
              <TodoSections title='In Progress' cssName={'in-progress'} number={inProgressNumber}/>
              <TodoSections title='Completed' cssName={'completed'} number={completedNumber}/>
            </div>
            <AddTodo />
          </main>
        </div>
      </div>
  )
}

export default Todo
