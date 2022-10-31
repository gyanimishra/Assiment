import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'

const MainRoutes = () => {
  return (
    <div>
      <Routes>

      <Route path="/" element={<Home/>}/>
<Route path="/signup" element={<Register/>}/>
<Route path="/login" element={<Login/>}/>



      </Routes>
    </div>
  )
}

export default MainRoutes
