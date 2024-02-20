import React, { useState } from 'react'
import './UpdateSalon.css'
import { useLocation } from 'react-router-dom'
import { IoLocationSharp } from 'react-icons/io5'

const UpdateSalon = () => {

    const location = useLocation()
    const salondata = location?.state

    const [adminEmail, setAdminEmail] = useState(salondata?.adminEmail)
    const [salonName, setSalonName] = useState(salondata?.salonName)
    const [city, setCity] = useState(salondata?.city)
    const [country, setCountry] = useState(salondata?.country)
    const [services, setServices] = useState([])

    let content;

    const updateSalonHandler = () => {
        const arrayservices = services.split(', ')

        const salondata = {
            adminEmail,
            salonName,
            city,
            country,
            services:arrayservices
        }

        console.log(salondata)
    }

    content = (
        <main>
            <div className='admin_dashboard_createsalon_div'>
                <h2>Update Your own Salon</h2>

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

                <button onClick={updateSalonHandler}>Update</button>
            </div>
        </main>
    )
    return content
}

export default UpdateSalon