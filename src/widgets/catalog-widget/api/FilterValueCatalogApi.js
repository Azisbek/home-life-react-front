import { $api } from "../../../constants/service/api";

export const filterValueCatalogApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getFilterCategories: build.query({
      query: () => ({
        url: "/product/categories/",
        method: "GET",
      }),
    }),
    getFilterColor: build.query({
      query: () => ({
        url: "/product/colors/",
        method: "GET",
      }),
    }),

    getFilterBrands: build.query({
      query: () => ({
        url: "/product/brands/",
        method: "GET",
      }),
    }),
  }),
});
export const {
  useGetFilterBrandsQuery,
  useGetFilterCategoriesQuery,
  useGetFilterColorQuery,
} = filterValueCatalogApi;
