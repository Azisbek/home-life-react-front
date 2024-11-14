import { $api } from "../../../constants/service/api";

export const signInApi = $api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: "users/login/",
        method: "POST",
        body,
      }),
    }),
    getMe: build.query({
      query: () => ({
        url: "users/me/",
        method: "GET",
      }),
    }),
    refresh: build.mutation({
      query: (body) => ({
        url: "/api/token/refresh/",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const { useLoginMutation } = signInApi;
