import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// Load from localStorage
const savedCart = JSON.parse(localStorage.getItem("cart"));

const initialState = savedCart || {
  cartItems: [],
  totalQty: 0,
  totalPrice: 0,
};

const saveToLocalStorage = (state) => {
  localStorage.setItem("cart", JSON.stringify(state));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQty = 0;
      state.totalPrice = 0;
      localStorage.removeItem("cart");
    },

    addToCart: (state, action) => {
      const item = action.payload;
      const quantity = item.qty || 1;;
      const existing = state.cartItems.find((i) => i.id === item.id);

      if (existing) {
        existing.quantity += item.quantity; // ← Use selected qty
        toast.success("Increased quantity!");
      } else {
        state.cartItems.push({ ...item, quantity }); // ← Use selected qty
        toast.success("Added to cart!");
      }

      state.totalQty += quantity; // ← Increase by selected qty
      state.totalPrice += item.price * quantity; // ← Add total price

      saveToLocalStorage(state);
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((i) => i.id === id);

      if (item) {
        toast.error("Item removed!");

        state.totalQty -= item.quantity;
        state.totalPrice -= item.price * item.quantity;

        state.cartItems = state.cartItems.filter((i) => i.id !== id);

        saveToLocalStorage(state);
      }
    },

    increaseQty: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQty += 1;
        state.totalPrice += item.price;

        saveToLocalStorage(state);
      }
    },

    decreaseQty: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQty -= 1;
        state.totalPrice -= item.price;

        saveToLocalStorage(state);
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
