import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <input type="text" placeholder="Email" className="w-full p-2 mb-2 border rounded-lg" />
        <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded-lg" />
        <button className="w-full bg-blue-500 text-white p-2 rounded-lg">Login</button>
        <p className="text-center mt-4">
          Don't have an account? <button onClick={() => navigate('/signup')} className="text-blue-500">Sign Up</button>
        </p>
      </div>
    </div>
  );
}

export default Login;