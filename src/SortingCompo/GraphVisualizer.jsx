import React from 'react'
import { Link } from 'react-router-dom';
import SortingCard from '../components/SortingCard';

const GraphVisualizer = () => {
  const list = [{
    id: 1,
    mediaUrl: "./bfs.gif",
    slug: "bfs-sort",
    sortingType: "BFS Traversal",
    sortingDesc: "Breadth First Traversal (or Search) for a graph is similar to Breadth First Traversal of a tree. The only catch here is, unlike trees, graphs may contain cycles, so we may come to the same node again"
  },{
    id:2,
    mediaUrl: "./dfs.gif",
    slug: "dfs-sort",
    sortingType: "DFS Traversal",
    sortingDesc: "Depth First Traversal (or Search) for a graph is similar to Depth First Search of a tree. The only catch here is, unlike trees, graphs may contain cycles, so we may come to the same node again"
  }
];
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