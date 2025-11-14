import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQty: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.cartItems.find((i) => i.id === item.id);

      if (existing) {
        existing.qty += 1;
      } else {
        state.cartItems.push({ ...item, qty: 1 });
      }

      state.totalQty += 1;
      state.totalPrice += item.price;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((i) => i.id === id);

      if (item) {
        state.totalQty -= item.qty;
        state.totalPrice -= item.price * item.qty;
        state.cartItems = state.cartItems.filter((i) => i.id !== id);
      }
    },

    increaseQty: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((i) => i.id === id);
      if (item) {
        item.qty += 1;
        state.totalQty += 1;
        state.totalPrice += item.price;
      }
    },

    decreaseQty: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((i) => i.id === id);

      if (item && item.qty > 1) {
        item.qty -= 1;
        state.totalQty -= 1;
        state.totalPrice -= item.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty } =
  cartSlice.actions;

export default cartSlice.reducer;
