import { $api } from "../../../constants/service/api";

export const order = $api.injectEndpoints({
  endpoints: (build) => ({
    postOrder: build.mutation({
      query: (body) => ({
        url: "/cart/order/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { usePostOrderMutation } = order;
