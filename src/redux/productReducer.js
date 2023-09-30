import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  total: 0,
};

export const cartReducer = createReducer(initialState, {
  add: (state, action) => {
    const item = action.payload;
    const isItemExist = state.cartItem.find((i) => i.id === item.id);

    if (isItemExist) {
      state.cartItem.forEach((i) => {
        if (i.id === item.id) i.quantity++;
      });
    } else {
      state.cartItem.push(item);
    }
  },

  decrement: (state, action) => {
    const item = state.cartItem.find((i) => i.id === action.payload.id);
    if (item.quantity > 1) {
      state.cartItem.forEach((i) => {
        if (i.id === item.id) i.quantity--;
      });
    }
  },

  remove: (state, action) => {
    state.cartItem = state.cartItem.filter((i) => i.id !== action.payload.id);
  },

  calculate: (state) => {
    let sum = 0;
    state.cartItem.forEach((i) => (sum += i.price * i.quantity));
    state.total = sum;
  },
});
