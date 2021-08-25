import './App.css';
import React from 'react';
import AddUser from '../containers/AddUser';
import UserList from '../containers/UserList';

function App() {
  return (
    <div>
      <AddUser />
      <UserList />
    </div>
  );
}

export default App;
