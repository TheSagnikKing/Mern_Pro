import { apiSlice } from "../../../../app/api/apiSlice"

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getSalon: builder.query({
            query: () => ({
                url: '/other/salon',
                method: 'GET',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                }       
            })
        })
    }),
})

export const {
    useLazyGetSalonQuery
} = usersApiSlice
