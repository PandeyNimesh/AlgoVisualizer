import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from "react";

const SortingPage = () => {
    const { slug } = useParams();
    useEffect(() => {
        if (!slug.trim()) {
            <NotFound />
        }
    }, [])
    return (
        <div>

        </div>
    )
}

export default SortingPage
