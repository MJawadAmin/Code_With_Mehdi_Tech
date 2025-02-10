import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/Pages/LoginForm";
import Dashboard from './components/Pages/Dashboard'
import ProtectedRoute from "./components/Pages/Protectedroute";


const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/" element={<LoginForm />} />
      
      {/* Protect Dashboard Route */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  </Router>
  );
};

export default App;
