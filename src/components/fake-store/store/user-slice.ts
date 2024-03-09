import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUser } from "../../../api/fakeStoreCalls";
import { UserType } from "../utils/types";

type UserState = {
  users: UserType[];
};

const initialState: UserState = {
  users: [],
};

export const fetchUsers = createAsyncThunk("user/fetchData", async () => {
  try {
    const response = await getAllUser();

    return response as UserType[];
  } catch {}
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload!;
      })
      .addDefaultCase((state, action) => {});
  },
});

export default userSlice.reducer;
