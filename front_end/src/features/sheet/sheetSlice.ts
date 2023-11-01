import { createSlice } from "@reduxjs/toolkit";
import { fetchSheet } from "../../api/get";

export interface IDetailState {
  sheet: any;
}

const initialState: IDetailState = {
  sheet: {},
};

export const sheet = createSlice({
  name: "sheet",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSheet.fulfilled, (state, action) => {
      state.sheet = action.payload;
    });
  },
});

export default sheet.reducer;
