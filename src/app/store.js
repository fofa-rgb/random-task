import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import sideBarReducer from "./sideBarSlice"

export const store =configureStore({
    
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        sideBar: sideBarReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
    
   
});

