import React from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()

  const editClicked = () => {
    navigate("/admin-dashboard/editprofile")
  }

  const logoutClicked = () => {
    alert("logout clicked")
  }

  const content = (
    <main className='admin__header__main'>
        <h1>Header</h1>

        <div>
            <button onClick={editClicked}>Edit Profile</button>
            <button onClick={logoutClicked}>Logout</button>
        </div>
    </main>
  )

  return content
}

export default Header