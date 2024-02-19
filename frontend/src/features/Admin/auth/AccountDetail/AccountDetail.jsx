import React, { useEffect, useState } from 'react'
import "./AccountDetail.css"
import { useLocation, useNavigate } from 'react-router-dom'
import { useUpdateAdminMutation } from '../authApiSlice'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../authSlice'

const AccountDetail = () => {

    const [updateAdmin, {
        data: updateAdmindata,
        isSuccess,
        isError,
        error,
        isFetching
    }] = useUpdateAdminMutation()

    const location = useLocation()
    const signup = location?.state?.signupdata

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [name, setName] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [gender, setGender] = useState("")
    const [errMsg, setErrMsg] = useState("")

    useEffect(() => {
        if (isError) {
            setErrMsg(error?.data?.message)
        }
    }, [isError])

    useEffect(() => {
        setErrMsg("")
    }, [name, mobileNumber, gender])

    useEffect(() => {
        if(isSuccess){
            console.log(updateAdmindata.accessToken)
            dispatch(setCredentials(updateAdmindata.accessToken )) //basically ami accesstoken ke set korte chaichi ai bhabe hochena signin way te korle 100% hoejabe
            localStorage.setItem("AdminLoggedIn", "true")
            localStorage.setItem("BarberLoggedIn", "false")
            navigate("/admin-dashboard")
        }
    },[navigate,isSuccess,dispatch])

    const adminAccountDetailHandler = () => {
        const currentData = { email:signup?.newUser?.email,name,mobileNumber,gender}

        console.log(currentData)
        
        updateAdmin(currentData)
        // navigate("/admin-dashboard")
    }

    const content = (
        <main className='admin__accountdetail__main'>
            <div className='admin__accountdetail__div'>
                {errMsg && <h1 style={{ color: "#fff", background: "crimson", paddingInline: "1rem", boxShadow: "0px 0px 4px crimson", borderRadius: "0.3rem" }}>
                    {errMsg}
                </h1>}
                <h1>Fill Your Extra Admin Account Details</h1>
                <div>
                    <h1>Name</h1>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <h1>Mobile Number</h1>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                    />
                </div>

                <div>
                    <h1>Gender</h1>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />
                </div>

                {isFetching ? <button>Loading</button> : <button onClick={adminAccountDetailHandler}>Submit</button>}
            </div>
        </main>
    )
    return content
}

export default AccountDetail