import { configureStore } from "@reduxjs/toolkit";
import { screenSlice } from "./screen.slice";
import { $api } from "../../constants/service/api";
import { filterSlice } from "../../widgets/catalog-widget/components/filter-catalog/model/filter.slice";

export const store = configureStore({
  reducer: {
    [$api.reducerPath]: $api.reducer,
    [screenSlice.name]: screenSlice.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat($api.middleware),
  devTools: true,
});
