import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Public from './components/Public'
import Signin from './features/Admin/auth/Signin/Signin'
import Signup from './features/Admin/auth/Signup/Signup'
import AccountDetail from './features/Admin/auth/AccountDetail/AccountDetail'
import Home from './features/Admin/dashboard/Home/Home'
import Salon from './features/Admin/dashboard/Salon/Salon'
import DashLayout from './components/Admin/DashLayout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Public />} />
        <Route path="/admin-signin" element={<Signin />} />
        <Route path="/admin-signup" element={<Signup />} />
        <Route path="/admin-accountdetails" element={<AccountDetail />} />

        <Route element={<DashLayout/>}>
          <Route path="/admin-dashboard" element={<Home />} />
          <Route path="/admin-dashboard/salon" element={<Salon />} />
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App