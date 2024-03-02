import { apiSlice } from "../../../app/api/apiSlice"
import { logOut, setCredentials } from "./authSlice"

console.log(apiSlice)

//Logine component theke token localstate save hbe
//Refresh endpoint of localstate token save korbe

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth/signin',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        googleLogin: builder.mutation({
            query: query => ({
                url: `/auth/googlesignin?token=${query.token}`,
                method: 'POST'
            })
        }),
        register: builder.mutation({
            query: (credentials) => ({
                url: '/auth/signup',
                method: 'POST',
                body: credentials
            })
        }),
        googleregister: builder.mutation({
            query: (query) => ({
                url: `auth/googlesignup?token=${query.token}`,
                method: 'POST'
            })
        }),
        updateAdmin: builder.mutation({
            query: (credentials) => ({
                url: '/auth/update',
                method: 'PATCH',
                body: credentials
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
                    console.log("I am logout slice ", data?.message)
                    dispatch(logOut())
                    setTimeout(() => {
                        dispatch(apiSlice.util.resetApiState()) //rtk query state jodi kono cache thake segulokao reset kore debo
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
        adminLoggedIn: builder.query({
            query: () => ({
                url: '/auth/adminloggedin',
                method: 'GET'
            }),
            providesTags: ['Admin']
        }),
    })
})

export const {
    useLoginMutation,
    useGoogleLoginMutation,
    useSendLogoutMutation,
    useRefreshMutation,
    useRegisterMutation,
    useGoogleregisterMutation,
    useUpdateAdminMutation,
    useAdminLoggedInQuery
} = authApiSlice 