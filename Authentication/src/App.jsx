import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'


const App = () => {
  return (
    <div className="">
      <Routes>
         <Route path='/login' element={<Login />} />
         <Route path='/' element={ <Dashboard />} />
      </Routes>
    </div>
  )
}

export default App