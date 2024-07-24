import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import products from "../data/data.json";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, {rejectWithValue}) => {
  try{
    //const response = await axios.get(`${process.env.REACT_APP_API_URL}`);
    //console.log(response);
    return products;
  } catch ( error) {
    return rejectWithValue('Failed to fetch products');
  }
    
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