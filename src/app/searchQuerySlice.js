import { createSlice } from '@reduxjs/toolkit'

export const searchQuerySlice = createSlice({
    name: 'searchQuery',
    initialState: {
        value: ""
    },
    reducers: {
        newValue: (state , action)=>{
            state.value= action.payload;
         }
    }
    })

export const {newValue} =searchQuerySlice.actions;
export default searchQuerySlice.reducer;