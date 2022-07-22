import React from 'react'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'

const AllRoutes = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </div>
  )
}

export default AllRoutes