import { $api } from "../../../../../constants/service/api";

export const addProductApi = $api.injectEndpoints({
  endpoints: (build) => ({
    addProductAdmin: build.mutation({
      query: (body) => ({
        url: "product/create/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAddProductAdminMutation } = addProductApi;
