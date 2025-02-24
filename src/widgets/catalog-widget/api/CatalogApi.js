import { $api } from "../../../constants/service/api";

export const catalogApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getCatalogProduct: build.query({
      query: ({
        category,
        brand,
        color,
        price_min,
        price_max,
        search,
        page = 1,
        limit = 12,
      }) => ({
        url: "/product/all/",
        method: "GET",
        params: {
          search,
          category,
          brand,
          color,
          price_min,
          price_max,
          page,
          limit,
        },
      }),
    }),
  }),
});
export const { useGetCatalogProductQuery } = catalogApi;
