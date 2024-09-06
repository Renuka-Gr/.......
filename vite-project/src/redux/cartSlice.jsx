import { createSlice } from '@reduxjs/toolkit'
const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload)
            console.log("added");
        },
        deleteFromCart(state, action) {
            return state.filter(item => item.id != action.payload.id);
        }
        // deleteFromCart(state, action) {
        //     // console.log("deleteFromCart action payload:", action.payload); // Log payload
        //     return state.filter(item => item !== action.payload);
        //   }
    }
})

export const { addToCart, deleteFromCart } = cartSlice.actions

export default cartSlice.reducer;