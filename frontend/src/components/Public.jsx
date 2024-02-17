import React from 'react'
import { Link } from 'react-router-dom'

const Public = () => {

  const content = (
    <main className='public__main'>
      <div className='public__main__div'>
        <h1>Welcome to my complete auth project</h1>
        <p>This is my first project with Redux Toolkit and Rtk Query</p>
        <Link to="/admin-signin">Admin Login</Link>
        <Link to="/barber-signin">Barber Login</Link>
      </div>
    </main>
  )

  return content
}

export default Public