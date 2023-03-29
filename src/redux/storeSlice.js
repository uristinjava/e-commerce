import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    userUnfo:[],
}

export const storeSlice = createSlice({
    name: 'e_commerce',
    initialState,

    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload.id)
            if (item) {
                item.quantity += action.payload.quantity;
            } else (
                state.products.push(action.payload)
            )
            
                     
        },
        incrementQuantity: (state, action) => {
            const item = state.products.find(
                (item) => item.id === action.payload);
            
            
            item.quantity++
        },

        decrimentsQuantity: (state, action) => {
            const item = state.products.find(
                (item) => item.id === action.payload);
            if (item.quantity === 1) {
               item.quantity = 1
            } else {
                item.quantity--
           }
            
            
        },

        deletItem: (state, action) => {
            state.products = state.products.filter((item)=>item.id !==action.payload)
        },

        resetCart:(state) => {
            state.products=[]
        }
    }
})

export const { addToCart, deletItem, resetCart, incrementQuantity, decrimentsQuantity } = storeSlice.actions

export default storeSlice.reducer