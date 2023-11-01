import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import sheetReducer from "../features/sheet/sheetSlice";

export const store = configureStore({
  reducer: {
    sheetReducer: sheetReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
