import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials } from '../../features/Barber/auth/barberauthSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8000',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => { 
        const barbertoken = getState().barberauth.barbertoken //akhane token asche barberauth theke

        if (barbertoken) {
            headers.set("authorization", `Bearer ${barbertoken}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {

    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.status === 403) { 
        console.log('sending refresh barbertoken')

        const refreshResult = await baseQuery('/barber/auth/refresh', api, extraOptions)

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

export const barberapiSlice = createApi({
    reducerPath: "barberapi",
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Barber'],
    endpoints: builder => ({})
})



