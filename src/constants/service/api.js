import { createApi } from "@reduxjs/toolkit/query/react";
import { $baseQuery } from "./query";

export const $api = createApi({
  reducerPath: "baseApi",
  baseQuery: $baseQuery,
  keepUnusedDataFor: 0,
  endpoints: () => ({}),
});
