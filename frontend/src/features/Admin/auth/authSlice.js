// Here i am using two different reduxtoolkit method for auth. 
// One is rtk query only for querying the auth logic and saving the access token in the localstate

import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: { AdminToken: null },
    reducers: {
        setCredentials: (state, action) => {
            const { accessToken } = action.payload
            state.AdminToken = accessToken
        },
        logOut: (state, action) => {
            state.AdminToken = null
        },
    }
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (state) => state.auth.AdminToken