import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import rickAndMortySlice from "../slices/rick-n-morty/rick-and-morty-slice";


export const store = configureStore({
    reducer: {
        rickAndMorty: rickAndMortySlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
  >;