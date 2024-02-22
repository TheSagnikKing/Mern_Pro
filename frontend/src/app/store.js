import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from './api/apiSlice'
import { setupListeners } from "@reduxjs/toolkit/query"
import authReducer from "../features/Admin/auth/authSlice"
import barberReducer from "../features/Barber/auth/barberauthSlice"
import { myApiSlice } from "./api/barberapiSlice"

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [myApiSlice.reducerPath]: myApiSlice.reducer,
        auth: authReducer, 
        // barberauth: barberReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      myApiSlice.middleware
    ),
    devTools: true
})

setupListeners(store.dispatch)