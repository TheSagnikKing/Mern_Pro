// Here i am using two different reduxtoolkit method for auth. 
// One is rtk query only for querying the auth logic and saving the access token in the localstate

import { createSlice } from '@reduxjs/toolkit'

const barberauthSlice = createSlice({
    name: 'barberauth',
    initialState: { barbertoken: null, barberInfo: null},
    reducers: {
        setCredentials: (state, action) => {
            const { accessToken } = action.payload
            state.barbertoken = accessToken
        },
        logOut: (state, action) => {
            state.barbertoken = null
        },

        barberLoggedinCredentials : (state, action) => {
            // const { LoggedinBarber } = action.payload
            // state.barberInfo = LoggedinBarber

            const data = action.payload
            state.barberInfo = data?.LoggedinBarber
        }
    }
})

export const { setCredentials, logOut, barberLoggedinCredentials } = barberauthSlice.actions

export default barberauthSlice.reducer

export const selectCurrentToken = (state) => state.barberauth.barbertoken
export const selectCurrentBarberInfo = (state) => state.barberauth.barberInfo