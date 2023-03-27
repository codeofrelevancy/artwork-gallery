import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { AppDispatch } from "@/app/store";
import type { RootState } from "@/app/store/rootReducer";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
