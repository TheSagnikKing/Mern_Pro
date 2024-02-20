import React from 'react'
import "./Salon.css"
import { selectCurrentAdminInfo } from '../../auth/authSlice'
import { useSelector } from 'react-redux'

const Salon = () => {

  const currentAdmin = useSelector(selectCurrentAdminInfo)

  const content = (
    <main className='admin__dashboard__salon__main'>
        <h3>Salon </h3>
        <h3>The current Admin Email is fetching from api <span style={{color:"orangered"}}>{currentAdmin?.email}</span></h3>
    </main>
  )

  
  return content
}

export default Salon