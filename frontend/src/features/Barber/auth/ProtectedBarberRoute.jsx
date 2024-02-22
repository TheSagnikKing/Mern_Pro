import React, { useEffect, useState } from 'react'
import { Outlet, Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useRef } from 'react'
import { useRefreshMutation } from './barberauthApiSlice'
import { selectCurrentToken } from './barberauthSlice'

const ProtectedBarberRoute = () => {

    const token = useSelector(selectCurrentToken)
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
                console.log('verifying barber refresh token')
                try {
                    //const response = 
                    const {data} = await refresh()
                    //const { accessToken } = response.data
                    setTrueSuccess(true)
                }
                catch (err) {
                    console.error(err)
                }
            }

            if (!token) verifyRefreshToken()
        }

        return () => effectRan.current = true

        // eslint-disable-next-line
    }, [])

    let content

    if(isLoading){
        content = <h1>Loader</h1>
    }else if(isError){
        content = (
            <>
            <main style={{padding:"2rem",height:"100vh",width:"100%",background:"#efefef"}}>
             <h1 style={{color:"crimson",background:"#fff",width:"30rem",height:"4.5rem",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0px 0px 4px rgba(0,0,0,0.6)",borderRadius:"5px"}}>{error?.data?.message}</h1>
             <Link to="/admin-signin">
                <h1 style={{
                    marginTop:"2rem",
                    color:"red"
                }}>Please Login Again</h1>
             </Link>
            </main>
            <div></div>
            </>
        )
    }else if(isSuccess && trueSuccess){
        content = <Outlet />
    }else if(token && isUninitialized){ 
        // VVP
        // isUninitialized ta na likhle first time login korar por amr page blank asbe but 
        // refresh korle then sobh normally cholbe ata ke likhle oi problem ta solve how jabe
        content = <Outlet />
    }


    return content
}

export default ProtectedBarberRoute