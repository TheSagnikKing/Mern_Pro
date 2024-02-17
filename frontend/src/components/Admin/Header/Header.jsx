import React from 'react'
import "./Header.css"

const Header = () => {

  const content = (
    <main className='admin__header__main'>
        <h1>Header</h1>

        <div>
            <button>Edit Profile</button>
            <button>Logout</button>
        </div>
    </main>
  )

  return content
}

export default Header