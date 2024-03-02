import { barberapiSlice } from "../../../app/api/barberapiSlice"
import { logOut, setCredentials } from "./barberauthSlice"

// console.log(barberapiSlice)

//Logine component theke token localstate save hbe
//Refresh endpoint of localstate token save korbe

export const barberauthApiSlice = barberapiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth/signin',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        sendLogout: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    console.log("I am barber logout slice ", data?.message)
                    dispatch(logOut())
                    setTimeout(() => {
                        dispatch(barberapiSlice.util.resetApiState()) //rtk query state jodi kono cache thake segulokao reset kore debo
                    }, 1000)
                    // dispatch(apiSlice.util.resetApiState()) 
                } catch (err) {
                    console.log(err)
                }
            }
        }),
        refresh: builder.mutation({
            query: () => ({
                url: '/auth/refresh',
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    console.log(data)
                    const { accessToken } = data
                    dispatch(setCredentials({ accessToken }))
                } catch (err) {
                    console.log(err)
                }
            }
        }),
        barberLoggedIn: builder.query({
            query: () => ({
                url: '/auth/barberloggedin',
                method: 'GET'
            }),
            // providesTags: ['Barber']
        }),

    })
})

export const {
    useLoginMutation,
    useBarberLoggedInQuery,
    useRefreshMutation,
    useSendLogoutMutation
} = barberauthApiSlice 