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

    postFilterBrands: build.mutation({
      query: (body) => ({
        url: "/product/brands/",
        method: "POST",
        body,
      }),
    }),

    postCatalogBrands: build.mutation({
      query: (body) => ({
        url: "/product/categories/",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const {
  usePostCatalogBrandsMutation,
  usePostFilterBrandsMutation,
  useGetFilterBrandsQuery,
  useGetFilterCategoriesQuery,
  useGetFilterColorQuery,
} = filterValueCatalogApi;
