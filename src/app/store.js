import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import cartReducer from "./cartSlice";
import sideBarReducer from "./sideBarSlice"
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";




export const store =configureStore({
    
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        sideBar: sideBarReducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
    
   
});

