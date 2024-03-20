import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CartType } from "../utils/types";
import { getUserCart } from "../../../api/fakeStoreCalls";

type CartState = {
  cart: CartType;
};

const initialState: CartState = {
  cart: {
    id: -1,
    userId: -1,
    date: "",
    products: [],
    __v: 0,
  },
};

export const fetchUserCart = createAsyncThunk(
  "cart/fetchUserCart",
  async (user: number) => {
    try {
      let response = await getUserCart(user);
      if (response === null) {
        response = {
          id: -1,
          userId: user,
          date: "",
          products: [],
          __v: 0,
        };
      }
      return response as CartType;
    } catch {}
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const itemIndex = state.cart.products.findIndex(
        (item) => item.productId === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart.products[itemIndex].quantity += action.payload.quantity;
      } else {
        state.cart.products.push({
          productId: action.payload.id,
          quantity: action.payload.quantity,
        });
      }
    },
    removeCart: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const itemIndex = state.cart.products.findIndex(
        (item) => item.productId === action.payload.id
      );
      if (state.cart.products[itemIndex].quantity === 1) {
        state.cart.products = state.cart.products.filter(
          (item) => item.productId !== action.payload.id
        );
      } else {
        state.cart.products[itemIndex].quantity -= action.payload.quantity;
      }
    },
    clearCart: (state, action) => {
      state.cart.products = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserCart.fulfilled, (state, action) => {
      state.cart.id = action.payload!.id;
      state.cart.userId = action.payload!.userId;

      if (state.cart.products.length >= 1) {
        let products = state.cart.products;
        const payloadItems = action.payload!.products;
        if (payloadItems.length !== 0) {
          for (let i = 0; i < payloadItems.length; i++) {
            const itemIndex = products.findIndex(
              (itm) => itm.productId === payloadItems[i].productId
            );
            if (itemIndex >= 0) {
              products[itemIndex].quantity += payloadItems[i].quantity;
            } else {
              products.push(payloadItems[i]);
            }
          }
        }
      } else {
        state.cart.products = action.payload!.products;
      }
    });
  },
});

export const { addCart, removeCart } = cartSlice.actions;
