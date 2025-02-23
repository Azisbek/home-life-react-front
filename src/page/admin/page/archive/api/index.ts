import { $api } from "../../../../../constants/service/api";

export const isActive = $api.injectEndpoints({
  endpoints: (build) => ({
    isActiveProducts: build.mutation({
      query: ({ id, isActive }) => ({
        url: `/product/${id}/`,
        method: "PATCH",
        body: { is_active: isActive },
      }),
    }),

    getProductArchive: build.query({
      query: () => ({
        url: `/product/archive/`,
        method: "GET",
      }),
    }),
  }),
});
export const { useIsActiveProductsMutation, useGetProductArchiveQuery } =
  isActive;
