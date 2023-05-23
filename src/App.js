// import logo from './logo.svg';
import './App.css';
import React from 'react';
import TodoList from './components/TodoList';
import LoginForm from './components/LoginForm';
import UserList from './components/UserList'

function App() {
  return (
    <div className="App">
      <div className='tdo'>
      <h1>My Todo App</h1>
      <TodoList />
    </div>

    <div className='log'>
      <h1>Login Page</h1>
      <LoginForm />
    </div>

    <div className='User'>
      <h1>My App</h1>
      <UserList />
    </div>
 </div>

  );
}

export default App;
  
