import { createSlice } from "@reduxjs/toolkit";

export const artworkSlice = createSlice({
  name: "artwork",
  initialState: {
    artworks: [],
    currentPage: 1,
    totalPages: 1,
    loading: true,
  },
  reducers: {
    setArtworks: (state, action) => {
      state.artworks = action.payload;
    },
    removeArtwork: (state, action) => {
      const id = action.payload;
      const index = state.artworks.findIndex((a: any) => a?.id === id);

      if (index !== -1) {
        state.artworks.splice(index, 1);
      }
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setArtworks,
  removeArtwork,
  setCurrentPage,
  setTotalPages,
  setLoading,
} = artworkSlice.actions;

export default artworkSlice.reducer;
