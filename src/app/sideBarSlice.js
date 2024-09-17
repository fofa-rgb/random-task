import { createSlice } from '@reduxjs/toolkit'

export const sideBarSlice = createSlice({
    name: 'sideBar',
    initialState: {
        value: false
    },
    reducers: {
        toggleOn: state =>{
            state.value= true;
        },
        toggleOff: state =>{
            state.value=false;
        }
    }
    })

export const {toggleOff,toggleOn} =sideBarSlice.actions;
export default sideBarSlice.reducer;