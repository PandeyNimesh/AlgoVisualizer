import React from 'react';
import { GithubLogo, LinkedinLogo, Code, Globe } from '@phosphor-icons/react';

const Footer = () => {
    return (
        <footer className="w-full bg-gray-900 text-gray-300 py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">

                <div className="mb-6 md:mb-0">
                    <h2 className="text-2xl font-semibold font-serif tracking-wide text-gray-200 transition-all duration-300 hover:text-white hover:scale-105">AlgoVisualizer</h2>
                    <p className="mt-1 text-gray-400 text-xs">
                        Built with ❤️ for DSA enthusiasts.
                    </p>

                </div>

                <div className="flex gap-5">
                    <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer"
                        className="hover:text-gray-200 transition-transform duration-300 hover:scale-105" aria-label="GitHub Profile">
                        <GithubLogo size={28} weight="regular" />
                    </a>
                    <a href="https://leetcode.com/your-profile" target="_blank" rel="noopener noreferrer"
                        className="hover:text-gray-200 transition-transform duration-300 hover:scale-105" aria-label="LeetCode Profile">
                        <Code size={28} weight="regular" />
                    </a>
                    <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"
                        className="hover:text-gray-200 transition-transform duration-300 hover:scale-105" aria-label="LinkedIn Profile">
                        <LinkedinLogo size={28} weight="regular" />
                    </a>
                    <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer"
                        className="hover:text-gray-200 transition-transform duration-300 hover:scale-105" aria-label="Personal Website">
                        <Globe size={28} weight="regular" />
                    </a>
                </div>
            </div>

            <hr className="border-gray-700 my-6 w-11/12 mx-auto" />

            <div className="text-center mb-4">
                <a href="https://github.com/your-project" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700 transition-transform duration-300 hover:scale-105">
                    <GithubLogo size={20} weight="bold" />
                    View Project on GitHub
                </a>
            </div>

            <p className="text-sm text-gray-500 text-center">
                &copy; {new Date().getFullYear()} AlgoVisualizer. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
