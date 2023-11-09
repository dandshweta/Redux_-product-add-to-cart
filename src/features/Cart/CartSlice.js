import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // state.data.push({ ...action.payload, quantity: 1 });
      const itemInCart = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.data.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      // const itemIndex = state.data.findIndex(
      //   (item) => item.id === action.payload.id
      // );
      // if (itemIndex !== -1) {
      //   state.data.splice(itemIndex, 1);
      // }

      const removeItem = state.data.filter(
        (item) => item.id !== action.payload.id
      );
      state.data = removeItem;
    },

    incrementQuantity: (state, action) => {
      const item = state.data.find((item) => item.id === action.payload.id);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.data.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
