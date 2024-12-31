import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalPrice: 0
}
const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, {payload})=>{
            state.items.push(payload)
            alert("item added successfully")
            console.log(state.items);
            
        },
        removeFromCart: (state, { payload }) => {
            state.items = state.items.filter((item) => item.id != payload.id); // Properly update the state
        }
        
    }
})

export const {addToCart, removeFromCart} = CartSlice.actions;

export default CartSlice.reducer;