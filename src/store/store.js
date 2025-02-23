import { configureStore } from '@reduxjs/toolkit';
import Productreducer from './ProductSlice/ProductSlice'
import CartReducer from './CartSlice/CartSlice'
import searchReducer from './SearchSlice/SearchSlice'
export const store = configureStore({
    reducer: {
        Product : Productreducer,
        Cart: CartReducer,
        search : searchReducer
    }
})

