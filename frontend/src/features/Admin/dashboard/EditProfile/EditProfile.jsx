import React from 'react'
import "./EditProfile.css"

const EditProfile = () => {

  const content = (
    <main className='admin__edit__main'>
        <div className='admin__edit__main__div'>
            <h1>Edit Your Admin Profile</h1>

            <div>
                <h1>Email</h1>
                <input type="text" value={"sagniknandy27@gmail.com"}/>
            </div>

            <div>
                <h1>Name</h1>
                <input type="text" placeholder='Enter Your Name'/>
            </div>

            <div>
                <h1>Mobile Number</h1>
                <input type="text" placeholder='Enter Your Mobile Number'/>
            </div>

            <div>
                <h1>Gender</h1>
                <input type="text" placeholder='Enter Your Gender'/>
            </div>

            <button>Update</button>

        </div>
    </main>
  )
  return content
}

export default EditProfile