import React, { useEffect, useRef, useState } from 'react'
import "./Signin.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../authSlice'
import { useLoginMutation } from '../authApiSlice'

const Signin = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errMsg, setErrMsg] = useState("")

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    setErrMsg("")
  }, [email, password])

  const [login, { isLoading }] = useLoginMutation()

  const SigninHandler = async () => {
    try {
      const { accessToken } = await login({ email, password }).unwrap()
      dispatch(setCredentials({ accessToken }))
      console.log(accessToken)
      setEmail("")
      setPassword("")
      navigate("/admin-dashboard")
    } catch (error) {
      if (!error.status) {
        setErrMsg('No Server Response');
      } else if (error.status === 400) {
        setErrMsg('Missing Email or Password');
      } else if (error.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg(error.data?.message);
      }
    }
  }

  const content = (
    <main className='admin__signin__main'>
      <div className='admin__signin__div'>
        {errMsg && <h1 style={{ color: "#fff", background: "crimson", paddingInline: "1rem", boxShadow: "0px 0px 4px crimson", borderRadius: "0.3rem" }}>
          {errMsg}
        </h1>}

        <h1>Sign In To Your Admin Account</h1>
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

        {
          isLoading ? <button>Loader</button> : <button onClick={SigninHandler}>Signin</button>
        }

        <Link to="/admin-signup" >Signup</Link>
      </div>
    </main>
  )
  return content
}

export default Signin