import { configureStore } from '@reduxjs/toolkit';
import Productreducer from './ProductSlice/ProductSlice'
import CartReducer from './CartSlice/CartSlice'
export const store = configureStore({
    reducer: {
        Product : Productreducer,
        Cart: CartReducer
    }
})