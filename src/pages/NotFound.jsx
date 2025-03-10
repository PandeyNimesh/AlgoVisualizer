import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-4">Page Not Found</p>
            <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                Go Home
            </Link>
        </div>
    )
}

export default NotFound
