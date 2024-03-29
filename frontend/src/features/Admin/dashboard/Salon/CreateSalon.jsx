import React, { useEffect, useState } from 'react'
import './CreateSalon.css'
import { useCreatesalonMutation } from './salonApiSlice'
import { useNavigate } from 'react-router-dom'

const CreateSalon = () => {

    const [createsalon,{
        data:createSalondata,
        isSuccess,
        isFetching,
        isError,
        error
    }] = useCreatesalonMutation()

    const [adminEmail, setAdminEmail] = useState("")
    const [salonName, setSalonName] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [services, setServices] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        if(isSuccess){
            navigate("/admin-dashboard/salon")
        }
    },[navigate,isSuccess])

    let content;

    const createSalonHandler = () => {

        const salondata = {
            adminEmail,
            salonName,
            city,
            country,
            services:["hair","spa"]
        }

        createsalon(salondata)
    }

    content = (
        <main>
            <div className='admin_dashboard_createsalon_div'>
                {isError && <h2 style={{color:"crimson"}}>{error?.data?.message}</h2>}

                <h2>Create Your own Salon</h2>

                <div>
                    <h5>Email</h5>
                    <input
                        type="text"
                        value={adminEmail}
                        onChange={(e) => setAdminEmail(e.target.value)}
                        placeholder="Enter Your Email"
                    />
                </div>

                <div>
                    <h5>Salon Name</h5>
                    <input
                        type="text"
                        value={salonName}
                        onChange={(e) => setSalonName(e.target.value)}
                        placeholder="Enter Salon Name"
                    />
                </div>

                <div>
                    <h5>City</h5>
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter Your City"
                    />
                </div>

                <div>
                    <h5>Country</h5>
                    <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="Enter Your Country"
                    />
                </div>

                <div>
                    <h5>services</h5>
                    <input
                        type="text"
                        value={services}
                        onChange={(e) => setServices(e.target.value)}
                        placeholder="Enter Services separated By commas"
                    />
                </div>

                <button onClick={createSalonHandler}>Create</button>
            </div>
        </main>
    )
    return content
}

export default CreateSalon