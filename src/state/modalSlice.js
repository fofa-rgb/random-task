import { createSlice } from '@reduxjs/toolkit'


export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        value: false,
        product: {
            title: '',
            description: ''
        }
    },
    reducers: {
        setProduct: (state,action) =>{
            state.product = action.payload;
        },
        toggleOn: state =>{
            state.value= true;
        },
        toggleOff: state =>{
            state.value=false;
        }
    }
    })

export const {toggleOff,toggleOn, setProduct} =modalSlice.actions;
export default modalSlice.reducer;