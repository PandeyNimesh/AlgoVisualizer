import React from 'react'
import SortingCard from '../components/SortingCard';
import data from "../data.json";

const GraphVisualizer = () => {
  const list = data.nonlinear_datastructure;
  return (
    <div className='flex flex-col items-center min-h-screen pt-12'>
      <h1 className='text-3xl font-mono font-medium tracking-wide'>Visualize Graphs Algorithms</h1>
      <p className='text-yellow-500 text-lg font-mono font-light tracking-wide'>Select an algorithm to visualize</p>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-3'>
        {list.map((item) => (
          <SortingCard id={item.id} key={item.id} mediaUrl={item.mediaUrl} slug={item.slug} sortingDesc={item.sortingDesc} sortingType={item.sortingType} />
        ))}

      </div>
    </div>
  )
}

export default GraphVisualizer