import React from 'react';
import './styles/css/theme.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Todo from "./pages/Todo";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import './styles/css/theme.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route index exact element={<Todo/>} />
        <Route path='/login' exact element={<Login/>} />
        <Route path='/register' exact element={<Register/>} />
        <Route path='/settings' exact element={<Settings/>} />
      </Routes>
    </Router>
  );
}

export default App;
