import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const BaseLayout = ({ children }) => {
    return (
        <div className="relative flex flex-col min-h-screen bg-gray-900 text-white">
            {/* Background SVG Pattern */}
            <svg className="absolute inset-0 w-full h-full z-0">
                <defs>
                    <filter id="blur-filter" x="0" y="0">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
                    </filter>
                </defs>
                <pattern id="pattern-circles" x="0" y="0" width="20" height="30" patternUnits="userSpaceOnUse">
                    <circle cx="8" cy="8" r="1.3" fill="#575a5e"></circle>
f                       </pattern>
                <rect width="100%" height="100%" fill="url(#pattern-circles)"></rect>
            </svg>

            {/* Content Wrapper */}
            <div className="relative z-10">
                <Navbar />
                <div className="flex-1 min-h-dvh mt-24 px-6">{children}</div>
                <Footer />
            </div>
        </div>
    );
};

export default BaseLayout;
