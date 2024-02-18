import { apiSlice } from "../../../../app/api/apiSlice"

// This is the way i fetch data with rtk query with button click . 
// i cannot do that using useQuery because useQuery calls automatically if i want to do that then i have to use
// useMutation not useQuery 

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getSalon: builder.mutation({
            query: () => ({
                url: '/admin/other/salon',
                method: 'POST',
                body:{},
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            })
        })
    }),
})

export const {
    useGetSalonMutation
} = usersApiSlice
