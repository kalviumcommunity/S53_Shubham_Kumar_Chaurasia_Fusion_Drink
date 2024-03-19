// import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import './App.css'
import Navbar from "./components/Navbar"
import Home from "./components/Home"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App