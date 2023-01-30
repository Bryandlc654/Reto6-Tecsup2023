import { configureStore } from "@reduxjs/toolkit";
//reducers
import users from "./slices/users";
import clients from "./slices/clients";
import products from "./slices/products";

export default configureStore({
  reducer: {
    users,
    clients,
    products
  }
});