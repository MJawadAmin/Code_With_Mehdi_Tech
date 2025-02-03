import React, { useState } from 'react';
import logo from "/logo.svg";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        { title: "Home", link: "#home" },
        { title: "About", link: "#about" },
        { title: "Projects", link: "#projects" },
        { title: "Blog", link: "#blog" },
        { title: "Contact", link: "#contact" },
    ];
    return (
        <nav className='w-full bg-[#ECF2F9] py-4 '>
            <div className='flex justify-center gap-10'>
                <div className='flex justify-between gap-20 items-center px-4 md:px-8'>
                    <div className='flex items-center'>
                        <Link to='/'>
                            <img src={logo} alt="Logo" className='h-12' />
                        </Link>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className='md:hidden'>
                        <button onClick={() => setIsOpen(!isOpen)} className='text-[#0061E0]'>
                            {isOpen ? <IoMdClose size={24} /> : <FiAlignJustify size={24} />}
                        </button>
                    </div>
                </div>
                {/* Desktop Navbar */}
                <div className='hidden md:flex md:items-center md:justify-center md:px-8 lg:gap-8'>
                    <ul className='flex gap-6 lg:gap-8 text-[#7C8893] text-sm'>
                        {links.map((link) => (
                            <li key={link.title} className='my-2'>
                                <a
                                    href={link.link}
                                    className='text-[#7C8893] hover:text-blue-700'
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                        <li>
                            <button className='bg-white p-3 rounded-full'>
                                <IoIosSearch className='text-[#0061E0]' />
                            </button>
                        </li>
                    </ul>
                    <button className='py-2 px-3 bg-[#0061E0] text-white font-thin ml-4'>
                        Get Started
                    </button>
                </div>
            </div>
            {/* Mobile Navbar */}
            <div className={`fixed inset-0 bg-[#F4F9FF] shadow-lg z-50 md:hidden transition-transform transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className='flex justify-end p-4'>
                    <button onClick={() => setIsOpen(false)} className='text-[#0061E0]'>
                        <IoMdClose size={24} />
                    </button>
                </div>
                <ul className='flex flex-col items-center mt-16'>
                    {links.map((link) => (
                        <li key={link.title} className='my-4 w-full text-center text-xl border-b p-2 border-[#0061E0]'>
                            <a
                                href={link.link}
                                className='text-[#7C8893] hover:text-blue-700'
                                onClick={() => setIsOpen(false)}
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                    <li className='my-4'>
                        <button className='bg-white p-3 rounded-full'>
                            <IoIosSearch className='text-[#0061E0]' />
                        </button>
                    </li>
                    <li className='mt-4'>
                        <button className='py-2 px-4 bg-[#0061E0] text-white font-thin'>
                            Get Started
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;