import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { productInCart } from "./types/productInCart";

interface InitialState {
  cart: productInCart[];
  successAalert: boolean;
}

const initialState: InitialState = {
  cart: [],
  successAalert: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setQuantityPlus: (state, action: PayloadAction<string>) => {
      const productIndex = state.cart.findIndex(
        (p) => p.product.title === action.payload
      );
      state.cart[productIndex].quantity++;
    },
    setQuantityMinus: (state, action: PayloadAction<string>) => {
      const productIndex = state.cart.findIndex(
        (p) => p.product.title === action.payload
      );
      state.cart[productIndex].quantity--;
    },
    addProductToCart: (state, action: PayloadAction<productInCart>) => {
      state.cart.push(action.payload);
    },
    deleteProductFromCart: (state, action: PayloadAction<string>) => {
      const productIndex = state.cart.findIndex(
        (p) => p.product.title === action.payload
      );
      state.cart.splice(productIndex, 1);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    setAlert: (state) => {
      state.successAalert = true;
    },
  },
});

export const {
  setQuantityPlus,
  setQuantityMinus,
  addProductToCart,
  deleteProductFromCart,
  clearCart,
  setAlert,
} = cartSlice.actions;
export default cartSlice.reducer;
