import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./productReducer";

const store = configureStore({
  reducer: {
    Cart: cartReducer,
  },
});

export default store;
