import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'

const Rotas = () => {
  return (
    <div>
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
        </Routes>    
    </BrowserRouter>
    </div>
  )
}

export default Rotas;