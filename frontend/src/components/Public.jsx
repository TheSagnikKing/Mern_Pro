import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Public = () => {

  const AdminLoggedin = localStorage.getItem("AdminLoggedIn")
  const BarberLoggedin = localStorage.getItem("BarberLoggedIn")

  console.log("From Barber BarberLoggedin", BarberLoggedin)
  console.log("From Barber AdminLoggedin", AdminLoggedin)

  const navigate = useNavigate()

  useEffect(() => {
    if (AdminLoggedin === "false" && BarberLoggedin === "true") {
      navigate("/barber-dashboard")
    } else if (AdminLoggedin === "true" && BarberLoggedin === "false") {
      navigate("/admin-dashboard")
    } else {

    }
  }, [BarberLoggedin, AdminLoggedin, navigate])

  const content = (
    <main className='public__main'>
      <div className='public__main__div'>
        <h1>Welcome to my complete auth project</h1>
        <p>This is my first project with Redux Toolkit and Rtk Query</p>
        <Link to="/admin-signin">Admin Login</Link>
        <Link to="/barber-signin">Barber Login</Link>
      </div>
    </main>
  )

  return content
}

export default Public