import React, { useEffect, useState } from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useSendLogoutMutation } from '../../../features/Barber/auth/barberauthApiSlice'
import { selectCurrentBarberInfo } from '../../../features/Barber/auth/barberauthSlice'


const Header = () => {

  const [logout, { isFetching }] = useSendLogoutMutation()

  const currentBarber = useSelector(selectCurrentBarberInfo)
  
  console.log("useSendLogoutMutation ", useSendLogoutMutation())

  const navigate = useNavigate()

  const editClicked = () => {
    navigate("/barber-dashboard/editprofile")
  }

  const logoutClicked = async () => {
    try {
      await logout().unwrap()
      localStorage.setItem("AdminLoggedIn", "false")
      localStorage.setItem("BarberLoggedIn", "false")

      navigate("/barber-signin")

    } catch (error) {
      console.log(error?.data)
    }

  }


  const content = (
    <main className='admin__header__main'>
      <h1>Barber Header</h1>

      <div>
        <div style={{width:"4.5rem",height:"4.5rem",borderRadius:"50%",background:"red"}}><img style={{width:"100%",height:"100%",borderRadius:"50%"}}
        src="" alt="" /></div>
        <h2>User: &nbsp; </h2>
        <button onClick={editClicked}>Edit Profile</button>
        {isFetching ? <h1 style={{ color: "#fff" }}>Loader</h1> : <button onClick={logoutClicked}>Logout</button>}
      </div>
    </main>
  )

  return content
}

export default Header