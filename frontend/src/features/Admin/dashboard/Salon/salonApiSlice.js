import { apiSlice } from "../../../../app/api/apiSlice"

// VERY VERY IMPORTANT

// In Rtk Query i dont have to write useSelectors to get data from the state if two or more components using
// the same shared data. I will simply call the api endpoint in that component.
// In the old fashion what i do is that i use useSelector hook to get the data from the state.
// But here what will happen is that rtk query will not call the api first it will check it in the cache if present it show the
// cache data else call the api. In this way it work as useSelector hook and i dont have to use useSelector hook when using rtk query.

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getsalonList: builder.query({
            query: (email) => ({
                url: `/admin/other/salon/salonlist?adminEmail=${email}`,
                method: "GET"
            })
        }),
        createsalon: builder.mutation({
            query: credentials => ({
                url: '/other/salon/createsalon',
                method: 'POST',
                body: { ...credentials }
            })
        })
    })
})

export const {
    useGetsalonListQuery,
    useCreatesalonMutation
} = authApiSlice 