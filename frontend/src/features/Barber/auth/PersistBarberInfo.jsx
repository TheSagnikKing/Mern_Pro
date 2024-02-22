import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { barberLoggedinCredentials } from './barberauthSlice'
import { useBarberLoggedInQuery } from './barberauthApiSlice'

const PersistBarberInfo = () => {

    // const token = useSelector(selectCurrentToken)

    // const User = token && jwtDecode(token)

    // //   {User?.UserInfo?.email}

    const {
        data:loggedinBarberdata,
        isSuccess,
        isError,
        error,
        isFetching,
    } = useBarberLoggedInQuery(undefined)

    console.log("Persist Barber Info ",loggedinBarberdata)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(barberLoggedinCredentials(loggedinBarberdata))
    },[loggedinBarberdata,dispatch])

    return (
        <div><Outlet/></div>
    )
}

export default PersistBarberInfo