import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="shadow sticky z-50 top-0 bg-white">
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-md focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center lg:order-2 space-x-4">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 font-medium rounded-lg text-sm px-4 py-2"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm px-4 py-2"
                        >
                            Get started
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div
                        className={`absolute top-[70px] left-0 w-full bg-white shadow-md transition-all duration-300 lg:static lg:w-auto lg:flex lg:shadow-none ${isOpen ? "block" : "hidden"
                            }`}
                    >
                        <ul className="flex flex-col lg:flex-row lg:space-x-8 p-4 lg:p-0">
                            {["Home", "About", "Contact", "Github"].map((item) => (
                                <li key={item}>
                                    <NavLink
                                        to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                                        className={({ isActive }) =>
                                            `block py-2 px-4 text-gray-700 hover:text-orange-700 ${isActive ? "text-orange-700 font-bold" : ""
                                            }`
                                        }
                                    >
                                        {item}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
