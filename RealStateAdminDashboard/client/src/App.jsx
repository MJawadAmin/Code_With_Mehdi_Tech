import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/Pages/LoginForm";
import Dashboard from './components/Pages/Dashboard'
import ProtectedRoute from "./components/Pages/Protectedroute";
import EditCard from "./components/Pages/EditCard";


const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<LoginForm />} />

      {/* Protected Route for Dashboard */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit-card/:id" element={<EditCard/>}/>
      </Route>
    </Routes>
  </Router>
  );
};

export default App;
