import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@/app/store/rootReducer";

const selectFilter = (state: RootState) => state.filter;

export const filterSelector = createSelector(selectFilter, (state) => state);
