import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Signup() {
    const [formData, setFormData] = useState({
        username: "",
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/register", formData);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleOnChange} className="w-full p-2 mb-2 border rounded-lg" />
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleOnChange} className="w-full p-2 mb-2 border rounded-lg" />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleOnChange} className="w-full p-2 mb-2 border rounded-lg" />
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleOnChange} className="w-full p-2 mb-4 border rounded-lg" />
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleOnChange} className="w-full p-2 mb-4 border rounded-lg" />
                    <button className="w-full bg-green-500 text-white p-2 rounded-lg" type="submit">Sign Up</button>
                </form>
                <p className="text-center mt-4">
                    Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;
