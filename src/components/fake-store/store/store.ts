import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user-slice";
import { itemSlice } from "./item-slice";
import { cartSlice } from "./cart-slice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    item: itemSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
