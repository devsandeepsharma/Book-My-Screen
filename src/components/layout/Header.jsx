import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../ui/Button";
import Logo from "../ui/Logo";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(prev => !prev)
    };

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
    }, [isOpen]);

    const navLinks = [
        { path: "#home", label: "Home" },
        { path: "#now-playing", label: "Now Playing" },
        { path: "#top-rated", label: "Top Rated" },
    ]

    return (
        <header className="w-full">
            <div className="h-1 bg-teal-600"></div>
            <div className="px-6 py-4 bg-white border-b border-gray-200">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <Link 
                        to="/" 
                        className="focus:outline-1 focus:outline-offset-4 focus:outline-dashed focus:outline-teal-600 rounded transition"
                    >
                        <Logo />
                    </Link>
                    <nav className="m-0!" aria-label="primary navigation">
                        <Button
                            onClick={toggle}
                            className="md:hidden! p-2! flex! flex-col gap-1 relative z-100"
                            aria-label="Toggle menu"
                        >
                            <span
                                className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                                isOpen ? "rotate-45 translate-y-1.5" : ""
                                }`}
                            ></span>
                            <span
                                className={`block h-0.5 w-6 bg-white rounded transition duration-300 ease-in-out top-4 ${
                                isOpen ? "opacity-0" : "opacity-100"
                                }`}
                            ></span>
                            <span
                                className={`block h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                                isOpen ? "-rotate-45 -translate-y-1.5" : ""
                                }`}
                            ></span>
                        </Button>
                        {isOpen && (
                            <div
                                className="fixed inset-0 z-40"
                                onClick={toggle}
                            ></div>
                        )}
                        <ul
                            className={`
                                fixed top-0 right-0 h-full w-64 pt-20 bg-white shadow-lg border-l-4 border-teal-600 z-50 p-6 flex flex-col gap-4 transform transition-transform duration-300 ease-in-out
                                md:static md:h-0 md:w-auto md:pt-0 md:border-0 md:shadow-none z-0 md:p-0 md:flex-row md:items-center md:gap-6
                                ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
                            }`}
                        >
                            {
                                navLinks.map(({ path, label }) => (
                                    <li key={path}>
                                        <a
                                            href={path}
                                            className="block py-2 md:py-0 text-lg font-medium text-gray-900 hover:text-teal-700 focus:outline-1 focus:outline-offset-4 focus:outline-dashed focus:outline-teal-600"
                                            onClick={toggle}
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;