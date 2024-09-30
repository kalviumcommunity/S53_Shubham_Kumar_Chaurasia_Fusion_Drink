import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import RecipePage from './components/RecipePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/recipe/:id" element={<RecipePage />} />
    </Routes>
  )
}

export default App