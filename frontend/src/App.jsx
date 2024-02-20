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
import EditProfile from './features/Admin/dashboard/EditProfile/EditProfile'
import ProtectedRoute from './features/Admin/auth/ProtectedRoute'
import ProtectedAuthRoute from './features/Admin/auth/ProtectedAuthRoute'
import PersistAdminInfo from './features/Admin/auth/PersistAdminInfo'
import CreateSalon from './features/Admin/dashboard/Salon/CreateSalon'
import UpdateSalon from './features/Admin/dashboard/Salon/UpdateSalon'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Public />} />

        <Route element={<ProtectedAuthRoute />}>
          <Route path="/admin-signin" element={<Signin />} />
          <Route path="/admin-signup" element={<Signup />} />
          <Route path="/admin-accountdetails" element={<AccountDetail />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<PersistAdminInfo />}>
            <Route element={<DashLayout />}>
              <Route path="/admin-dashboard" element={<Home />} />
              <Route path="/admin-dashboard/editprofile" element={<EditProfile />} />

              <Route path="/admin-dashboard/salon">
                <Route index element={<Salon />} />
                <Route path="createsalon" element={<CreateSalon/>}/>
                <Route path="updatesalon/:id" element={<UpdateSalon/>}/> 
              </Route>

            </Route>
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App