import { apiSlice } from "../../../app/api/apiSlice"
import { logOut, setCredentials } from "./authSlice"

console.log(apiSlice)

//Logine component theke token localstate save hbe
//Refresh endpoint of localstate token save korbe

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/admin/auth/signin',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        register: builder.mutation({
            query: (credentials) => ({
                url: '/admin/auth/signup',
                method: 'POST',
                body: credentials
            })
        }),
        updateAdmin: builder.mutation({
            query: (credentials) => ({
                url: '/admin/auth/update',
                method: 'PATCH',
                body: credentials
            })
        }),
        sendLogout: builder.mutation({
            query: () => ({
                url: '/admin/auth/logout',
                method: 'POST',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    console.log("I am logout slice ",data?.message)
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
                url: '/admin/auth/refresh',
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
    })
})

export const {
    useLoginMutation,
    useSendLogoutMutation,
    useRefreshMutation,
    useRegisterMutation,
    useUpdateAdminMutation
} = authApiSlice 