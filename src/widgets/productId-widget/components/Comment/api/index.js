import { $api } from "../../../../../constants/service/api";

export const commentAddApi = $api.injectEndpoints({
  endpoints: (build) => ({
    addProductComment: build.mutation({
      query: ({ product, comments, rating }) => ({
        url: "/product/comment/",
        method: "POST",
        body: { product, comments, rating },
      }),
    }),
  }),
});

export const { useAddProductCommentMutation } = commentAddApi;
