import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: []
}

const ProductSlice = createSlice({
    name: "all_products",
    initialState,
    reducers: {
        getAllProducts : (state, {payload} ) =>{
            state.products = payload
            console.log( 'Products data ==>' , state.products);
            
        }
    }
})


export const  {getAllProducts} = ProductSlice.actions;

export default ProductSlice.reducer;


