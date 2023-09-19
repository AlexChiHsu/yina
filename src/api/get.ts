import { createAsyncThunk } from "@reduxjs/toolkit";

export function getSheet() {
  return "https://sheet.best/api/sheets/4e3ac195-5a01-42f2-9f28-ab676ae9a957";
}

export const fetchSheet = createAsyncThunk(
  "fetch/sheet",
  async (): Promise<any> => {
    const response = await fetch(getSheet());
    return response.json();
  }
);
