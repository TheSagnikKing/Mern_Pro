import React from 'react'
import "./AccountDetail.css"
import { useNavigate } from 'react-router-dom'

const AccountDetail = () => {

  const navigate = useNavigate()
  
  const adminAccountDetailHandler = () => {
        navigate("/admin-dashboard")
  }

  const content = (
    <main className='admin__accountdetail__main'>
        <div className='admin__accountdetail__div'>
            <h1>Fill Your Extra Admin Account Details</h1>
            <div>
                <h1>Name</h1>
                <input type="text" placeholder="Enter Name"/>
            </div>

            <div>
                <h1>Mobile Number</h1>
                <input type="text" placeholder="Enter Name"/>
            </div>

            <div>
                <h1>Gender</h1>
                <input type="text" placeholder="Enter Name"/>
            </div>

            <button onClick={adminAccountDetailHandler}>Submit</button>
        </div>
    </main>
  )
  return content
}

export default AccountDetail