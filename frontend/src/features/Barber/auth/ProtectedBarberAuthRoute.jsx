import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtectedBarberAuthRoute = () => {

    // Ata jehututu akta basic login form akhane jodi user localstorage theke value delete kore cholao ase tate kono
    // problem nai but main dashboarde na aste parlai holo. Ata akdom correct approach

    // When i will apply barber also then useEffect redirect logic will be 
    // if( AdminLoggedin === "true" && BarberLoggedin === "false"){navigate('/admin-dashboard)}

    const AdminLoggedin = localStorage.getItem("AdminLoggedIn")
    const BarberLoggedin = localStorage.getItem("BarberLoggedIn")

    const navigate = useNavigate()
    
    useEffect(() => {
        if(AdminLoggedin === "false" && BarberLoggedin === "true"){
            navigate("/barber-dashboard")
        }
    },[BarberLoggedin,AdminLoggedin,navigate])

  return (
    <div><Outlet/></div>
  )
}

export default ProtectedBarberAuthRoute