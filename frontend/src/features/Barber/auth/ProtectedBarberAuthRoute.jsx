import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtectedBarberAuthRoute = () => {

    // Ata jehututu akta basic login form akhane jodi user localstorage theke value delete kore cholao ase tate kono
    // problem nai but main dashboarde na aste parlai holo. Ata akdom correct approach

    // When i will apply barber also then useEffect redirect logic will be 
    // if( AdminLoggedin === "true" && BarberLoggedin === "false"){navigate('/admin-dashboard)}

    const AdminLoggedin = localStorage.getItem("AdminLoggedIn")
    const BarberLoggedin = localStorage.getItem("BarberLoggedIn")

    console.log("From Barber BarberLoggedin",BarberLoggedin)
    console.log("From Barber AdminLoggedin",AdminLoggedin)

    const navigate = useNavigate()
    
    useEffect(() => {
        if(AdminLoggedin === "false" && BarberLoggedin === "true"){
            navigate("/barber-dashboard")
        }else if(AdminLoggedin === "true" && BarberLoggedin === "false"){
          navigate("/admin-dashboard")
        }else{
          
        }
    },[BarberLoggedin,AdminLoggedin,navigate])

  return (
    <div><Outlet/></div>
  )
}

export default ProtectedBarberAuthRoute