import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Outlet } from 'react-router-dom'
import { useAdminLoggedInQuery } from './authApiSlice'
import { AdminLoggedinCredentials } from './authSlice'

const PersistAdminInfo = () => {

    // const token = useSelector(selectCurrentToken)

    // const User = token && jwtDecode(token)

    // //   {User?.UserInfo?.email}

    const {
        data:loggedinAdmindata,
        isSuccess,
        isError,
        error,
        isFetching,
    } = useAdminLoggedInQuery()

    console.log("Persist Admin Info ",loggedinAdmindata)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(AdminLoggedinCredentials(loggedinAdmindata))
    },[loggedinAdmindata,dispatch])

    return (
        <div><Outlet/></div>
    )
}

export default PersistAdminInfo