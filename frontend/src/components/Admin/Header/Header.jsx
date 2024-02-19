import React, { useEffect, useState } from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'
import { useSendLogoutMutation } from '../../../features/Admin/auth/authApiSlice'

const Header = () => {

  const [logout, { isFetching }] = useSendLogoutMutation()

  console.log("useSendLogoutMutation ", useSendLogoutMutation())

  const navigate = useNavigate()

  const editClicked = () => {
    navigate("/admin-dashboard/editprofile")
  }

  const logoutClicked = async() => {
    try {
      await logout().unwrap()
      localStorage.setItem("AdminLoggedIn","false")
      localStorage.setItem("BarberLoggedIn", "false")
      
      navigate("/admin-signin")

    } catch (error) {
      console.log(error?.data)
    }

  }

  const content = (
    <main className='admin__header__main'>
      <h1>Header</h1>

      <div>
        <button onClick={editClicked}>Edit Profile</button>
        {isFetching ? <h1 style={{ color: "#fff" }}>Loader</h1> : <button onClick={logoutClicked}>Logout</button>}
      </div>
    </main>
  )

  return content
}

export default Header