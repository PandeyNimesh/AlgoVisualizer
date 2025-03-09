import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SortingVisualizer from './SortingCompo/SortingVisualizer.jsx'
import GraphVisualizer from './SortingCompo/GraphVisualizer'
import Home from './pages/home'
import './App.css'

const App = () => {
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <div className='flex-1'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/sorting" element={<SortingVisualizer />} />
            <Route path="/graph" element={<GraphVisualizer />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App