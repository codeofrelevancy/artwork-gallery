import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@/app/store/rootReducer";

const selectArtwork = (state: RootState) => state.artwork;

export const artworkSelector = createSelector(selectArtwork, (state) => state);
