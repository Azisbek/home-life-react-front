import { $api } from "../../../../../constants/service/api";

export const productAddApi = $api.injectEndpoints({
  endpoints: (build) => ({
    addProductBasket: build.mutation({
      query: ({ product, quantity }) => ({
        url: "/cart/carts/",
        method: "POST",
        body: { product, quantity },
      }),
    }),
  }),
});

export const { useAddProductBasketMutation } = productAddApi;
