import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: [],
        totalPrice:0
    },
    reducers: {
        addProduct: (state , action)=>{
            const productExists = state.value.some(product => product.id === action.payload.id);
            if (!productExists) {
                const productWithAmount = { ...action.payload, amount: 1 };
                state.value.push(productWithAmount);
                state.totalPrice+= productWithAmount.price;
                console.log("Product added:", productWithAmount)
            } else {
              console.log("Product already in the cart:", action.payload);
                
            }
            console.log("Current cart:", state.value.map(product => ({ ...product })));
        },
        removeProduct: (state, action )=>{
            const productIndex = state.value.findIndex(product => product.id === action.payload);
            if (productIndex !== -1) {
                const product = state.value[productIndex] 
                state.totalPrice-= (product.price * product.amount);
                const removedProduct = state.value.splice(productIndex, 1);
                console.log("Product removed:", removedProduct[0]);
            } else {
                console.log("Product not found in the cart:", action.payload);
            }
            console.log("Current cart:", state.value.map(product => ({ ...product })));
        },
        incrementItemInCart:( state,action )=>{
            const productIndex = state.value.findIndex(product => product.id === action.payload);
            if (productIndex !== -1) {
                state.value[productIndex].amount++;
                state.totalPrice += state.value[productIndex].price;
            }
        },
        decrementItemInCart:( state,action )=>{
            const productIndex = state.value.findIndex(product => product.id === action.payload);
            if (productIndex !== -1) {
                state.totalPrice-= state.value[productIndex].price;
                if(state.value[productIndex].amount <= 1){
                    state.value.splice(productIndex, 1);
                }
                else{
                    state.value[productIndex].amount--;
                }
            }
        },
        clearCart : state =>{
            state.value = [];
            state.totalPrice = 0;
        }

        
    }
    })

export const {addProduct, removeProduct, incrementItemInCart, decrementItemInCart, clearCart} =cartSlice.actions;
export default cartSlice.reducer;