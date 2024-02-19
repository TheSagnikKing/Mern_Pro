import React, { useEffect, useState } from 'react'
import "./Signup.css"
import { Link, useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '../authApiSlice'

const Signup = () => {

    const [signup, {
        data: signupdata,
        isSuccess,
        isError,
        error,
        isFetching
    }] = useRegisterMutation()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errMsg, setErrMsg] = useState("")

    const navigate = useNavigate()

    console.log("Signup Data ",signupdata)

    const SignupHandler = () => {

        const currentData = { email, password }

        signup(currentData)
        // navigate("/admin-accountdetails")
    }

    useEffect(() => {
        if(isSuccess){
            navigate("/admin-accountdetails", { state: { signupdata } })
        }
    },[navigate,isSuccess])

    useEffect(() => {
        if(isError){
            setErrMsg(error?.data?.message)
        }
    },[isError])

    useEffect(() => {
        setErrMsg("")
    },[email,password])
    
    let content

    if (isFetching) {
        content = <h1>Loader</h1>
    } else {
        content = (
            <main className='admin__signup__main'>
                <div className='admin__signup__div'>
                    {errMsg && <h1 style={{ color: "#fff", background: "crimson", paddingInline: "1rem", boxShadow: "0px 0px 4px crimson", borderRadius: "0.3rem" }}>
                        {errMsg}
                    </h1>}
                    <h1>Sign Up To Your Admin Account</h1>
                    <div>
                        <h1>Email</h1>
                        <input
                            type="text"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <h1>Password</h1>
                        <input
                            type="text"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button onClick={SignupHandler}>Signup</button>

                    <Link to="/admin-signin" >Signin</Link>
                </div>
            </main>
        )
    }


    return content
}

export default Signup