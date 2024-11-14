import { configureStore } from "@reduxjs/toolkit";
import { screenSlice } from "./screen.slice";
import { $api } from "../../constants/service/api";
import { filterSlice } from "../../widgets/catalog-widget/components/filter-catalog/model/filter.slice";
import { signInSlice } from "../../page/sign-in/model/signIn.slice";

export const store = configureStore({
  reducer: {
    [$api.reducerPath]: $api.reducer,
    [screenSlice.name]: screenSlice.reducer,
    [filterSlice.name]: filterSlice.reducer,
    [signInSlice.name]: signInSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat($api.middleware),
  devTools: true,
});
