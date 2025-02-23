import { $api } from "../../../../../constants/service/api";

export const users = $api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => ({
        url: "/users/user-list/",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUsersQuery } = users;
