import React from 'react'
import { useLazyGetSalonQuery } from './homeApiSlice'
import { useSelector } from 'react-redux'
import { selectCurrentAdminInfo } from '../../auth/authSlice'


const Home = () => {

  // useLazyQuery componment apply korar por akbar page ta refresh korenile sobh kaj korbe
  const [fetchsalon, { data, isFetching, isSuccess, isError, error }] = useLazyGetSalonQuery()

  const currentAdmin = useSelector(selectCurrentAdminInfo)

  let content

  const fetchHandler = () => {
    fetchsalon()
  }

  console.log(data)

  if (isFetching) {
    content = <h1>Loader</h1>
  } else if(isError){
    content =<h1 style={{color:"crimson"}}>{error?.data?.message}</h1>
  } else{
    content = (
      <>
        <h1>The current Admin that is Logged in is <span style={{color:"orangered"}}>{currentAdmin?.email}</span></h1>
        <h1>The current Admin Name is <span style={{color:"orangered"}}>{currentAdmin?.name}</span></h1>
        <h1>Role : {currentAdmin?.role}</h1>
        <h1>{data?.message}</h1>
        <br/><hr/><br/>
        <button onClick={fetchHandler}>Fetch</button>
      </>
    )
  }

  return content
}

export default Home