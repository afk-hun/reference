import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUser } from "../../../api/fakeStoreCalls";

export type User = {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
};

type UserState = {
  items: User[];
};

const initialState: UserState = {
  items: [],
};

export const fetchUsers = createAsyncThunk("user/fetchData", async () => {
  try {
    const response = await getAllUser();

    return response as User[];
  } catch {}
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.items = action.payload!;
      })
      .addDefaultCase((state, action) => {});
  },
});

export default userSlice.reducer;
