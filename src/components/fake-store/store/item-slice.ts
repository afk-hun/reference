import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StoreItemType } from "../utils/types";
import { getAllProducts } from "../../../api/fakeStoreCalls";

type ItemState = {
  items: StoreItemType[];
};

const initialState: ItemState = {
  items: [],
};

export const fetchItems = createAsyncThunk("item/fetchData", async () => {
  try {
    const response = await getAllProducts();

    return response as StoreItemType[];
  } catch {}
});

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload!;
    });
  },
});

export default itemSlice.reducer;
