import React, { useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/Header'

const DashLayout = () => {

  const [open, setOpen] = useState(false)

  console.log("Open menu from dashLayout ", open)

  const openSidebar = open ? "dashlayout__container_open" : "dashlayout__container_close"

  return (
    <div>
      <Sidebar open={open} setOpen={setOpen} />
      <main className={openSidebar}>
        <Header />
        <main className='outlet__container'>
          <Outlet />
        </main>
        <Footer />
      </main>

    </div>
  )
}

export default DashLayout