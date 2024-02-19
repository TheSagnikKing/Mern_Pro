import React, { useEffect, useState } from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useRef } from 'react'
import { useRefreshMutation } from "../auth/authApiSlice"
import { selectCurrentToken } from './authSlice'

const ProtectedAuthRoute = () => {

    const AdminToken = useSelector(selectCurrentToken)
    const effectRan = useRef(false)

    const [trueSuccess, setTrueSuccess] = useState(false)

    const [refresh, {
        isUninitialized,
        isLoading,
        isSuccess,
        isError,
        error
    }] = useRefreshMutation()

    const NODE_ENV = 'development'

    useEffect(() => {

        if (effectRan.current === true || NODE_ENV !== 'development') { // React 18 Strict Mode

            const verifyRefreshToken = async () => {
                console.log('verifying refresh token')
                try {
                    //const response = 
                    await refresh()
                    //const { accessToken } = response.data
                    setTrueSuccess(true)
                }
                catch (err) {
                    console.error(err)
                }
            }

            if (!AdminToken) verifyRefreshToken()
        }

        return () => effectRan.current = true

        // eslint-disable-next-line
    }, [])

    const navigate = useNavigate()

    let content

    if(isLoading){
        content = <h1>Loader</h1>
    }else if(isError){
        content = <Outlet />
    }else if(isSuccess && trueSuccess){
        navigate('/admin-dashboard')
    }else if(AdminToken && isUninitialized){ 
        // VVP
        // isUninitialized ta na likhle first time login korar por amr page blank asbe but 
        // refresh korle then sobh normally cholbe ata ke likhle oi problem ta solve how jabe
        content = <Outlet />
    }


    return content
}

export default ProtectedAuthRoute