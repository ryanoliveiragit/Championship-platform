import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import About from '../Pages/About'

const Rotas = () => {
  return (
    <div>
    <BrowserRouter>
        <Routes>
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
        </Routes>    
    </BrowserRouter>
    </div>
  )
}

export default Rotas