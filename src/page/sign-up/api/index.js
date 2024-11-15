import { $api } from "../../../constants/service/api";

export const signUpApi = $api.injectEndpoints({
  endpoints: (build) => ({
    auth: build.mutation({
      query: (body) => ({
        url: "users/register/",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const { useAuthMutation } = signUpApi;
