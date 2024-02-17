import React from 'react'
import "./Signup.css"
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

    const navigate = useNavigate()

    const SignupHandler = () => {
        navigate("/admin-accountdetails")
    }

    const content = (
        <main className='admin__signup__main'>
            <div className='admin__signup__div'>
                <h1>Sign Up To Your Admin Account</h1>
                <div>
                    <h1>Email</h1>
                    <input type="text" placeholder="Enter Email" required />
                </div>

                <div>
                    <h1>Password</h1>
                    <input type="text" placeholder="Enter Password" required />
                </div>

                <button onClick={SignupHandler}>Signup</button>

                <Link to="/admin-signin" >Signin</Link>
            </div>
        </main>
    )
    return content
}

export default Signup