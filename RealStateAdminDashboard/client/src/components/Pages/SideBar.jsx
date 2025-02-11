import React, { useState } from 'react';
import { FiMenu, FiX, FiHome, FiUser, FiSettings } from 'react-icons/fi';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex z-50">
            {/* Toggle Button */}
            <button
    onClick={toggleSidebar}
    className={`fixed top-5 left-5 z-50 bg-blue-500 text-white p-2 rounded-full shadow-md transition-transform duration-300 ${isOpen ? "translate-x-[180px] " : ""}`}
>
    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
</button>

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 p-5 shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <h2 className="text-lg font-bold mb-6">Dashboard</h2>
                
                {/* Sidebar Links */}
                <nav className="space-y-4">
                    <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                        <FiHome />
                        <span>Home</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                        <FiUser />
                        <span>Profile</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
                        <FiSettings />
                        <span>Settings</span>
                    </a>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
