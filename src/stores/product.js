import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('http://localhost:8080/api/products/');
    console.log(response.data);
    return response.data;
});

const productSlice = createSlice({
    name:'product',
    initialState: {
        items:[],
        status:'idle',
        error:null
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.items = action.payload.data;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    }
})

export default productSlice.reducer;