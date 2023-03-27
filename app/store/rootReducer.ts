import { combineReducers } from "@reduxjs/toolkit";

import artworkReducer from "@/app/store/services/artwork/reducers";
import wishlistReducer from "@/app/store/services/wishlist/reducers";
import filterReducer from "@/app/store/services/filter/reducers";

const rootReducer = combineReducers({
  artwork: artworkReducer,
  wishlist: wishlistReducer,
  filter: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
