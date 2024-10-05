import { $api } from "../../../constants/service/api";

export const catalogApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getCatalogProduct: build.query({
      query: ({ category, brand, color, price_min, price_max }) => ({
        url: "/product/all/",
        method: "GET",
        params: {
          category,
          brand,
          color,
          price_min,
          price_max,
        },
      }),
    }),
  }),
});
export const { useGetCatalogProductQuery } = catalogApi;
