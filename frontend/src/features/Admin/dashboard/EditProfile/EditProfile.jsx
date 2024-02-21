import React, { useEffect, useState } from 'react'
import "./EditProfile.css"
import { useSelector } from 'react-redux'
import { selectCurrentAdminInfo } from '../../auth/authSlice'
import { useUpdateAdminMutation } from '../../auth/authApiSlice'
import { useNavigate } from 'react-router-dom'
import { useUploadAdminImageMutation } from './editApiSlice'

const EditProfile = () => {

    const currentAdmin = useSelector(selectCurrentAdminInfo)

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [gender, setGender] = useState("")
    
    console.log(currentAdmin)
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

    console.log(currentAdmin?.profile[0]?.url)

    const [
        uploadimage,{
            data:uploaddata,
            isSuccess:uploadSuccess,
            isFetching:uploadfetching,
            isError:uploadError,
            error:uploaderrordata
        }
    ] = useUploadAdminImageMutation()


    const [setprofilepic, Setsetprofilepic] = useState("")


  console.log(setprofilepic)


  const profileupdateHandler = () => {
    
    const formData = new FormData();

    formData.append('email', currentAdmin?.email)
    formData.append('profile', setprofilepic)

    uploadimage(formData)
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

            <div>
            <input
              type='file'
              onChange={(e) => Setsetprofilepic(e.target.files[0])}
            />

            <button onClick={profileupdateHandler} style={{
              height:"3.5rem",
              width:"10rem",
              background:"#f1f6fc",
              boxShadow:"0px 0px 6px rgba(0,0,0,0.6)",
              cursor:"pointer",
              borderRadius:"5px",
              border:"none",
              fontSize:"1.2rem"
            }}><p style={{fontSize:"1.2rem"}}>Upload</p></button>
          </div>

            <div className='ad_profile'>
                <img src={`${currentAdmin?.profile[0]?.url ? currentAdmin?.profile[0]?.url : ""}`} alt="" />
            </div>

            <button onClick={update}>Update</button>

        </div>
    </main>
  )
  return content
}

export default EditProfile