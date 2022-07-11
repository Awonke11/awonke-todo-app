import React from 'react';
import './styles/css/theme.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Todo from "./pages/Todo";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import './styles/css/theme.css'
import { AppMainContext } from './context/AppContextProvider';

function App() {
  return (
    <Router>
      <AppMainContext>
        <Routes>
          <Route path='/' exact element={<Todo/>} />
          <Route path='/login' exact element={<Login/>} />
          <Route path='/register' exact element={<Register/>} />
          <Route path='/settings' exact element={<Settings/>} />
        </Routes>
      </AppMainContext>
    </Router>
  );
}

export default App;
