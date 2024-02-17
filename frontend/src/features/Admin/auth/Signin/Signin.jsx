import React from 'react'
import "./Signin.css"
import { Link, useNavigate } from 'react-router-dom'

const Signin = () => {

  const navigate = useNavigate()

  const SigninHandler = () => {
        navigate("/admin-dashboard")
  }

  const content = (
    <main className='admin__signin__main'>
        <div className='admin__signin__div'>
            <h1>Sign In To Your Admin Account</h1>
            <div>
                <h1>Email</h1>
                <input type="text" placeholder="Enter Email" required/>
            </div>

            <div>
                <h1>Password</h1>
                <input type="text" placeholder="Enter Password" required/>
            </div>

            <button onClick={SigninHandler}>Signin</button>

            <Link to="/admin-signup" >Signup</Link>
        </div>
    </main>
  )  
  return content
}

export default Signin