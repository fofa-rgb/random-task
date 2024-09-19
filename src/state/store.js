import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import cartReducer from "./cartSlice";
import sideBarReducer from "./sideBarSlice"
import searchQueryReducer from "./searchQuerySlice";
import modalReducer from "./modalSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";


const persistConfig = {
    key: 'root',
    storage,
  }
  
const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store =configureStore({
    
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        sideBar: sideBarReducer,
        searchQuery:searchQueryReducer,
        cart: persistedReducer,
        modal: modalReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
    
   
});

export const persistor = persistStore(store);