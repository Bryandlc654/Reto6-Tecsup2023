import { createSlice } from "@reduxjs/toolkit";
//axios
import axios from "axios";

export const clientSlice = createSlice({
  name: 'clients',
  initialState: {
    list: [],
  },
  reducers: {
    setClientList: (state, action) => {
      state.list = action.payload;
    }
  },
});

export const { setClientList } = clientSlice.actions;

export default clientSlice.reducer;

export const fetchAllClients = () => (dispatch) => {
  axios
    .get('https://reqres.in/api/users?per_page=12')
    .then((response) => {
      dispatch(setClientList(response.data.data));
    })
    .catch((error) => console.log(error));
};