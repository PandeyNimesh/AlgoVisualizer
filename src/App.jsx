import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SortingVisualizer from './SortingCompo/SortingVisualizer.jsx'
import GraphVisualizer from './SortingCompo/GraphVisualizer'
import Home from './pages/home'
import './App.css'
import BaseLayout from './layout/base.jsx'

const App = () => {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sorting" element={<SortingVisualizer />} />
          <Route path="/graph" element={<GraphVisualizer />} />
        </Routes>
      </BaseLayout>
    </Router>
  )
}

export default App