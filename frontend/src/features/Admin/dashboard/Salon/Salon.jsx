import React from 'react'
import "./Salon.css"
import { selectCurrentAdminInfo } from '../../auth/authSlice'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useGetsalonListQuery } from './salonApiSlice'

const Salon = () => {

  const currentAdmin = useSelector(selectCurrentAdminInfo)

  const {
    data:salonListData,
    isError,
    error,
    isFetching,
    isSuccess,
  } = useGetsalonListQuery(currentAdmin?.email)

  const navigate = useNavigate()

  const updateSalonHandler = () => {
    navigate(`/admin-dashboard/salon/updatesalon/1`)
  }

  const content = (
    <main className='admin__dashboard__salon__main'>
      <div>
        <h3>Salon: &nbsp;<span style={{color:"orangered"}}>{currentAdmin?.email}</span></h3>
        <Link to="/admin-dashboard/salon/createsalon">Create</Link>
      </div>

      <div className='admin__dashboard__salon_table'>
        <div className='admin__dashboard__salon_table_head'>
          <h5>Email</h5>
          <h5>Salon Name</h5>
          <h5>Country</h5>
          <h5>City</h5>
          <h5>Services List</h5>
          <h5></h5>
          <h5></h5>
        </div>

        <div className='admin__dashboard__salon_table_body'>
          <p>Email</p>
          <p>Salon Name</p>
          <p>Country</p>
          <p>City</p>
          <p>Services List</p>
          <button>Delete</button>
          <button onClick={() => updateSalonHandler()}>Update</button>
        </div>

      </div>
    </main>
  )


  return content
}

export default Salon