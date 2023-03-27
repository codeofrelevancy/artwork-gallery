import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
  },
  reducers: {
    updateWishlist: (state, action) => {
      const id = action.payload;
      const index = state.wishlist.indexOf(id as never);

      if (index !== -1) {
        state.wishlist.splice(index, 1);
      } else {
        state.wishlist.push(id as never);
      }
    },
  },
});

export const { updateWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
