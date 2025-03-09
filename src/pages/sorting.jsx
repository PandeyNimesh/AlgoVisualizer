import React from 'react'
import { Link } from 'react-router-dom';
import SortingCard from '../components/SortingCard';

const Sorting = () => {
    const list = [{
        id: 1,
        mediaUrl: "./bubble-sort.gif",
        slug: "bubble-sort",
        sortingType: "Bubble Sort",
        sortingDesc: "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order."
    }, {
        id: 3,
        mediaUrl: "./selection-sort.mp4",
        slug: "selection-sort",
        sortingType: "Selection Sort",
        sortingDesc: "Selection sort is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end."
    }, {
        id: 2,
        mediaUrl: "./merge-sort.gif",
        slug: "merge-sort",
        sortingType: "Merge Sort",
        sortingDesc: "Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves."
    }];

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
