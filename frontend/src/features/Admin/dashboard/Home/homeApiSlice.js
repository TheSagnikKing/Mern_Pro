import { apiSlice } from "../../../../app/api/apiSlice"

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getSalon: builder.query({
            query: () => ({
                url: '/other/salon',
                method: 'GET'     
            })
        })
    }),
})

export const {
    useLazyGetSalonQuery
} = usersApiSlice
