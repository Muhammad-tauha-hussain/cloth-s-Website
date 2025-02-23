import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    query : ""
}
const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers:{
        setSearchQuery : (state, {payload}) => {
            state.query = payload;
            // console.log('Search query updated to ==> ', state.query);
            // alert('Search query updated to ==> ', state.query);
        }
    }
})


export const { setSearchQuery } = searchSlice.actions;

export default searchSlice.reducer;