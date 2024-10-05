import { $api } from "../../../constants/service/api";

export const productPageId = $api.injectEndpoints({
  endpoints: (build) => ({
    getCatalogProductId: build.query({
      query: ({ productId }) => ({
        url: `/product/${productId}`,
        method: "GET",
      }),
    }),
  }),
});
export const { useGetCatalogProductIdQuery } = productPageId;
