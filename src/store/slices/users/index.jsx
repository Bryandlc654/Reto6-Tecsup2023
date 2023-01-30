import { createSlice } from "@reduxjs/toolkit";
//axios
import axios from "axios";

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
  },
  reducers: {
    setUserList: (state, action) => {
      state.list = action.payload;
    }
  },
});

export const { setUserList } = userSlice.actions;

export default userSlice.reducer;

export const fetchAllUsers = () => (dispatch) => {
  axios
  .get('http://localhost:1337/api/products/')
  .then((response) => {
    dispatch(setUserList(response.data.data));
  })
  .catch((error) => console.log(error));
};