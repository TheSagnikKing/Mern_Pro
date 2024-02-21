import React, { useEffect, useState } from 'react'
import "./Header.css"
import { useNavigate } from 'react-router-dom'
import { useSendLogoutMutation } from '../../../features/Admin/auth/authApiSlice'
import { useSelector } from 'react-redux'
import { selectCurrentAdminInfo } from '../../../features/Admin/auth/authSlice'

const Header = () => {

  // const [logout, { isFetching }] = useSendLogoutMutation()

  // const currentAdmin = useSelector(selectCurrentAdminInfo)
  // aibhabe user display na kore ami arekta wrapper bania ni jeta puro dashboard ke wrap korbe
  // ar sei wrapper modhe ami jwt-decode dia email paejabo paegele ami setadia current user ke query kornebo 
  //  ar korar pore setake createSlice save kordebo so everytime ami current userer data pabo. Ata best way

  // ar jehutu ai componentake ami ProtectedRouter pore wrap korbo so amr kache always access Token present thakbe.

  // step 1: token access korbo createSlice thke .
  // step 2: setake jwt-decoder helpe ami admin email paejabo
  // step 3: ami sei admin email nia akta api query korbo jetake banate hbe ar sei api amake current admin info 
  // dia debo
  // step 4: ami setake nia createSlice save koredebo . So protekpage refresh amr kache always admin data thakbe.

  // console.log("useSendLogoutMutation ", useSendLogoutMutation())

  // const navigate = useNavigate()

  // const editClicked = () => {
  //   navigate("/admin-dashboard/editprofile")
  // }

  // const logoutClicked = async () => {
  //   try {
  //     await logout().unwrap()
  //     localStorage.setItem("AdminLoggedIn", "false")
  //     localStorage.setItem("BarberLoggedIn", "false")

  //     navigate("/admin-signin")

  //   } catch (error) {
  //     console.log(error?.data)
  //   }

  // }

  const navigate = useNavigate()

  const editClicked = () => {
    navigate('/barber-dashboard/editprofile')
  }

  const content = (
    <main className='admin__header__main'>
      <h1>Barber Header</h1>

      <div>
        <div style={{width:"4.5rem",height:"4.5rem",borderRadius:"50%",background:"red"}}><img style={{width:"100%",height:"100%",borderRadius:"50%"}}
        src="" alt="" /></div>
        <h2>User: &nbsp; </h2>
        <button onClick={editClicked}>Edit Profile</button>
        {/* {isFetching ? <h1 style={{ color: "#fff" }}>Loader</h1> : <button onClick={logoutClicked}>Logout</button>} */}
        <button onClick={() => {}}>Logout</button>
      </div>
    </main>
  )

  return content
}

export default Header