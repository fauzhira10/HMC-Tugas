import { useState } from 'react'
import { Routes, Route } from "react-router";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './component/Navbar';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
      <div style={{padding:"2em"}}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/blog/:id" element={<BlogDetail/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
