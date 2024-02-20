// Here i am using two different reduxtoolkit method for auth. 
// One is rtk query only for querying the auth logic and saving the access token in the localstate

import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: { token: null, adminInfo: null},
    reducers: {
        setCredentials: (state, action) => {
            const { accessToken } = action.payload
            state.token = accessToken
        },
        logOut: (state, action) => {
            state.token = null
        },

        AdminLoggedinCredentials : (state, action) => {
            // const { LoggedinAdmin } = action.payload
            // state.adminInfo = LoggedinAdmin

            const data = action.payload
            state.adminInfo = data?.LoggedinAdmin
        }
    }
})

export const { setCredentials, logOut, AdminLoggedinCredentials } = authSlice.actions

export default authSlice.reducer

export const selectCurrentToken = (state) => state.auth.token
export const selectCurrentAdminInfo = (state) => state.auth.adminInfo