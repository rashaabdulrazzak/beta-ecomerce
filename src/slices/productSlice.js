import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  items: [],
  status: null,
};
export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const response = await axios.get(
      "https://linkedin-cv-crawler.beta-limited.workers.dev/interview/products"
    );
    return response?.data;
  }
);
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});
export default productSlice.reducer;
