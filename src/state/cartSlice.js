import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: []
    },
    reducers: {
        addProduct: (state , action)=>{
            const productExists = state.value.some(product => product.id === action.payload.id);
            if (!productExists) {
              state.value.push(action.payload);
              console.log("Product added:", action.payload);
            } else {
              console.log("Product already in the cart:", action.payload);
            }
            console.log("Current cart:", state.value.map(product => ({ ...product })));
        },
        removeProduct: (state, action )=>{
            const productIndex = state.value.findIndex(product => product.id === action.payload);
            if (productIndex !== -1) {
                const removedProduct = state.value.splice(productIndex, 1);
                console.log("Product removed:", removedProduct[0]);
            } else {
                console.log("Product not found in the cart:", action.payload);
            }
            console.log("Current cart:", state.value.map(product => ({ ...product })));
        }
    }
    })

export const {addProduct, removeProduct} =cartSlice.actions;
export default cartSlice.reducer;