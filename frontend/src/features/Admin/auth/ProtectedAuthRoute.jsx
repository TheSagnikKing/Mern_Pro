import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtectedAuthRoute = () => {

    // Ata jehututu akta basic login form akhane jodi user localstorage theke value delete kore cholao ase tate kono
    // problem nai but main dashboarde na aste parlai holo. Ata akdom correct approach

    const AdminLoggedin = localStorage.getItem("AdminLoggedIn")

    const navigate = useNavigate()
    
    useEffect(() => {
        if(AdminLoggedin === "true"){
            navigate("/admin-dashboard")
        }
    },[AdminLoggedin,navigate])

  return (
    <div><Outlet/></div>
  )
}

export default ProtectedAuthRoute