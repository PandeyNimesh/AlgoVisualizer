import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SortingVisualizer from './SortingCompo/SortingVisualizer'
import GraphVisualizer from './SortingCompo/GraphVisualizer'
import Home from './pages/home'
import './App.css'
import BaseLayout from './layout/base.jsx'
import NotFound from './pages/NotFound'
import Sorting from './pages/sorting.jsx'
import SortingPage from './pages/SortingPage.jsx'

const App = () => {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sorting" element={<Sorting />} />
          <Route path="/graph" element={<GraphVisualizer />} />
          <Route path="/sort/:slug" element={<SortingPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BaseLayout>
    </Router>
  )
}

export default App