import React, { useEffect, useState } from 'react';
import './UpdateSalon.css';
import { useLocation, useNavigate } from 'react-router-dom';
// import { IoLocationSharp } from 'react-icons/io5';
import { useUpdatesalonMutation } from './salonApiSlice';

const UpdateSalon = () => {
    const location = useLocation();
    const salondata = location?.state;

    const [adminEmail, setAdminEmail] = useState(salondata?.adminEmail);
    const [salonName, setSalonName] = useState(salondata?.salonName);
    const [salonId] = useState(salondata?._id)
    const [city, setCity] = useState(salondata?.city);
    const [country, setCountry] = useState(salondata?.country);
    const [services, setServices] = useState([]);

    const [
        updatesalon,
        {
            data: updatedata,
            isSuccess,
            isFetching,
            isError,
            error,
        },
    ] = useUpdatesalonMutation();

    const navigate = useNavigate();

    let content;

    useEffect(() => {
        if (isSuccess) {
            navigate('/admin-dashboard/salon');
        } else if (isError) {
            alert(error?.data?.message);
        }
    }, [isSuccess, isError]);

    const updateSalonHandler = () => {
        const salondata = {
            adminEmail,
            salonId,
            salonName,
            city,
            country,
            services: ['Hair', 'Spa'],
        };

        // Use the updatesalon function instead of calling the hook again
        updatesalon(salondata);
    };

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
    );
    return content;
};

export default UpdateSalon;
