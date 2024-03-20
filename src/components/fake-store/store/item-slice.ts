import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { StoreItemType } from "../utils/types";
import { getAllCategories, getAllProducts } from "../../../api/fakeStoreCalls";

type ItemState = {
  itemsOrigin: StoreItemType[];
  categoriesOrigin: string[];
  items: StoreItemType[];
  filterList: string[];
};

const initialState: ItemState = {
  itemsOrigin: [],
  categoriesOrigin: [],
  items: [],
  filterList: [],
};

export const fetchItems = createAsyncThunk("item/fetchItem", async () => {
  try {
    const response = await getAllProducts();

    return response as StoreItemType[];
  } catch {}
});

export const fetchCategories = createAsyncThunk(
  "item/fetchCategory",
  async () => {
    try {
      const response = await getAllCategories();

      return response as string[];
    } catch {}
  }
);

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    addFilter(state, action: PayloadAction<{ filter: string }>) {
      if (!state.filterList.includes(action.payload.filter)) {
        state.filterList.push(action.payload.filter);
      }

      state.items = state.itemsOrigin.filter((item) => {
        if (state.filterList.includes(item.category)) {
          return item;
        }
      });
    },

    removeFilter(state, action: PayloadAction<{ filter: string }>) {
      if (state.filterList.includes(action.payload.filter)) {
        state.filterList.splice(
          state.filterList.indexOf(action.payload.filter),
          1
        );
      }

      if (state.filterList.length === 0) {
        state.items = state.itemsOrigin;
      } else {
        state.items = state.itemsOrigin.filter((item) => {
          if (state.filterList.includes(item.category)) {
            return item;
          }
        });
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.itemsOrigin = action.payload!;
        state.items = action.payload!;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categoriesOrigin = action.payload!;
      });
  },
});
export const { addFilter, removeFilter } = itemSlice.actions;
