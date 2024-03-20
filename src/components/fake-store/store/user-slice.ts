import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUser } from "../../../api/fakeStoreCalls";
import { UserType } from "../utils/types";

type UserState = {
  users: UserType[];
  currentUser: UserType | undefined;
};

const initialState: UserState = {
  users: [],
  currentUser: undefined,
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
  reducers: {
    setActiveUser: (state, action: PayloadAction<{ user: UserType }>) => {
      state.currentUser = action.payload.user;
    },

    updateUserInfo: (state, action: PayloadAction<{ user: UserType }>) => {
      state.users[action.payload.user.id] = action.payload.user;
      state.currentUser = action.payload.user;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload!;
      })
      .addDefaultCase((state, action) => {});
  },
});

export const { setActiveUser, updateUserInfo } = userSlice.actions;
