import { $api } from "../../../constants/service/api";

export const homeProductApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getHomeProduct: build.query({
      query: () => ({
        url: "/product/homepage/",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetHomeProductQuery } = homeProductApi;
