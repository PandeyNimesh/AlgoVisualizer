import React from 'react'
import { Link } from 'react-router-dom';
import SortingCard from '../components/SortingCard';
import data from "../data.json";
const Sorting = () => {
    const list = data.linear_datastructure

    return (
        <div className='flex flex-col items-center min-h-screen pt-12'>
            <h1 className='text-3xl font-mono font-medium tracking-wide text-gray-100'>Visualize Sorting Algorithms</h1>
            <p className='text-yellow-500 text-lg font-mono font-light tracking-wide'>Select an algorithm to visualize</p>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-3'>
                {list.map((item) => (
                    <SortingCard id={item.id} key={item.id} mediaUrl={item.mediaUrl} slug={item.slug} sortingDesc={item.sortingDesc} sortingType={item.sortingType} />
                ))}
            </div>
        </div>
    )
}

export default Sorting
