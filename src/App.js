import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>User Management</h1>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
