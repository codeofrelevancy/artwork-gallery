import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@/app/store/rootReducer";

const selectWishlist = (state: RootState) => state.wishlist;

export const wishlistSelector = createSelector(selectWishlist, (state) => state);
