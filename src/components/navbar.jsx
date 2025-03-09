import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isCursorAtTop, setIsCursorAtTop] = useState(false);

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY && !isCursorAtTop) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
    };

    const handleMouseMove = (event) => {
        if (event.clientY <= 50) {
            setIsCursorAtTop(true);
            setShowNavbar(true);
        } else {
            setIsCursorAtTop(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [lastScrollY, isCursorAtTop]);

    return (
        <nav
            className={`fixed top-0 w-full bg-gradient-to-b from-gray-900 to-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-lg flex justify-between items-center px-6 py-4 shadow-md transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <Link
                to="/"
                className="text-2xl font-semibold font-serif tracking-wide text-gray-200 transition-all duration-300 hover:text-white hover:scale-105"
            >
                AlgoVisualizer
            </Link>

            {/* Navigation Links */}
            <div className="p-2 flex items-center justify-center space-x-6 text-lg text-gray-100 font-medium">
                {["Home", "Sorting Visualizer", "Graph Visualizer"].map((text, index) => {
                    const paths = ["/", "/sorting", "/graph"];
                    return (
                        <Link
                            key={index}
                            to={paths[index]}
                            className="group px-4 py-2 relative transition-all text-lg  duration-300 hover:text-white"
                        >
                            {text}
                            <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-500 delay-150 group-hover:w-full"></span>
                            <span className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-50 group-hover:blur-sm text-blue-400">
                                {text}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}

export default Navbar;
