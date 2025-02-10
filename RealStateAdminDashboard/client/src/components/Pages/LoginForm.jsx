import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid"; // Import UUID

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/login", { email, password });

      if (response.data.message === "Login Successful") {
        const randomToken = uuidv4(); // Generate unique token
        localStorage.setItem("authToken", randomToken); // Store unique token
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleLogin} className="flex flex-col">
          <input type="email" placeholder="Email" value={email} 
            onChange={(e) => setEmail(e.target.value)} required
            className="border p-2 rounded-md mb-2"/>

          <input type="password" placeholder="Password" value={password} 
            onChange={(e) => setPassword(e.target.value)} required
            className="border p-2 rounded-md mb-2"/>

          <button type="submit" className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
