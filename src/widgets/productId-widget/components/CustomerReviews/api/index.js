import { $api } from "../../../../../constants/service/api";

export const reviewsProductApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getReviewsProduct: build.query({
      query: ({ id }) => ({
        url: `/product/${id}/comments/`,
        method: "GET",
      }),
    }),
  }),
});
export const { useGetReviewsProductQuery } = reviewsProductApi;
