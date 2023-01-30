import { createSlice } from "@reduxjs/toolkit";
//axios
import axios from "axios";

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
  },
  reducers: {
    setProductList: (state, action) => {
      state.list = action.payload;
    }
  },
});

export const { setProductList } = productSlice.actions;

export default productSlice.reducer;

export const fetchAllProducts = () => (dispatch) => {
  axios
    .get('http://localhost:1337/api/products/')
    .then((response) => {
      dispatch(setProductList(response.data.data));
    })
    .catch((error) => console.log(error));
};