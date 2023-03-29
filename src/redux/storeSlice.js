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
            
                     
        }
    }
})

export const { addToCart } = storeSlice.actions

export default storeSlice.reducer