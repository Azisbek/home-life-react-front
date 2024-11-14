import { $api } from "../../../constants/service/api";

export const basketApi = $api.injectEndpoints({
  endpoints: (build) => ({
    getBasket: build.query({
      query: () => ({
        url: "/cart/carts/",
        method: "GET",
      }),
    }),
    updateProductBasket: build.mutation({
      query: ({ id, quantity }) => ({
        url: "/cart/carts/",
        method: "PUT",
        body: {
          id,
          quantity,
        },
      }),
    }),
    deleteProductBasket: build.mutation({
      query: ({ id }) => ({
        url: "/cart/carts/",
        method: "DELETE",
        body: { id },
      }),
    }),
  }),
});

export const {
  useGetBasketQuery,
  useUpdateProductBasketMutation,
  useDeleteProductBasketMutation,
} = basketApi;
