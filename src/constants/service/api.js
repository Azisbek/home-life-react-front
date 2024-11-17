import { createApi } from "@reduxjs/toolkit/query/react";
import { $baseQueryWithRefresh } from "./query";

export const $api = createApi({
  reducerPath: "baseApi",
  baseQuery: $baseQueryWithRefresh,
  keepUnusedDataFor: 0,
  endpoints: () => ({}),
});
