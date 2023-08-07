import { useState } from 'react'
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import { Routes, Route } from "react-router-dom";
import './App.css'
import Countries from './pages/Countries/Countries';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Countries />} />
        <Route path="/country/:names" element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
