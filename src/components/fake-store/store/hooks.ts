import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

type DispatchFunction = () => AppDispatch;

export const useStoreDispatch: DispatchFunction = useDispatch;
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
