import { apiSlice } from "../../../../app/api/apiSlice"

export const editApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        uploadAdminImage: builder.mutation({
            query: (filedata) => ({
                url: '/admin/other/admin/image/upload',
                method: 'POST',
                body:filedata
            }),
            invalidatesTags: ['Admin']
        })
    }),
})

export const {
    useUploadAdminImageMutation
} = editApiSlice
