import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};


const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartItem: (state, action) => {
      const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeItem: (state, action) => {
       const result = state.cart.filter((item)=> item.id !== action.payload);
       state.cart = result
    },
    increaseQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex((item) => item.id === action.payload);
      state.cart[itemIndex].quantity += 1
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex((item) => item.id === action.payload);
      if(state.cart[itemIndex].quantity > 1){
        state.cart[itemIndex].quantity -= 1
      }

    },
  },
});
export default CartSlice.reducer;
export const { addToCartItem, removeItem, increaseQuantity,decreaseQuantity } = CartSlice.actions;
