import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cartItems: [],
  totalQty: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart");
    },

    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.cartItems.find((i) => i.id === item.id);

      if (existing) {
        existing.qty += 1;
        toast.success("Increased quantity!");
      } else {
        state.cartItems.push({ ...item, qty: 1 });
        toast.success("Added to cart!");
      }

      state.totalQty += 1;
      state.totalPrice += item.price;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((i) => i.id === id);

      if (item) {
        toast.error("Item removed!");

        state.totalQty -= item.qty;
        state.totalPrice -= item.price * item.qty;
        state.cartItems = state.cartItems.filter((i) => i.id !== id);
      }
    },

    increaseQty: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) {
        item.qty += 1;
        state.totalQty += 1;
        state.totalPrice += item.price;
      }
    },

    decreaseQty: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item && item.qty > 1) {
        item.qty -= 1;
        state.totalQty -= 1;
        state.totalPrice -= item.price;
      }
    },
  },
});

export const {
  clearCart,
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
} = cartSlice.actions;
export default cartSlice.reducer;
