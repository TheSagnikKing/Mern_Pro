import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from './api/apiSlice'
import { setupListeners } from "@reduxjs/toolkit/query"
import authReducer from "../features/Admin/auth/authSlice"
import barberReducer from "../features/Barber/auth/barberauthSlice"
import { barberapiSlice } from "./api/barberapiSlice"

// If i want to use two different rtk query slice then i have to give different reducer path name
// If i didnot give that then rtk query by default will give "api" name to all reducers which will cause error
// SO always give different reducerpath names VVP

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [barberapiSlice.reducerPath]: barberapiSlice.reducer,
        auth: authReducer, 
        barberauth: barberReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      barberapiSlice.middleware
    ),
    devTools: true
})

setupListeners(store.dispatch)