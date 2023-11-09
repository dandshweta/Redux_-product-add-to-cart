import { configureStore } from "@reduxjs/toolkit";

import CartSlice from "../features/Cart/CartSlice";

const store = configureStore({
  reducer: {
    myCart: CartSlice,
  },
});

export default store;
