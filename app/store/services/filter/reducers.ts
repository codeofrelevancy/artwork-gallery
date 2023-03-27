import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    query: "",
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    resetQuery: (state) => {
      state.query = "";
    },
  },
});

export const { setQuery, resetQuery } = filterSlice.actions;

export default filterSlice.reducer;
