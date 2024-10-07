import { $api } from "../../../../constants/service/api";

export const searchApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getSearchProduct: build.query({
      query: ({ search }) => ({
        url: `/product/search/`,
        method: "GET",
        params: {
          search: search,
        },
      }),
    }),
  }),
});
export const { useGetSearchProductQuery } = searchApi;
