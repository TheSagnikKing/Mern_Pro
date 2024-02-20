import React, { useEffect, useState } from 'react'
import "./EditProfile.css"
import { useSelector } from 'react-redux'
import { selectCurrentAdminInfo } from '../../auth/authSlice'
import { useUpdateAdminMutation } from '../../auth/authApiSlice'
import { useNavigate } from 'react-router-dom'

const EditProfile = () => {

    const currentAdmin = useSelector(selectCurrentAdminInfo)

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [gender, setGender] = useState("")

    useEffect(() => {
        if(currentAdmin){
            setEmail(currentAdmin?.email)
            setName(currentAdmin?.name)
            setMobileNumber(currentAdmin?.mobileNumber)
            setGender(currentAdmin?.gender)
        }
    },[currentAdmin])

    const [updateAdmin, {
        data:editdata,
        isSuccess,
        isLoading,
        isError,
        isFetching,
        error
    }] = useUpdateAdminMutation()

    const navigate = useNavigate()

    useEffect(() => {
        if(isSuccess){
            navigate("/admin-dashboard")
            window.location.reload()
        }
    },[navigate,isSuccess])

    const update = () => {
        const updateData = {
            email,name,mobileNumber,gender
        }

        updateAdmin(updateData)
    }

  const content = (
    <main className='admin__edit__main'>
        <div className='admin__edit__main__div'>
            <h1>Edit Your Admin Profile</h1>
            
            <div>
                <h1>Email</h1>
                <input 
                type="text" 
                value={email}
                />
            </div>

            <div>
                <h1>Name</h1>
                <input 
                type="text" 
                placeholder='Enter Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div>
                <h1>Mobile Number</h1>
                <input 
                type="text" 
                placeholder='Enter Your Mobile Number'
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                />
            </div>

            <div>
                <h1>Gender</h1>
                <input 
                type="text" 
                placeholder='Enter Your Gender'
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                />
            </div>

            <button onClick={update}>Update</button>

        </div>
    </main>
  )
  return content
}

export default EditProfile