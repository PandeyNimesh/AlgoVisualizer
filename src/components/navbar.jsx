import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="w-full bg-gradient-to-b from-gray-900 to-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-lg flex justify-between items-center px-6 py-4 shadow-md">

            {/* Logo */}
            <Link
                to="/"
                className="text-2xl font-semibold font-serif tracking-wide text-gray-200 transition-all duration-300 hover:text-white hover:scale-105"
            >
                AlgoVisualizer
            </Link>

            {/* Navigation Links */}
            <div className="p-2 flex items-center justify-center space-x-6 text-lg text-gray-300 font-medium">
                {["Home", "Sorting Visualizer", "Graph Visualizer"].map((text, index) => {
                    const paths = ["/", "/sorting", "/graph"];
                    return (
                        <Link
                            key={index}
                            to={paths[index]}
                            className="group px-4 py-2 relative transition-all duration-300 hover:text-white"
                        >
                            {text}
                            {/* Underline Animation */}
                            <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-500 delay-150 group-hover:w-full"></span>
                            {/* Soft Glow Effect */}
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
