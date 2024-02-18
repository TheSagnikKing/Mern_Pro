import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials } from '../../features/Admin/auth/authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8000',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token

        console.log("token ",token)

        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {

    let result = await baseQuery(args, api, extraOptions)

    // a. Here 403 is Forbidden = means access token is present in the header but it is invalid or expired.
    // b. Here 401 is Unauthorized = means access token is null or not present.

    // IMP = If i write this logic (result?.error?.status === 403 || result?.error?.status === 401 ) then i dont have to
    // define persistLogin component if i am not giving the remember me option in my signin . if i am giving the remember me option
    // then i have to create a persistLogin component where refresh Token will run base on persist value

    if (result?.error?.status === 403 || result?.error?.status === 401 ) { 
        console.log('sending refresh token')

        const refreshResult = await baseQuery('/admin/auth/refresh', api, extraOptions)

        if (refreshResult?.data) {

            api.dispatch(setCredentials({ ...refreshResult.data }))

            result = await baseQuery(args, api, extraOptions)
        } else {

            if (refreshResult?.error?.status === 403) {
                refreshResult.error.data.message = "Your login has expired."
            }
            return refreshResult
        }
    }

    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    // tagTypes: ['Note', 'User'],
    endpoints: builder => ({})
})