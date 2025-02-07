import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Listings from './pages/Listings';
import EditListing from './pages/EditListing';
import CreateListing from './pages/CreateListing';
import Sidebar from './components/Sidebar';
import axios from 'axios';
import './index.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {isAuthenticated && <Sidebar />}
        <div className="w-full p-6">
          <Routes>
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
            <Route path="/listings" element={isAuthenticated ? <Listings /> : <Navigate to="/login" />} />
            <Route path="/listings/edit/:id" element={isAuthenticated ? <EditListing /> : <Navigate to="/login" />} />
            <Route path="/listings/create" element={isAuthenticated ? <CreateListing /> : <Navigate to="/login" />} />
            <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
