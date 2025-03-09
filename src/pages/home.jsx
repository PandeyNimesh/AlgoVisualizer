import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gray-900/95 text-white flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-400">
          DSA Visualization Hub
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Experience interactive visualizations of Data Structures & Algorithms.
          Learn, analyze, and compare different algorithms in real-time!
        </p>
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300">
          Get Started
        </button>
      </div>

      {/* Features Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        <FeatureCard
          title="Sorting Algorithms"
          description="Visualize Bubble Sort, Merge Sort, Quick Sort, and more with step-by-step animations."
        />
        <FeatureCard
          title="Graph Algorithms"
          description="Understand graph traversals like BFS & DFS, along with shortest path algorithms."
        />
        <FeatureCard
          title="Algorithm Comparison"
          description="Race two algorithms side-by-side and compare their efficiency in real-time!"
        />
      </div>

      {/* Footer */}
      <footer className="mt-12 text-gray-400 text-sm">
        Built with ❤️ for DSA enthusiasts.
      </footer>
    </div>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-blue-400">{title}</h3>
      <p className="mt-2 text-gray-300">{description}</p>
    </div>
  );
};

export default Home;
