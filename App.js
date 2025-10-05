import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Users from './pages/Users';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', background: '#2B2D42', minHeight: '100vh' }}>
        <Sidebar />
        <main style={{ flexGrow: 1, padding: 24 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;